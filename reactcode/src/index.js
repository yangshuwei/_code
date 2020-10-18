import React from './react';
import ReactDOM from './react-dom';

let element  = React.createElement('h1',{
  className:'title',
  style:{
    color:"red"
  }
},"hello")
console.log(element)
ReactDOM.render(
  element,
  document.getElementById('root')
);
