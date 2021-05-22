import Vue from 'vue';
import Router from 'vue-router';
const index = () => import('@/views/Home');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    meta: {
      pathIndex: 'index'
    }
  },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    // 如果未匹配到路由
    from.name ?
      next({
        name: from.name,
      }) :
      next('/'); // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next(); // 如果匹配到正确跳转
  }
});