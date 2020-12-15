import React, { } from 'react';
import ReactDOM from 'react-dom';

let hookStates = [];
let hookIndex = 0
function useReducer(reducer, initState, init) {
  hookStates[hookIndex] = hookStates[hookIndex] || (init ? init(initState) : initState);
  let currentIndex = hookIndex;
  function dispatch(action) {
    console.log(action)
    hookStates[currentIndex] = reducer ? reducer(hookStates[currentIndex], action) : action
    render()
  }
  return [hookStates[hookIndex++], dispatch]
}
function reducer(state, action) {
  console.log('----',state,action)
  switch (action.type) {
    case 'ADD':
      return { number: state.number + 1 }

    default:
      return state
  }
}
let initState = 0;
function init(initState) {
  return { number: initState }
}

function useState(initState) {
  return useReducer(null, initState)
}
function Counter() {
  let [state, dispatch] = useReducer(reducer, initState, init)
  let [count, setCount] = useState(0)
  console.log(useReducer(reducer, initState, init))
  return (
    <div>
      <p>number:{state.number}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>number+</button>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>count+</button>
    </div>
  )
}

render()

function render() {
  hookIndex = 0;
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );
}

