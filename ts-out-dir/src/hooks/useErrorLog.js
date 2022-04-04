import request from '@/utils/axiosReq';
import setting from '@/settings';
import pack from '../../package.json';
const errorLogReq = (errLog) => {
    request({
        url: '/ty-user/errorCollection/insert',
        data: {
            pageUrl: window.location.href,
            errorLog: errLog,
            browserType: navigator.userAgent,
            version: pack.version
        },
        method: 'post',
        bfLoading: false,
        isAlertErrorMsg: true
    }).then(() => {
    });
};
export default function () {
    const checkNeed = () => {
        const env = import.meta.env.VITE_APP_ENV;
        const { errorLog } = setting;
        if (typeof errorLog === 'string') {
            return env === errorLog;
        }
        if (errorLog instanceof Array) {
            return errorLog.includes(env);
        }
        return false;
    };
    if (checkNeed()) {
        window.addEventListener('error', ({ error, target }) => {
            if (target.outerHTML) {
                const errLog = `${JSON.stringify(target.outerHTML)}`;
                errorLogReq(errLog);
            }
            else {
                const errLog = `${error.stack.substr(0, 300)}`;
                errorLogReq(errLog);
            }
        }, true);
        window.addEventListener('unhandledrejection', ({ reason }) => {
            let errLog = '';
            if (typeof reason === 'string') {
                errLog = reason;
            }
            else {
                errLog = `${reason.stack.substr(0, 300)}`;
            }
            errorLogReq(errLog);
        });
        const _oldConsoleError = window.console.error;
        window.console.error = function () {
            const errLog = Object.values(arguments).join(',');
            if (errLog.indexOf('custom') === -1) {
                errorLogReq(errLog);
            }
            _oldConsoleError && _oldConsoleError.apply(window, arguments);
        };
    }
}
