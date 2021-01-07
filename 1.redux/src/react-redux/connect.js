import React from 'react';
import  ReactReduxContext  from './ReactReduxContext';
import {bindActionCreators} from '../redux'
function connect(mapStateToProps,mapDispatchToProps){
  return function(OldComponent){
    return class extends React.Component{
      static contextType = ReactReduxContext;
     
      constructor(props,context){
        super(props)
        this.state = mapStateToProps(context.getState());
        // this.context = context;
      }
      componentDidMount(){
        
        this.unsubscribe = this.context.subscribe(()=>{
          this.setState(mapStateToProps(this.context.getState()))
        })
      }
      componentWillUnmount(){
        this.unsubscribe()
      }
      render(){
        let boundActions = bindActionCreators(mapDispatchToProps,this.context.dispatch)
        return <OldComponent {...this.props} {...this.state} {...boundActions}/>
      }
    }
  }
}
export default connect;