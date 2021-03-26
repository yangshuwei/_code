import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Counter from './containers/Counter';
import User from './containers/User/index';
import UserDetail from './containers/User/detail';
export default [
  {
    path: '/',
    component: Home,
    exact: true,
    key: 'home',
    loadData: Home.loadData
  },
  {
    path: '/counter',
    component: Counter,
    key: 'login',
    exact: true
  },
  {
    path: '/user',
    component: User,
    key: '/user',
    exact: true,
    routes: [
      {
        path: '/user/detail',
        component: UserDetail,
        key: '/user/detail'
      }
    ]
  },
]
// export default (
//   <Fragment>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/counter" exact component={Counter}></Route>
//   </Fragment>
// )