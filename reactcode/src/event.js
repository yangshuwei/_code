import { updateQueue } from "./component";
/**
  合成事件的作用？
  1.自动触发批量更新
  2.可以实现事件对象的缓存和回收
 */
export function addEvent(dom, eventType, listener){
  let store = dom.store || (dom.store = {});
  store[eventType] = listener; //store.onclick = handlerclick
  //document.addEventListener(eventType.slice(2),dispatchEvent,false);
  if(!document[eventType]){ //将事件委托到document上
    document[eventType] = dispatchEvent;
  }
}
let syntheticEvent = {};
function dispatchEvent(event) {  //event是原生的DOM事件对象
  let {target,type} = event; //target是事件源 buttonA 或者 buttonB  targe 是区分到底是哪个元素点击的  对应的函数
  let eventType = `on${type}`; //onclick
  
  updateQueue.isBatchingUpdate = true; //触发批量更新的先决条件
  let syntheticEvent = createSyntheticEvent(event);
  while(target){ //事件冒泡
    let { store } = target; //button上有一个store属性
    let listener = store && store[eventType]; //handleClick 事件函数
    listener && listener.call(target, syntheticEvent);
    target = target.parentNode
  }
  
  for (let key in syntheticEvent){  
    syntheticEvent[key] = null
  }
  updateQueue.batchUpdate()
}

function createSyntheticEvent(nativeEvent){
  for (let key in nativeEvent){
    syntheticEvent[key] = nativeEvent[key]
  }
  return syntheticEvent;
}