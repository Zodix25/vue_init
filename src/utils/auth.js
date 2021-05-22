const TokenKey = 'loginToken'
const LoginKey = 'isLogin'

export function getToken() {
  return window.localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return window.localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return window.localStorage.removeItem(TokenKey)
}

export function getLogin() {
  return window.localStorage.getItem(LoginKey)
}

export function setLogin(isLogin) {
  return window.localStorage.setItem(LoginKey, isLogin)
}

export function removeLogin() {
  return window.localStorage.removeItem(LoginKey)
}