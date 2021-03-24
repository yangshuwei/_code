class ClearWebpackExcludeDll{
  constructor(options){
    this.options = options;
    console.log(options)
  }
  apply(compiler){
    compiler.hooks.emit.tap('ClearWebpackExcludeDll',function(compilation){
      console.log('compilation----',compilation.getStats)
    })
  }
}
module.exports = ClearWebpackExcludeDll;