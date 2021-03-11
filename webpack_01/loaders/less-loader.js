const less = require('less')
function loader(source){
  let callBack = this.async();
  less.render(source, { filename: this.resource },function(err,output){
    callBack(err, output.css)
  })
}
module.exports = loader;