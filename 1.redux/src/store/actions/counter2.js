import * as actionTypes from '../action-types'

let actions = {
  add(amount){
    return { type: actionTypes.ADD2, payload: amount }
  },
  minus(){
    return { type: actionTypes.MINUS2 }
  }
 
}
export default actions