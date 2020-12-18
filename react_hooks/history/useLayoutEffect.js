import React, {  } from 'react';
import ReactDOM from 'react-dom';
let hookStates = [];
let hookIndex = 0;
let currentRef;
function useRef() {
  currentRef = currentRef || { current: undefined }
  return currentRef
}
function useState(initState) {
  hookStates[hookIndex] = hookStates[hookIndex] || (typeof initState === 'function' ? initState() : initState)
  let currentIndex = hookIndex; //闭包拿到上一次存进去的值
  function setState(newState) { //设置新值 
    hookStates[currentIndex] = typeof newState === 'function' ? newState(hookStates[currentIndex]) : newState;
    //更新上一次的值
    render()
  }
  return [hookStates[hookIndex++], setState]
}
function useLayoutEffect(callback,deps){
  if(hookStates[hookIndex]){
    let {lastDeps,destory} = hookStates[hookIndex];
    let same = deps.every((item,index)=>item===lastDeps[index])
    if(same){
      hookIndex++
    }else{
      if(destory)destory()
      let state = { lastDeps: deps }
      hookStates[hookIndex++] = state;
      Promise.resolve().then(() => {
        let destroy = callback()
        state.destory = destroy
      })
    }
  }else{
    let state = {lastDeps:deps}
    hookStates[hookIndex++] = state;
    
    window.queueMicrotask(()=>{ //微任务队列
      let destroy = callback()
      state.destory = destroy
    })
  }
}
function App(){
  let divRef = React.useRef();
  console.log(divRef)
  // React.useEffect(()=>{
  //   divRef.current.style.transform="translate(500px)";
  //   divRef.current.style.transition="all 500ms"
  // },[])
  useLayoutEffect(() => {
    divRef.current.style.transform = "translate(500px)";
    divRef.current.style.transition = "all 500ms"
  }, [])
  let style = {
    "width":"100px",
    height:"100px",
    background:"red"
  }
  return(
    <div style={style} ref={divRef}>

    </div>
  )
}

render()

function render() {
  // hookIndex = 0;
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

