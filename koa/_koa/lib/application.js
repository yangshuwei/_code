
const context = require('./context')
const request = require('./request')
const response = require('./response')

const http = require('http');
const { Stream } = require('stream');
class Koa{
  constructor(){
    this.context = context
    this.request = request
    this.response = response
    this.middlewares = []
  }
  use(fn){
    this.middlewares.push(fn)
    // console.log(fn)
    // this.fn = fn; //收集app.use(()=>{})
  }
  createContext(req,res){
    //把 req res 合并成一个ctx
    let ctx = this.context; //proto
    
    let request = this.request;
    let response = this.response;
    ctx.request = request;
    ctx.response = response;

    ctx.request.req = ctx.req = req; //
    ctx.response.res = ctx.res = res;

    return ctx;
  }
  compose(ctx){
    let index = 0;
    const dispatch = (i)=>{
      if(i<index) return Promise.reject(new Error('next() called multiple times'))
      if(i==this.middlewares.length) return Promise.resolve()
      index = i;
      // console.log(`---${index}`)
      let middleware = this.middlewares[i];
      return Promise.resolve(middleware(ctx,()=>{dispatch(i+1)}))
     }
    return dispatch(0)
  }
  handleRequest(req,res){
    let ctx = this.createContext(req, res)
    this.compose(ctx).then(()=>{
      // this.middlewares.forEach(fn=>fn(ctx))
      let body = ctx.body
      if(body instanceof Stream){
        body.pipe(res)
      }else{
        res.end(body)
      }
      
    })
    
  }
  listen(...args){
    console.log(...args)
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}
module.exports = Koa;