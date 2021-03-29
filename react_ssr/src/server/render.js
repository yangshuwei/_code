import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import routes from '../routes';
import { renderRoutes,matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux'
import { getServerStore } from '../store';

export default async function (ctx,next) {
  let store = getServerStore(ctx);
  let context = {css:[]}
  let matchedRoutes = matchRoutes(routes,ctx.path)
  let promises=[];
  console.log('matchedRoutes',matchedRoutes)
  matchedRoutes.forEach(item => {
    console.log('item',item)
    if (item.route.loadData) {
       promises.push(item.route.loadData(store))
    }
  })
  console.log('promises', promises)
    await Promise.all(promises);
    let html = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={ctx.path}>
          
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
  
    )
  let cssStr = context.css.length>0 && context.csses.join('\n');
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