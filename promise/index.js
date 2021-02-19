
const fs = require('fs')
const path = require('path')
const read = (...args) => {
    return new Promise((resolve, reject) => {
        // fs.readFile(...args, function (err, data) {
        //     if (err) return reject(err);
        //     resolve(data)
        // })
        resolve('ok')
    })
}
 Promise = require('./promise')
let p = read(path.resolve(__dirname,'name.txt'), 'utf8')
console.log(p)
let p2 = p.then((data) => {
    console.log(data)
    // throw new Error('');
//     return new Promise((resolve,reject)=>{
//         resolve( new Promise((resolve,reject)=>{
//             resolve( new Promise((resolve,reject)=>{
//                 resolve( new Promise((resolve,reject)=>{
//                     setTimeout(() => {
//                         reject('ok');
//                     }, 1000);
//                }))
//            }))
//        }))
//    })
// return 1
// const p3 = new Promise(function(resolve,rejected){
//     return 4
// })
    return data
    // return read(data,'utf8')
}, err => {
    console.log('`````', err)
    return 200
}).then(success=>{
    console.log('success-',success)
},error=>{
    console.log('error',error);
})













/* function sum(a,b,c,d,e){
    return a+b+c+d+e
}

const curying = (fn,arr=[])=>{
    let len  = fn.length;
    return function(...args){
        console.log('参数--',...args)
        let newArgs = [...arr,...args];
        if (newArgs.length==len){
            return fn(...newArgs)
        }else{
            return curying(fn, newArgs)
        }
    }
}
// function curry(fn) {
//     var c = (...arg) => (fn.length === arg.length) ?
//         fn(...arg) : (...arg1) => c(...arg, ...arg1)
//     return c
// }
let newSum = curry(sum) */

// console.log(newSum(1)(2)(3)(4)(5))

//第一次  fn => sum  args =>1  newArgs =>1  curying(sum,1)
//第二次  fn => sum  args =>2  newArgs =>1,2 curying(sum,1,2)

// function add(){
//     let arg = [...arguments];
//     console.log('arg--',arg)
//     const fn = (...args)=>{
//         console.log('fnargs--', ...args)
//         let fnArgs = [...arg, ...args]
//         console.log(fnArgs)
//         return add.call(null,...fnArgs)
//     }
//     fn.toString = function(){
//         return arg.reduce(function(a,b){
//             return a +b
//         })
//     }
//     return  fn
// }

// function add() {
//     var args = [].slice.call(arguments);
//     console.log('arg--', args)
//     var fn = function () {
//         var newArgs = args.concat([].slice.call(arguments));
//         console.log('newArgs--', newArgs)
//         return add.apply(null, newArgs);
//     }
//     fn.toString = function () {
//         return args.reduce(function (a, b) {
//             return a + b;
//         })
//     }
//     return fn;
// }
// console.log(add(1)(2))