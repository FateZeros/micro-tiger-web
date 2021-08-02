import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
