let hookStates = [];
let hookIndex = 0;
function useState(initState) {
  debugger
  hookStates[hookIndex] = hookStates[hookIndex] || (typeof initState === 'function' ? initState() : initState)
  let currentIndex = hookIndex; //闭包拿到上一次存进去的值
  console.log(currentIndex)
  function setState(newState) { //设置新值 
    hookStates[currentIndex] = typeof newState === 'function' ? newState(hookStates[currentIndex]) : newState;
    //更新上一次的值
    render()
  }
  return [hookStates[hookIndex++], setState]
}

function render(){
  console.log('render', hookStates, hookIndex)
}
const [num,setNum] = useState(0)
const [name, setName] = useState('zs')