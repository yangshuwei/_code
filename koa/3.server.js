const Koa = require('koa');
const router= require('./koa-route')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const http = require('http')
const axios = require('axios');
const static = require('./koa-static');
const route = new router();

route.get('/a',async (ctx,next)=>{
    console.log(ctx.path)
    ctx.body="123"
})

route.post('/login',async (ctx,next)=>{
    // axios.post("http://enterprise-services-test.shanghai.cosmoplat.com/common/captcha.json").then(()=>{
    //     ctx.body="123e"
    // })
ctx.body = "welcom"
   
})
app.use(bodyParser())
app.use(route.routes())
app.use(static(__dirname));
app.listen(4000)