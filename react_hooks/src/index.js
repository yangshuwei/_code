import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
let PAGE_SIZE = 5;
function useRequest(url) {
  let [start,setStart] = React.useState(0)
  let [userData,setUserData] = React.useState([])
  function loadMore(){
    setUserData(null)
    fetch(`${url}?start=${start}&pageSize=5`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setUserData([...userData,...data.list])
      setStart(start + PAGE_SIZE)
    })
  }
  useEffect(loadMore,[])
  return [userData, loadMore]
}
function App() {
  let [users,loadMore] = useRequest('http://localhost:8080/api/users')
  if(!users)
  return <div>加载中......</div>
  return(
    <div>
      <ul>
        {
          users.map(item=><li key={item.id}>{item.name}</li>)
        }
      </ul>
      <button onClick={loadMore}>加载下一页</button>
    </div>
  )
}
render()

function render() {
  // hookIndex = 0;
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

