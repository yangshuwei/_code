/**
  原型模式：
    优点：解决了构造器模式方法不能复用的缺点，
    缺点：当任意一个实例修改或者重写了prototype上的属性或者方法，都会对其他实例产生相同影响
 */
function Person(name,age){
  this.name = name;
  this.age = age;
}
Person.prototype.say = function(){
  console.log('hi')
}
Person.prototype.put = ['hello']
let p1 = new Person('zs',18)
let p2 = new Person('ls',20)
p1.put.push('word')
console.log(p2.put) //['hello','word']