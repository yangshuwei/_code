import React,{useState} from 'react';
import {connect} from 'react-redux'
import actions from '../../store/actions/counter'
const Counter = (props)=>{
  // const [number,setNumber] = useState(0)
  const countHandler = ()=>{
    console.log(111)
    
  }
  return(
    <div>
        <p>{props.number}</p>
      <button onClick={props.add}>+</button>
    </div>
  )
}
export default connect((state)=>state.counter,actions)(Counter);