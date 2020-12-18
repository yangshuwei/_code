import React, {  } from 'react';
import ReactDOM from 'react-dom';
let ForwordFunctionChild = React.forwardRef(FunctionChild); //将ref从父组件中转发到子组件的dom元素上  （函数组件没有ref）
//forwardRef的原理是返回一个类组件的实例 并且类组件中return调用FunctionChild
function Parent(){
  const functionChildRef = React.useRef();
  const getFocus = ()=>{
    functionChildRef.current.focus()
  }
  return(
    <div>
      <ForwordFunctionChild ref={functionChildRef}/>
      <button onClick={getFocus}>获取焦点</button>
    </div>
  )
}
function useImperativeHandle(ref,factory){
  ref.current = factory()
}
function FunctionChild(props,ref){
  let c ={current:null};
  useImperativeHandle(ref,()=>(
    {
      focus(){
        c.current.focus()
      }
    }
  ))
  return <input type="text" ref={c}/>
}


render()

function render() {
  // hookIndex = 0;
  ReactDOM.render(
    <Parent />,
    document.getElementById('root')
  );
}

