import observe from "./observe/index";
import Watcher from "./observe/watcher";
import {
    nextTick,
    proxy
} from "./util";
import Dep from "./observe/dep"

export function initState(vm) {
    const opts = vm.$options;
    if (opts.props) {
        initProps(vm);
    }
    if (opts.methods) {
        initMethods(vm);
    }
    if (opts.data) {
        initData(vm);
    }
    if (opts.computed) {
        initComputed(vm);
    }
    if (opts.watch) {
        initWatch(vm);
    }
}
function initProps() {}
function initMethods() {}

function initData(vm) { // 数据的初始化操作
    let data = vm.$options.data;
    // vm._data 保存用户的所有的data
    vm._data = data = typeof data == 'function'?data.call(vm):data;
    for(let key in data){
        proxy(vm,'_data',key);
    }
    observe(data); // 让这个对象重新定义set 和 get
}


function initComputed(vm) {
    const computed = vm.$options.computed;
    const watchers = vm._computedWatchers = {}; //用来存放计算属性的watcher

    for (let key in computed) {
        let userDef = computed[key]
        const getter = typeof userDef == 'function' ? userDef : userDef.get;
        watchers[key] = new Watcher(vm, getter, () => {}, { //计算属性watcher
            lazy: true
        }) //每个计算属性都有自己的watcher ，（）=》{}不需要调用回调   $watch 需要调用回调，computed是用dirty来控制是否需要重新调用
        defineComputed(vm, key, userDef) //属性与实例关联 Object.defineProperty 
    }
}
function defineComputed(target,key,userDef){  // 这样写是没有缓存的
    const sharedPropertyDefinition = {
        enumerable: true,
        configurable: true,
        get:()=>{},
        set:()=>{}
    }
    if(typeof userDef == 'function'){
        sharedPropertyDefinition.get = createComputedGetter(key) // dirty 来控制是否调用userDef
    }else{
        sharedPropertyDefinition.get = createComputedGetter(key); // 需要加缓存
        sharedPropertyDefinition.set = userDef.set;
    }
    Object.defineProperty(target,key,sharedPropertyDefinition)////关联到当前实例上，这样才会走 get set
}
function createComputedGetter(key){
    return function (){ // 此方法是我们包装的方法，每次取值会调用此方法
        const watcher = this._computedWatchers[key]; // 拿到这个属性对应watcher
        if(watcher){
            if(watcher.dirty){ // 默认肯定是脏的
                watcher.evaluate(); // 对当前watcher求值
            }

            if (Dep.target) { // 说明还有渲染watcher，也应该一并的收集起来
                watcher.depend();
            }
            return watcher.value; // 默认返回watcher上存的值
        }
    }
}

function initWatch(vm) {
    const watch = vm.$options.watch;
    for (let key in watch) {
        const handle = watch[key]
        if (Array.isArray(handle)) {

            handle.forEach(handler => {
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
        } else {
            // console.log(handle);
            createWatch(vm, key, handle)
        }
    }
    // if(Array.isArray(watch)){

    // }else{
    //     createWatch(vm,key,handle)
    // }
}

function createWatch(vm, exprOrFn, handler, options) {
    // console.log(exprOrFn) =》 key
    if (typeof handler == 'object') {
        options = handler;
        handler = handler.handler
    }
    if (typeof handler == 'string') {
        handler = vm[handler] //到vm实例上获取d.d.d的值

    }
    return vm.$watch(exprOrFn, handler, options)
}
export function stateMixin(Vue) {
    Vue.prototype.$nextTick = function(cb) {
        nextTick(cb)
    }
    Vue.prototype.$watch = function (exprOrFn,cb,options = {}) {
        // 数据应该依赖这个watcher  数据变化后应该让watcher从新执行
        let watcher = new Watcher(this,exprOrFn,cb,{...options,user:true});
        if(options.immediate){
            cb(); // 如果是immdiate应该立刻执行
        }
    }
}