import React from 'react';
import ReactDOM from 'react-dom';

function parent(OldCom) {
  return class NewCom extends React.Component {
    constructor(props) {
      super()
      this.state = { name: 'hello' }
    }
    render() {
      return (
        <div>
          <OldCom {...this.state} />
        </div>
      )
    }
  }
}

const Word = (props) => {
  return <div>{props.name},word</div>
}
const Ele = parent(Word)
ReactDOM.render(<Ele />, document.getElementById('root'))
