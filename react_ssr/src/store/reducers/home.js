import * as type from '../action-type';
let initState = {list:[]}
export default function(state=initState,action){
  switch (action.type) {
    case type.SET_HOME_LIST:
      return { list: action.payload }
    default:
      return state
  }
}