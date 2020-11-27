import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../vueRouter'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '新增客户' },
  },
  {
    path: '/about',
    name: 'About',
    beforeEnter: (from, to, next) => {
      console.log('beforeEnter')
      next()
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: 'a',
        component: {
          render: (h) => <h1>about a</h1>
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
// router.beforeEach((to, from, next) => {
//   if (to.meta && to.meta.title) {
//     document.title = ((to.meta && to.meta.title))
//   }
//   next()
// })
// router.beforeResolve((from, to, next) => {
//   console.log('beforeResolve')
//   setTimeout(() => {
//     next()
//   });
// })
// router.afterEach((from, to, next) => {
//   console.log('afterEach')
//   setTimeout(() => {
//     next()
//   });
// })

export default router
