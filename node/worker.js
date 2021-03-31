const http = require('http');
process.on('message',(data)=>{
    console.log('worker',data)
})
console.log('worker',process.pid)
http.get('http://www.baidu.com',(res)=>{
    let data = [];
    res.on('data',function(chunk){
        data.push(chunk)
    })
    res.on('end',function(){
        let bf = Buffer.concat(data);
        process.send(bf.toString())
    })
})