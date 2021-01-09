import * as types from '../action-types';
function reducer(state = { number: 0 }, action) {
  switch (action.type) {
    case types.ADD2:
      return { number: state.number + action.payload }
    case types.MINUS2:
      return { number: state.number - 1 }
    default:
      return state
  }
}
export default reducer;