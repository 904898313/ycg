const login = {
  state: {
    loginStatus: false,
  },
  mutations: {
    SET_LOGIN: (state, loginStatus) => {
      state.loginStatus = loginStatus
    }
  }
}

export default login
