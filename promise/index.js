

 Promise = require('./promise')
let p = new Promise((reslove,reject)=>{
    reject(123)
})
console.log(p)