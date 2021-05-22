import { Popup, Toast, Progress, Field, Circle } from 'vant'
import Vue from 'vue'
import App from './App'
import './assets/css/basic.css'
import './assets/css/reset.less'
import router from './plugins/router'



Vue.use(Toast);
Vue.use(Popup);
Vue.use(Progress);
Vue.use(Field);
Vue.use(Circle);
Toast.setDefaultOptions({ duration: 2000 });


Vue.prototype.$toast = Toast;

Vue.prototype.devicetype = (function () {
  var u = navigator.userAgent; // app = navigator.appVersion;
  return {
    // 浏览器版本信息
    trident: u.indexOf('Trident') > -1,
    presto: u.indexOf('Presto') > -1,
    webKit: u.indexOf('AppleWebKit') > -1,
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') > -1,
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    iPhone: u.indexOf('iPhone') > -1,
    iPad: u.indexOf('iPad') > -1,
    webApp: u.indexOf('Safari') > -1,
    weixin:
            (u.indexOf('MicroMessenger') > -1 &&
                u
                  .replace(/.*(MicroMessenger\/[^\s]*).*/, '$1')
                  .replace('MicroMessenger/', '')) ||
            false,
    appVersion: u.indexOf('bocapp(') > -1 ?
      u.match(/bocapp\(\S+\)/)[0].slice(7, -1) : '3.0.0'
  };
})();
//
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
