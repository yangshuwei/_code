const http = require('http');
var url = require('url');
var querystring = require('querystring');
http.createServer(function(req,res){
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  var arg = url.parse(req.url).query;

  //将arg参数字符串反序列化为一个对象
  var params = querystring.parse(arg);
  var callback = params.callback;
  var data = {
    name:'ok'
  }
  var result = callback+"(" + JSON.stringify(data) + ")";
  console.log(result)
  res.end(result)
}).listen(3000)