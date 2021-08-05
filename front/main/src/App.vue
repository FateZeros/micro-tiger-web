<template>
  <div>
    <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {}
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
