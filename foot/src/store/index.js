import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import login from './modules/login'
import score from './modules/score'
import createPersistedState from "vuex-persistedstate" // vuex-persistedstate默认持久化所有 防止刷新丢失数据
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    user,
    login,
    score
  },
  getters,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      // 如只需缓存需要的数据模块
      reducer(val) {
        return {
          // 只储存state中的score
          score: val.score
        }
      }
    })
  ]
})
export default store
