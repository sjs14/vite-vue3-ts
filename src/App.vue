<script setup lang="ts">
import { useTestStore } from './store/index';
const test = useTestStore()
test.$state = {
  name: 'skp',
  age: 1,
}
</script>

<template>
  <section class="App">
    <p>{{ test.name }}</p>
  </section>
</template>

<style lang="less" scoped>
.App {}
</style>
