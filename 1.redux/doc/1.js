function logger1(aa){
  return function(next){
    return function(action){
      console.log('prev', action)
      next(action)
      console.log('next',action)
    }
  }
}
function a(){
  console.log('aaaaaa')
}
let l1 = logger1()(a)('action')
// let l2 = l1(a)
console.log(l1)