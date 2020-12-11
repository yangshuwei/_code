import React from 'react';
import ReactDOM from 'react-dom';

function parent(oldCom){
  return class newCom extends React.Component{
    constructor(){

      this.state = {name:'hello'}
    }
    render(){
      return (
        <div>
          <oldCom {...this.state} />
        </div>
      )
    }
  }
}

const Word = (props) =>{
return <div>{props.name},word</div>
}
const ele = parent(Word)
ReactDOM.render(<ele />,document.getElementById('root'))
