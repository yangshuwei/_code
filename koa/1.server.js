const Koa = require('./_koa');

const app = new Koa();

app.use((ctx)=>{
  // console.log(ctx.req.url)
  // console.log(ctx.request.path); //undefined
  // console.log(ctx.path)
  // console.log(ctx.request.req.url)
  // console.log(ctx.url)
  // ctx.res.end('hello')
  // ctx.response.res.end('hello2')
  ctx.body = "hello"
   // 原生的req对象
  // console.log(ctx.request.req.url);
})


app.listen(4000)