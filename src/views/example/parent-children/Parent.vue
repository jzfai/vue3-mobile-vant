<template>
  <div class="scroll-y">
    <div>这是父组件</div>
    <Children ref="refChildren" father-name="Vue3Template" @emit-parent="emitParent" />
    <van-button @click="childMethod">childMethod</van-button>
  </div>
</template>

<script setup lang="ts">
//script-setup vue官方说明
//https://v3.cn.vuejs.org/api/sfc-script-setup.html#使用组件
import Children from './Children.vue'
//获取store和router
let { proxy }: any = getCurrentInstance()

const refChildren: any = ref(null)
onMounted(() => {
  /*获取子元素两种方法*/
  //第一种
  console.log(proxy.$refs['refChildren'].value)
  //第二种
  console.log(refChildren.value)
})
const childMethod = () => {
  console.log(refChildren.value.childMethod())
  console.log(refChildren.value.childRef)
}
const emitParent = (data: any) => {
  console.log('得到子组件的信息111', data)
}
const fartherMethod = () => {
  console.log('fartherMethod')
}
defineExpose({ fartherMethod })
</script>

<style scoped lang="scss"></style>
