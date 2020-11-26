import Vue from 'vue'
import VueRouter from '../vueRouter'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {
        path:'a',
        component:{
          render:(h)=><h1>about a</h1>
        }
      }, {
        path: 'b',
        component: {
          render: (h) => <h1>about b</h1>
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((from,to,next)=>{
//   console.log(1)
//   setTimeout(() => {
//     next()
//   }, 1000);
// })
// router.beforeEach((from, to, next) => {
//   console.log(2)
//   setTimeout(() => {
//     next()
//   }, 1000);
// })
export default router
