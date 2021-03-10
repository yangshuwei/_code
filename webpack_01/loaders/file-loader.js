const {getOptions,interpolateName} = require('loader-utils');

function loader(content){
    const options = getOptions(this);
    //interpolateName获取文件的hash值，并插入值,生成唯一的文件名
    let url = interpolateName(this,'[hash:8].[ext]',{content})
    //发射文件，会在dist目录下面生成一个文件
    this.emitFile(url,content);
    return `module.exports = ${JSON.stringify(url)}`
}
loader.raw = true; //这样写辨识content是一个二进制,告诉webpack不要把源文件转成字符串
module.exports = loader;