import request from './request'


// 登录请求
export const loginApi = (params) => {
  return request.post('/login', params)
}
//获取验证码
export const loginCaptchaApi = () => {
  return request.get('/login/captcha')
}