import React from 'react';
import  ReactReduxContext  from './ReactReduxContext';
import {bindActionCreators} from '../redux'
function connect(mapStateToProps,mapDispatchToProps){
  return function(Oldcomponent){
    return class extends React.Component{
      static contextType = ReactReduxContext;
      constructor(props,context){
        super(props)
        debugger
        this.state = mapStateToProps(context.store.getState());
      }
      componentDidMount(){
        this.unsubscribe = this.context.store.subscribe(()=>{
          this.setState(mapStateToProps(this.context.store.getState()))
        })
      }
      componentWillUnmount(){
        this.unsubscribe()
      }
      render(){
        let boundActions = bindActionCreators(mapDispatchToProps,this.context.store.dispatch)
        return <Oldcomponent {...this.props} {...this.state} {...boundActions}/>
      }
    }
  }
}
export default connect;