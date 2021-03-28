import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Counter from './containers/Counter';
import User from './containers/User/index';
import UserDetail from './containers/User/detail';
import App from './containers/App';
export default [
  {
    path:'/',
    component:App,

    routes:[
      {
        path: '/',
        component: Home,
        exact: true,
        key: 'home',
        loadData: Home.loadData//服务端渲染需要加载异步数据
      },
      {
        path: '/counter',
        component: Counter,
        key: 'login',
      },
      // {
      //   path: '/user',
      //   component: User,
      //   key: '/user',
        
      //   routes: [
      //     {
      //       path: '/user/detail',
      //       component: UserDetail,
      //       key: '/user/detail',
      //       exact: true,
      //     }
      //   ]
      // },
    ]
  }
]
// export default (
//   <Fragment>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/counter" exact component={Counter}></Route>
//   </Fragment>
// )