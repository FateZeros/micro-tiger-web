import './public-path.js'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'
import '@/utils/sensor/index'

Vue.config.productionTip = false

let instance = null
let vueRouter = null

function render(props = {}) {
  // vue hash和history 路由切换
  // eslint-disable-next-line
  const { routerBase } = props
  // router = new VueRouter({
  //   // base: window.__POWERED_BY_QIANKUN__ ? routerBase : '/',
  //   // mode: 'history',
  //   routes
  // })
  vueRouter = router

  instance = new Vue({
    router: vueRouter,
    store,
    render: h => h(App),
    data() {
      return {
        name: 'sub-app-vue1'
      }
    }
  }).$mount('#app')
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('vue app bootstraped')
}

export async function mount(props) {
  console.log('vue app mount', props)
  render(props)
}
export async function unmount() {
  console.log('vue app unmount')
  instance.$destroy()
  instance = null
  vueRouter = null
}
