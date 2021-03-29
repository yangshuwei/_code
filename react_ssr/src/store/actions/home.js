import * as types from '../action-type';
import axios from 'axios'
export default {
    getHomeList(){
        //返回一个函数  store.dispatch(action)

        
        return function(dispatch,getState,request){ //redux-thunk 中间件
            // return Promise.resolve(
            //     dispatch({
            //         type: types.SET_HOME_LIST,
            //         payload: [{name:123,age:18}]
            //     })
            // )
            return request.get('/api/users').then(result=>{
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