import request from '@/utils/request';

// const MARKETING = "MARKETING/api/platform";

export const activeApi = {
  // 活动初始化
  initActivity () {
    return request({
      url: 'MARKETING/api/platform/v1/campaign/init',
      method: 'get',
    });
  },
  // 叠加游戏初始化接口
  initGame () {
    return request({
      url: 'MARKETING/api/platform/v1/voice/init',
      method: 'post',
    });
  },
  // 排行榜
  getMyRanking () {
    return request({
      url: 'MARKETING/api/platform/v2/activity/floor/getMyRanking',
      method: 'get',
    });
  },
  // 答题游戏开始
  gameStart () {
    return request({
      url: 'MARKETING/api/platform/v1/voice/startActivity',
      method: 'post',
    });
  },
  // 判断答题接口
  gameDiscern (params) {
    return request({
      url: 'MARKETING/api/platform/v1/voice/discern',
      method: 'post',
      data: params
    });
  },

  // 往期排行榜
  getPastRanking (params) {
    return request({
      url: 'MARKETING/api/platform/v2/activity/floor/getPastRanking',
      method: 'post',
      data: params,
    });
  },

  // 往期我的排行榜
  getMyPastRanking () {
    return request({
      url: 'MARKETING/api/platform/v2/activity/floor/getMyPastRanking',
      method: 'get',
    });
  },
  // 使用体力卡
  useStaminaCards () {
    return request({
      url: 'MARKETING/api/platform/v1/voice/useStaminaCard',
      method: 'post',
    });
  },
  // 获取抽奖次数
  lotteryCount () {
    return request({
      url: 'MARKETING/api/platform/v1/campaign/lottery/count',
      method: 'get',
    });
  },
  // 抽兑奖
  lotteryAndaward () {
    return request({
      url: 'MARKETING/api/platform/v1/campaign/lotteryAndaward',
      method: 'get',
    });
  },
  // 获取奖品列表
  lotteryList () {
    return request({
      url: 'MARKETING/api/platform/v1/campaign/lottery/list',
      method: 'get',
    });
  },
  // 绑定邀请码
  invite (code) {
    return request({
      url: `MARKETING/api/platform/v1/award/binding/invite/${code}`,
      method: 'get',
    });
  },
  // 获取邀请记录
  invatList () {
    return request({
      url: 'MARKETING/api/platform/v1/award/invite/record',
      method: 'get',
    });
  },
  // 分享
  shareInfo (params) {
    return request({
      url: 'MARKETING/api/platform/v1/wechat/share',
      method: 'post',
      data: params,
    });
  },
  // 添加收货地址
  SetAddress (params) {
    return request({
      url: 'MALL/api/platform/v1/address',
      method: 'put',
      data: params,
    });
  },
  // 查询默认地址
  PostAddressList (params) {
    return request({
      url: 'MALL/api/platform/v1/address/default',
      method: 'get',
      data: params
    });
  },
  // 兑奖下单
  PostprizeOrder (params) {
    return request({
      url: 'MALL/api/platform/v1/order/prizeOrder',
      method: 'post',
      data: params
    });
  }
};
