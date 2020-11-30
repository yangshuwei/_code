const fs = require('fs')

const read = (...args)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile(...args,function(err,data){
      if(err) return reject(err);
      resolve(data)
    })
  })
}


// promise的链式调用问题
// 1.如果then方法中（成功或者失败） 返回的不是一个promise，会将这个值传递给外层下一次then的成功结果
// 2.如果执行then方法中的方法出错了 抛出异常 我走到下一个then的失败
// 3.如果返回的是一个promise 会用这个promise的结果作为下一次then的成功或者失败

// 1.throw new Error 出错会失败  2.返回的promise出错 会走到下一个then中的失败

// then方法为什么可以链式调用 每次调用then都返回一个新的promise
// catch 就是then的别名 没有成功只有失败 （找最近的优先处理，处理不了找下一层）


read('./name.txt','utf8').then((data)=>{
  // throw new Error('');
  return 100
  // return read(data,'utf8')
},err=>{
  console.log('`````',err)
}).then((s)=>{
  console.log('s',s)
},(e)=>{
  console.log('e',e)
})