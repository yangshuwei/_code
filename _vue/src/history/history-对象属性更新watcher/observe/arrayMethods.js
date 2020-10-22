const methods = ['push', 'pop', 'shift', 'unshift', 'splice'];
let oldArrayProtoMethods = Array.prototype; //保留数组原来的方法
export let arrayMethods = Object.create(oldArrayProtoMethods); //继承数组的方法
methods.forEach(method => {
    // console.log(arrayMethods[method])
    arrayMethods[method] = function (...args) {
        console.log('数组被劫持了')
        let result = oldArrayProtoMethods[method].apply(this, args);  //数组劫持也需要用原数组的方法，这里的this指的是 Observe实例中的value  
        let inserted;
        let ob = this.__ob__; 
        switch (method) {
            case "push":
            case "unshift":  //这俩方法都是新增追加，追加的内容可能是对象类型 ，要再次进行劫持
                inserted = args; //插入的新值
                break;
            case "splice": //splice(0,1,这里是要插入的新值) 插入的新值也可能是对象类型{a:1}
            inserted = args.splice(2) //这是获取插入的所有新值  // let arr = [1,2,3]; // arr.splice(0,1,{a:1},{b:2})
            default:
                break;
        }
        if(inserted) ob.arrayObserve(inserted) //新增的数据如果是对象的话 要再次进行观测
        return result;
    }
});




