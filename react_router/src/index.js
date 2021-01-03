import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import {
  Route, HashRouter, Link, BrowserRouter as Router, Switch, NavLink,
  useParams,
  useHistory,
  useLocation
} from 'react-router-dom';

function lazy(load){
  return class extends React.Component{
    state = {Component:null}
    componentDidMount(){
      load().then(result=>{ 
        this.setState({
          Component:result.default||result
        })
      })
    }
    render(){
      let {Component} = this.state;
      return  Component ? <Component /> : null
    }
  }
}
const LazyHome = lazy(()=>import(/*webpackChunkName:"home"*/'./components/Home'));
const LazyUser = lazy(()=>import(/*webpackChunkName:"login"*/'./components/User'));
function Loading(){
  return <div>加载中</div>
}
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={()=>{
        return <Suspense fallback={<Loading />}>
          <LazyHome />
        </Suspense>
      }} />
      <Route exact path="/user" component={()=>{
        return <Suspense fallback={<Loading />}>
          <LazyUser />
        </Suspense>
      }} />
    </div>
  </Router>,
  document.getElementById('root')
)
// import Home from './components/Home';
// import User from './components/User';
// import Profile from './components/Profile';
// import Post from './components/Post';
// import Protected from './components/Protected';
// import Login from './components/Login';
// import NavHeader from './components/NavHeader';

// function Post(props){
//   let params = useParams()
//   console.log(params)
//   let history = useHistory()
//   console.log(history)
//   let location = useLocation()
//   console.log(location)
//   return <div>Post</div>
// }
// function User(props){
//   return <div>User</div>
// }
// ReactDOM.render(
//   <>
//     <Router>
//       <Switch>
//         <Route path="/post/:title" component={Post}/>
//         <Route path="/user" component={User}/>
//       </Switch>
//     </Router>
//   </>,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <>
//   <BrowserRouter>
//     <NavHeader title="欢迎光临" />
//     <ul>
//       <li><Link to="/">首页</Link></li>
//       <li><NavLink to="/user">用户详情</NavLink></li>
//       <li><Link to="/profile">个人中心</Link></li>
//       <li><Link to={{ pathname: '/post/1', state: { title: 'title1' } }}>tiezi</Link></li>
//     </ul>
//     <div>
//       {/* <Switch> */}
//         <Route exact path="/" component={Home}></Route>
//         <Route path="/user" component={User}></Route>
//         <Protected path="/profile" component={Profile} />
//         <Route path="/login" component={Login}></Route>
//         {/* <Route path="/profile" component={Profile}></Route> */}
//         <Route path="/post/:id" component={Post}></Route>
//       {/* </Switch> */}
//     </div>
//   </BrowserRouter>
//   </>,
//   document.getElementById('root')
// );


