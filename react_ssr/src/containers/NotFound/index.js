import React,{useEffect,useContext,useLayoutEffect,getSnapshotBeforeUpdate} from 'react';
let NotFound = (props)=>{
  if(props.staticContext){
    props.staticContext.notfound = true;
  }
  
  return(
    <div>
      404
    </div>
  )
}

export default NotFound;