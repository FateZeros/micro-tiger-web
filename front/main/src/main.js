import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'

import './utils/sensor'

Vue.config.productionTip = false

// eslint-disable-next-line
const instance = new Vue({
  render: h => h(App)
}).$mount('#app')

// 定义 loader 方法，loading 改变时，将变量赋值给 App.vue 的 data 中的 isLoading
// function loader(loading) {
//   if (instance && instance.$children) {
//     // instance.$children[0] 是 App.vue，此时直接改动 App.vue 的isLoading
//     instance.$children[0].isLoading = loading
//   }
// }

// 给子应用配置加上 loader 方法
const apps = microApps.map(item => {
  return {
    ...item
    // loader
  }
})

registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})

setDefaultMountApp('/sub-app-vue1')
const options = {
  excludeAssetFilter: assetUrl => {
    console.log(assetUrl, 111)
    // const whiteList = ['sensors']
    // return whiteList.some(val => assetUrl.includes(val))
  }
}
start(options)
