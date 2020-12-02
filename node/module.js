const fs = require('fs');
const path  = require('path')
const vm = require('vm')



function Module(filename){
  this.id = filename;
  this.exports = {}
  this.path = path.dirname(filename)
}
Module._e = {}
Module._e['.js'] = function(){

}
Module._e['.json'] = function () {

}

Module._resolveFilename = function(filename){
  let filepath = path.resolve(__dirname,filename);
  let isExists = fs.existsSync(filepath);
  if(isExists) return filepath
    //这应该返回文件的具体类型
}
Module.prototype.load = function(){
  // let keys = Object.keys(Module_e)
  // keys.forEach(key=>{

  // });
  // let content = fs.readFile(this.id,'utf8',function(){})
  // console.log(keys)
}
function _require(filename){
   // 1.解析当前的文件名
  filename = Module._resolveFilename(filename)
  // 2.创建模块
  // let module = new Module(filename);

  //加载模块
  // module.load()
}

var r = _require('./a')