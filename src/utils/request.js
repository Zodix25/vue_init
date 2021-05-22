import axios from 'axios'
import {
  Toast
} from 'vant'
import router from '../plugins/router'
import {
  getToken,
  removeToken,
  removeLogin
} from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_HOST_URL, // api的base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    if (getToken) {
      config.headers['ACCESS-TOKEN'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (config.method == 'post') {
      config.headers['Content-Type'] = 'application/json'
    }
    if (config.data) {
      if (config.data.code) {
        config.headers['code'] = config.data.code
      }
    }
    if (config.data) {
      if (config.data.sign) {
        config.headers['sign'] = config.data.sign
      }
    }
    return config
  },
  (error) => {
    // Do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    if (response.data.httpCode == 500) {
      Toast(response.data.retMsg)
    }
    return response.data
  },
  (error) => {
    // promt.clear();
    return Promise.reject(error)
  }
)

export default service