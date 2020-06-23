import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./assets/css/base.scss"; // 初始化样式
import "./assets/iconfont/iconfont.css";  // iconfont
import "./utils/permission"; // 页面加载进度
import "./utils/flexible"; // rem设置

document.title = "众邦体育 - 让数据预测赛果,用技术改变生活";

import echarts from 'echarts'; //引入echarts
Vue.prototype.$echarts = echarts; //引入组件

import "./components/vant/vant"; //引入vant组件
import "./components/element-ui/element-ui"; //引入element-ui组件
// 公共组件
Vue.component('pcNavBar', () => import('./components/pc/NavBar'));// NavBar
Vue.component('pcFooter', () => import('./components/pc/Footer'));// Footer
Vue.component('phNavBar', () => import('./components/ph/NavBar'));// NavBar
Vue.component('phFooter', () => import('./components/ph/Footer'));// Footer

// 判断是否登录
Vue.prototype.isLogin = function () { if (!this.$store.getters.token) return this.$store.commit('SET_LOGIN', true) };

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



