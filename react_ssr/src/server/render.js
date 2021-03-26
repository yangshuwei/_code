import React, { Fragment} from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter,Route} from 'react-router-dom'
import routes from '../routes';
import Header from '../components/Header'
import { renderRoutes } from 'react-router-config';
export default function(ctx){
  let html = renderToString(
    <StaticRouter context={{}} location={ctx.path}>
      <Header />
      <Fragment>
        {renderRoutes(routes)}
        {/* {routes.map(route=>(
          <Route exact={route.exact} path={route.path} component={route.component} key={route.key}></Route>
        ))} */}
      </Fragment>
    </StaticRouter>
  )
  console.log(ctx.path)
  ctx.body = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
          <div id="root">${html}</div>
          <script src="/index.js"></script>
      </body>
      </html>
  `
}