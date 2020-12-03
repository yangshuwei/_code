function EventEmitter() {
  this.events = {}
}


EventEmitter.prototype.on = function (eventName, callback) {
  console.log(eventName)
  if (!this.events) {
    this.events = Object.create(null);
  }
  if (this.events[eventName]) {
    this.events[eventName].push(callback)
  } else {
    this.events[eventName] = [callback]
  }
}


EventEmitter.prototype.emit = function (eventName, ...args) {
  if (this.events[eventName]) {
    this.events[eventName].forEach(fn => fn(...args))
  }
}


module.exports = EventEmitter;