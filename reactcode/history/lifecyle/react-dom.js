import { addEvent } from "./event";

function render(vdom, container) {
    // console.log(vdom,container)
    let dom = createDOM(vdom);
    container.appendChild(dom);
}

export function createDOM(vdom) {
    if (typeof vdom === 'string' || typeof vdom === 'number') {
        return document.createTextNode(vdom);
    }
    // if (!vdom) {
    //     return '';
    // }

    let { type, props, ref } = vdom
    let dom
    // if (typeof vdom === 'string' || typeof vdom === 'number') {
    //     return document.createTextNode(vdom);
    // } else 
    if (typeof type == 'function') {

        if (type.isReactComponent) {
            return mountClassComponent(vdom)
        } else {
            return mountFunctionComponent(vdom)
        }


    } else {
        //原声dom标签
        dom = document.createElement(type)
    }
    updateProps(dom, {}, props)
    if (typeof props.children === 'string' || typeof props.children === 'number') {
        dom.textContent = props.children;
    } else if (typeof props.children === 'object' && props.children.type) {
        render(props.children, dom)
    } else if (Array.isArray(props.children)) {
        reconcileChildren(props.children, dom)
    }else{
        dom.textContent = props.children ? props.children.toString() : ''
    }
    if (ref) {
        ref.current = dom
    }
    //虚拟dom 跟真实dom关联 以便后面做dom-diff时取值
    vdom.dom = dom;
    return dom;
}
function reconcileChildren(childrenVdom, parentDOM) {
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i];
        render(childVdom, parentDOM);
    }
}
function updateProps(dom, oldProps, newProps) {
    for (let key in newProps) {
        if (key === 'children') { continue; }
        if (key === 'style') {
            let style = newProps[key];
            for (let attr in style) {
                dom.style[attr] = style[attr]
            }
        } else if (key.startsWith('on')) {
            addEvent(dom, key.toLocaleLowerCase(), newProps[key]);
        } else {
            dom[key] = newProps[key];
        }
    }
}
function mountClassComponent(vdom) {
    let { type, props } = vdom;
    let classInstance = new type(props)
    vdom.classInstance = classInstance; //虚拟dom的classInstance = 累组件的实例
    classInstance.ownVdom = vdom;
    if (classInstance.componentWillMount) {
        classInstance.componentWillMount()
    }
    //调用实例的render方法得到一个虚拟DOM对象或者说React元素 div
    let renderVdom = classInstance.render();
    const dom = createDOM(renderVdom); //生成真实dom元素
    vdom.dom = renderVdom.dom = dom;
    classInstance.oldVdom = renderVdom; //每次更新让老的虚拟dom = 本次新生成的虚拟dom ，以便后面domdiff时 能获取上一次的虚拟dom
    classInstance.dom = dom; //setState时用到  更新页面 类组件实例上挂一个真实dom
    if (classInstance.componentDidMount) {
        classInstance.componentDidMount()
    }
    return dom;
}
function mountFunctionComponent(vdom) {
    let { type, props } = vdom;
    let renderVdom = type(props)
    // console.log(renderVdom)  //将函数组件解析成{type:"h1",props:{children:[]}}
    return createDOM(renderVdom)
}

export function compareTwoVdom(parentDOM, oldVdom, newVdom,nextDOM) {

    if (!oldVdom && !newVdom) {
        return null
    } else if (oldVdom && !newVdom) {
        let currentDom = oldVdom.dom;
        currentDom.parentNode.removeChild(currentDom);
        if (oldVdom.classInstance && oldVdom.classInstance.componentWillUnmount) {
            oldVdom.classInstance.componentWillUnmount()
        }
        return null;
    } else if (!oldVdom && newVdom) {
        let newDom = createDOM(newVdom);
        newVdom.dom = newDom
        if(nextDOM){
            parentDOM.insertBefore(newDom)
        }else{
            parentDOM.appendChild(newDom)
        }
        
        
        return newVdom
    } else if (oldVdom, newVdom && oldVdom.type !== newVdom.type){
        let oldDOM = oldVdom.dom;
        let newDOM = createDOM(newVdom);
        newVdom.dom = newDOM
        oldDOM.parentNode.replaceChild(newDOM,oldDOM)
        if (oldVdom.classInstance && oldVdom.classInstance.componentWillUnmount) {
            oldVdom.classInstance.componentWillUnmount()
        }
        return newVdom
    }else {
        updateElement(oldVdom, newVdom)
        // console.log('``````',newVdom)
        return newVdom;
    }
}
function updateElement(oldVdom, newVdom) {
    //复用老的DOM节点，没发生改变的直接复用
    let currentDOM = newVdom.dom = oldVdom.dom;
    newVdom.classInstance = oldVdom.classInstance;
    if (typeof oldVdom.type === 'string') {
        
        updateProps(currentDOM, oldVdom.props, newVdom.props);
        updateChildren(currentDOM, oldVdom.props.children, newVdom.props.children)
    } else if (typeof oldVdom.type === 'function') {
        
        updateClassInstance(oldVdom, newVdom)
    }

}
function updateChildren(parentDOM, oldVChildren, newVChildren) {
    if ((typeof oldVChildren === 'string' || typeof oldVChildren === 'number')
        && (typeof newVChildren === 'string' || typeof newVChildren === 'number')) {
        if (oldVChildren !== newVChildren){
            parentDOM.innerText = newVChildren
           
        }
        return;
    }
    oldVChildren = Array.isArray(oldVChildren) ? oldVChildren : [oldVChildren];
    newVChildren = Array.isArray(newVChildren) ? newVChildren : [newVChildren];
    let maxlength = Math.max(oldVChildren.length, newVChildren.length);
    for (let i = 0; i < maxlength; i++) {
        let nextDOM = oldVChildren.find((item,index)=>index>i&&item&&item.dom)
        compareTwoVdom(parentDOM, oldVChildren[i], newVChildren[i],nextDOM&&nextDOM.dom)
    }
}
function updateClassInstance(oldVdom, newVdom) {
    let classInstance = oldVdom.classInstance;
    if (classInstance.componentWillReceiveProps) {
        classInstance.componentWillReceiveProps()
    }
    classInstance.updater.emitUpdate(newVdom.props)
}
let ReactDOM = { render }
export default ReactDOM;