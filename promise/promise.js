const STATUS = { PENDING: 'PENDING', FULFILED: 'FULFILED', REJECTED: 'REJECTED' }
function resolvePromise(x, promise2, resolve, reject) {
    if((typeof x==='object' && x!==null) || typeof x === 'function'){
        let then = x.then;
        if(typeof then === 'function'){
            then.call(x,(y)=>{
                resolvePromise(y,promise2,resolve,reject)
            },(r)=>{
                reject(r)
            })
        }
    }else{
        resolve(x)
    }
}
class Promise {
    constructor(executor) {
        this.value = "";
        this.reason = "";
        this.status = STATUS.PENDING;
        this.onResolvedCallbacks = []; // 存放成功的回调的 
        this.onRejectedCallbacks = []; // 存放失败的回调的
        const resolve = (val) => {
            if(val instanceof Promise){
                return val.then(resolve, reject)
            }
            if (this.status == STATUS.PENDING) {
                this.status = STATUS.FULFILED
                this.value = val;
                console.log(this.onResolvedCallbacks,val)
                this.onResolvedCallbacks.forEach(fn => {
                    fn()
                });
            }

        }
        const reject = (reason) => {
            if (this.status == STATUS.PENDING) {
                this.status = STATUS.REJECTED
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        // console.log('onFulfilled-',typeof onFulfilled)
        // console.log('onRejected-',typeof onRejected)
        onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : (data)=>{
            return data
        }
        console.log(onFulfilled)
        onRejected = typeof onRejected === 'function' ?onRejected :(err)=>{
            throw err
        }
        let promise2 = new Promise((resolve, reject) => {
            console.log('then----',this.status)
            if (this.status == STATUS.FULFILED) {
                setTimeout(() => {
                    let x = onFulfilled(this.value)
                   
                    try {

                        resolvePromise(x, promise2, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0);


            }
            if (this.status == STATUS.REJECTED) {
                setTimeout(() => {
                    let x = onRejected(this.reason)
                    try {
                        resolvePromise(x, promise2, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0);

            }

            if (this.status == STATUS.PENDING) {
                // let p = new Promise((resolve ,reject)=>{
                //     setTimeout(() => {  //调用为异步代码时，需要先把then方法里的函数收集起来，然后在上面一次执行
                //         resolve('123')
                //     }, 1000);
                // })
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        let x = onFulfilled(this.value)
                        try {
                            resolvePromise(x, promise2, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);

                })
                this.onRejectedCallbacks.push(() => {

                    setTimeout(() => {
                        let x = onRejected(this.reason)
                        try {
                            resolvePromise(x, promise2, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);

                })
            }
        })

        return promise2
    }
    static resolve(data){
        return new Promise(resolve=>{
            resolve(data)
        })
    }
    static reject(reason){
        return new Promise((resolve,reject)=>{
            reject(reason)
        })
    }
}




module.exports = Promise;