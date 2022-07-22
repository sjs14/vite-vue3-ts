<script setup lang="ts">
window.addEventListener('hashchange', function (e) {
  console.log('hashchange', e);
})

</script>

<template>
  <section class="App">
    <router-link to="/">Login</router-link>
    <router-link style="margin-left:20px;" to="/reg">Reg</router-link>
    <hr>
    <router-view></router-view>
  </section>
</template>

<style lang="less" scoped>
.App {}
</style>
