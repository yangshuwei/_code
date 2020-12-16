import React, {} from 'react';
import ReactDOM from 'react-dom';
let hookStates = [];
let hookIndex = 0;
function useState(initState){
  hookStates[hookIndex] = hookStates[hookIndex] || (typeof initState === 'function' ? initState() :initState )
  let currentIndex = hookIndex; //闭包拿到上一次存进去的值
  function setState(newState){ //设置新值 
    hookStates[currentIndex] = typeof newState === 'function' ? newState(hookStates[currentIndex]) :newState ;
    //更新上一次的值
    render()
  }
  return [hookStates[hookIndex++],setState]
}
function useEffect(callback,deps){
  if(hookStates[hookIndex]){
    let {destroy,lastDeps} = hookStates[hookIndex];
    let same = deps.every((item,index)=>item===lastDeps[index]);//判断两次传入的依赖是否相等
    if(same){
      hookIndex++;
    }else{
      if(destroy) destroy(); //不相等就先执行销毁函数
      let state = { lastDeps: deps }
      hookStates[hookIndex++] = state;
      setTimeout(() => {
        let destroy = callback();
        state.destroy = destroy
      }); 
    }
  }else{ //第一次要先把依赖存起来 并且赋值给hookStates 
    let state = {lastDeps:deps}
    hookStates[hookIndex++] = state;
    setTimeout(()=>{ //宏任务执行
      let destroy = callback();//函数执行，并且记录销毁函数
      state.destroy = destroy
    }); 
    // render()
  }
}
const  App = (props)=>{
  debugger
  console.log('App render')
  const [number,setNumber] = useState(0)
  useEffect(()=>{
    console.log('开启新的定时器')
    let timer = setInterval(() => {
      setNumber(x=>x+1)
    },3000);
    return ()=>{
      console.log('销毁老的定时器')
      clearInterval(timer)
    }
  }, [number])
  return (
    <div>
      <p>{number}</p>
      <button onClick={()=>setNumber(number+1)}>+</button>
    </div>
  )
}
render()

function render() {
  hookIndex = 0;
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}

