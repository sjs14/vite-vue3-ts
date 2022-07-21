<script setup lang="ts">
import { nextTick, ref } from 'vue';
const number = ref<number>(1)
setTimeout(() => {
    number.value = 2
    nextTick(() => {
        console.log(document.querySelector('.HelloWorld')?.innerHTML);
    })
}, 1000);
</script>

<template>
    <section class="HelloWorld">
        {{ number }}
    </section>
</template>

<style lang="less" scoped>
.HelloWorld {}
</style>
