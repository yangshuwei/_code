import React from "react";
import RouterContext from "./RouterContext";
/**
  获取location并通过上下文对象向下层组件Route进行传递
  Route中通过上下文对象context 可以获取到location，location.pathname属性
  并且跟自己的 path进行比较，如果loction.pathname == path 
  就渲染对应的component组件  <Route path="/a" component={A}>
 */
class Router extends React.Component{
  static computeRouterMatch(pathname){
    return {path:'/',url:'',params:{},isExact:pathname==='/'};
  }
  constructor(props){
    super(props)
    this.state = {
      location:props.history.location
    }
    //监听url地址变化
    this.unlisten = props.history.listen((newlocation)=>{
      console.log(newlocation)
      this.setState({
        location:newlocation
      })
    })
  }
  componentWillUnmount(){
    this.unlisten && this.unlisten();
  }
  render(){
    let value = {
      history:this.props.history,
      location:this.state.location,
      match:Router.computeRouterMatch(this.state.location.pathname)
    }
    return(
      <RouterContext.Provider value={value}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}
export default Router;