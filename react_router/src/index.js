import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, HashRouter, Link, BrowserRouter, Switch
} from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Post from './components/Post';
import Protected from './components/Protected';
import Login from './components/Login';
ReactDOM.render(
  <>
  <BrowserRouter>
    <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to="/user">用户详情</Link></li>
      <li><Link to="/profile">个人中心</Link></li>
      <li><Link to={{ pathname: '/post/1', state: { title: 'title1' } }}>tiezi</Link></li>
    </ul>
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/user" component={User}></Route>
        <Protected path="/profile" component={Profile} />
        <Route path="/login" component={Login}></Route>
        {/* <Route path="/profile" component={Profile}></Route> */}
        <Route path="/post/:id" component={Post}></Route>
      </Switch>
    </div>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


