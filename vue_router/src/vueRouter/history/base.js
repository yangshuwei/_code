export function createRoute(record, location) {
  console.log('record-------',record)
  //[/about,/about/a] 
  let res = [];
  if (record) {
    while (record) {
      res.unshift(record)//父组件向数组前面插入
      record = record.parent
    }
  }
  return {
    ...location,
    matched: res
  }
}

// iterator  ==>  (hook, next) => {
//   hook(this.current, route, () => { //hook => 用户传递的方法 也就是  beforeEach中的(from,to,next)=>{}
//     next();
//   })
// }

function runQueue(queue,iterator,cb){
  // console.log(iterator)
   // 异步迭代
  function step(index){
    if (index >= queue.length) return cb();
    let hook = queue[index];//先执行第一个 将第二个hook执行的逻辑当做参数传入
    iterator(hook, () => step(index + 1)) 
  }
  step(0)
}
class History {
  constructor(router) {
    this.router = router;
    //刚初始化时，给一个默认路径 / ，这时候还没有进行真正的跳转 ，所以路径匹配到的组件为[]
    //当访问 /about/a 时，真正匹配到的组件（router-view）有两个，一个是渲染about的组件，一个是 渲染about/a的组件  
    //最终会匹配到两个记录[recordAbout,recoudA]
    this.current = createRoute(null, {
      path: '/'
    })

  }
  transitionTo(location, onComplete) {
    //这里拿到路径后就可以 根据路径  去渲染对应的模板了 this.router.matcher.match(location)
    let route = this.router.match(location);
    console.log(route)
    if (location == this.current.path && route.matched.length == this.current.matched.length) {
      return; //防止重复跳转，访问路径没有匹配到对应的组件 conponent 就终止跳转
    }

    // befroeEach  要在路由跳转后更新current之前一次执行
    let queue = [].concat(this.router.beforeHooks)
    const iterator = (hook,next)=>{
      
      hook(this.current,route,()=>{ //hook => 用户传递的方法 也就是  beforeEach中的(from,to,next)=>{}
        next();
      })
    }
    runQueue(queue,iterator,()=>{

      console.log(111)
      this.updateRoute(route);

      onComplete && onComplete()
    })
    
  }
  updateRoute(route) {
    this.current = route; //每次路由切换都要更新current的值，是为了更新视图
    this.cb && this.cb(route); // 发布
    // 视图重新渲染有几个要求? 1.模板中要用  2.current得是响应式的
  }
  listen(cb) {
    this.cb = cb;
  }
}

export {
  History
}