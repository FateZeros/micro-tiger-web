<template>
  <div>
    <h3>[Vue 子应用] 路由: <code>/msg</code> - 消息页面</h3>
    <HelloWorld />
    <div>基座应用user.name props: {{111}}</div>
  </div>
</template>

<script>
export default {
  name: 'msg',

  components: {
    HelloWorld: window.__POWERED_BY_QIANKUN__
      ? window.mainComponent.MainHelloWorld
      : import('@/components/hello-world')
  }
}
</script>
