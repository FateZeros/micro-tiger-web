import store from './store'
// 基座应用工具函数
import * as mainUtils from '@/utils'

class Shared {
  static store = store
  static mainUtils = mainUtils
}

export default Shared
