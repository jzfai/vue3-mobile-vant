import { ToastType } from 'vant/es';
declare const _default: {
    vantToastMixin: (message: string, type: ToastType, duration: number) => void;
    vantToastNoneMixin: (msg: string) => void;
    vantLoadingMixin: () => void;
    vantConfirmNoCancelBtnMixin: (title: string, message: string) => Promise<unknown>;
    vantAlterMixin: (title: string, message: string) => Promise<unknown>;
};
export default _default;
