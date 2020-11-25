export let _Vue;
// Vue.use(Router)  ==>  Vue.use = function(Router){Router.install(Vue)}
export default function install(Vue){
    _Vue = Vue;
    Vue.mixin({
        beforeCreate(){
            //将父亲上传入的router共享给所有的孩子组件
            if(this.$options.router){ //根实例上（new Vue）上是否有router
                this._routerRoot = this; //给当前根组件增加一个属性 routerRoot代表自己
                this._router = this.$options.router;
                this._router.init()
            }else{
                this._routerRoot = this.$parent && this.$parent._routerRoot;
            }

            //这样无论父组件还是子组件都可以通过this._routerRoot._router 获取共同的VueRouter实例，保证了实例的唯一性
        }
    })

    Vue.component('router-link',{
        render:(h)=>h('a',{},'')
    });
    Vue.component('router-view',{
        render:(h)=>h('div',{},'')
    });
    Vue.prototype.$route = {};
    Vue.prototype.$router = {};
}