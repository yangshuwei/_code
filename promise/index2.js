const Promise = require('./promise');
function read(){
  return new Promise((resolve,reject)=>{
    resolve('success')
    // reject('err')
  })
}
let p1 = read();
p1.then((onFulfilled)=>{
  console.log('onFulfilled--',onFulfilled)
})
// p1.then((success)=>{
//   console.log('success-',success)
//   new Promise((resolve,reject)=>{
//     resolve('我返回的是一个新的promise')
//   })
//   // return 1
//   // throw new Error('parse excel failed');
// },(err)=>{
//     console.log('err-',err)
//     return err
// }).then((success2)=>{
//   console.log('success2-', success2)
// }, (err2) => {
//   console.log('err2-', err2)
// })