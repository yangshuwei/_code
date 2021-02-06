import React, { useEffect, useState,useRef,forwardRef,useImperativeHandle} from 'react';
import City from "./city"


let ForwordFunctionChild = React.forwardRef(City); 
function Parent(){
  const functionChildRef = React.useRef();
  const getFocus = ()=>{
    functionChildRef.current.handlerChild()
  }
  return(
    <div>
      <ForwordFunctionChild ref={functionChildRef}/>
      <button onClick={getFocus}>获取</button>
    </div>
  )
}
// function useImperativeHandle(ref,factory){
//   ref.current = factory()
// }
// function FunctionChild(props,ref){
//   let c ={current:null};
//   useImperativeHandle(ref,()=>(
//     {
//       handleChild(){
//         console.log(1111)
//       }
//     }
//   ))
//   return <input type="text" ref={c}/>
// }
export default Parent