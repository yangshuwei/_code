import { compareTwoVdom } from './react-dom';
import { isFunction } from './utils';

export let updateQueue = {
  updaters: new Set(),
  isBatchingUpdate: false, //是否处于批量更新状态，也就是异步更新状态
  add(updater) {
    this.updaters.add(updater)
  },
  batchUpdate() {
    this.updaters.forEach(updater => updater.updateComponent())
    this.isBatchingUpdate = false;
    this.updaters.clear()
  }
}
class Updater {
  constructor(classInstance) {
    this.classInstance = classInstance; //类组件的实例
    this.pendingStates = [];
  }
  addState(partialState) {
    this.pendingStates.push(partialState);//状态队列
    this.emitUpdate()
  }
  emitUpdate(nextProps) {
    this.nextProps = nextProps;
    //有新属性时 要做更新操作
    (this.nextProps || !updateQueue.isBatchingUpdate) ? this.updateComponent() : updateQueue.add(this)
    // updateQueue.isBatchingUpdate ? updateQueue.add(this) : this.updateComponent();
  }
  updateComponent() {
    let { classInstance, pendingStates, nextProps } = this;
    if (nextProps || pendingStates.length > 0) {
      // classInstance.state = this.getState(); //获取新老状态的合并
      // classInstance.forceUpdate() //调用类组件实例上的强制更新方法  更新组件
      shouldUpdate(classInstance, nextProps, this.getState())
    }
  }
  getState() {
    let { classInstance, pendingStates } = this;
    let { state } = classInstance;
    if (pendingStates.length > 0) {
      pendingStates.forEach(nextState => {
        if (isFunction(nextState)) { //如果用户setState() 中传入的是函数 
          nextState = nextState(state)
        }
        state = { ...state, ...nextState } //合并新老状态 新的覆盖老的
      })

      pendingStates.length = 0;
    }
    return state;
  }
}
function shouldUpdate(classInstance, nextProps, nextState) {
  if (nextProps) {
    classInstance.props = nextProps
  }
  classInstance.state = nextState; //不管页面是否要更新 ，state都会变成最新的
  if (classInstance.shouldComponentUpdate && !classInstance.shouldComponentUpdate(classInstance.props, nextState)) {
    classInstance.state = nextState
    return;
  }
  classInstance.state = nextState;
  classInstance.forceUpdate()
}
class Component {
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {}
    this.updater = new Updater(this); //每个组件都有一个 Updater 更新器实例
  }
  setState(newState) {
    // debugger
    this.updater.addState(newState) //将传入的state添加到状态更新器队列中
  }
  forceUpdate() {
    if (this.componentWillUpdate) { //生命周期函数 在生成新的虚拟dom之前调用
      this.componentWillUpdate();
    }
    if (this.ownVdom.type.getDerivedStateFromProps){
      let newState = this.ownVdom.type.getDerivedStateFromProps(this.props,this.state)
      if(newState){
        this.state = newState
      }
    }
    // const renderVdom = this.render(); //调用类组件中的render方法  获取最新的虚拟dom
    // updateClassComponent(this, renderVdom)
    let newRenderVdom = this.render();
    let getSnapshot = this.getSnapshotBeforeUpdate && this.getSnapshotBeforeUpdate() //生命周期函数被
    //调用于render之后，创建真实DOM之前，并且把返回值传给componentDidUpdate
    //
    //this.oldVdom.dom.parentNode => #root
    let currentRenderVdom = compareTwoVdom(this.oldVdom.dom.parentNode, this.oldVdom, newRenderVdom);
    let oldRenderVdom = currentRenderVdom
    if (this.componentDidUpdate) { //生命周期函数，在创建真实dom并且挂载到页面之后调用
      this.componentDidUpdate(this.props, this.state, getSnapshot);
    }
  }
}
// function updateClassComponent(classInstance,renderVdom){
//   const oldDom = classInstance.dom; //获取老的真实dom

//   let newDom = createDOM(renderVdom) //生成新的真实DOM
//   oldDom.parentNode.replaceChild(newDom, oldDom) //用新的真实dom替换老的

//   if (classInstance.componentDidUpdate) { //生命周期函数，在创建真实dom并且挂载到页面之后调用
//     classInstance.componentDidUpdate();
//   }
//   classInstance.dom = newDom; //把新真实dom挂在实例上，以便下次对比更新
// }
export default Component;