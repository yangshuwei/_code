
import Koa from 'koa';
import KoaRouter from 'koa-router';
import koaStatic from 'koa-static';
import render from './render';
import proxy from 'koa-server-http-proxy';
const app = new Koa();
let router = new KoaRouter()

app.use(proxy("/api",{
  target:"http://localhost:8081",
  pathRewrite:{'^/api':'/api'},
  changeOrigin:true
}));

app.use(koaStatic(process.cwd() + '/public'))
app.use(async (ctx,next)=>{
  console.log('=======',ctx.path)
  if(ctx.path!='/favicon.ico'){
    await render(ctx,next)
  }
  
})

// app.use(router.routes())
// app.use(router.allowedMethods());
// console.log(process.cwd())

app.listen(8080, function () {
  console.log('start')
})