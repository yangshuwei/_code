/**
  构造器模式：
  缺点：构造器函数中的方法在每个实例上都要重新创建，没有解决公共方法的复用性，导致不同实例上的同名函数是不相等的
  封装的意义就在于复用，解耦
        
 */
function Car(model, year, miles) {

  this.model = model;
  this.year = year;
  this.miles = miles;

  this.inputInfo = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}
class Child extends Car{
  constructor(model, year, miles){
    super()
    this.model = model;
    this.year = year;
    this.miles = miles;
  }
}

var child = new Child("Honda Civic", 2009, 20000);
console.log(child.inputInfo())
// 使用:
// 我们可以实例化一个Car
// var civic = new Car("Honda Civic", 2009, 20000);
// var mondeo = new Car("Ford Mondeo", 2010, 5000);

// 打开浏览器控制台查看这些对象toString()方法的输出值
// console.log(civic.inputInfo() == mondeo.inputInfo());

