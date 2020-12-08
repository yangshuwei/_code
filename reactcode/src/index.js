import React from './react';
import ReactDOM from './react-dom';

// let element  = React.createElement('h1',{
//   className:'title',
//   style:{
//     color:"red"
//   }
// },"hello")

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { number: 0 }
    // this.a = React.createRef()
    // this.b = React.createRef()
    // this.result = React.createRef()
  }
  handleClick = (event) => {
    this.setState({number:this.state.number+1})
    // this.setState({ number: this.state.number+1})
    // console.log(this.state.number)
    // this.setState({ number: this.state.number + 1 })
    // console.log(this.state.number)
    // setTimeout(() => {
    //   this.setState({ number: this.state.number + 1 })
    //   console.log(this.state.number)
    //   this.setState({ number: this.state.number + 1 })
    //   console.log(this.state.number)
    //   // console.log(event)
    // }, 0);
  }
  clickDiv = ()=>{
    console.log('clickDiv')
  }
  add = () =>{
    this.result.current.value = this.a.current.value + this.b.current.value
  }
  componentWillMount(){
    console.log('1.componentWillMount')
  }
  
  render() {
    console.log('render---')
    return (
      <div>
        {/* <h1>hello,{this.state.number}</h1>
        <button onClick={(event) => this.handleClick(event) }>+</button> */}

        {/* <input ref={this.a} /> + <input ref={this.b} /> <button onClick={this.add}> = </button> <input ref={this.result}/> */}
      <p>number:{this.state.number}</p>
      <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
  componentDidMount() {
    console.log('2.componentDidMount')
  }
  shouldComponentUpdate(perS,nextS){
    console.log('shouldComponentUpdate-----')
    return nextS.number%2 === 0
  }
  componentWillUpdate(){
    console.log('----componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
}
ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);
