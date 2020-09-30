const url = require('url');
module.exports = {
  get path() {
    // console.log('11111111111111111')
    // console.log(this)
    let { pathname } = url.parse(this.req.url)
    // console.log('-----'+pathname)
    return pathname;
  }
}