import * as type from '../action-type';
export default function(state={list:[]},action){
  switch (action.type) {
    case type.SET_HOME_LIST:
      return { list: action.payload }
    default:
      return state
  }
}