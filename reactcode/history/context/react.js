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
function cloneElement(element,props,children){
    if(arguments.length>3){
        children = Array.prototype.splice.call(arguments,2)
    }
    props.children = children;
    return {
        element,
        props
    }
}
function createRef(){ //ref返回的就是一个空对象  在创建真实dom时候，把真实dom元素 赋值给 current ，并且ref跟props是同级的
    return {
        current:null
    }
}
/**
 * children 子组件产生的 虚拟DOM { props,dom,classInstance,ref,type}
 */
function createContext(){
    function Provider({value,children}){
        Provider.value = value;
        return children
    }
    function Consumer({ children }) { //Consumer他的孩子是一个函数，在这让孩子这个函数执行，并且把  Provider.value传递给他，这样就能一层一层的向下传递

        return children(Provider.value)
    }
    return{
        Provider,
        Consumer
    }
}
let React = {
    createElement,
    cloneElement,
    Component,
    createRef,
    createContext
}
export default React