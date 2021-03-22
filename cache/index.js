const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const mime = require('mime');

const server = http.createServer(function(req,res){
    // res.setHeader('Cache-Control','max-age=60');
    // res.setHeader('Expires',new Date().toUTCString())
    let {pathname} = url.parse(req.url);
    console.log(pathname);
    //loc   3000/public/index.html
    const filepath = path.join(__dirname,pathname)
    fs.stat(filepath,function(err,states){
        if(err) return res.end('404')
        if(states.isFile()){
            let ctime = states.ctime.toUTCString();
            // if(req.headers['if-modified-since'] == ctime){
            //     res.statusCode = 304;
            //     res.end()
            // }else{
                // res.setHeader('Last-Modified',ctime) //响应里面设置文件最后修改时间
                fs.createReadStream(filepath).pipe(res)
            // }
            
        }
    })
})

server.listen(3000,function(){
    console.log('server start port 3000')
})