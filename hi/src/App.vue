<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    //获取购物车信息
    this.$store.dispatch('initPhones')
  }
}
</script>

<style>

</style>
