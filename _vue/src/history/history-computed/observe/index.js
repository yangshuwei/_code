import { arrayMethods } from "./arrayMethods"
import { defineProperty } from "../util.js"
import Dep from "./dep";
class Observe {
    constructor(value) {
        this.dep = new Dep();
        defineProperty(value, '__ob__', this) //再Observe实例上挂在一个__ob__属性 只要被观测过的属性都会存在这个属性 

        if (Array.isArray(value)) { //如果是数组的话  要对数组中的方法进行劫持重写  
            value.__proto__ = arrayMethods //要重写的数组方法挂在 value(每条数据=》数组) 
            this.arrayObserve(value);//同时要对数组中的每个对象类型进行观测 a:[{b:1}]
        } else {
            this.walk(value)
        }
    }
    walk(data) {
        let keys = Object.keys(data); //获取对象的key
        keys.forEach(key => { 
            defineReactive(data, key, data[key])//对每个key 用defineProperty 进行代理观测
        })
    }
    arrayObserve(value) {
        value.forEach(item => {
            observe(item) //观测数组中的对象类型
        })
    }
}
function defineReactive(data, key, value) {
    let childDep = observe(value) //如果值还是对象的话 要再进行观测  a:{b:{c:1}}  深层次观测孩子是不是对象
    let dep = new Dep(); //每个属性都有一个dep
    Object.defineProperty(data, key, {
        get() {
            // console.log("------获取------")
            if(Dep.target){  //让这个属性记住这个watcher
                dep.depend()
                if (childDep){
                    childDep.dep.depend()
                }
            }
            return value;
        },
        set(newValue) {
            // console.log("------设置------")
            if (newValue == value) return value;
            observe(value)  //用户手动修改的值为对象的时候 也要进行观测代理
            value = newValue;
            dep.notify() //异步更新
        }
    })
        ;
}


export default function observe(data) {
    if (typeof data !== "object" || data === null) {
        return 
    }
    if (data.__ob__) { //被观测过的数据  不再进行观测
        return data
    }
    return new Observe(data)
}