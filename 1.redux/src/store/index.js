import { createStore } from '../redux';
import combineReducer from './reducers'

// let store = createStore(combineReducer)
let store = applyMiddleware(logger)(createStore)(combineReducer)

function logger(store) {
  console.log('prev state', store.getState())

}
function applyMiddleware(logger) {
  return function (createStore) {
    return function (reducer) {
      let store = createStore(reducer)
      let oldDispatch = store.dispatch;
      store.dispatch = logger(store)(oldDispatch)
      return store
    }
  }
}


export default store;
