import axios from 'axios';
import { Toast } from 'vant';
import { getToken, setToken } from '@/utils/auth';
let reqConfig;
let loadingE;
const service = axios.create();
service.interceptors.request.use((req) => {
    req.headers['AUTHORIZE_TOKEN'] = getToken();
    if (req.isDownLoadFile) {
        req.responseType = 'blob';
    }
    if (req.isUploadFile) {
        req.headers['Content-Type'] = 'multipart/form-data';
    }
    if (req.bfLoading) {
        loadingE = Toast.loading({
            message: '加载中',
            forbidClick: true,
            loadingType: 'spinner'
        });
    }
    if (req.isParams) {
        req.params = req.data;
        req.data = {};
    }
    reqConfig = req;
    return req;
}, (err) => {
    Promise.reject(err);
});
service.interceptors.response.use((res) => {
    if (reqConfig.afHLoading && loadingE) {
        loadingE.close();
    }
    if (reqConfig.isDownLoadFile) {
        return res;
    }
    const { flag, msg, code, isNeedUpdateToken, updateToken } = res.data;
    if (isNeedUpdateToken) {
        setToken(updateToken);
    }
    const successCode = '0,200,20000';
    if (successCode.indexOf(code) !== -1) {
        return res.data;
    }
    else {
        if (reqConfig.isAlertErrorMsg) {
            Toast({
                type: 'fail',
                message: msg,
                duration: 2.5 * 1000
            });
        }
        return Promise.reject(res.data);
    }
}, (err) => {
    if (loadingE)
        loadingE.clear();
    Toast({
        type: 'fail',
        message: err,
        duration: 2.5 * 1000
    });
    const errObj = {
        msg: err.toString(),
        reqUrl: reqConfig.baseURL + reqConfig.url,
        params: reqConfig.isParams ? reqConfig.params : reqConfig.data
    };
    return Promise.reject(JSON.stringify(errObj));
});
export default function axiosReq({ url, data, method, isParams, bfLoading, afHLoading, isUploadFile, isDownLoadFile, baseURL, timeout, isAlertErrorMsg }) {
    return service({
        url: url,
        method: method ?? 'get',
        data: data ?? {},
        isParams: isParams ?? false,
        bfLoading: bfLoading ?? true,
        afHLoading: afHLoading ?? true,
        isUploadFile: isUploadFile ?? false,
        isDownLoadFile: isDownLoadFile ?? false,
        isAlertErrorMsg: isAlertErrorMsg ?? true,
        baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL,
        timeout: timeout ?? 15000
    });
}
