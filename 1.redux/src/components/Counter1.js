import React from 'react';
import {connect} from '../react-redux';
import actions from '../store/actions/counter1'

class Counter1 extends React.Component{
  render(){ 
    let {number,add,minus} = this.props;
    return(
      <div>
        <p>{number}</p>
        <button onClick={()=>add(2)}>+</button>
        <button onClick={minus}>-</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return state.counter1
}
export default connect(
  mapStateToProps,
  actions
)(Counter1)