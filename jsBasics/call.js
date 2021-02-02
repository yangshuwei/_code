Function.prototype.call2 = function(obj,...args){
  const ctx = obj; //fn2
  let fn = Symbol();
  ctx[fn] = this;  //fn2[fn] = call
  const result = ctx[fn](...args) //fn2.call()
  delete ctx[fn]
  return result;
}
function fn1(){
  console.log(1)
}
function fn2() {
  console.log(2)
}
fn1.call.call(fn2)