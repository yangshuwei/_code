import React from './react';
import ReactDOM from './react-dom';
import {updateQueue} from './Component'

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
  }
  handleClick = () => {
    updateQueue.isBatchingUpdate = true;
    this.setState({ number: this.state.number+1})
    console.log(this.state.number)
    this.setState({ number: this.state.number + 1 })
    console.log(this.state.number)

    updateQueue.batchUpdate()
    // setTimeout(() => {
    //   this.setState({ number: this.state.number + 1 })
    //   console.log(this.state.number)
    //   this.setState({ number: this.state.number + 1 })
    //   console.log(this.state.number)
    // }, 0);
  }
  render() {
    return (
      <div>
        <h1>hello,{this.state.number}</h1>
        <button onClick={() => this.handleClick() }>+</button>
      </div>
    )
  }
}
ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);
