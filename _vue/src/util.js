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