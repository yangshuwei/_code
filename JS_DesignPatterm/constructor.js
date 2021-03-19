function Car(model, year, miles) {

  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}
// 使用:
// 我们可以实例化一个Car
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

// 打开浏览器控制台查看这些对象toString()方法的输出值
console.log(civic.toString());
console.log(mondeo.toString());


function shallowCopy(data){
  
}