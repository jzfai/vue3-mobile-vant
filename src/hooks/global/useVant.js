import { Toast, Dialog } from 'vant'
import { ref } from 'vue'
import useVueRouterExample from '@/hooks/global/useVueRouter'
let useVantExample = function () {
  /*
   * 通知弹框
   * message：通知的内容
   * type：通知类型
   * duration：通知显示时长（ms）
   * */
  const vantToast = (message, type, duration) => {
    type = type || 'success'
    Toast({
      type: type,
      message: message,
      duration: '2000',
      forbidClick: true,
      overlay: false
    })
  }
  const vantToastNone = (msg) => {
    Toast(msg)
  }
  /*
   * loading加载框
   * */
  let loadingId = ref(null)
  const vantLoading = () => {
    loadingId.value = Toast.loading({
      message: '加载中',
      forbidClick: true,
      loadingType: 'spinner'
    })
  }
  const vantCloseLoading = () => {
    if (loadingId.value) {
      loadingId.value.clear
    }
  }
  /*
    确认弹框(没有取消按钮)
  * title:提示的标题
  * message:提示的内容
  * return Promise
  * */
  const vantConfirmNoCancelBtn = (title, message) => {
    return new Promise((resolve, reject) => {
      Dialog.confirm({
        title: title || '确认框',
        message: message || '你确定要删除吗'
      })
        .then(() => {
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  }
  /*
   * 确认弹框
   * title:提示的标题
   * message:提示的内容
   * return Promise
   * */
  const vantAlter = (title, message) => {
    return new Promise((resolve, reject) => {
      Dialog.alert({
        title: title || '确认框',
        message: message || '确认弹框',
        theme: 'round-button'
      })
        .then(() => {
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  }
  return {
    vantToast,
    vantToastNone,
    vantLoading,
    vantConfirmNoCancelBtn,
    vantAlter
  }
}

export const useVant = useVantExample
export default useVantExample
