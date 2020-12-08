import { addEvent } from "./event";

function render(vdom,container){
    // console.log(vdom,container)
    let dom = createDOM(vdom);
    container.appendChild(dom);
}

export function createDOM(vdom){
    if (typeof vdom === 'string' || typeof vdom === 'number') {
        return document.createTextNode(vdom);
    }
    if(!vdom){
        return '';
    }
   
    let {type,props,ref} = vdom
    let dom
    // if (typeof vdom === 'string' || typeof vdom === 'number') {
    //     return document.createTextNode(vdom);
    // } else 
    if (typeof type == 'function') {
    
        if(type.isReactComponent){
            return mountClassComponent(vdom)
        }else{
            return mountFunctionComponent(vdom)
        }
        
        
    }else{
        //原声dom标签
        dom = document.createElement(type)
    }
    updateProps(dom,{}, props)
    if(typeof props.children === 'string' || typeof props.children === 'number'){
        dom.textContent = props.children;
    }else if(typeof props.children === 'object' && props.children.type){
        render(props.children,dom)
    }else if(Array.isArray(props.children)){
        reconcileChildren(props.children,dom)
    }
    if(ref){
        ref.current = dom
    }
    return dom;
}
function reconcileChildren(childVdom,parentDom){
    childVdom.forEach(child => render(child,parentDom));
}
function updateProps(dom,oldProps,newProps){
    for (let key in newProps){
        if(key === 'children') continue;
       if(key === 'style'){
           let objStyle = newProps[key];
           for(let key in objStyle){
                dom.style[key] = objStyle[key]
           }
       }else if(key.startsWith('on')){ //对于事件对象要做合成事件处理
        //    dom[key.toLocaleLowerCase()] = newProps[key]
           addEvent(dom, key.toLocaleLowerCase(), newProps[key])
       }else{
           dom[key] = newProps[key]
       }
    }
}
function mountClassComponent(vdom){
    let {type,props} = vdom;
    let classInstance = new type(props)
    vdom.classInstance = classInstance; //虚拟dom的classInstance = 累组件的实例
    if(classInstance.componentWillMount){
        classInstance.componentWillMount()
    }
    //调用实例的render方法得到一个虚拟DOM对象或者说React元素 div
    let renderVdom = classInstance.render();
    const dom = createDOM(renderVdom); //生成真实dom元素
    vdom.dom = renderVdom.dom = dom;
    classInstance.oldVdom = renderVdom; //每次更新让老的虚拟dom = 本次新生成的虚拟dom ，以便后面domdiff时 能获取上一次的虚拟dom
    classInstance.dom = dom; //setState时用到  更新页面 类组件实例上挂一个真实dom
    if(classInstance.componentDidMount){
        classInstance.componentDidMount()
    }
    return dom;
}
function mountFunctionComponent(vdom){
    let {type,props} = vdom;
    let renderVdom = type(props)
    // console.log(renderVdom)  //将函数组件解析成{type:"h1",props:{children:[]}}
    return createDOM(renderVdom)
}

export function compareTwoVdom(parentDOM,oldVdom,newVdom){
    console.log(parentDOM,oldVdom,newVdom)
}
let ReactDOM = {render}
export default ReactDOM;