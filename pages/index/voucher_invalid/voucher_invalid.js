var app = getApp();
Page({
  data: {
    couponlist:[],
    pageIndex:1,
  },
  onLoad() {},
  onShow(){
    var that = this;
    that.getCouponList();
  },
  //获取用户优惠券列表
  getCouponList(){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/coupon/getCouponListByUserId.do', // 目标服务器url
      method: 'POST',
      header:{
            'content-type': 'application/x-www-form-urlencoded'
          },
      data: {
        userId:userId,
        state:3,
        pageIndex:that.data.pageIndex,
        pageSize:5,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        if(that.data.pageIndex==1){
          that.setData({
            couponlist:res.data.data,
          });
        }else if(that.data.couponlist.length<res.data.count){
          that.setData({
            couponlist:that.data.couponlist.concat(res.data.data)
          });
        }
        my.stopPullDownRefresh();
      
      },
    });
  },
    //上拉监听
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
    this.getCouponList();
  },
  onPullDownRefresh() {
    this.setData({
      pageIndex:1
    });
    this.getCouponList();
  },
  //前往兑换页
  toExchange(){
    my.navigateTo({
      url: '/pages/index/voucher_exchange/voucher_exchange',
    });
  },
  //前往失效券页
  toInvalid(){
    my.navigateTo({
      url: '/pages/index/voucher_invalid/voucher_invalid',
    });
  },
});