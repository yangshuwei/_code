import Component from './Component'
function createElement(type,config,children){
    // console.log(config)
    let ref;
    if(config){
        delete config._owner;
        delete config._store;
        ref = config.ref
        delete config.ref;
    }
    let props = {...config};
    if(arguments.length>3){
        children = Array.prototype.splice.call(arguments,2)
    }
    props.children = children;
    return {
        type,
        props,
        ref
    }
}
function createRef(){ //ref返回的就是一个空对象  在创建真实dom时候，把真实dom元素 赋值给 current ，并且ref跟props是同级的
    return {
        current:null
    }
}
let React = {
    createElement,
    Component,
    createRef
}
export default React