import React from 'react';
import RouterContext from './RouterContext';
class Route extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <RouterContext.Consumer>
      {
        value=>{
          const {location,history} = value;
          const {path ,component} = this.props;
          const match = location.pathname === path;
          const Component = component;
          let routeProps = {history,location,match}
          if(match){
            // return React.createElement(Component,this.props)
            return <Component {...routeProps}/>
          }
        }
      }
    </RouterContext.Consumer>
  }

}
export default Route;