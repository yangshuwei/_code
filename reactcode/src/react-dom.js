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
    //虚拟dom 跟真实dom关联 以便后面做dom-diff时取值
    vdom.dom = dom;
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
    
    if(!oldVdom&&!newVdom){
        console.log(1)
        return null
    }else if(oldVdom && !newVdom){
       let currentDom = oldVdom.dom;
        currentDom.parentNode.removeChild(currentDom);
        if(oldVdom.classInstance&&oldVdom.classInstance.componentWillUnmount){
            oldVdom.classInstance.componentWillUnmount()
        }
        return null;
    }else if(!oldVdom&&newVdom){
        console.log(2)
        let newDom = createDOM(newVdom);
        parentDOM.appendChild(newDom)
        newVdom.dom = newDom
        return newVdom
    }else{
        console.log(3)
        updateElement(oldVdom,newVdom)
        // console.log('``````',newVdom)
        return newVdom;
    }
}
function updateElement(oldVdom,newVdom){
    //复用老的DOM节点，没发生改变的直接复用
    if(typeof oldVdom.type === 'string'){
        let currentDOM = newVdom.dom = oldVdom.dom;
        updateProps(currentDOM, oldVdom.props, newVdom.props);
        updateChildren(currentDOM, oldVdom.props.children, newVdom.props.children)
    } else if (typeof oldVdom.type === 'function'){
        newVdom.classInstance = oldVdom.classInstance;
        updateClassInstance(oldVdom,newVdom)
    }
    
}
function updateChildren(parentDOM,oldVChildren,newVChildren){
    if ((typeof oldVChildren === 'string' || typeof oldVChildren === 'number') 
    && (typeof newVChildren === 'number' || typeof newVChildren === 'string')){
        if (oldVChildren !== newVChildren){
            parentDOM.textContent = newVChildren
            return
        }
    }
    let maxlength = Math.max(oldVChildren.length,newVChildren.length);
    for(let i=0;i<maxlength;i++){
        compareTwoVdom(parentDOM, oldVChildren[i], newVChildren[i])
    }
}
function updateClassInstance(oldVdom, newVdom){
    let classInstance = oldVdom.classInstance;
    if(classInstance.componentWillReceiveProps){
        classInstance.componentWillReceiveProps()
    }
    classInstance.updater.emitUpdate(newVdom.props)
}
let ReactDOM = {render}
export default ReactDOM;