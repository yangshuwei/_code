import * as type from '../action-type';
export default function(state={number=0},action){
  switch (action.type) {
    case type.ADD:
      return {number:state.number+1}
    default:
      return state
  }
}