import { compileToFunctions } from "./compile/index.js";
import { mountComponent } from "./lifecycle.js";
import { initState } from "./state";

export function initMixin(Vue){
    Vue.prototype._init = function(options){
        const vm = this;
        vm.$options = options;

        //初始化状态（将数据做初始化劫持，当改变数据时要更新视图）
        //vue组件中有很多状态   data computed props watch
        initState(vm)


        if(vm.$options.el){
            this.$mount(vm.$options.el)
        }
    }
    Vue.prototype.$mount = function(el){
        const vm = this;
        const options = vm.$options;
        el = document.querySelector(el);
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