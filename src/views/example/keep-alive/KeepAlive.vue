<template>
  <div class="scroll-y">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
    </van-form>

    <van-button type="primary" size="small" @click="routerDemoF">to routerDemoF.vue</van-button>
  </div>
</template>

<!--
使用keep-alive
1.设置name（必须）
2.在路由配置处设置cachePage：即可缓存
-->
<script lang="ts">
export default {
  name: 'KeepAlive'
}
</script>

<script setup lang="ts">
import { onActivated, onDeactivated, ref } from 'vue'
import useRouter from '@/hooks/useRouter'
onActivated(() => {
  console.log('onActivated')
})
onDeactivated(() => {
  console.log('onDeactivated')
})
const routerDemoF = () => {
  useRouter.routerPushMixin('routerDemoF', { name: 'routerDemoF' })
}

const username = ref('')
const password = ref('')
const onSubmit = (values: any) => {
  console.log('submit', values)
}
</script>

<style scoped lang="scss"></style>
