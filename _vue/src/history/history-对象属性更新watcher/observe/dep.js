class Dep{
  constructor(){
    this.subs = [];
  }
  depend(){
    this.subs.push(Dep.target)
    console.log(this.subs)
  }
  notify(){
    console.log('异步更新')
    this.subs.forEach(watcher=>{
      watcher.update()
    })
  }
}

Dep.target = null;
export function pushTarget(watcher){
  Dep.target = watcher;
  console.log(Dep.target)
}
export function popTarget(){
  Dep.target = null;
  console.log(Dep.target)
}


export default Dep;