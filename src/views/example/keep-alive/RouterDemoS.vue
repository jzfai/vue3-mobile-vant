<template>
  <div class="scroll-y">
    <van-field
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-button type="primary" size="small" @click="useRouter.routerBackMixin">返回</van-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useRouter from '@/hooks/useRouter'

console.log(useRouter.getQueryParam())
</script>

<style scoped lang="scss"></style>
