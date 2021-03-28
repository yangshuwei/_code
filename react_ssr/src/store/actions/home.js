import * as types from '../action-type';
import axios from 'axios'
export default {
    getHomeList(){
        //返回一个函数  store.dispatch(action)

        
        return function(dispatch,getState,request){ //redux-thunk 中间件
            return axios.get('http://localhost:4000/api/users').then(result=>{
                // console.log(result)
                let list  = result.data;
                dispatch({
                    type:types.SET_HOME_LIST,
                    payload:list
                })
            })
        }
    }
}