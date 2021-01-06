import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from './redux';
const ADD = 'ADD';
const MINUS = 'MINUS';
const container = document.getElementById('container');
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

function reducer(state={number:0},action){
  switch (action.type) {
    case ADD:
      
      return {number:state.number+1};
    case MINUS:
      return {number:state.number-1}
    default:
      return state;
  }
}


let store = createStore(reducer);

add.addEventListener('click',()=>{
  store.dispatch({type:ADD}) //dispatch调用 redux内部就是让reducer函数执行
})
minus.addEventListener('click',()=>{
  store.dispatch({type:MINUS})
})


//订阅事件是再didMount时， 取消事件订阅  清空  是再 willUnMOUNT
let unsubscribe =  store.subscribe(render)


reset.addEventListener('click',()=>{
  unsubscribe();
})
function render(){
  container.innerText = store.getState().number
}
render()
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
