const Koa = require('koa');
const bodyParser = require('./koa-bodyparser');
const app = new Koa();
const path = require('path');
const static = require('./koa-static');
app.use(bodyParser())

app.use(async (ctx,next)=>{
    if(ctx.path == '/login' && ctx.method == 'POST'){
        ctx.set('Content-Type', 'text/html');
        ctx.body = ctx.request.body
    }else{
        await next()
    }
    
})


// app.use(static(path.resolve(__dirname,'koa')))
app.use(static(__dirname));


app.listen(3000)