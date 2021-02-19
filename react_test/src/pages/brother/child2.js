import React, { useEffect } from 'react';
import ss from './event';
function Child2(props) {
  useEffect(()=>{
    // ss.emit('message', 'hello')
  },[])
  const send = ()=>{
    ss.emit('message', 'hello')
  }
  return (
    <div>child2
      <button onClick={send}>发送数据给child1</button>
    </div>
  )
}
export default Child2;