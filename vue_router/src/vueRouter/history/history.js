import { History } from "./base";

function getHistory(){
  return window.location.pathname
}
class BowserHistory extends History{
  constructor(router){
    super(router)
    this.router = router;
    console.log(getHistory())
  }
  getCurrentLocation(){
    return getHistory()
  }
  setupListener(){
    window.addEventListener('popstate',()=>{
      this.transitionTo(getHistory())
    })
  }
  push(location){
    this.transitionTo(location,()=>{
      history.pushState('',null,location)
    })
  }
}
export default BowserHistory;