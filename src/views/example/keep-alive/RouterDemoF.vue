<template>
  <div class="scroll-y">
    <van-field
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-button type="primary" size="small" @click="routerDemoS">to routerDemoS.vue</van-button>
    <div>
      <van-button type="primary" size="small" @click="useRouter.routerBackMixin">返回</van-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import useRouter from '@/hooks/useRouter'
import useCommon from '@/hooks/useCommon'
console.log(useCommon.state.todayTimeMixin)
const routerDemoS = () => {
  useRouter.routerPushMixin('routerDemoS', { name: 'routerDemoS' })
}
</script>

<style scoped lang="scss"></style>
