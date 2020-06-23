import axios from 'axios';
import { Toast } from 'vant';
import store from "../store";
// import { removeToken } from '../utils/auth';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 10000, // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断

    const token = store.getters.token || 'Basic Zm9vdGJhbGxfbWF0Y2g6YXBw';
    token && (config.headers.Authorization = token);
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 400: 用户名或密码错误
        case 400:
          Toast.fail('用户名或密码错误');
          break;
        // 401: 用户未注册
        case 401:
          Toast.fail('此用户未注册');
          break;
        // 404请求不存在
        case 404:
          Toast.fail('网络请求不存在')
          break;
        // 其他错误，直接抛出错误提示
        default:
          Toast.fail(error.response.data.message)


        // switch (error.response.status) {
        //   // 401: 未登录
        //   // 未登录则跳转登录页面，并携带当前页面的路径
        //   // 在登录成功后返回当前页面，这一步需要在登录页操作。
        //   case 401:
        //     // router.replace({
        //     //   path: '/login',
        //     //   query: {
        //     //     redirect: router.currentRoute.fullPath
        //     //   }
        //     // });
        //     break;
        //
        //   // 403 token过期
        //   // 登录过期对用户进行提示
        //   // 清除本地token和清空vuex中token对象
        //   // 跳转登录页面
        //   case 403:
        //     Toast.warning('登录过期，请重新登录')
        //     // 清除token
        //     removeToken()
        //     store.commit('SET_TOKEN', null);
        //     // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        //     // setTimeout(() => {
        //     //   router.replace({
        //     //     path: '/login',
        //     //     query: {
        //     //       redirect: router.currentRoute.fullPath
        //     //     }
        //     //   });
        //     // }, 1000);
        //     break;
        //   // 404请求不存在
        //   case 404:
        //     Toast.fail('网络请求不存在')
        //     break;
        //   // 其他错误，直接抛出错误提示
        //   default:
        //     Toast.fail(error.response.data.message)
      }
      return Promise.reject(error.response);
    }
  }
)

export default service
