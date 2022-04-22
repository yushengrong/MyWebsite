<template>
  <HelloWorld></HelloWorld>
  <Home></Home>
</template>

<script>
import HelloWorld from '@/components/WebsiteTop.vue'
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home
  }
}
</script>

<style scoped>
</style>
