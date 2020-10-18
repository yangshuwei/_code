function render(vdom,container){
    // console.log(vdom,container)
    let dom = createDOM(vdom);
    console.log(dom)
    container.appendChild(dom);
}

function createDOM(vdom){
    let {type,props} = vdom
    let dom;
    if(typeof type === 'string' || typeof type === 'number'){
        return document.createTextNode(type);
    }
    dom = document.createElement(type)
    return dom;
}



let ReactDOM = {render}
export default ReactDOM;