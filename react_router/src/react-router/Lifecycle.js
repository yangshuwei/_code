import React from 'react';
class Lifecycle extends React.Component{
  componentDidMount(){
    if(this.props.onMount){
      this.props.onMount(this)
    }
  }
  render(){
    return null
  }
}
export default Lifecycle;