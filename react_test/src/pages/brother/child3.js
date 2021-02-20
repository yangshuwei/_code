import React, { useContext } from 'react';
import TestContext from './context'

function Child3(props){
  const ChildContext = useContext(TestContext);
  const send = ()=>{
    ChildContext.handler('我是子组件数据')
  }
  return (
    <TestContext.Consumer>
      {
        value =><div>
          <button onClick={send}>给父组件传递数据</button>
        </div>
      }
    </TestContext.Consumer>
  )
}
export default Child3;