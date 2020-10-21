class Dep{
  constructor(){
    this.subs = [];
  }
  depend(){
    this.subs.push(Dep.target)
  }
  notify(){
    this.subs.forEach(watcher=>watcher.update())
  }
}



Dep.target = null;
export function pushTarget(target){
  Dep.target = target;
}
export function popTarget(){
  Dep.target = null;
}


export default Dep;