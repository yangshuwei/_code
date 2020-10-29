let id = 0
class Dep {
  constructor() {
    this.subs = [];
    this.id = id++;
  }
  depend() {
    Dep.target.addDep(this) //Dep.target=》watcher 双向记忆，让watcher记住dep的同时也让dep记住watcher
    // this.subs.push(Dep.target)
  }
  addSub(watcher) {
    this.subs.push(watcher)
  }
  notify() {
    this.subs.forEach(watcher => {
      watcher.update()
    })
  }
}

Dep.target = null;
let stack = [];
export function pushTarget(watcher) {
  Dep.target = watcher;
  stack.push(watcher) //有渲染watcher 还有其他watcher 
}
export function popTarget() {
  stack.pop()
  Dep.target = stack[stack.length - 1];
}


export default Dep;