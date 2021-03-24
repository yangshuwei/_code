const http = require('http')
const domain = require('domain')
const cluster = require('cluster');
const os = require('os')
const d = domain.create();
if(cluster.isMaster){
  const cpuNum = os.cpus().length;
  for(let i=0;i<cpuNum;i++){
    cluster.fork()
  };
  cluster.on('fork',worker=>{
    console.info(`worker${worker.process.pid}进程启动成功`)
  })
  cluster.on('exit',(worker,code,signal)=>{
    console.info(`worker${worker.process.pid}进程启动异常退出`);
    cluster.fork()
  })
}else{
  const server = http.createServer(function (req, res) {
    d.add(res);
    d.on('error',(err)=>{
      console.log(`记录err信息`,err.message);
      console.log(`出错的work id`,process.pid);
      res.end(`500`);
      cluster.worker.kill(process.pid)
    });
    d.run(handle.bind(null,req,res));
  }).listen(8080)
}
function handle(req,res){
  if(process.pid%2===0){
    throw new Error('出错了')
  }
  res.end(`response by worker:${process.pid}`)
}