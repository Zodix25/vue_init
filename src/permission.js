import router from './plugins/router'
import { getToken, getLogin } from '@/utils/auth' // 验权

const whiteList = ['/', '/index'] // 不重定向白名单
const tokenWhiteList = ['/'];
router.beforeEach((to, from, next) => {

  document.title = to.meta.title;
  if (getToken()) {
    if (getLogin() == true) {
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        next()
      }
    } else if (whiteList.indexOf(to.path) !== -1) {
      console.log('11111111')
      next()
    } else {
      next('/login')
    }
  } else if (tokenWhiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    next('/')
  }
})
// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */

//   next();
// });