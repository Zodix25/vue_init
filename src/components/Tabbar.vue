<template>
  <div class="tabbar-wrap">
    <div class="tabbar">
      <router-link :class="pathname == item.pathIndex?' tabbar-item-active':'tabbar-item' "
                   tag="div"
                   v-for="(item,index) in tabbarList"
                   :to="item.pathName"
                   :key="index">
        <img v-if="pathname == item.pathIndex"
             :src="item.imgSelect"
             alt="">
        <img v-else
             :src="item.img"
             alt="">
        <p>{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
  data () {
    return {
      tabbarList: [
        {
          name: '首页',
          imgSelect: require('@/assets/img/home-select.png'),
          img: require('@/assets/img/home.png'),
          pathName: '/index',
          pathIndex: 'index'
        },
        {
          name: '我的',
          imgSelect: require('@/assets/img/record-select.png'),
          img: require('@/assets/img/record.png'),
          pathName: '/profile',
          pathIndex: 'profile'
        }
      ],
      pathname: ''
    }
  },
  created () {
    this.pathname = this.$route.meta.pathIndex;
  },
  methods: {

  },
}
</script>
<style lang="less">
.tabbar-wrap {
    width: 100%;
    height: 0.98rem;

    .tabbar {
        width: 100%;
        height: 0.98rem;
        background: #FFFBFB;
        box-shadow: 0px 0px 0.06rem 0px rgba(0, 0, 0, 0.1);
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .tabbar-item {
            text-align: center;

            img {
                width: 0.42rem;
            }

            p {
                font-size: 0.2rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #C4C4C4;
            }

        }

        .tabbar-item-active {
            text-align: center;

            img {
                width: 0.42rem;
            }

            p {
                font-size: 0.2rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #F14947;
            }
        }
    }
}

</style>