class Stack{
  
  constructor(){
    this.items = [];
  }
  
  push(ele){
    this.items.push(ele)
  }
  pop(){
    return this.items.pop()
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack.pop());

console.log(stack.pop());

function one(){
  function two(){
    function three(){
      console.log('three')
    }
    three()
  }
  two()
}
one()
/**
 * 调用栈顺序以及出栈顺序
 * 调用入栈顺序 one--two--three
 * 调用结束出栈顺序 three-two-one
 */

//作用域连是在函数创建的时候确定的，上下文是在函数执行的时候确定的
 var obj = {
   val:2,
   dbl:function(){
     var val = 1;
     console.log(this)
     this.val*=2;
     console.log(val)
     console.log(this.val)
   }
 }
//  var ff = obj.dbl()  
 var fn = obj.dbl;
 fn()

 // obj undefined  4
 // window


 var a = 1;
 function fn(m){console.log('fn')}
 function fn(m){console.log('new_fn');}
 function a(){console.log('fn_a');}
 console.log(a)
 fn(1)
 var fn = 'var_fn'
 console.log(fn);

 Function.prototype.call2 =function(ctx){
    //ctx=>obj,this=>getName
    let fn = this;
    ctx.fn = this;
    ctx.fn()
    delete ctx.fn
 }
function getName() {
  console.log(this.name);
}
let obj = {
  name: 'zhangsan'
}
getName.call2(obj)