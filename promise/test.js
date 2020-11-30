const fs = require('fs')
const path = require('path')
const { resolve } = require('./promise')



Promise.all = function (arr) {
    return new Promise((resolve,reject)=>{
      let times = 0;
      let result = []
      for (let i = 0; i < arr.length; i++) {
        let p = arr[i]
        if(typeof p.then ==='function'){
          p.then(data=>{
            result[i] = data
          },reject)
        }else{
          result[i] = p
        }
        ++times;
        console.log(result.length)
        
      }
      if(times == arr.length){
        resolve(result)
      }
    })
  
}
// function isPromise (val){
//     return val && (typeof val.then == 'function')
// }
// Promise.all = function (promises) {
//     return new Promise((resolve,reject)=>{
//         let result = [];
//         let times = 0;
//         function processData(index,val){
//             result[index] = val;
//             if(++times === promises.length){
//                 resolve(result)
//             }
//         }
//         for(let i = 0 ; i < promises.length;i++){
//             let p = promises[i];
//             if(isPromise(p)){
//                 p.then((data)=>{
//                     processData(i,data);// 普通值
//                 },reject)
//             }else{
//                 processData(i,p);// 普通值
//             }
//         }
//     })
// }

// const Promise = require('./promise')
let p1 = Promise.resolve(100)
// let p2 = Promise.reject(200)
let p3 = Promise.resolve(300)

Promise.all([p1, 200, p3]).then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})
// p.then(data=>{
//   console.group(data)
// },e=>{
//   console.log(e)
// })

// promise的链式调用问题
// 1.如果then方法中（成功或者失败） 返回的不是一个promise，会将这个值传递给外层下一次then的成功结果
// 2.如果执行then方法中的方法出错了 抛出异常 我走到下一个then的失败
// 3.如果返回的是一个promise 会用这个promise的结果作为下一次then的成功或者失败

// 1.throw new Error 出错会失败  2.返回的promise出错 会走到下一个then中的失败

// then方法为什么可以链式调用 每次调用then都返回一个新的promise
// catch 就是then的别名 没有成功只有失败 （找最近的优先处理，处理不了找下一层）
