import React from 'react';
import { bindActionCreators  } from '../redux';
import store from '../store';
import actions from '../store/actions/counter2'
let bountActions = bindActionCreators(actions,store.dispatch)


export default class Counter1 extends React.Component{
  state={
    number:store.getState().counter2.number
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
        <p>{store.getState().counter2.number}</p>
        <button onClick={()=>bountActions.add(2)}>+</button>
        <button onClick={bountActions.minus}>-</button>
      </div>
    )
  }
}