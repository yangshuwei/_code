const fs = require('fs');
const path  = require('path')
const vm = require('vm')



function Module(filename){
  this.id = filename;
  this.exports = {}
  this.path = path.dirname(filename)
}
Module._e = {}
Module._e['.js'] = function(module){
  let content = fs.readFileSync(module.id,'utf8');
  let str = `(function(exports,require,module,__filename,__dirname){${content}})`
  let fn = vm.runInThisContext(str);
  let exports = module.exports;
  fn.call(exports,exports,require,module,__filename,__dirname)
}
Module._e['.json'] = function (module) {
  let content = fs.readFileSync(module.id,'utf8')
  module.exports =  JSON.parse(content)
} 

Module._resolveFilename = function(filename){
  let filepath = path.resolve(__dirname,filename);
  let isExists = fs.existsSync(filepath);
  if(isExists) return filepath
  let keys = Object.keys(Module._e);
  for(let i=0;i<keys.length;i++){
    let newPath = filepath + keys[i];
    if(fs.existsSync(newPath)) return newPath;
  }
    //这应该返回文件的具体类型
}
Module.prototype.load = function(){
  let ex = path.extname(this.id)
  Module._e[ex](this)
}
Module._catch = {}
function _require(filename){
   // 1.解析当前的文件名
  filename = Module._resolveFilename(filename)
  if(Module._catch[filename]){
    return Module._catch[filename].exports
  }
  // 2.创建模块
  let module = new Module(filename);
Module._catch[filename] = module
  //加载模块
  module.load()
  return module.exports
}

var r = _require('./a')
_require('./a')
_require('./a')
_require('./a')
console.log(r)