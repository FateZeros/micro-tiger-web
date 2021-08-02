import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start
} from 'qiankun'

// 子应用注册信息
import apps from './apps'

/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 加载前
  beforeLoad: app => {
    console.log('before load app.name ======>>>>', app.name)
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

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler(event => {
  const { message: msg } = event
  // 加载失败时提示
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    console.log(
      '[Global Uncaught Error] application died in status LOADING_SOURCE_CODE',
      'color: green;'
    )
  }
})

const startQiankun = () => {
  const options = {}
  start(options)
}
// 导出 qiankun 的启动函数
export default startQiankun
