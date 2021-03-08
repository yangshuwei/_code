class ConsolePlugin{
    constructor(options){
        this.options = options;
    }
    apply(compiler){
        compiler.hooks.emit.tap('ConsolePlugin',(compilation)=>{
            console.log(compilation)
        })
    }
}
module.exports =  ConsolePlugin;