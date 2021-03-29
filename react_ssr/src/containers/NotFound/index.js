import React,{useEffect,useContext,useLayoutEffect} from 'react';
let NotFound = (props)=>{
    useLayoutEffect(()=>{
        console.group('props2',props)
    return ()=>{
        console.group('props2',props)
    }
  },[])
  return(
    <div>
      404
    </div>
  )
}

export default NotFound;