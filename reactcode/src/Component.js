import { createDOM } from './react-dom';
import {isFunction} from './utils';

export let updateQueue = {
  updaters:[],
  isBatchingUpdate:false, //是否处于批量更新状态，也就是异步更新状态
  add(updater){
    this.updaters.push(updater)
  },
  batchUpdate(){
    this.updaters.forEach(updater=>updater.updateComponent())
    this.isBatchingUpdate = false;
  }
}
class Updater{
  constructor(classInstance){
    this.classInstance = classInstance; //类组件的实例
    this.pendingStates = [];
  }
  addState(partialState){
    this.pendingStates.push(partialState);

    
    updateQueue.isBatchingUpdate ? updateQueue.add(this) : this.updateComponent();
    
  }
  updateComponent(){
    let {classInstance,pendingStates} = this;
    if(pendingStates.length>0){
      classInstance.state = this.getState(); //获取新老状态的合并
      classInstance.forceUpdate() //调用类组件实例上的强制更新方法  更新组件
    }
  }
  getState(){
    let { classInstance, pendingStates } = this;
    let {state} = classInstance;
    if (pendingStates.length>0){
      pendingStates.forEach(nextState=>{
        if(isFunction(nextState)){ //如果用户setState() 中传入的是函数 
          nextState = nextState(state)
        }
        state = {...state,...nextState} //合并新老状态 新的覆盖老的
      })

      pendingStates.length = 0;
    }

    return state;
  }
}
class Component {
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {}
    this.updater = new Updater(this); //每个组件都有一个 Updater 更新器实例
  }
  setState(newState) {
    this.updater.addState(newState) //将传入的state添加到更新器队列中
  }
  forceUpdate(){
    const renderVdom = this.render(); //调用类组件中的render方法  获取最新的虚拟dom
    updateClassComponent(this, renderVdom)
  }
}
function updateClassComponent(classInstance,renderVdom){
  const oldDom = classInstance.dom; //获取老的真实dom
 
  let newDom = createDOM(renderVdom) //生成新的真实DOM
  oldDom.parentNode.replaceChild(newDom, oldDom) //用新的真实dom替换老的
  classInstance.dom = newDom; //把新真实dom挂在实例上，以便下次对比更新
}
export default Component;