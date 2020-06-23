const getters = {
  loginStatus: state => state.login.loginStatus,
  token: state => state.user.token,
  userInfro: state => state.user.userInfro
}
export default getters
