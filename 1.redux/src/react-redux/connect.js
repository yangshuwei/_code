import React,{useLayoutEffect, useMemo, useReducer} from 'react';
import  ReactReduxContext  from './ReactReduxContext';
import {bindActionCreators} from '../redux'
function connect(mapStateToProps,mapDispatchToProps){
  return function(OldComponent){
    return function(props){
      const { store } = React.useContext(ReactReduxContext); //通过上下文获取Provider 中  value={{store}}
      const {getState,dispatch,subscribe} = store;
      const prevState = getState(); //获取最新状态
      const stateProps = mapStateToProps(prevState) //把state转成props
      const dispatchProps = useMemo(()=>{
        let dispatchProps;
        if (typeof mapDispatchToProps === 'object'){
          dispatchProps = bindActionCreators(mapDispatchToProps,dispatch)
        } else if (typeof mapDispatchToProps === 'function'){
          dispatchProps = mapDispatchToProps(dispatch,props)
        }else{
          dispatchProps = {dispatch}
        }
        return dispatchProps
      },[dispatch,props])
      // const [forceUpdate] = useReducer(x=>x+1,0) //forceUpdate = > dispatch
      // //x=>x+1  是为了改变原有的state  让组件更新
      // useLayoutEffect(()=>{
      //   return subscribe(()=>forceUpdate(x=>x+1)) //状态改变，执行forceUpdate  让组件更新 
      // }, [subscribe])

      let [,setState] = React.useState(0);
      useLayoutEffect(()=>{
        let unsubscribe = subscribe(()=>setState(x=>x+1))

        return ()=>{
          unsubscribe();
        }
      },[subscribe])
      
      return <OldComponent {...props} {...stateProps} {...dispatchProps}/>
    }
  }
}
export default connect;