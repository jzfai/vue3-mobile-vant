import axios from 'axios'
import { AxiosReqTy } from '~/common'
import { Toast } from 'vant'

// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 8000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config: AxiosReqTy) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Toast({
        type: 'fail',
        message: res.msg,
        duration: 2.5 * 1000
      })
      return Promise.reject(new Error(res.ElMessage || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    Toast({
      type: 'fail',
      message: error.ElMessage,
      duration: 2.5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
