import request from '@/utils/request'

export function logout() {
  return request({
    url: '/v1/sysUser/logout',
    method: 'GET'
  })
}
// 获取用户信息
export function getUserInfo() {
  return request({
    url: '/v1/appUser/userDetail',
    method: 'GET'
  })
}
// 登录
export function getLogin(data) {
  return request({
    url: '/oauth/token?password=' + data.password + '&username=' + data.username + '&grant_type=password',
    method: 'GET',
    data: {}
  })
}

// 注册
export function getRegister(data) {
  return request({
    url: '/ignoreAuth/register/' + data.userIphone +'/'+ data.passWord +'/'+ data.userCode,
    method: 'POST',
    data: {}
  })
}
// 发送验证码
export function sendSmsCode(data) {
  return request({
    url: '/ignoreAuth/sendSmsCodeDemo?phoneNumber=' + data,
    method: 'POST',
    data: {}
  })
}
