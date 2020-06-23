/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

// 非空
export function isvalidNull(str) {
  if (str === '') {
    return false
  } else {
    return true
  }
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 匹配手机号码*/
export function validatePhone(str) {
  const reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
  return reg.test(str)
}

/* 匹配密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)*/
export function validatePassWord(str) {
  const reg = /^[0-9a-zA-Z]*$/g
  return reg.test(str)
}

/* 数字或者带小数点的数字（钱）*/
export function validateMoney(str) {
  const reg = /^[0-9]+([.]{1}[0-9]{0,2}){0,1}$/
  return reg.test(str)
}

/* 匹配邮箱*/
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/* 只能输入数字*/
export function validateNumber(str) {
  const reg = /^[0-9]*$/
  return reg.test(str)
}

/* 8个长度字符 */
export function validateLength(str) {
  const reg = /^[a-zA-Z\d\_\u2E80-\u9FFF]{1,10}$/
  return reg.test(str)
}

