import { popTarget, pushTarget } from "./dep";

let id = 0
class Watcher{
  constructor(vm,exprOrFn,cb,options){
    this.vm = vm;
    this.exprOrFn = exprOrFn;
    this.cb = cb;
    this.options = options;
    this.id = id++
    this.deps = [];
    this.depsId = new Set()
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
  addDep(dep){
    let id = dep.id;
    if(!this.depsId.has(id)){
      this.deps.push(dep)
      this.depsId.add(id)
      dep.addSub(this) //让dep收集这个watcher
    }
  }
  update(){
    console.log('watcher update-------')
    this.get()
  }
}
export default Watcher;