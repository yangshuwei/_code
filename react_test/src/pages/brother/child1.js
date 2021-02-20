import React, { useEffect, useState } from 'react';
import ss from './event';
function Child1(props) {
  const [data, setData] = useState('')
  useEffect(() => {
    ss.on('message', function (text) {
      setData(text)
    })

  }, [])
  const getBrotherData = () => {


  }
  return (
    <div>
      child1
      <p>{data}</p>
    </div>
  )
}
export default Child1;