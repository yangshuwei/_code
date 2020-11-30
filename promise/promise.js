const STATUS = { PENDING: 'PENDING', FULFILED: 'FULFILED', REJECTED: 'REJECTED' }
class Promise {
    constructor(executor) {
        this.value = "";
        this.reason = "";
        this.status = STATUS.PENDING;
        this.onResolvedCallbacks = []; // 存放成功的回调的 
        this.onRejectedCallbacks = []; // 存放失败的回调的
        const reslove = (val) => {
            if (this.status == STATUS.PENDING) {
                this.status = STATUS.FULFILED
                this.value = val;
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
        executor(reslove, reject)

    }
    then(onFulfilled, onRejected) {
        let promise2 = new Promise((resolve, reject) => {
        
            if (this.status == STATUS.FULFILED) {
                let x = onFulfilled(this.value)
                // console.log(x)
                try {
                    resolve(x)
                } catch (error) {
                    reject(error)
                }
                
            }
            if (this.status == STATUS.REJECTED) {
                let x = onRejected(this.reason)
                
                try {
                    resolve(x)
                } catch (error) {
                    reject(error)
                }
            }

            if (this.status == STATUS.PENDING) {
                // let p = new Promise((resolve ,reject)=>{
                //     setTimeout(() => {  //调用为异步代码时，需要先把then方法里的函数收集起来，然后在上面一次执行
                //         resolve('123')
                //     }, 1000);
                // })
                this.onResolvedCallbacks.push(() => {
                    let x = onFulfilled(this.value)
                    try {
                        resolve(x)
                    } catch (error) {
                        reject(error)
                    }
                })
                this.onRejectedCallbacks.push(() => {
                    let x = onRejected(this.reason)
                    try {
                        resolve(x)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
        })

        return promise2
    }
}




module.exports = Promise;