import axios from 'axios';
import { message } from 'antd';

const  request = axios.create({
  // https://zyxcl.xyz/exam_api
  baseURL: 'https://zyxcl.xyz/exam_api'
})

// 添加请求拦截器, 统一添加token
 request.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.getItem('token')
  return config
 })

//  添加响应拦截器，统一处理错误信息
 request.interceptors.response.use(response => {
  return response
 }, error => {
  if (error.status === 401) {
    message.error('用户登录过期，请重新登录！')
    location.assign('/login')
  }else if (error.status === 403) {
    message.error('没有访问权限，请联系管理员！')
  }
  return Promise.reject(error)
 })

 export default request