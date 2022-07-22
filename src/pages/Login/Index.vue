<script setup lang="ts">
import router from '../../router';

const linkTo = (path: string) => {
    router.push({
        path
    })
}
</script>

<template>
    <section class="Login">
        <button @click="linkTo('/login1')">login1</button>
        <button @click="linkTo('/login2')">login2</button>
        <hr>
        <router-view></router-view>
    </section>
</template>

<style lang="less" scoped>
.Login {}
</style>
