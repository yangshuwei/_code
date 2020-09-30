module.exports = {
  _body:undefined,
  get body(){
    return this._body;
  },
  set body(value){
    this._body = value
  }
}
//body 挂在  ctx.response 上  这是 ctx自定义的request