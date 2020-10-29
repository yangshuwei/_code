import observe from "./observe/index";
import Watcher from "./observe/watcher";
import {
    nextTick,
    proxy
} from "./util";
import Dep from "./observe/dep"

export function initState(vm) {
    const opts = vm.$options;
    if (opts.data) {
        initData(vm);
    }
    if (opts.watch) {
        initWatch(vm)
    }
    if (opts.computed) {
        initComputed(vm)
    }
}

function initData(vm) {
    let data = vm.$options.data;
    vm.$data = data = typeof data === "function" ? data.call(vm) : data;
    for (let key in data) {
        proxy(vm, "$data", key)
    }
    observe(data)
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
const sharedPropertyDefninition = {}

function defineComputed(target, key, userDef) {
    if (typeof userDef == 'function') { //如果是函数  只有get方法  没有set
        sharedPropertyDefninition.get = createComputedGetter(key); //默认调用了取值操作 get 走到observe/index get方法 
    } else {
        sharedPropertyDefninition.get = createComputedGetter(key); //如果传过来的是对象  加缓存
        sharedPropertyDefninition.set = userDef.set;
    }
    Object.defineProperty(target, key, sharedPropertyDefninition) //关联到当前实例上，这样才会走 get set
}

function createComputedGetter(key) { //此方法是自己包装的方法，每次取值都会调用
    return function() {
        const watcher = this._computedWatchers[key]; //拿到这个属性对应的计算属性watcher
        if (watcher) {
            if (watcher.dirty) { //脏数据，说明需要计算
                watcher.evaluate() //对当前watcher求值 也就是运行 computed中对应的方法
            }
            if (Dep.target) { //说明还有渲染watcher 也应该一起收集起来
                watcher.depend()
            }
            return watcher.value; //返回对当前watcher求值  fullNmae
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

function createWatch(vm, exprOrFn, handler, options = {}) {
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
    Vue.prototype.$watch = function(exprOrFn, cb, options = {}) {
        // console.log(handler, options)
        new Watcher(this, exprOrFn, cb, { ...options,
            user: true
        })
    }
}