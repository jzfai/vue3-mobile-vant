<template>
  <div class="mbPx-4 mt-4">基础用法</div>
  <van-count-down :time="time" />

  <div class="mbPx-4 mt-4">自定义格式</div>
  <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />

  <div class="mbPx-4 mt-4">毫秒级渲染</div>
  <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />

  <div class="mbPx-4 mt-4">自定义样式</div>
  <van-count-down :time="time">
    <template #default="timeData">
      <span class="block">{{ timeData.hours }}</span>
      <span class="colon">:</span>
      <span class="block">{{ timeData.minutes }}</span>
      <span class="colon">:</span>
      <span class="block">{{ timeData.seconds }}</span>
    </template>
  </van-count-down>

  <div class="mbPx-4 mt-4">手动控制</div>
  <van-count-down ref="countDown" millisecond :time="3000" :auto-start="false" format="ss:SSS" @finish="onFinish" />
  <van-grid clickable>
    <van-grid-item text="开始" icon="play-circle-o" @click="start" />
    <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
    <van-grid-item text="重置" icon="replay" @click="reset" />
  </van-grid>

  <div class="mb-2 mt-5">to look the use demo</div>
  <van-button type="primary" size="small" @click="ToExample">ToExample</van-button>
</template>

<script setup>
import { onMounted, watch, ref, toRefs, reactive, computed } from 'vue'
const time = ref(30 * 60 * 60 * 1000)

const countDown = ref(null)

const start = () => {
  countDown.value.start()
}
const pause = () => {
  countDown.value.pause()
}
const reset = () => {
  countDown.value.reset()
}
import { Toast } from 'vant'
const onFinish = () => Toast('倒计时结束')
import useRouter from '@/hooks/useRouter'

//ToExample
const ToExample = () => {
  useRouter.routerPushMixin('Example')
}
</script>

<style scoped lang="scss"></style>
<style>
.colon {
  display: inline-block;
  margin: 0 8px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 44px;
  color: #fff;
  font-size: 28px;
  text-align: center;
  background-color: #ee0a24;
}
</style>
