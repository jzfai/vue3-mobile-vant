<template>
  <div class="mbPx-4">req relative</div>
  <van-button type="primary" size="small" @click="testReq">test Req</van-button>

  <div class="mbPx-4 mt-4">mock demo</div>
  <van-button type="primary" size="small" @click="mockRelative">mockRelative</van-button>

  <div class="mbPx-4 mt-4">VuexUse</div>
  <van-button type="primary" size="small" @click="VuexUse">VuexUse</van-button>

  <div class="mbPx-4 mt-4">SvgIcon</div>
  <van-button type="primary" size="small" @click="SvgIcon">SvgIcon</van-button>

  <div class="mbPx-4 mt-4">KeepAlive</div>
  <van-button type="primary" size="small" @click="KeepAlive">KeepAlive</van-button>
</template>

<script setup>
import { onMounted, watch, ref, toRefs, reactive, computed } from 'vue'
import axiosReq from '@/utils/axiosReq'
import useVant from '@/hooks/useVant'
import useRouter from '@/hooks/useRouter'

const testReq = () => {
  let reqConfig = {
    url: '/ty-user/user/loginOut',
    method: 'post',
    bfLoading: false,
    isAlertErrorMsg: false
  }
  axiosReq(reqConfig).then((res) => {
    useVant.vantToastNoneMixin('req success')
  })
}

//mock
const mockRelative = () => {
  useRouter.routerPushMixin('MockTest')
}

//VuexUse
const VuexUse = () => {
  useRouter.routerPushMixin('VuexUse')
}

//SvgIcon
const SvgIcon = () => {
  useRouter.routerPushMixin('SvgIcon')
}

//KeepAlive
const KeepAlive = () => {
  useRouter.routerPushMixin('KeepAlive')
}
</script>

<style scoped lang="scss"></style>
