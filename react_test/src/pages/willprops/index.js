import React,{  } from "react";

class Parent extends React.Component{
  state={number:0}
  add = ()=>{
    this.setState({
      number:this.state.number
    })
  }
  componentWillReceiveProps() {
    console.log('parent componentWillReceiveProps');

  }
  render(){
    return(
      <div>
        {this.state.number}
        <button onClick={this.add}>add</button>
        <Child number={this.state.number}></Child>
      </div>
    )
  }
}


class Child extends React.Component{
  constructor(props){
    super()
  }
  componentWillReceiveProps(){
    console.log('Child componentWillReceiveProps');

  }

  render(){
    return(
      <div>子组件{this.props.number}</div>
    )
  }
}
export default Parent