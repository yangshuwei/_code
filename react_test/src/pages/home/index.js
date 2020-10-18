import React, { useEffect, useState } from 'react';
import City from "./city"
const Home = (props) =>{
    const [arr,setArr] = useState(0)
    const [data,setData] = useState([
    
        {
            pid:1,
            cid:2,
            rid:3
        },
        {
            pid:2,
            cid:4,
            rid:6
        }
    ])
    useEffect(()=>{
        function aa(){
        
            bb()
            console.log(arr)
        }   

        function bb(){
            setArr(1)
            console.log(arr)
        }
        aa()
        
    })
     
   
    return(
        <>
        
            
        <City info="aa"></City>
        </>
    )
}
export default Home