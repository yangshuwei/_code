function render(vdom,container){
    // console.log(vdom,container)
    let dom = createDOM(vdom);
    container.appendChild(dom);
}

function createDOM(vdom){
    console.log(vdom)
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
    if (typeof type === 'function') {
        console.log('函数式组件')
        if(type.isReactComponent){
            return mountClassComponent(vdom)
        }else{
            return mountFunctionComponent(vdom)
        }
        
    }else{
        //原声dom标签
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
function updateProps(dom,props){
    for(let key in props){
        if(key === 'children') continue;
       if(key === 'style'){
           let objStyle = props[key];
           for(let key in objStyle){
                dom.style[key] = objStyle[key]
           }
       }else{
        dom[key] = props[key]
       }
    }
}
/**
 * 
 * @param {*} vdom 
 */
function mountClassComponent(vdom){
    let {type,props} = vdom;
    let instances = new type(props) // new Welcome()
    console.log(instances)
    let renderVdom = instances.render() //执行累组件中的render函数得到 虚拟dom {type:"h1",props:{children:[]}}
    return createDOM(renderVdom)
}
function mountFunctionComponent(vdom){
    let {type,props} = vdom;
    let renderVdom = type(props)
    // console.log(renderVdom)  //将函数组件解析成{type:"h1",props:{children:[]}}
    return createDOM(renderVdom)
}
let ReactDOM = {render}
export default ReactDOM;