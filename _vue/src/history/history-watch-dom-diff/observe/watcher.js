import { nextTick } from "../util";
import { popTarget, pushTarget } from "./dep";

let id = 0
class Watcher{
  constructor(vm,exprOrFn,cb,options){
    this.vm = vm;
    this.exprOrFn = exprOrFn;
    this.cb = cb;
    this.options = options;
    // this.isWatcher = !options.user
    this.user = options.user;
    this.id = id++
    this.deps = [];
    this.depsId = new Set()
    
    // console.log(typeof exprOrFn, exprOrFn)
    if(typeof exprOrFn == 'function'){
      this.getter = exprOrFn
    }else{
      this.getter = function(){
        let path = exprOrFn.split('.') //exprOrFn传递过来的可能是个字符串 a 或者 a.a.a
        //当去当前实例上取值时才会触发依赖更细
        let obj = vm;
        for(let i=0;i<path.length;i++){
          obj = obj[path[i]]
        }
        return obj
      }
    }
    this.value = this.get();
  }
  get(){
    pushTarget(this) //Dep.target = watcher
    let result = this.getter(); //调用exprOrFn =》vm._update(vm._render()) 方法  这时候要先取值，（走到属性拦截get方法里）在里面创建dep 收集属性watcher
    popTarget()
    return result;
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
    let newValue = this.get()  //用户修改属性值时产生的新值  vm.a.a.a=100
    let oldValue = this.value; //用户初始化或者上一次修改的属性的值
    this.value = newValue; //跟新老值
    if(this.user){ //如果是用户watcher的话  让回调函数执行
      this.cb.call(this.vm,newValue,oldValue)
    }
    // this.get()
  }
}




let queue = [];
let has = {}
let pending = false; //


function flushSchedulerQueue(){
  queue.forEach(watcher => {
    watcher.run();
    if(!watcher.user){
      watcher.cb() //是渲染watcher
    }
  })
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