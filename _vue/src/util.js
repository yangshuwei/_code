export function proxy(vm,data,key){
    Object.defineProperty(vm,key,{
        get(){
            return vm[data][key]
        },
        set(newValue){
            vm[data][key] = newValue;
        }
    })
} 


export function defineProperty(value,key,target){
    Object.defineProperty(value,key,{ //再Observe实例上挂在一个__ob__属性 只要被观测过的属性都会存在这个属性   
        enumerable:false,
        configurable:false,
        value:target
    });
}


export const LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed'
]
const strats = {};
strats.data = function (parentVal, childVal){
    return childVal;
}
// strats.computed = function(){}
// strats.watch = function(){}
LIFECYCLE_HOOKS.forEach(hook=>{
    strats[hook] = mergeHook
})
//生命周期合并的实现：内部每次混合的时候 会把这些方法做成一个队列，在需要调用的时候会一次执行队列里面的方法
//生命周期合并
function mergeHook(parentVal,childVal){ 
    //父 Vue.options= {} 第一次合并  父亲没有值  儿子有值  直接返回儿子   Vue.options = {created:[a]}
    //第二次 儿子b跟父继续合并 Vue.options= {{created:[a,b]}}
    if(childVal){
        if(parentVal){
            return parentVal.concat(childVal);
        }else{
            return [childVal]
        }
    }else{
        return parentVal;
    }
}
export function mergeOptions(parent,child){
    
    const options = {};
    for(let key in parent){ //儿子和父亲都有  
        mergeField(key) //合并字段
    }
    for(let key in child){
        if(!parent.hasOwnProperty(key)){ //儿子有父亲没有 将儿子多的合并到父亲上
            mergeField(key)
        }
    }

    function mergeField(key){
       
        if (strats[key]){
            options[key] = strats[key](parent[key],child[key])
            
        }else{
            options[key] = child[key]
        }
    }
    return options;
}

let callBacks = [];
let pending = false;
let timeFn;
if(Promise){
    timeFn = () =>{
        Promise.resolve().then(flushCallbacks)
    }
}else {
    timeFn = () => {
        setTimeout(() => {
            flushCallbacks()
        }, 0);
    }
}
function flushCallbacks(){
    while (callBacks.length){
        let cb = callBacks.pop();
        cb();
    }
    pending = true;
}
export function nextTick(cb){
    callBacks.push(cb)
    //这里是真正的异步更新操作 
    if(!pending){
        timeFn();
        pending=true;
    }
}