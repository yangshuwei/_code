const {getOptions} = require('loader-utils');
const mime = require('mime');
function loader(source){ //source 是一个buffer webpack 读取文件返回的就是一个buffer 
    const options = getOptions(this);
    let {limit=16*1024,fallBack='file-loader',filename='[hash].[ext]'} = options;
    if(limit){
        limit = parseFloat(limit)
    }
    const mimeType = mime.getType(this.resourcePath) //获取资源的绝对路径，并且返回文件类型  Content-type ： application/json  image/png
    if(limit&&source.length<limit){ //如果小于设置的limit值 则返回一个base64格式的图片
        const base64Str = `data:${mimeType};base64,${source.toString('base64')}`
        return `module.exports = ${JSON.stringify(base64Str)}`
    }else{//否则就走file-loader的逻辑
        let fileLoader = require(fallBack||'file-loader')
        return fileLoader.call(this,source)
    }
}

loader.raw = true; //这设置为true了  source才是buffer，如果不设置  source就是字符串
module.exports = loader;