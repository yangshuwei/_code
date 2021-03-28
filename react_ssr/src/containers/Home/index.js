import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
// class Home extends React.Component{
//   componentDidMount(){
//     this.props.getHomeList()
//   }
//   render(){
//     return(
//       <div>
//         <ul>
//           {props.list.map(item=>(
//             <li key={item.name}>name:{item.name},age:{item.age}</li>
//           ))
//           }
          
//         </ul>
//       </div>
//     )
//   }
// }
let Home = (props)=>{
  useEffect(()=>{
    if(props.list.length==0){
      props.getHomeList()
    }
    
  },[])
  return(
    <div>
      <ul>
        {props.list.map(item=>(
          <li key={item.name}>name:{item.name},age:{item.age}</li>
        ))
        }
        
      </ul>
    </div>
  )
}


//此方法用来异步加载数据，将数据放到仓库中去
Home = connect(state=>state.home,actions)(Home)
Home.loadData = function(store){
  console.log('store--',store)
  // dispatch 派发的 就是一个action  return store.dispatch =>  return axios.get()  是一个promise
   return store.dispatch(actions.getHomeList())
}
// Home = 
export default Home;