import React, { useEffect, useState,useRef,forwardRef,useImperativeHandle} from 'react';
import City from "./city"

class Parent extends React.Component{
  state ={flag:false}
  componentDidMount(){
   document.addEventListener('click',this.handleClickBody,false)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickBody, false)
  }
  handleClickBody = (e) =>{
    this.setState({
      flag:false
    })
  }
  handleClickButton = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      flag: true
    })
    
  }
  render(){
    console.log('render')
    return <div>
      <button onClick={this.handleClickButton}>打开弹窗</button>
      {
        this.state.flag && (
          <div onClick={e=>e.nativeEvent.stopImmediatePropagation()} style={{width:'100px',height:'100px',backgroundColor:'#ccc'}}>我是弹窗</div>
        )
      }
    </div>
  }
}
// let ForwordFunctionChild = React.forwardRef(City); 
// function Parent(){
//   const functionChildRef = React.useRef();
//   const getFocus = ()=>{
//     functionChildRef.current.handlerChild()
//   }
//   return(
//     <div>
//       <ForwordFunctionChild ref={functionChildRef}/>
//       <button onClick={getFocus}>获取</button>
//     </div>
//   )
// }
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