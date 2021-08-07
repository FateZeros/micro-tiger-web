<template>
  <div>
    <h3>[Vue 子应用] 路由: <code>/msg</code> - 消息页面</h3>
    <HelloWorld />
    <div class="row2">基座应用user.name: <span>{{globalState.user.name}}</span></div>
    <div>React 子应用中 Func: {{time}}</div>
  </div>
</template>

<script>
import SharedModule from '@/shared'

export default {
  name: 'msg',

  components: {
    HelloWorld: window.__POWERED_BY_QIANKUN__
      ? window.mainComponent.MainHelloWorld
      : import('@/components/hello-world')
  },

  data() {
    return {
      globalState: {
        user: {}
      },
      time: ''
    }
  },

  mounted() {
    const shared = SharedModule.getShared()
    const globalStore = shared.store
    this.time = shared.getTime()
    this.globalState = globalStore.getGlobalState()
  }
}
</script>

<style scoped>
.row2 span {
  color: red;
}
</style>
