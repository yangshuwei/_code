import * as actionTypes from '../action-types'

let actions = {
  add(amount){
    return { type: actionTypes.ADD1, payload: amount }
  },
  minus(){
    return { type: actionTypes.MINUS1 }
  }
 
}
export default actions