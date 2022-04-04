import { Toast, Dialog } from 'vant'
import { ref } from 'vue'
import { ToastType } from 'vant/es'
const hooksFunc = function () {
  /*
   * 通知弹框
   * message：通知的内容
   * type：通知类型
   * duration：通知显示时长（ms）
   * */
  const vantToastMixin = (message: string, type: ToastType, duration: number) => {
    type = type || 'success'
    Toast({
      type: type,
      message: message,
      duration: duration ?? 2000,
      forbidClick: true,
      overlay: false
    })
  }
  const vantToastNoneMixin = (msg: string) => {
    Toast(msg)
  }
  /*
   * loading加载框
   * */
  const loadingIdMixin: any = ref(null)
  const vantLoadingMixin = () => {
    loadingIdMixin.value = Toast.loading({
      message: '加载中',
      forbidClick: true,
      loadingType: 'spinner'
    })
  }
  const vantCloseLoadingMixin = () => {
    if (loadingIdMixin.value) {
      loadingIdMixin.value.clear
    }
  }
  /*
    确认弹框(没有取消按钮)
  * title:提示的标题
  * message:提示的内容
  * return Promise
  * */
  const vantConfirmNoCancelBtnMixin = (title: string, message: string) => {
    return new Promise((resolve, reject) => {
      Dialog.confirm({
        title: title || '确认框',
        message: message || '你确定要删除吗'
      })
        .then(() => {
          resolve('')
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
  const vantAlterMixin = (title: string, message: string) => {
    return new Promise((resolve, reject) => {
      Dialog.alert({
        title: title || '确认框',
        message: message || '确认弹框',
        theme: 'round-button'
      })
        .then(() => {
          resolve('')
        })
        .catch(() => {
          reject()
        })
    })
  }
  return {
    vantToastMixin,
    vantToastNoneMixin,
    vantLoadingMixin,
    vantConfirmNoCancelBtnMixin,
    vantAlterMixin
  }
}
export default hooksFunc()
