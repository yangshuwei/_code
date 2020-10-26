import observe from "./observe/index";
import Watcher from "./observe/watcher";
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
            //    console.log(handler) key=>b
            //    'b': [
            //        () => {
            //            console.log(1)
            //        },
            //        () => {
            //            console.log(2)
            //        },
            //    ],
               createWatch(vm, key, handler)
           })
        }else{
            // console.log(handle);
            createWatch(vm, key, handle)
        }
    }
    // if(Array.isArray(watch)){

    // }else{
    //     createWatch(vm,key,handle)
    // }
}

function createWatch(vm, exprOrFn, handler,options={}){
    // console.log(exprOrFn) =》 key
    if(typeof handler == 'object'){
        options = handler;
        handler = handler.handler
    }
    if(typeof handler == 'string'){
        handler = vm[handler] //到vm实例上获取d.d.d的值
        
    }
    return vm.$watch(exprOrFn,handler, options)
}
export function stateMixin(Vue){
    Vue.prototype.$nextTick = function(cb){
        nextTick(cb)
    }
    Vue.prototype.$watch = function (exprOrFn,cb, options={}){
        // console.log(handler, options)
        new Watcher(this,exprOrFn,cb,{...options,user:true})
    }
}