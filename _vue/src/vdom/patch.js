export function patch(oldVnode,vnode){
  let el = createElm(vnode) //生成真是dom
  let parentElm = oldVnode.parentNode; //#app的父亲 =》body
  parentElm.insertBefore(el, oldVnode.nextSibling); 
  parentElm.removeChild(oldVnode)
  return el
}

function createElm(vnode){ 
  let {tag,children,data,key,text} = vnode;
  if(typeof tag == 'string'){
    vnode. el =document.createElement(tag);
    updateProperties(vnode)
    children.forEach(child=>{
      vnode.el.appendChild(createElm(child))
    })
  }else{
    vnode.el = document.createTextNode(text)
  }
  // console.log(vnode.el)
  return vnode.el
}

function updateProperties(vnode){
  let newProps = vnode.data || {}
  let el = vnode.el;
  for(let key in newProps){
    if(key == 'style'){
      for(let styleName in newProps.style){
        el.style[styleName] = newProps.style[styleName]
      }
    }else if (key === 'class'){
      el.className = newProps.class
    }else{
      el.setAttribute(key, newProps[key])
    }
    
  }
}