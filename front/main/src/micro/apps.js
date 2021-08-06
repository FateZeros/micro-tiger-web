// import store from './store'
import Shared from '@/shared'

// function genActiveRule(routerPrefix) {
//   return location => location.pathname.startsWith(routerPrefix)
// }

/**
 * name: 微应用名称 - 具有唯一性
 * entry: 微应用入口 - 通过该地址加载微应用
 * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
 * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
 */
const microApps = [
  {
    name: 'sub-app-vue',
    entry: `${process.env.VUE_APP_SUB_APP1}`,
    activeRule: '/sub-app-vue1'
  },
  {
    name: 'sub-app2',
    entry: `${process.env.VUE_APP_SUB_APP2}`,
    activeRule: '/sub-app-react1'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    // 子应用挂载的div
    container: '#subapp-viewport',
    props: {
      // 下发基础路由
      routerBase: item.activeRule,
      // 下发getGlobalState方法
      // getGlobalState: store.getGlobalState,
      shared: Shared
    }
  }
})

export default apps
