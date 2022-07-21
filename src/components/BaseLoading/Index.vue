<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue';
console.log(getCurrentInstance());
const visible = ref<boolean>(false)

const show = () => {
    visible.value = true
}

const hide = () => {
    visible.value = false
}

defineExpose({
    show,
    hide
})
</script>

<template>
    <section v-show='visible' class="BaseLoading">
        <p>loading...</p>
    </section>
</template>

<style lang="less" scoped>
.BaseLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;

    >p {
        font-size: 32px;
        color: #fff;
    }

}
</style>
