import request from '@/utils/request'

export const loginApi = {

  login (params) {
    return request({
      url: 'MARKETING/api/platform/v1/user/binding',
      method: 'post',
      data: params
    })
  },

  getUserToken (url, params) {
    return request({
      url,
      method: 'post',
      data: params
    })
  },
  sendCaptcha (params) {
    return request({
      url: 'MALL/api/platform/v1/user/sendCaptcha',
      method: 'post',
      data: params
    })
  },
  getUserNetWork (netWorkId) {
    return request({
      url: `MARKETING/api/platform/v1/activity/network/getUserNetWorkInfo/${netWorkId}`,
      method: 'get'
    })
  }
}