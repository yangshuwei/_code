import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';
class Route extends React.Component{
   //如果你给类组件增加一个静态属性contextType,那么你就可以通过this.context得到它的contextValue
  static contextType = RouterContext;
  constructor(props){
    super(props)
  }
  render(){
    // return <RouterContext.Consumer>
    //   {
    //     value=>{
          const {location,history} = this.context;
          const {path ,component} = this.props;
          const match = matchPath(location.pathname,this.props);
          const Component = component;
          let routeProps = {history,location}
          if(match){
            routeProps.match = match;
            // return React.createElement(Component,this.props)
            return <Component {...routeProps}/>
          }else{
            return null
          }
    //     }
    //   }
    // </RouterContext.Consumer>
  }

}
export default Route;