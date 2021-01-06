function bindActionCreators(actionCreator, dispatch) {

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