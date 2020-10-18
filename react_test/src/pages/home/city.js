import React, { useState, useEffect } from "react";
import { Select } from "antd";
const Option = Select;
export default (props) => {
    const [cname,setCname] = useState(0);
    console.log(props)
    const p = [
        {
            pcode: 1,
            name: "北京"
        },
        {
            code: 2,
            name: "天津"
        }
    ]
    const c = [
        {
            pcode: 1,
            name: "朝阳区"
        },
        {
            code: 2,
            name: "大兴区"
        }
    ]
    const r = [
        {
            pcode: 1,
            name: "望京"
        },
        {
            code: 2,
            name: "海淀"
        }
    ]
    useEffect(()=>{
        

    },[])
    function aa(value){
        setCname(value)
        console.log(cname)
    }
    const  handleP = (value)=>{
        
            console.log(value)
            setCname(v=>v+1)
            console.log(cname)
        
    }
    const handleC = () => {

    }
    const handleR = () => {

    }
    return (
    <>
        <Select
            // style={{ width: '100px' }}
            onChange={()=>aa}
        >
            {
                p.map(item => {
                    return (
                        <Option key={item.code} value={item.code}>{item.name}</Option>
                    )
                })
            }

        </Select>
        <Select onChange={handleC} >
            {
                c.map(item => {
                    return (
                        <Option key={item.code} value={item.code}>{item.name}</Option>
                    )
                })
            }
        </Select>
        <Select onChange={handleR} >
            {
                r.map(item => {
                    return (
                        <Option key={item.code} value={item.code}>{item.name}</Option>
                    )
                })
            }
        </Select>
    </>
    )
}