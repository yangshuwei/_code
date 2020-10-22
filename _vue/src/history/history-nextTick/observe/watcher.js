import { nextTick } from "../util";
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
    //不能每次都调用get方法，get会重新渲染页面  对同一属性进行多次相同操作（赋值，修改，取值） 会生成多个id相同的watcher，也就是会多次更新相同的watcher
    queueWatcher(this) //把watcher暂存起来 
    // this.get()
  }
  run(){
    this.get()
  }
}




let queue = [];
let has = {}
let pending = false; //


function flushSchedulerQueue(){
  queue.forEach(watcher => watcher.run())
  queue = []
  has = {}
  pending = false
}
function queueWatcher(watcher){
  // console.log(watcher)
  const id = watcher.id; //对watcher去重
  // console.log(id)
  if(has[id]==null){
    queue.push(watcher)
    has[id] = true;
    // Promise.resolve().then(()=>{
      
     if(!pending){ //多次更新，只需要开启一个定时器即可，否则会开启多个 防抖处理
      //  setTimeout(() => {
       nextTick(flushSchedulerQueue)
         
      //    queue.forEach(watcher => watcher.run())
      //    queue = [] 
      //    has = {}
      //    pending = false
      //  }, 0);
       
       pending = true;
     }
    // })
    //异步更新，等待所有同步代码执行完毕后在执行
    
  }
  
}
export default Watcher;