import React from 'react';
import RouterContext from './RouterContext';
function widthRouter(Oldcomponent) {
  return props => {
    return <RouterContext.Consumer>
      {
        contextValue => {
          return <Oldcomponent {...props} {...contextValue}/>
        }
      }
        
    </RouterContext.Consumer>
  }
}
export default widthRouter;