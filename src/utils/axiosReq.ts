import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'
import { getToken, setToken } from '@/utils/auth'
import { AxiosConfigTy, AxiosReqTy, ObjTy } from '~/common'

let reqConfig: any
let loadingE: any

const service: any = axios.create()
// request
service.interceptors.request.use(
  (req: AxiosReqTy) => {
    // token setting
    req.headers['AUTHORIZE_TOKEN'] = getToken()
    /* download file*/
    if (req.isDownLoadFile) {
      req.responseType = 'blob'
    }
    /* upload file*/
    if (req.isUploadFile) {
      req.headers['Content-Type'] = 'multipart/form-data'
    }
    if (req.bfLoading) {
      loadingE = Toast.loading({
        message: '加载中',
        forbidClick: true,
        loadingType: 'spinner'
      })
    }
    /*
     *params会拼接到url上,such as  "a=1&b=2"
     * */
    if (req.isParams) {
      req.params = req.data
      req.data = {}
    }
    //save req for res to using
    reqConfig = req
    return req
  },
  (err: any) => {
    Promise.reject(err)
  }
)
//response
service.interceptors.response.use(
  (res: any) => {
    if (reqConfig.afHLoading && loadingE) {
      loadingE.close()
    }
    // direct return, when download file
    if (reqConfig.isDownLoadFile) {
      return res
    }
    const { flag, msg, code, isNeedUpdateToken, updateToken } = res.data
    //update token
    if (isNeedUpdateToken) {
      setToken(updateToken)
    }
    const successCode = '0,200,20000'
    if (successCode.indexOf(code) !== -1) {
      //业务成功处理
      return res.data
    } else {
      //是否需要提示错误信息 isAlertErrorMsg:true 提示
      if (reqConfig.isAlertErrorMsg) {
        Toast({
          type: 'fail',
          message: msg,
          duration: 2.5 * 1000
        })
      }
      //返回错误信息
      //如果未catch 走unhandledrejection进行收集
      return Promise.reject(res.data)
    }
  },
  (err: any) => {
    /*http错误处理，处理跨域，404，401，500*/
    if (loadingE) loadingE.clear()
    Toast({
      type: 'fail',
      message: err,
      duration: 2.5 * 1000
    })
    //如果是跨域
    //Network Error,cross origin
    const errObj: ObjTy = {
      msg: err.toString(),
      reqUrl: reqConfig.baseURL + reqConfig.url,
      params: reqConfig.isParams ? reqConfig.params : reqConfig.data
    }
    return Promise.reject(JSON.stringify(errObj))
  }
)

export default function axiosReq({
  url,
  data,
  method,
  isParams,
  bfLoading,
  afHLoading,
  isUploadFile,
  isDownLoadFile,
  baseURL,
  timeout,
  isAlertErrorMsg
}: AxiosConfigTy): any {
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
    baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL, // 设置基本基础url
    timeout: timeout ?? 15000 // 配置默认超时时间
  })
}
