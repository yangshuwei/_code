const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
// app.use(cors({
//     origin:''
// }))
app.use(async (ctx)=>{
    if(ctx.path=='/api/users'){
        const data = [{name:'zs',age:1},{name:'ls',age:20}]
        // ctx.set('Access-Control-Allow-Origin','*')
        ctx.body = data
    }
})
app.listen(8081)