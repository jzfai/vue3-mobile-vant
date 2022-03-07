<template>
  <div class="scroll-y">
    <van-field
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-button type="primary" size="small" @click="$useVueRouter.routerBack">返回</van-button>
  </div>
</template>

<script setup>
const $useVueRouter = useVueRouter()
console.log($useVueRouter.getQueryParam())
</script>

<style scoped lang="scss"></style>
