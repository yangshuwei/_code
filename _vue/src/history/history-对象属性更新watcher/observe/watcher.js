import { popTarget, pushTarget } from "./dep";

let id = 0
class Watcher{
  constructor(vm,exprOrFn,cb,options){
    this.vm = vm;
    this.exprOrFn = exprOrFn;
    this.cb = cb;
    this.options = options;
    this.id = id++
    if(typeof exprOrFn == 'function'){
      console.log('getter-------')
      this.getter = exprOrFn
    }
    this.get();
  }
  get(){
    pushTarget(this) //Dep.target = watcher
    this.getter(); //调用exprOrFn =》vm._update(vm._render()) 方法  这时候要先取值，（走到属性拦截get方法里）在里面创建dep 收集属性watcher
    popTarget()
  }
  update(){
    console.log('watcher update-------')
    this.get()
  }
}
export default Watcher;