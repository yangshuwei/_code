import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from "react";
import { Select } from "antd";
const Option = Select;

const City = (props, ref) => {
    console.log(ref)
    let c = { current: null }
    useImperativeHandle(ref, () => (
        {
            handlerChild() {
                console.log(1111)
            },
            aaa() {

            }
        }
    ))

    return (
        <div ref={c}>子组件</div>
        // <input type="text" ref={c}/>
    )
}

export default City