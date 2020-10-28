export function patch(oldVnode, vnode) {
  if (!oldVnode) {
    return createElm(vnode)
  }
  // 默认初始化时 是直接用虚拟节点创建出真实节点来 替换掉老节点
  if (oldVnode.nodeType == 1) { //说明是真实节点
    let el = createElm(vnode) //生成真是dom
    let parentElm = oldVnode.parentNode; //#app的父亲 =》body
    parentElm.insertBefore(el, oldVnode.nextSibling);
    parentElm.removeChild(oldVnode)
    return el
  } else {

    // 在更新的时 拿老的虚拟节点 和 新的虚拟节点做对比 ，将不同的地方更新真实的dom
    // 更新功能
    // 那当前节点 整个
    // 1.比较两个元素的标签 ，标签不一样直接替换掉即可
    if (oldVnode.tag !== vnode.tag) {
      return oldVnode.el.parentNode.replaceChild(createElm(vnode), oldVnode.el)
    }

    // 2.有种可能是标签一样 <div>1</div>   <div>2</div>
    //  文本节点的虚拟节点tag 都是undefined
    if (!oldVnode.tag) {
      if (oldVnode.text != vnode.text) {
        return oldVnode.el.textContent = vnode.text
      }
    }
    // 到这就说明 老的标签和新的标签一样直接复用即可
    let el = vnode.el = oldVnode.el; // 复用老节点
    //更新属性，用新的虚拟节点的属性和老的比较，去更新节点
    // 新老属性做对比
    updateProperties(vnode, oldVnode.data);


    //比较儿子
    let oldChildren = oldVnode.children || [];
    let newChildren = vnode.children || [];
    if (oldChildren.length > 0 && newChildren.length > 0) { //老的有儿子，新的也有儿子
      updateChildren(oldChildren, newChildren, el)
    } else
      // 1、老的有儿子新的没有，直接把老的儿子删除掉
      if (oldChildren.length > 0 && newChildren.length == 0) {
        el.innerHTML = ''
      } else if (oldChildren.length == 0 && newChildren.length > 0) { //新的有，老的没有
        for (let i = 0; i < newChildren.length; i++) {
          let child = newChildren[i];
          el.appendChild(createElm(child))
        }
      }

  }

}
function isSameVnode(oldVnode, newVnode) {
  return (oldVnode.tag == newVnode.tag) && (oldVnode.key == newVnode.key)
}
function updateChildren(oldChildren, newChildren, parent) {
  let oldStartIndex = 0;//老的索引，开头指针
  let oldStartVnode = oldChildren[0] //老的索引指向的节点
  let oldEndIndex = oldChildren.length - 1
  let oldEndVnode = oldChildren[oldEndIndex]


  let newStartIndex = 0;//新的索引，开头指针
  let newStartVnode = newChildren[0] //新的索引指向的节点
  let newEndIndex = newChildren.length - 1
  let newEndVnode = newChildren[newEndIndex]
  //vue中的diff算法做了很多优化
  //dom操作有很多常见的逻辑  吧节点插入到当前儿子的头部 尾部  或者儿子 倒叙 正序

  //vue2中采用的是双指针的方式
  function makeIndexByKey(children){
    let map = {};
    children.forEach((item,index)=>{
      if(item.key){
        map[item.key] = index;
      }
    })
    return map;
  }

  let map = makeIndexByKey(oldChildren);
  //1.在尾部添加
  // 循环 老的和新的  那个先结束 循环就停止  将多余的删除或者添加 （老的多新的少就删除）
  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) { //比价谁先循环完毕  停止
    if(!oldStartVnode){ //指针指向了null （null=>老的已经移动，原来位置用null代替）
      oldStartVnode = oldChildren[++oldStartIndex]
    }else if(!oldEndVnode){
      oldEndVnode = oldChildren[--oldEndIndex]
    }else 
    if (isSameVnode(oldStartVnode, newStartVnode)) { //如果俩人开始标签一样  就继续比较儿子 从头开始对比
      patch(oldStartVnode, newStartVnode) //更新属性 并且递归更新额儿子
      oldStartVnode = oldChildren[++oldStartIndex]  //指针后移比较下一个元素
      newStartVnode = newChildren[++newStartIndex]  //指针后移比较下一个元素
    } else if (isSameVnode(oldEndVnode, newEndVnode)) { //如果俩人开始标签不一样结束标签一样 就继续比较儿子  从尾开始对比
      patch(oldEndVnode, newEndVnode);
      oldEndVnode = oldChildren[--oldEndIndex]
      newEndVnode = newChildren[--newEndIndex]
    } else if (isSameVnode(oldEndVnode, newStartVnode)) { //老的尾和新的头对比  老：A B C D  新：D A B C
      patch(oldEndVnode, newStartVnode);
      parent.insertBefore(oldEndVnode.el, oldStartVnode.el);
      oldEndVnode = oldChildren[--oldEndIndex];
      newStartVnode = newChildren[++newStartIndex];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) { //老的头和新的尾对比  老：A B C D  新：D C B A
      patch(oldStartVnode, newEndVnode);
      //将当前元素插入到尾部的下一个元素的前面
      parent.insertBefore(oldStartVnode.el, oldEndVnode.el.nextSibling);
     
      oldStartVnode = oldChildren[++oldStartIndex];
      newEndVnode = newChildren[--newEndIndex];
    }else{ //儿子没关系 暴力比对
        let moveIndex = map[newStartVnode.key] //拿到开头虚拟节点的key
        if(moveIndex == undefined){ //没有key复用 不需要移动
          parent.insertBefore(createElm(newStartVnode,oldStartVnode.el))
        }else{
          let moveVNode = oldChildren[moveIndex]; //说明key相同，老的虚拟节点需要移动
          patch(moveVNode,newStartVnode) //比较属性还有儿子
          parent.insertBefore(moveVNode.el,oldStartVnode.el)
          oldChildren[moveIndex] = null //移动这个老的元素，并且把当前位置设置为null  防止数组长度改变塌陷

        }
        newStartVnode = newChildren[++newStartIndex] //指针指向下一个新元素，不停的去老的里面找 
    }
  }
  if (newStartIndex <= newEndIndex) {
    //while循环后 新的vdom儿子比老的多，就把多的插入到父节点中去
    // 将新的多余的插入进去即可 ,可能是向前添加 还有可能是向后添加
    // parent.appendChild(createElm(newChildren[i]));
    // 向后插入 ele = null
    // 像前插入 ele 就是当前像谁前面插入
    for (let i = newStartIndex; i <= newEndIndex; i++) {
      let ele = newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].el;
      parent.insertBefore(createElm(newChildren[i]), ele)
    }
  }
  // 老的节点还有没处理的，说明这些老节点是不需要的节点，如过这里面有null说明，这个节点已经被处理过了，跳过即可
  if (oldStartIndex <= oldEndIndex) {
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      let child = oldChildren[i];
      if (child != null) {
        parent.removeChild(child.el);
      }
    }
  }

}
export function createElm(vnode) {
  let { tag, children, data, key, text } = vnode;
  if (typeof tag == 'string') {
    vnode.el = document.createElement(tag); //创建元素 放到vnode.el上
    updateProperties(vnode) //更新属性
    children.forEach(child => { //遍历儿子，将儿子渲染后的结果放到父亲种
      vnode.el.appendChild(createElm(child))
    })
  } else {
    vnode.el = document.createTextNode(text)
  }
  // console.log(vnode.el)
  return vnode.el
}
// vue 的渲染流程 =》 先初始化数据 =》 将模板进行编译 =》 render函数 =》 生成虚拟节点 =》 生成真实的dom  =》 扔到页面上
function updateProperties(vnode, oldProps = {}) {
  let newProps = vnode.data || {}
  let el = vnode.el;
  //老的有属性，新的没有  直接删除老的
  for (let key in oldProps) {
    if (!newProps[key]) {
      el.removeAttribute(key)
    }
  }

  //处理样式  老的 color:red  新的 background：red
  let newStyle = newProps.style || {};
  let oldStyle = oldProps.style || {}
  for (let key in oldStyle) {
    // 老的样式中有 新的没有 删除老的样式
    if (!newStyle[key]) {
      el.style[key] = ""
    }
  }
  //新的有直接更新老的就可以
  for (let key in newProps) {
    if (key == 'style') {
      for (let styleName in newProps.style) {
        el.style[styleName] = newProps.style[styleName]
      }
    } else if (key === 'class') {
      el.className = newProps.class
    } else {
      el.setAttribute(key, newProps[key])
    }

  }
}