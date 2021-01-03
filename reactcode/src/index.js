import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
  state = {value:0}
  changeValue = () =>{
    this.setState({
      value:this.state.value+1
    })
    console.log(this.state.value)
  }
  componentDidMount(){
    document.getElementById('btn').addEventListener('click',this.changeValue,false)
  }
  render(){
    return(
      <div>
        {this.state.value}
        <button id="btn">+</button>
      </div>
    )
  }
}
// function Counter(props){
//   const [number,setNumber] = React.useState(0);
//   const add = ()=>{
//     document.getElementById('root').click=function(){
      
//     }
//   }
//   const alertN = ()=>{
//     setTimeout(() => {
//       alert(number)
//     }, 3000);
    
//   }
//   return (
//     <div>
//       <p>number:{number}</p>
//       <button onClick={add}>+</button>
//       <button onClick={alertN}>alert</button>
//     </div>
//   )
// }
// function parent(OldCom) {
//   return class NewCom extends React.Component {
//     constructor(props) {
//       super()
//       this.state = { name: 'hello' }
//     }
//     render() {
//       return (
//         <div>
//           <OldCom {...this.state} />
//         </div>
//       )
//     }
//   }
// }

// const Word = (props) => {
//   return <div>{props.name},word</div>
// }
// const Ele = parent(Word)
ReactDOM.render(<Counter />, document.getElementById('root'))
