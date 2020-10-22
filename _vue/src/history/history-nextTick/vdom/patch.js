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
    
    children.forEach(child=>{
      vnode.el.appendChild(createElm(child))
    })
  }else{
    vnode.el = document.createTextNode(text)
  }
  // console.log(vnode.el)
  return vnode.el
}