let proto = {

}
module.exports = proto;
//ctx == proto


//ctx.url => ctx.request.url
function defineGetter(target,key){
  Object.defineProperty(proto, key, {
    get() {
      return this[target][key];
    },
    set(value) {
      this[target][key] = value;
    },
  })
}

// function defineGetter(target, key) {
//   proto.__defineGetter__(key, function () { // defineProperty
//     return this[target][key]
//   })
// }
// function defineSetter(target, key) {
//   proto.__defineSetter__(key, function (value) {
//     this[target][key] = value; //ctx.body = 'xxx' ctx.respinse.body = 'xxx'
//   })
// }
defineGetter('request','path')
defineGetter('response','body')
// defineSetter('response','body')
