<template>
  <div>
    <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
import MainHelloWorld from '@/components/hello-comp'

export default {
  name: 'App',

  components: {},

  mounted() {
    /**
     * 基座应用的 组件
     * 1. 直接挂载到基座应用的 window 对象
     * 2. 通过基座的 props 传递子应用， 然后在子应用中
     *
     * export async function mount(props) {
     *   window.mainComponent = props.mainComponent
     *   render(props)
     * }
     */
    window.mainComponent = { MainHelloWorld }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>
