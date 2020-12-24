import React from 'react';
import RouterContext from './RouterContext';
import Lifecycle from './Lifecycle';
function Redirect2({ to }) {
  let contextValue = React.useContext(RouterContext);
  React.useEffect(() => {
    contextValue.history.push(to);
  });
  return null;
}

class Redirect1 extends React.Component {
  static contextType = RouterContext
  componentDidMount() {
    this.context.history.push(this.props.to);
  }
  render() {
    return null;
  }
}
function Redirect({to}){
  return(
    <RouterContext.Consumer>
      {
        contextValue=>{
          const { history } = contextValue;
          return(
            <div><Lifecycle onMount={() => history.push(to)} /></div>
          )
        }
      }
    </RouterContext.Consumer>
  )
}
export default Redirect;