<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTestStore, useAsideStore } from './store/index'
const test = useTestStore()

const aside = useAsideStore()

const { name, age } = storeToRefs(test)
const addHandle = () => {
  age.value++
}
</script>

<template>
  <div class="App">
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ aside.aside }}</p>
    <button @click="addHandle">add</button>
  </div>
</template>

<style lang="less" scoped>
.App {}
</style>
