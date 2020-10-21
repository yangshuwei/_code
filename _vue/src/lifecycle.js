import Watcher from "./observe/watcher";
import { patch } from "./vdom/patch";

export function lifecycleMixin(Vue){
    Vue.prototype._update = function(vnode){
        const vm = this;
        //用新创建的元素替换老的元素
        vm.$el = patch(vm.$el,vnode)
        // vm._render()
    }
}

export function mountComponent(vm,el){
    callHook(vm,'beforeMount')
    let updateComponent = () =>{
        vm._update(vm._render());
    }

    //渲染watcher 目前只用于渲染
    let watcher = new Watcher(vm, updateComponent, () => {
        callHook(vm, 'beforeUpdate')
    }, true)

    //要把属性和watcher绑定在一起
    // watcher.get()
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