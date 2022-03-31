import router from './index'
import store from '@/store'
// 白名单
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  // 登陆
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else { // 未登录
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
