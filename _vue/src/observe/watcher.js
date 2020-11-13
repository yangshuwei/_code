import {
  nextTick
} from "../util";
import {
  popTarget,
  pushTarget
} from "./dep";

let id = 0
class Watcher {
  constructor(vm, exprOrFn, cb, options) {
    this.vm = vm;
    this.exprOrFn = exprOrFn;
    this.cb = cb;
    this.options = options;
    // this.isWatcher = !options.user
    this.user = options.user;
    this.lazy = options.lazy;
    this.dirty = options.lazy;
    this.id = id++
      this.deps = [];
    this.depsId = new Set()

    // console.log(typeof exprOrFn, exprOrFn)
    if (typeof exprOrFn == 'function') {
      this.getter = exprOrFn
    } else {
      this.getter = function() {
        let path = exprOrFn.split('.') //exprOrFn传递过来的可能是个字符串 a 或者 a.a.a
        //当去当前实例上取值时才会触发依赖更细
        let obj = vm;
        for (let i = 0; i < path.length; i++) {
          obj = obj[path[i]]
        }
        return obj
      }
    }
        // 默认会先调用一次get方法 ，进行取值 将结果保留下来
        this.value = this.lazy ? void 0 : this.get(); // 默认会调用get方法 
    }
    addDep(dep) {
        let id = dep.id;
        if (!this.depsId.has(id)) {
            this.deps.push(dep);
            this.depsId.add(id);
            dep.addSub(this)
        }
    }
    get() {
        // Dep.target = watcher
        pushTarget(this); // 当前watcher实例
        let result = this.getter.call(this.vm); // 调用exprOrFn  渲染页面 取值（执行了get方法）  render方法 with(vm){_v(msg)}
        popTarget(); //渲染完成后 将watcher删掉了
        return result
    }
    run() {
        let newValue = this.get(); // 渲染逻辑
        let oldValue = this.value;
        this.value = newValue; // 更新一下老值
        if (this.user) {
            this.cb.call(this.vm, newValue, oldValue);
        }
    }
    update() {
        if (this.lazy) { // 是计算属性
            this.dirty = true;// 页面重新渲染就可以获得最新的值了
        }else{
            // 这里不要每次都调用get方法 get方法会重新渲染页面
            queueWatcher(this); // 暂存的概念
            //this.get(); // 重新渲染
        }
    }
    evaluate() {
        this.value = this.get();
        this.dirty = false; // 取过一次值之后 就表示成已经取过值了
    }
    depend(){
        // 计算属性watcher 会存储 dep  dep会存储watcher
        
        // 通过watcher找到对应的所有dep，让所有的dep 都记住这个渲染watcher
        let i = this.deps.length;
        while(i--){
            this.deps[i].depend(); // 让dep去存储渲染watcher
        }
    }
}
let queue = []; // 将需要批量更新的watcher 存到一个队列中，稍后让watcher执行
let has = {};
let pending = false;

function flushSchedulerQueue() {
  queue.forEach(watcher => {
    watcher.run();
    if (!watcher.user) {
      watcher.cb() //是渲染watcher
    }
  })
  queue = []
  has = {}
  pending = false
}

function queueWatcher(watcher) {
  // console.log(watcher)
  const id = watcher.id; //对watcher去重
  // console.log(id)
  if (has[id] == null) {
    queue.push(watcher)
    has[id] = true;
    // Promise.resolve().then(()=>{

    if (!pending) { //多次更新，只需要开启一个定时器即可，否则会开启多个 防抖处理
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