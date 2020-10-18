const Koa = require('./_koa');
const bodyParser = require('./koa-bodyparser');
const app = new Koa();
app.use(bodyParser())
// app.use(async (ctx,next)=>{
//   // console.log(ctx.req.url)
//   // console.log(ctx.request.path); //undefined
//   // console.log(ctx.path)
//   // console.log(ctx.request.req.url)
//   // console.log(ctx.url)
//   // ctx.res.end('hello')
//   // ctx.response.res.end('hello2')
//   console.log(1)
//   await next();
//   // await next();
//   console.log(2)
//    // 原生的req对象
//   // console.log(ctx.request.req.url);
// })

// app.use(async(ctx,next)=>{
//   console.log(3)
//   await next()
//   console.log(4)
// })

// app.use(async(ctx)=>{
//   console.log(5)
// })

app.listen(4000)