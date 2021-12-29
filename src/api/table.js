import request from 'axios'

export function getList(params) {
  return request({
    url: '/vue3-mobile-vant/table/list',
    method: 'get',
    params
  })
}
