import React from 'react';
function WithOnchange(props){
  console.log(props)
  const {show,hide} = props;
  return(
    <div>
      属性代理
      <button onClick={show}>显示</button>
      <button onClick={hide}>隐藏</button>
    </div>
  )
}
function Loading(loadingMessage){
  return (OldComponent)=> class extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        name:'loading'
      }
    }
    show = () =>{
      let div = document.createElement('div')
      div.innerHTML = `<p id="loading">${loadingMessage}</p>`
      document.body.appendChild(div)
    }
    hide = () =>{
      document.getElementById('loading').remove();
    }
    render(){
      const newProps = {
        name:this.state.name,
        show:this.show,
        hide:this.hide
      }
      return <OldComponent {...this.props} {...newProps}/>
    }
  }
}
class Hello extends React.Component{
  
  render(){
    return <button>{this.state.number}</button>
  }
}
const warp = OldComponent =>{
  return class extends OldComponent{
    render(){
      super.render()
    }
  }
}
// export default Loading('加载中')(WithOnchange)