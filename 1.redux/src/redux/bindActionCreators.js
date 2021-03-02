function bindActionCreators(actionCreator, dispatch) {  //动态调用dispatch，不需每次手动调用

  if (typeof actionCreator === 'function') {

    return function () {
      dispatch(actionCreator())
    }
  } else {
    let newActions = {}
    for (let key in actionCreator) {
      newActions[key] = function (...args) { return dispatch(actionCreator[key](...args)) }
    }
    return newActions
  }


}
export default bindActionCreators