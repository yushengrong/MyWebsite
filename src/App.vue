<template>
  <website-top></website-top>
  <router-view></router-view>
</template>

<script>
import WebsiteTop from '@/components/WebsiteTop.vue'
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    WebsiteTop,
    Home
  }
}
</script>

<style scoped>
</style>
