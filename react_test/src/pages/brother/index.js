import React from 'react';
import EventEmitter from 'events';
import Child1 from './child1';
import Child2 from './child2';
function App(){
  return(
    <div>
      <h1>兄弟通信</h1>
      <Child1 />
      <Child2 />
    </div>
  )
}





export default App;