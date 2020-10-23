import observe from "./observe/index";
import { nextTick, proxy } from "./util";

export function initState(vm){
    const opts = vm.$options;
    if(opts.data){
        initData(vm);
    }
    if(opts.watch){
        initWatch(vm)
    }
}

function initData(vm){
    let data = vm.$options.data;
    vm.$data = data = typeof data === "function" ? data.call(vm) : data;
    for(let key in data){
        proxy(vm,"$data",key)
    }
    observe(data)
}

function initWatch(vm){
    const watch = vm.$options.watch;
    for(let key in watch){
        const handle = watch[key]
        if (Array.isArray(handle)){
           handle.forEach(handler=>{
               createWatch(vm, key, handler)
           })
        }else{
            createWatch(vm, key, handle)
        }
    }
    // if(Array.isArray(watch)){

    // }else{
    //     createWatch(vm,key,handle)
    // }
}

function createWatch(vm, key, handler,options={}){
    if(typeof handler == 'object'){
        options = handler;
        handler = handler.handler
    }
    if(typeof handler == 'string'){
        handler = vm[handler]
    }
    return vm.$watch(handler, options)
}
export function stateMixin(Vue){
    Vue.prototype.$nextTick = function(cb){
        nextTick(cb)
    }
    Vue.prototype.$watch = function (handler, options){
        console.log(handler, options)
    }
}