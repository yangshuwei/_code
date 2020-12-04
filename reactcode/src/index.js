import React from './react';
import ReactDOM from './react-dom';

// let element  = React.createElement('h1',{
//   className:'title',
//   style:{
//     color:"red"
//   }
// },"hello")

function Welcome(props){
  return <h1>hello,<span>{props.name}</span></h1>
}
ReactDOM.render(
  <Welcome name="word"/>,
  document.getElementById('root')
);
