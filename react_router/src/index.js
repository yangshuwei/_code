import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,HashRouter,Link
} from './react-router-dom';
import  Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
ReactDOM.render(
  <HashRouter>
    <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to="/user">用户详情</Link></li>
      <li><Link to="/profile">个人中心</Link></li>
    </ul>
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/profile" component={Profile}></Route>
    </div>
  </HashRouter>,
  document.getElementById('root')
);


