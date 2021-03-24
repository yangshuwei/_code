const fs = require('fs')
const path = require('path');
const removeFilepath = path.join(__dirname,'debug.js')
console.log(removeFilepath)
fs.unlink('D:\personal_space\_code\webpack_01\dist\app.726f0a4d75baddfcce05.js',function(err){
    console.log(1111)
    if(err) throw err;
    console.log('file had remove')
    return
  })