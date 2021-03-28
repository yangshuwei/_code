import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../routes';
import Header from '../components/Header'
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux'
import { getClientStore } from '../store';
let store = getClientStore()
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
    <Fragment>
      {/* <Header /> */}
      {renderRoutes(routes)}
      </Fragment>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
)
