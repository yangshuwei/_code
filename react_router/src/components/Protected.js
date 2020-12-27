import React from 'react';
import { Route,Redirect } from '../react-router';
const Protected = (props)=>{
  let {component:RouteComponent,path}= props;
  console.log(props)
  return(
    <>
    <Route path={path} render={
      (routeProps)=>
         localStorage.getItem('login') ? <RouteComponent {...routeProps} /> :
        <Redirect to={{pathname:'/login',state:{from:path}}} />
      
    } />
    </>
  )
}
export default Protected;
