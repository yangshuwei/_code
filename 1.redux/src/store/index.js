import {createStore} from '../redux';
import combineReducer from './reducers'

let store = createStore(combineReducer)
export default store;
