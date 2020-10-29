import Watcher from "./observe/watcher";
import { patch } from "./vdom/patch";

export function lifecycleMixin(Vue){
    Vue.prototype._update = function(vnode){
        const vm = this;
        const prevnode = vm._vnode; //如果首次渲染 _vnode 不存在
        if (!prevnode){
            //用新创建的元素替换老的元素
            vm.$el = patch(vm.$el, vnode) //首次渲染
            
        }else{
            vm.$el = patch(prevnode, vnode) //拿上一次的vnode 跟新的vnode 做dom-diff
        }
        vm._vnode = vnode; //保存上一次vnode
        // vm._render()
    }
}

export function mountComponent(vm,el){
    vm.$el = el
    callHook(vm,'beforeMount')

    //先调用vm._render生成虚拟节点  再update生成真实dom渲染到页面上
    let updateComponent = () =>{
        vm._update(vm._render()); //渲染更新
    }

    //渲染watcher 目前只用于渲染
    let watcher = new Watcher(vm, updateComponent, () => {
        callHook(vm, 'updated')
    }, true);
    // setTimeout(() => {
        // watcher.get()
    // }, 2000);
    //要把属性和watcher绑定在一起
    callHook(vm, 'mounted')
}

export function callHook(vm,hook){
    let handle = vm.$options[hook];
    if (handle){
        for (let i = 0; i < handle.length; i++) {
            handle[i].call(vm)
        }
    }
    
}   