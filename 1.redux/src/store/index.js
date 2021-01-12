import { createStore } from '../redux';
import combineReducer from './reducers'

// let store = createStore(combineReducer)
let store = applyMiddleware(logger1, logger2)(createStore)(combineReducer)

function logger1(store) {
  return function (next) { //next=>oldDispatch
    return function (action) {  //action =>用户手动调用的dispatch   也就是改写后的store.dispatch
      console.log('logger1 state', store.getState())
      next(action)
      console.log('logger1 state', store.getState())
    }
  }
}
function logger2(store) {
  return function (next) { //next=>oldDispatch
    return function (action) {  //action =>用户手动调用的dispatch   也就是改写后的store.dispatch
      console.log('logger2 state', store.getState())
      next(action)
      console.log('logger2 state', store.getState())
    }
  }
}
function applyMiddleware(logger1, logger2) {
  return function (createStore) {
    return function (reducer) {
      let store = createStore(reducer)
      let oldDispatch = store.dispatch;
      logger1 = logger1(store);
      logger2 = logger2(store);
      console.log('logger1', logger1)
      console.log('logger2', logger2)
      store.dispatch = logger1(logger2(oldDispatch))
      return store
    }
  }
}


export default store;
