<template>
  <SiteHeader></SiteHeader>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'

export default {
  name: 'App',
  components: {
    SiteHeader
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */

}

body {
  background-image: url('./assets/img/bg.gif');
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}
</style>
