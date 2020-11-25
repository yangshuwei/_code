class History{
  constructor(router){
    this.router = router;
  }
  transitionTo(location,onComplete){
    console.log(this.router)
    //这里拿到路径后就可以 根据路径  去渲染对应的模板了 this.router.matcher.match(location)
    this.router.matcher.match(location);
    onComplete && onComplete()
  }
}

export {
  History
}