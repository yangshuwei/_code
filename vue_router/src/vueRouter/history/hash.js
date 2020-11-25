import { History } from "./base";
function ensureSlash(){
  if(window.location.hash){
    return;
  }
  window.location.hash = '/'; // 默认就是 / 路径即可 #/
}
function getHash(){
  return window.location.hash.slice(1); //截取 # 后面的路径
}
class HashHistory extends History{
  constructor(router){
    super(router)
    // 确保hash模式下 有一个/路径
    ensureSlash();
  }
  getCurrentLocation(){
    return getHash();
  }
  setupListener(){
    window.addEventListener('hashchange',()=>{
      //监听页面hash是否有变化   如果变化了就跳转路径
      //调用父亲上的 transitionTo
      this.transitionTo(getHash())
    })
  }
}
export default HashHistory;