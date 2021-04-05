// const { resolve } = require("./promise")
// const Promise = require('./promise')
// let p1 = new Promise((resolve,reject)=>{
//     throw new Error('p1')
// })

let p2 = new Promise((resolve,reject)=>{
    resolve(2)
})

let p3 = new Promise((resolve,reject)=>{
    resolve('p3')
})

p2.then().then(res=>{
    console.log(res)
})
p3.then(res=>{
    console.log(res)
})