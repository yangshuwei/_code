import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
function useNumber(){
  let [number, setNumber] = React.useState(0)
  React.useEffect(() => {
    let ti = setInterval(() => {
      setNumber(number + 1)
    }, 1000);
    return () => {
      clearInterval(ti)
    }
  }, [number])
  return [number, () => setNumber(x=>x+1)]
}
function Timer1(){
  let [number, add] = useNumber()
  return(
    <div>
      {number}
      <button onClick={add}>+</button>
    </div>
  )
}
function Timer2() {
  let [number,add] = useNumber()
  return (
    <div>
      {number}
      <button onClick={add}>+</button>
    </div>
  )
}
render()

function render() {
  // hookIndex = 0;
  ReactDOM.render(
   <div>
      <Timer1 />
      <Timer2 />
   </div>,
    document.getElementById('root')
  );
}

