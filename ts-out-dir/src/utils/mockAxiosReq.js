import axios from 'axios';
import { Toast } from 'vant';
const service = axios.create({
    baseURL: '',
    timeout: 8000
});
service.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});
service.interceptors.response.use((response) => {
    const res = response.data;
    if (res.code !== 20000) {
        Toast({
            type: 'fail',
            message: res.msg,
            duration: 2.5 * 1000
        });
        return Promise.reject(new Error(res.ElMessage || 'Error'));
    }
    else {
        return res;
    }
}, (error) => {
    console.log('err' + error);
    Toast({
        type: 'fail',
        message: error.ElMessage,
        duration: 2.5 * 1000
    });
    return Promise.reject(error);
});
export default service;
