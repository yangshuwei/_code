function createHashRouter() {
  let stack = [];
  let index = -1;
  let action,state;
  let listeners = [];
  function go(n) {
    action = 'POP';
    index+=n;
    let nextLocation = stack[index];
    window.location.hash = nextLocation.pathname
  }
  function goBack() {
    go(-1)
  }
  function goForward() {
    go(1)
  }
  function listen(listener) {
    listeners.push(listener);
    return function () { //unlisten 
      listeners = listeners.filter(l => l !== listener) //从数组中删除已经监听过的事件函数
    }
  }
  window.addEventListener('hashchange',()=>{
    let pathname = window.location.hash.slice(1);
    Object.assign(history,{action,location:{pathname,state}}) //合并更新原有的history
    if(action === 'PUSH'){
      stack[++index] = history.location
    }
    listeners.forEach(listener=>listener(history.location))
  })
  function push(pathname, nextState) {
    action = 'PUSH';
    state = nextState;
    window.location.hash = pathname
  }
  const history = {
    action: 'POP',
    go,
    goBack,
    goForward,
    location: { pathname: '/', state: undefined },
    push,
    listen,
  }
  window.location.hash = window.location.hash ? window.location.hash.slice(1) : '/';
  return history
}
export default createHashRouter;