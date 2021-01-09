function combineReducers(reducers) {
  //返回合并后的reducers
  return function (state = {}, action) {
    let nextState = {};
    for (let key in reducers) {
      nextState[key] = reducers[key](state[key], action) //state[key] => 上一次的state的值
    }
    return nextState
  }
}
export default combineReducers;