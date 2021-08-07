import store from './store'
// 基座应用工具函数
import * as mainUtils from '@/utils'

class Shared {
  // static store = store
  // static mainUtils = mainUtils
  constructor() {
    this.store = store
    this.mainUtils = mainUtils
  }

  commonFunc() {
    console.log('这是一个基座 common 方法')
  }
}

const shared = new Shared()
// console.log(shared.mainUtils, '测试')
export default shared
