export default {
  name: "routeView",
  functional: true, //函数式组件 性能高 不同通过new 来创建  但是函数式组建中没有this
  render(h, { parent, data }) {

    //获取当前要渲染的记录 组件  
    let route = parent.$route; //this.current
    let deps = 0; //计数，从第一层的router-view开始渲染
    data.routerView = true; //自定义属性  渲染后标识为true

    // App.vue 中渲染组件时  默认会调用render函数，父亲中没有 data.routerView属性
    // 渲染第一层，并且标识当前routerView为true
    while (parent) { //// router-view的父标签
      //  $vnode 代表的是占位符vnode 组件的标签名的虚拟节点
      //  _vnode 组件内部渲染的虚拟节点 
      if (parent.$vnode && parent.$vnode.data.routerView) {
        deps++;
      }
      parent = parent.$parent// 不停的找父组件
    }

    // 第一层router-view 渲染第一个record 第二个router-view渲染第二个record
    let record = route.matched[deps];
    if (!record) {
      return h();
    }
    return h(record.component, data)
  }
}