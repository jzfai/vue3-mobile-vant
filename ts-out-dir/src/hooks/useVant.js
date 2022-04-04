import { Toast, Dialog } from 'vant';
import { ref } from 'vue';
const hooksFunc = function () {
    const vantToastMixin = (message, type, duration) => {
        type = type || 'success';
        Toast({
            type: type,
            message: message,
            duration: duration ?? 2000,
            forbidClick: true,
            overlay: false
        });
    };
    const vantToastNoneMixin = (msg) => {
        Toast(msg);
    };
    const loadingIdMixin = ref(null);
    const vantLoadingMixin = () => {
        loadingIdMixin.value = Toast.loading({
            message: '加载中',
            forbidClick: true,
            loadingType: 'spinner'
        });
    };
    const vantCloseLoadingMixin = () => {
        if (loadingIdMixin.value) {
            loadingIdMixin.value.clear;
        }
    };
    const vantConfirmNoCancelBtnMixin = (title, message) => {
        return new Promise((resolve, reject) => {
            Dialog.confirm({
                title: title || '确认框',
                message: message || '你确定要删除吗'
            })
                .then(() => {
                resolve('');
            })
                .catch(() => {
                reject();
            });
        });
    };
    const vantAlterMixin = (title, message) => {
        return new Promise((resolve, reject) => {
            Dialog.alert({
                title: title || '确认框',
                message: message || '确认弹框',
                theme: 'round-button'
            })
                .then(() => {
                resolve('');
            })
                .catch(() => {
                reject();
            });
        });
    };
    return {
        vantToastMixin,
        vantToastNoneMixin,
        vantLoadingMixin,
        vantConfirmNoCancelBtnMixin,
        vantAlterMixin
    };
};
export default hooksFunc();
