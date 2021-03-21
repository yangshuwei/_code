module.export = function curryType(type){
  return function(content){
    return Object.prototype.toString.call(content) === `[object ${type}]`
  }
}