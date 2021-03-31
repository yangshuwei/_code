const child= require('child_process');
const cpus = require('os').cpus().length;
for(let i=0;i<cpus.length;i++){
    const worker = child.fork('./worker.js')
    worker.on('message',function(data){
        console.log(data)
    })
    worker.send('master')
}
process.on('error',function(err){
    console.log(err)
})
// console.log('master')