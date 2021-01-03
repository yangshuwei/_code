import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';
class Route extends React.Component {
  //如果你给类组件增加一个静态属性contextType,那么你就可以通过this.context得到它的contextValue
  static contextType = RouterContext;
  constructor(props) {
    super(props)
  }
  render() {
    // return <RouterContext.Consumer>
    //   {
    //     value=>{
    const { location, history } = this.context;
    
    const { path, component: RouteComponent, computedMatch, render,children } = this.props;
    const match = computedMatch ? computedMatch : matchPath(location.pathname, this.props);
    let routeProps = { history, location }
    let element;
    if (match) {
      routeProps.match = match;
      if(children){
        element =  children(routeProps)
      }else if (RouteComponent){
        // return React.createElement(Component,this.props)
        element =  <RouteComponent {...routeProps} />
        
      } else if (render){
        console.log('render',render)
        element =  render(routeProps)
      }else{
        element =  null;
      }
      
    } else {
      if(children){
        element =  children(routeProps)
      }else{
        element =  null
      }
      
    }
    //嵌套Provider 是更新value 获取最新的value值
    <RouterContext.Provider value={routeProps}> 
      {element}
    </RouterContext.Provider>
    // console.log('match')
    
    //     }
    //   }
    // </RouterContext.Consumer>
  }

}
export default Route;