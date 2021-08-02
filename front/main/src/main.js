import Vue from 'vue'
import App from './App.vue'
import router from './router'

// qiankun 微前端
import startQiankun from './micro'
// import { setDefaultMountApp } from 'qiankun'

// permission
import './permission'

// 主引用使用神策
import './utils/sensor'

Vue.config.productionTip = false

// eslint-disable-next-line
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 设置微服务默认路由
// setDefaultMountApp('/sub-app-vue1')
startQiankun()
