
const TokenKey = 'TokenKey'
const UserInfro = 'UserInfro'

// token
export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

// 用户信息
export function getUserInfro() {
  return sessionStorage.getItem(UserInfro)
}

export function setUserInfro(data) {
  return sessionStorage.setItem(UserInfro, data)
}

export function removeUserInfro() {
  return sessionStorage.removeItem(UserInfro)
}
