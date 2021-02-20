import React, { createContext, useContext } from 'react';
import TestContext from './context'
import Child1 from './child1';
import Child2 from './child2';
import Child3 from './child3';
const TextContext = createContext();
function App(){
  const handler = (msg)=>{
    console.log(msg)
  }
  const value = {
    message:'父组件消息传递',
    handler
  }
  return(
    <div>
      <TestContext.Provider value={value}>
      <h1>兄弟通信</h1>
      {/* <Child1 />
      <Child2 /> */}
      <Child3 />
      </TestContext.Provider>
    </div>
  )
}





export default App;