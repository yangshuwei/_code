
const context = require('./context')
const request = require('./request')
const response = require('./response')

const http = require('http');
class Koa{
  constructor(){
    this.context = context
    this.request = request
    this.response = response
    this.middlewares = []
  }
  use(fn){
    this.middlewares.push(fn)
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
    console.log(ctx)

    return ctx;
  }
  handleRequest(req,res){
    let ctx = this.createContext(req, res)
    this.middlewares.forEach(fn=>fn(ctx))
    let body = ctx.body
    console.log(ctx.body)
    res.end(body)
  }
  listen(...args){
    console.log(...args)
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}
module.exports = Koa;