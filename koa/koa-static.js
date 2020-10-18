const fs = require('fs').promises;
const path = require('path');
const {createReadStream} = require('fs');
const mime = require('mime');
module.exports = function koaStatic(dirname){
    return async (ctx,next)=>{
        console.log(dirname)
        const filePath = path.join(dirname,ctx.path)
        let statObj = await fs.stat(filePath);
        if(statObj.isFile()){
            ctx.set('Content-type',mime.getType(filePath)+';charset=utf-8')
            ctx.body = createReadStream(filePath)
        }else{
            await next();
        }
        
        // console.log(ctx)
        // ctx.body = createReadStrema()
    }
}