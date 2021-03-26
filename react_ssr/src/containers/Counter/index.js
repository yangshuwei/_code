import React,{useState} from 'react';

const Counter = ()=>{
  const [number,setNumber] = useState(0)
  const countHandler = ()=>{
    console.log(111)
    
  }
  return(
    <div>
        <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  )
}
export default Counter;