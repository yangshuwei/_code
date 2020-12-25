import React from 'react';
import {widthRouter} from '../react-router';
class NavHeader extends React.Component{
  render(){
    return(
    <div onClick={()=>this.props.history.push('/')}>{this.props.title}</div>
    )

  }
}
export default widthRouter(NavHeader);