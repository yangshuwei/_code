import React, { } from 'react';
import ReactDOM from 'react-dom';
const ConterContext = createContext()
let hookStates = [];
let hookIndex = 0
function useReducer(reducer, initState, init) {
  hookStates[hookIndex] = hookStates[hookIndex] || (init ? init(initState) : initState);
  let currentIndex = hookIndex;
  function dispatch(action) {
    hookStates[currentIndex] = reducer ? reducer(hookStates[currentIndex], action) : action
    render()
  }
  return [hookStates[hookIndex++], dispatch]
}
function reducer(state, action) {
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

function useContext(context){
  console.log(context);
  return context._currentValue;
}
function createContext() {
  let context = { _currentValue: null }
  function Provider({ value, children }) {
    context._currentValue = value;
    return children
  }
  function Consumer({ children }) { //Consumer他的孩子是一个函数，在这让孩子这个函数执行，并且把  Provider.value传递给他，这样就能一层一层的向下传递

    return children(context._currentValue)
  }
  context.Provider = Provider
  context.Consumer = Consumer;
  return context
}
function Counter() {
  let { state, dispatch } = useContext(ConterContext)
  return (
    <div>
      <p>number:{state.number}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>number+</button>
      {/* <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>count+</button> */}
    </div>
  )
}

function App() {
  let [state, dispatch] = useReducer(reducer, initState, init)
  let [count, setCount] = useState(0)
  let value = { state, dispatch}

  return (
    <div>
      <ConterContext.Provider value={value}>
          <Counter />
      </ConterContext.Provider>
    </div>
  )
}

render()

function render() {
  hookIndex = 0;
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

