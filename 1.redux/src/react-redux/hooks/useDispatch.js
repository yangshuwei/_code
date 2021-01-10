import React,{useContext} from 'react';
import ReactReduxContext from '../ReactReduxContext';
function useDispatch(){
    let {store} = useContext(ReactReduxContext);
    return store.dispatch;
}
export default useDispatch;