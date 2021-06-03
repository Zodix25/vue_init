<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    // 创建cnzz统计js
  },
  watch: {
    $route: {
      handler () {
        setTimeout(() => {
          // 避免首次获取不到window._czc
          if (window._czc) {
            let location = window.location;
            let contentUrl = location.pathname + location.hash;
            let refererUrl = '/';
            // 用于发送某个URL的PV统计请求，
            window._czc.push(['_trackPageview', contentUrl, refererUrl]);
          }
        }, 300);
      },
      immediate: true // 首次进入页面即执行
    }
  },
  methods: {}
};
</script>

<style>
.boxs {
  width: 100%;
  height: 100%;
}
</style>

