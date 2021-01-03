function createStore(reducer){
    let state;
    let listeners = [];
    function getState(){
        return state;
    }
    function dispatch(action){
        state = reducer(state,action)
        listeners.forEach(listener=>listener())
    }
    function subscribe(listener){
        listeners.push(listener)
        return function(){ //清空订阅事件函数
            let index = listeners.indexOf(listener);
            listeners.splice(index,1);
            // listeners.filter(l=>l!==listener);
        }
    }
    dispatch({type:'@INIT/STATE'}) //要先初始化state的值
    return {
        getState,
        dispatch,
        subscribe
    }
}
export default createStore;