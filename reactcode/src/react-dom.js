
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
   
    let {type,props} = vdom
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
        dom = document.createElement(type)
    }
    updateProps(dom, props)
    if(typeof props.children === 'string' || typeof props.children === 'number'){
        dom.textContent = props.children;
    }else if(typeof props.children === 'object' && props.children.type){
        render(props.children,dom)
    }else if(Array.isArray(props.children)){
        reconcileChildren(props.children,dom)
    }
    return dom;
}
function reconcileChildren(childVdom,parentDom){
    childVdom.forEach(child => render(child,parentDom));
}
function updateProps(dom,newProps){
    for (let key in newProps){
        if(key === 'children') continue;
       if(key === 'style'){
           let objStyle = newProps[key];
           for(let key in objStyle){
                dom.style[key] = objStyle[key]
           }
       }else if(key.startsWith('on')){
           dom[key.toLocaleLowerCase()] = newProps[key]
       }else{
           dom[key] = newProps[key]
       }
    }
}
function mountClassComponent(vdom){
    let {type,props} = vdom;
    let classInstance = new type(props)
    let renderVdom = classInstance.render();
    const dom = createDOM(renderVdom);
    classInstance.dom = dom; //setState时用到  更新页面
    return dom;
}
function mountFunctionComponent(vdom){
    let {type,props} = vdom;
    let renderVdom = type(props)
    console.log(renderVdom)  //将函数组件解析成{type:"h1",props:{children:[]}}
    return createDOM(renderVdom)
}
let ReactDOM = {render}
export default ReactDOM;