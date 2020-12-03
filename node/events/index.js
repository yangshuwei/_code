const EventEmitter = require('./events')

function Parent(){

}


//继承的方式
// Object.create()  
//xx.prototype.__proto__ = xx.prototype
//Object.setPrototypeof
//Parent.prototype =  Object.create(EventEmitter.prototype)
//Object.setPrototypeOf(Girl.prototype ,EventEmitter.prototype)

Parent.prototype.__proto__ = EventEmitter.prototype;


let child = new Parent()
const cry = () => {
  console.log('我就哭')
}
child.on('饿了', cry)

const scream = () => {
  console.log('我就叫唤')
}
child.on('饿了', scream)
// child.off('饿了', scream)
child.emit('饿了')