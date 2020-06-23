import { getLogin, logout, getUserInfo } from '../../api/login'
import { globaluserInfo } from '../../api/mine'
import { getToken, setToken, removeToken, getUserInfro, setUserInfro, removeUserInfro } from '../../utils/auth'

const user = {
  state: {
    token: getToken(),
    userInfro: getUserInfro()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFRO: (state, userInfro) => {
      state.userInfro = userInfro
    }
  },

  actions: {
    // 用户名登录
    getLogin({ commit }, userInfo) {
      let params = {
        username: userInfo.username.trim(),
        password: userInfo.password
      }
      return new Promise((resolve, reject) => {
        getLogin(params).then(response => {
          if (response.status === 200) {
            const data = response.data
            const token = data.token_type + ' ' + data.access_token
            commit('SET_TOKEN', token)
            setToken(token)
            getUserInfo(token).then(res => {
              const userData = res.data.data
              commit('SET_USER_INFRO', JSON.stringify(userData))
              setUserInfro(JSON.stringify(userData))
              resolve()
            })
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_USER_INFRO', null)
          commit('SET_TOKEN', null)
          removeToken()
          removeUserInfro()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_USER_INFRO', null)
        commit('SET_TOKEN', null)
        removeToken()
        removeUserInfro()
        resolve()
      })
    },
    // 获取用户资料信息
    getglobalInfo({ commit }) {
      globaluserInfo().then(res => {
        const userData = res.data.data
        // 刷新state用户信息数据
        console.log(userData)
        commit('SET_USER_INFRO', JSON.stringify(userData))
        // 存储session
        setUserInfro(JSON.stringify(userData))
      })
    }
  }
}

export default user
