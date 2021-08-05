<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../../assets/logo.png"
    >
    <HelloWorld msg="这是一个 Vue 2.0 子应用 + Vue-router hash 路由" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  components: {
    HelloWorld
  }
}
</script>
