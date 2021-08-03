import Vue from 'vue'
import App from './App.vue'

// qiankun 微前端
import startQiankun from './micro'
import { setDefaultMountApp } from 'qiankun'

// permission
import './permission'

// 主引用使用神策
import './utils/sensor'

Vue.config.productionTip = false

// eslint-disable-next-line
new Vue({
  render: h => h(App)
}).$mount('#app')

// 设置子应用中的一个为主应用
setDefaultMountApp('/sub-app-react1')
startQiankun()
