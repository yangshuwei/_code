import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import routes from '../routes';
import { renderRoutes,matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux'
import { getServerStore } from '../store';

export default async function (ctx,next) {
  let store = getServerStore(ctx);
  let context = {csses:[]}
  let matchedRoutes = matchRoutes(routes,ctx.path)
  let promises=[];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      let promise = new Promise(resolve => item.route.loadData(store).then(resolve, resolve))
      promises.push(promise)
    }
  })
    await Promise.all(promises);
    let html = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={ctx.path}>
          
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
  
    )
  let cssStr = context.csses.join('\n');
  console.log('cssStr', cssStr)
    console.log('context',context)
    if(context.action == 'REPLACE'){
      ctx.status = 302;
      return ctx.redirect(context.url)
    }else if(context.notfound){
      ctx.status = 404
    }
  
    ctx.body = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>${cssStr}</style>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
              window.context = {
                state:${JSON.stringify(store.getState())}
              }
            </script>
            <script src="/index.js"></script>
        </body>
        </html>
    `
}