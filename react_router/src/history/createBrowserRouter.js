function createBroswerRouter() {
  const globalHistory = window.history;
  let listeners = [];
  function go(n) {
    globalHistory.go(n)
  }
  function goBack() {
    go(-1)
  }
  function goForward() {
    go(1)
  }
  function listen(listener) {
    listeners.push(listener);
    return function(){ //unlisten 
      listeners = listeners.filter(l=>l!==listener) //从数组中删除已经监听过的事件函数
    }
  }
  function setState(newState){
    Object.assign(history,newState);
    history.length = globalHistory.length;
    listeners.forEach(listener=>listener(history.location))
  }
  function push(pathname,state){
    const action = 'PUSH';
    if (typeof pathname === 'object') {
      state = pathname.state;
      pathname = pathname.pathname;
    }
    globalHistory.pushState(state,null,pathname);
    let location = {state,pathname}
    setState({action,location})
  }
  const history = {
    action: 'POP',
    go,
    goBack,
    goForward,
    location: { pathname: window.location.pathname, state: globalHistory.state },
    push,
    listen,
  }
  return history
}
export default createBroswerRouter;