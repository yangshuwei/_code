import React,{useLayoutEffect, useMemo, useReducer} from 'react';
import  ReactReduxContext  from './ReactReduxContext';
import {bindActionCreators} from '../redux'
function connect(mapStateToProps,mapDispatchToProps){
  return function(OldComponent){
    return function(props){
      const { store } = React.useContext(ReactReduxContext); //通过上下文获取Provider 中  value={{store}}
      const {getState,dispatch,subscribe} = store;
      const prevState = getState();
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
      const [,forceUpdate] = useReducer(x=>x+1,0) //forceUpdate = > dispatch
      
      useLayoutEffect(()=>{
        subscribe(forceUpdate)
      }, [subscribe])
      return <OldComponent {...props} {...stateProps} {...dispatchProps}/>
    }
  }
}
export default connect;