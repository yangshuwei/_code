import React,{memo} from 'react';
import ReactDOM from 'react-dom';
// let lastState;
// function useState1(initState){
//   lastState = lastState || initState;
//   function setState(newState){
//     if(typeof newState === 'function'){
//       newState = newState(lastState)
//     }
//     lastState = newState;
//     render()
//   }
//   return[lastState,setState]
// }

let hookStates = [];
let hookIndex = 0
function useState(initState){
  hookStates[hookIndex] = hookStates[hookIndex] || initState;
  let currentIndex = hookIndex;
  function setState(newState){
    hookStates[currentIndex] = newState;
    render();
  }
  
  return [hookStates[hookIndex++],setState]
}

function useMemo(factory,deps){
  console.log(hookStates,hookIndex)
  if(hookStates[hookIndex]){
    let [laseMemo,lastDeps] = hookStates[hookIndex];
    let same = deps.every((item,index)=>item === lastDeps[index])
    if(same){
      hookIndex ++
      return laseMemo;
    }else{
      let newMemo = factory();
      hookStates[hookIndex++] = [newMemo,deps]
      return newMemo
    }
  }else{
    let newMemo = factory();
    hookStates[hookIndex++] = [newMemo,deps]
    return newMemo
  }
}
function useCallback(callback,deps){
  if(hookStates[hookIndex]){
    let [lastCallback,lastDeps] = hookStates[hookIndex];
    let same = deps.every((item,index)=>item === lastDeps[index]);
    if(same){
      hookIndex++;
      return lastCallback;
    }else{
      hookStates[hookIndex++]=[callback,deps];
      return callback;
    }
  }else{//如果取不到，说明第一次调用
    hookStates[hookIndex++]=[callback,deps];
    return callback;
  }
}
let currentRef;
function useRef(){
  currentRef = currentRef || {current:undefined}
  return currentRef
}


Child = memo(Child)
const Counter = (props) =>{
  debugger
  let [name,setName] = useState('ysw');
  let [number,setNumber] = useState(0);
  const handleClick = useCallback(()=>setNumber(number+1),[number])
  let data = useMemo(()=>({number}),[number])
  return (
    <div>
      <div>
      <input type="text" value={name} onChange={event=>setName(event.target.value)}/>
        <Child data={data}  handleClick={handleClick}/>
      </div>
      {/* <button onClick={()=>{setNumber(x=>x+1);numberRef.current=number+1}}>+</button> */}
      {/* <button onClick={handlerRef}>ref</button> */}
    </div>
  )
}
function Child(props){
  console.log('Child');
  return (
    <div>
      <button onClick={props.handleClick}>{props.data.number}</button>
    </div>
  )
}
render()
hookIndex=0;
function render(){
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );
}

