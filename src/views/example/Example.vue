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
const testReq = () => {
  let reqConfig = {
    url: '/integration-front/user/loginOut',
    method: 'post',
    bfLoading: false,
    isAlertErrorMsg: false
  }
  axiosReq(reqConfig).then((res) => {
    useVant().vantToastNone('req success')
  })
}

//mock
const $router = useVueRouter()
const mockRelative = () => {
  $router.routerPush('MockTest')
}

//VuexUse
const VuexUse = () => {
  $router.routerPush('VuexUse')
}

//SvgIcon
const SvgIcon = () => {
  $router.routerPush('SvgIcon')
}

//KeepAlive
const KeepAlive = () => {
  $router.routerPush('KeepAlive')
}
</script>

<style scoped lang="scss"></style>
