let loaderUtils = require('loader-utils');
function loader(source) {
  console.log('source=======', source)
  // 我们可以在style-loader中导出一个 脚本
  let str = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `
  return str;
}
/*
  css-loader 返回的是js字符串里面包含要动态执行的函数。按照正常执行顺序，style-loader只能拿到这些字符串而并不能把
  他们转成真正的css代码，因此在执行css-loader之前，我们需要再pitch内先执行以下代码
 */
// 在style-loader上 写了pitch 

// style-loader     less-loader!css-loader!./index.less
loader.pitch = function (remainingRequest) { // 剩余的请求
  console.log('remainingRequest---------', loaderUtils.stringifyRequest(this, '!!' + remainingRequest))
  // 让style-loader 去处理less-loader!css-loader/./index.less 
  // require路径 返回的就是css-loader处理好的结果 require('!!css-loader!less-loader!index.less')
  let str = `
    let style = document.createElement('style');
    style.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)}); //这里相当于执行css-loader 返回真正的css代码
    document.head.appendChild(style);
  `
  return str;
}
module.exports = loader;