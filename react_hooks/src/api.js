const Koa = require('koa');
const router = require('koa-router')
const route = new router();
const cors = require('koa-cors')
const app = new Koa();
app.use(cors())
route.get('/api/users', async (ctx, next) => {
  let start = parseInt(ctx.query.start);
  let pageSize = parseInt(ctx.query.pageSize);
  let users =[];
  for (let i = start;i<start+pageSize;i++){
    users.push({id:`${i+1}`,name:`name-${i+1}`})
  }

  ctx.body = { list: users }
    

  
})

app.use(route.routes())

app.listen(8080,()=>{
  console.log('localhost:8080')
})
