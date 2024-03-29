import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/about/index.vue')
  },
  {
    path: '/msg',
    name: 'msg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/msg/index.vue')
  }
]

// router = new VueRouter({
//   // base: window.__POWERED_BY_QIANKUN__ ? routerBase : '/',
//   // mode: 'history',
//   routes
// })
/**
 * hash & historty 路由
 */
const router = new VueRouter({
  routes
})

export default router
