<template>
  <div class="hookDemo">
    <div>ref1:{{ ref1 }},ref2:{{ ref2 }}</div>
    <van-button @click="hookExample">执行hook方法</van-button>
  </div>
</template>

<script setup lang="ts">
import testHooks from '@/hooks/useTest'
let { ref1, ref2, hooksFunc } = testHooks()
const hookExample = () => {
  hooksFunc()
}
</script>

<style scoped lang="scss"></style>
