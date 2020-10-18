const http = require('http');
class Layer{
    constructor(path,fn){
        this.path = path;
        this.fn = fn;
    }
    match(path) {
        // 地址的路由和当前配置路由相等返回 true，否则返回 false
        return path === this.path;
    }
}
class koaRoute{
    constructor(){
        
        this.middlewares = [];
    }
    get(path,fn){
        this.middlewares.push(new Layer(path,fn))
        
    }
    post(path,fn){
        console.log(fn)
        this.middlewares.push(new Layer(path,fn))
        console.log(this.middlewares)
    }
    
    compose(ctx,next,handlers){
        const dispatch = (index) =>{
            console.log('`````'+index)
            if(index == this.middlewares.length) return next()
            let middleware = this.middlewares[index].fn;
            return handlers[index].fn && handlers[index].fn(ctx,()=>{
                dispatch[index+1]
            })
        }
        return dispatch(0)
    }
    routes(){
        return async (ctx,next) =>{
            let handlers = this.middlewares.filter(layer => layer.match(ctx.path));
            this.compose(ctx,next,handlers)
        }
    }
}
module.exports = koaRoute;