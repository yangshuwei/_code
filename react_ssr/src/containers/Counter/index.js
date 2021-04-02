import React,{Fragment, useState} from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router';
import actions from '../../store/actions/counter'
const Counter = (props)=>{
  const [status,seStatus] = useState(false)
  const countHandler = ()=>{
   
    
  }
  return(
    <div>
      {
        status ? <Fragment>
          <p>{props.number}</p>
          <button onClick={props.add}>+</button>
        </Fragment>
        : <Fragment>
          <Redirect to="/" />
        </Fragment>
      }
     
    </div>
  )
}
export default connect((state)=>state.counter,actions)(Counter);