// const co = require('co');
function* read() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  return 3
}

co(read()).then(data => {
  console.log(data)
})

function co(it) {
  
  return new Promise((resolve, reject) => {
    function step(data) {
      let { value, done } = it.next();
      // console.log(it.next(data))
      if(!done){
        Promise.resolve(value).then(data=>{
          step(data)
        },reject)
      }else{
        resolve(value)
      }
    }
    step()
  })
}