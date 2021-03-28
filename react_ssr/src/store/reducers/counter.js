import * as type from '../action-type';
let initState = {number:0}
export default function(state=initState,action){
  switch (action.type) {
    case type.ADD:
      return {number:state.number+1}
    default:
      return state
  }
}