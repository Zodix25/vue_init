import request from '@/utils/request'

export const goodsApi = {
  // 获取商品分类
  getTypeList (params) {
    return request({
      url: 'MALL/api/platform/v1/goodsType/getTypeList',
      method: 'post',
      data: params
    });
  },
  getSlideList (params) {
    return request({
      url: 'MALL/api/platform/v1/slide/getSlideList/' + params,
      method: 'get',
    });
  },
  getGoodsList (params) {
    return request({
      url: 'MALL/api/platform/v1/goods/getGoodsList',
      method: 'post',
      data: params
    });
  },

  getGoodsListv2 (params) {
    return request({
      url: 'MALL/api/platform/v2/goods/getGoodsList',
      method: 'post',
      data: params
    });
  },

  getGoodsInfo (params) {
    return request({
      url: 'MALL/api/platform/v1/goods/getGoodsDetail/' + params,
      method: 'get',
    });
  },

  getGoodsObjectDetail (params) {
    return request({
      url: 'MALL/api/platform/v1/goods/getGoodsObjectDetail/' + params,
      method: 'get',
    });
  },

  getBlockList () {
    return request({
      url: 'MALL/api/platform/v1/block/blockList',
      method: 'get',
    });
  },
  getBlockgoodsList (params) {
    return request({
      url: 'MALL/api/platform/v1/blockGoods/blockGoodsList/' + params,
      method: 'get',
    });
  },
  getCouponList (params) {
    let url = 'MARKETING/api/platform/v1/activity/coupons/list';
    if (params) {
      url = url + '/' + params;
    }
    return request({
      url,
      method: 'get',
    });
  },
  couponConsume (params) {
    return request({
      url: 'MALL/api/platform/v1/activity/coupons/couponConsume/' + params,
      method: 'get',
    });
  },
  // 积分余额查询
  getPoint () {
    return request({
      url: 'MALL/api/platform/v1/campaign/user/point',
      method: 'get',
    });
  }
}

export const orderApi = {
  // 获取支付方式
  getPaymentList () {
    return request({
      url: 'MALL/api/platform/v1/user/getPaymentList',
      method: 'get',
    });
  },

  getOrderList (params) {
    return request({
      url: 'MALL/api/platform/v1/order/getOrderList',
      method: 'post',
      data: params
    });
  },

  submitOrder (params) {
    return request({
      url: 'MALL/api/platform/v2/order/submitOrder',
      method: 'post',
      data: params
    });
  },

  payOrder (params) {
    return request({
      url: 'MALL/api/platform/v1/order/payOrder',
      method: 'post',
      data: params
    });
  },

  // 支付加积分下单
  pointBuy (params) {
    return request({
      url: 'MALL/api/platform/v1/activity/points/buy',
      method: 'post',
      data: params
    });
  },

  cancleOrder (params) {
    return request({
      url: 'MALL/api/platform/v1/order/cancelOrder/' + params,
      method: 'get',
    });
  },

  checkOrderId (params) {
    return request({
      url: 'MARKETING/api/platform/v1/activity/bank/check/' + params,
      method: 'get',
    });
  },
  getOrderDetailData (orderId) {
    return request({
      url: `MALL/api/platform/v1/order/getOrderDetail/${orderId}`,
      method: 'get',
    });
  }

}