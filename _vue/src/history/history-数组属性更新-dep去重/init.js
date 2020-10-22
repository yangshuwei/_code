import { compileToFunctions } from "./compile/index.js";
import { callHook, mountComponent } from "./lifecycle.js";
import { initState } from "./state";
import { mergeOptions } from "./util";
//全局组件会在局部组件  new Vue的时候合并到自己的实例上
export function initMixin(Vue){
    Vue.prototype._init = function(options){
        const vm = this;
        vm.$options = options;
        //vm.constructor.options = > Vue.options 构造函数 使用前者是因为 有可能是子组件的实例 子组件上可能没有全局的options
        vm.$options = mergeOptions(vm.constructor.options,options)
        //用户new Vue的时候也要做一次生命周期，以及自定义属性的混合
        //初始化状态（将数据做初始化劫持，当改变数据时要更新视图）
        //vue组件中有很多状态   data computed props watch

        callHook(vm,'beforeCreate')  //初始化之前调用
        initState(vm)
        callHook(vm, 'created')

        if(vm.$options.el){
            this.$mount(vm.$options.el)
        }
    }
    Vue.prototype.$mount = function(el){
        const vm = this;
        
        const options = vm.$options;
        el = document.querySelector(el);
        // vm.$el = el; //#app
        if(!options.render){ //render优先级最高
            //没render  就把template转成render
            let template = options.template;
            if(!template && el){
                template = el.outerHTML;
            }

            //编译原理  将模版编译成render函数
            const render = compileToFunctions(template);
            options.render = render;
        }

        //挂载组件
        mountComponent(vm,el)
    }
}