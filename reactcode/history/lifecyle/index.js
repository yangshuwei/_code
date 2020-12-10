import React from './react';
import ReactDOM from './react-dom';
class Counter extends React.Component { // 他会比较两个状态相等就不会刷新视图 PureComponent是浅比较
  static defaultProps = {
    name: '珠峰架构'
  };
  constructor(props) {
    super(props);
    this.state = { number: 0 }
    console.log('父组件 1.constructor')
  }
  componentWillMount() { // 取本地的数据 同步的方式：采用渲染之前获取数据，只渲染一次
    console.log('父组件 2.componentWillMount');
  }
  componentDidMount() {
    console.log('父组件 4.componentDidMount');
  }
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  // react可以shouldComponentUpdate方法中优化 PureComponent 可以帮我们做这件事
  shouldComponentUpdate(nextProps, nextState) { // 代表的是下一次的属性 和 下一次的状态
    console.log('父组件 5.shouldComponentUpdate');
    // return nextState.number % 2 === 0;
    return true
    // return nextState.number!==this.state.number; //如果此函数种返回了false 就不会调用render方法了
  } //不要随便用setState 可能会死循环
  componentWillUpdate() {
    console.log('父组件 6.componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('父组件 7.componentDidUpdate');
  }
  render() {
    
    console.log('父组件 3.render');
    return (
      <div id="Counter">
        <p>{this.state.number}</p>
        <ChildCounter count={this.state.number} />
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
class ChildCounter extends React.Component {
  constructor(props){
    super(props)
    this.state = {number:0}
  }
  static getDerivedStateFromProps(nextProps,prevState){
    let {count} = nextProps
    if(count%2===0){
      return {number:count*2}
    }else{
      return {number:count*3}
    }
  }
  componentWillUnmount() {
    console.log(' 子组件 5.componentWillUnmount')
  }
  componentWillMount() {
    console.log('子组件 1.componentWillMount')
  }
  render() {
    console.log('子组件 2.render')
    return (
      <div id="Child-Counter"><p>{this.state.number}</p></div>
    )
  }
  componentDidMount() {
    console.log('子组件 3.componentDidMount')
  }
  // componentWillReceiveProps(newProps) { // 第一次不会执行，之后属性更新时才会执行
  //   console.log('子组件 4.componentWillReceiveProps')
  // }
  componentWillUpdate() {
    console.log('子组件 6.componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('子组件 7.componentDidUpdate');
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('子组件 8.shouldComponentUpdate')
  //   return nextProps %2 === 0; //子组件判断接收的属性 是否满足更新条件 为true则更新
  // }
}
ReactDOM.render(<Counter />, document.getElementById('root'));
