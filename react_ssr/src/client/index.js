import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import routes from '../routes';
import Header from '../components/Header'
import { renderRoutes } from 'react-router-config';
ReactDOM.hydrate(
  <BrowserRouter>
    <Header />
    {renderRoutes(routes)}
    {/* {routes.map(route=>(
      <Route {...route}></Route>
    ))} */}
  </BrowserRouter>,
  document.getElementById('root')
)
