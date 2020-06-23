import router from '../router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to,from,next) => {
  // 每次切换页面时，调用进度条
  NProgress.start()
  next()
})
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  // 跳转后返回顶部
  window.scrollTo(0,0);
  NProgress.done()
})
