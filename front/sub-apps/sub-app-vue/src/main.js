import './public-path.js'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'
import '@/utils/sensor/index'

const { name } = require('../package.json')

Vue.config.productionTip = false

let instance = null
let vueRouter = null

function render(props = {}) {
  // vue hash和history 路由切换
  // eslint-disable-next-line
  const { container, routerBase } = props
  // router = new VueRouter({
  //   // base: window.__POWERED_BY_QIANKUN__ ? routerBase : '/',
  //   // mode: 'history',
  //   routes
  // })
  vueRouter = router

  instance = new Vue({
    router: vueRouter,
    store,
    render: h =>
      h(App, {
        props
      }),
    data() {
      return {}
    }
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log(`[子应用] %c${name} bootstraped`, 'color: blue;')
  return Promise.resolve()
}

export async function mount(props) {
  console.log(`[子应用] %c${name} mount`, 'color: blue;')
  console.log(props.data, 'vue')
  // props.onGlobalStateChange((state, prev) => {
  //   // state: 变更后的状态; prev 变更前的状态
  //   console.log(state, prev)
  // })

  // console.log(props.data, 2222)
  return render(props)
}

export async function update(props) {
  console.log(`[子应用] %c${name} update`, 'color: blue;')
  console.log(`[子应用] %c${name} update props: `, 'color: blue;', props)
  return Promise.resolve()
}

export async function unmount() {
  console.log(`[子应用] %c${name} unmount`, 'color: blue;')
  instance.$destroy()
  instance = null
  vueRouter = null
  return Promise.resolve()
}
