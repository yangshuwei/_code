import React from 'react';
class Login extends React.Component{
  
  login = () =>{
    console.log(this.props)
    if(this.props.location.state.from){
      localStorage.setItem('login','true')
      this.props.history.push(this.props.location.state.from);
    }
  }
  render(){
    return(
      <div>
        <button onClick={this.login}>登录</button>
      </div>
    )
      
}
}
export default Login;