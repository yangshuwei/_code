import React from './react';
import ReactDOM from './react-dom';
let ThemeContext = React.createContext()
class Page extends React.Component{
  constructor(props){
    super(props)
    this.state = { color: 'red' };
  }
  changeColor = (color)=>{
    this.setState({color:color})
  }
  render(){
    let contextVal = { color: this.state.color, changeColor:this.changeColor}
    return(
      <ThemeContext.Provider value={contextVal}>
        <Content />
      </ThemeContext.Provider>
    )
  }
}
class Content extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ThemeContext.Consumer>
        {
          (value) =>(
            <div style={{color:value.color}}>
              content
              <button onClick={()=>{value.changeColor('green')}}></button>
            </div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}
ReactDOM.render(<Page />, document.getElementById('root'));
