<script setup lang="ts">

</script>

<template>
  <section class="a">

    <div class="b"></div>

  </section>
</template>

<style lang="less" scoped>
.a {
  :deep(.b) {
    /* ... */
    color: red;
  }
}
</style>
