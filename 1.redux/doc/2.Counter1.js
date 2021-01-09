import React from 'react';
import { createStore, } from 'redux';
const ADD = 'ADD';
const MINUS = 'MINUS';
function reducer(state = { number: 0 }, action) {
  switch (action.type) {
    case ADD:
      return { number: state.number + 1 }
    case MINUS:
      return { number: state.number - 1 }
    default:
      return state
  }
}
function add(){
  return {type:ADD}
}
function minus() {
  return { type: MINUS }
}
function bindActionCreators(actionCreator,dispatch){
  return function(){
    dispatch(actionCreator())
  }
}
let store = createStore(reducer)


let boundAdd = bindActionCreators(add,store.dispatch)
let boundMinus = bindActionCreators(minus, store.dispatch)


export default class Counter1 extends React.Component{
  state={
    number:store.getState().number
  }
  componentDidMount(){
    //订阅状态变化事件，当状态变化后
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        number:store.getState().number
      })
      // this.forceUpdate();
    })
  }


  componentWillUnmount(){
    //组件卸载之前要销毁订阅事件，否则状态改变后还会通知订阅事件触发，但是组件已经销毁，无法获取到组件的实例this 会导致意外的错误 bug
    this.unsubscribe()
  }
  render(){
    return(
      <div>
        <p>{this.state.number}</p>
        <button onClick={boundAdd}>+</button>
        <button onClick={boundMinus}>-</button>
      </div>
    )
  }
}