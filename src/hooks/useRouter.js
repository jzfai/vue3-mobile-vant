import { reactive } from 'vue'
import router from '@/router'
let hooksFunc = function () {
  const route = router.currentRoute
  let state = reactive({
    queryParamsMixin: null
  })
  if (route?.query?.params) {
    state.queryParamsMixin = JSON.parse(route.query.params)
  }
  // vue router跳转
  const routerPushMixin = (name, params) => {
    let data = {}
    if (params) {
      data = {
        params: JSON.stringify(params)
      }
    } else {
      data = {}
    }
    router.push({
      name: name,
      query: data
    })
  }
  const routerReplaceMixin = (name, params) => {
    let data = {}
    if (params) {
      data = {
        params: JSON.stringify(params)
      }
    } else {
      data = {}
    }
    router.replace({
      name: name,
      query: data
    })
  }
  const routerBackMixin = () => {
    router.go(-1)
  }

  return {
    routerPushMixin,
    routerReplaceMixin,
    routerBackMixin,
    ...state
  }
}
export default hooksFunc()
