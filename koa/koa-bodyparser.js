const bodyParser = function(){
    return async (ctx,next)=>{
        ctx.request.body = await body(ctx);
        await next();
    }
    
}
module.exports = bodyParser;

function body(ctx){
    return new Promise((resolve,reject)=>{
        let arr = [];
        ctx.req.on('data',function(chunk){
            arr.push(chunk)
        })
        ctx.req.on('end',function(){
            console.log(ctx.get('content-type'))
            resolve(Buffer.concat(arr).toString())
        })
    })
    
}