import React, { useContext, useLayoutEffect, useReducer } from 'react';
import ReactReduxContext from '../ReactReduxContext';
// function selector(state){
//   return state.counter2
// }
function useSelector(selector){ 
  let {store} = useContext(ReactReduxContext);
  let state = store.getState();
  const selectedState = selector(state); //state.counter2
  let [,forceRender] = useReducer(x=>x+1,0) //触发更新机制
  useLayoutEffect(()=>{
    let unsubscribe = store.subscribe(forceRender) //订阅事件
    return ()=>{
      unsubscribe();
    }
  },[store])
  return selectedState
}
export default useSelector;