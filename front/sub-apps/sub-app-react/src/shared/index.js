import { getTime } from '@/utils'

class Shared {}

class SharedModule {
  static shared = new Shared()

  /**
   * 重载 shared
   */
  static overloadShared(shared) {
    shared.getTime = getTime
    SharedModule.shared = shared
  }

  /**
   * 获取 shared 实例
   */
  static getShared() {
    return SharedModule.shared
  }
}

export default SharedModule
