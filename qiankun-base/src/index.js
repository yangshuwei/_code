import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import {registerMicroApps,start} from 'qiankun';
const apps = [
  {
    name:'seller',
    entry:'//localhost:8083',
    container:'#seller',
    activeRule:'/seller'
  },
  // {
  //   name:'admin',
  //   entry:'//localhost:8084',
  //   container:'#admin',
  //   activeRule:'/admin'
  // }
]
registerMicroApps(apps);
start()
ReactDOM.render(
  <div>
    <BrowserRouter>
    <Link to="/seller">商家端</Link>
    <Link to="/admin">运营端</Link>
    </BrowserRouter>
  </div>
  ,
  document.getElementById('root')
);
