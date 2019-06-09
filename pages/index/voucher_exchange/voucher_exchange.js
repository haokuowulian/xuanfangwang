var app = getApp();
Page({
  data: {
    couponlist:[],
  },
  onLoad() {},
  onShow(){
    var that = this;
    that.getListForCoupon();
  },
  //获取可兑换优惠券列表
  getListForCoupon(){
    var that = this;
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/couponList/getCouponListAll.do', // 目标服务器url
      method: 'POST',
      header:{
            'content-type': 'application/x-www-form-urlencoded'
          },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        that.setData({
          couponlist:res.data.data,
        });
      },
    });
  },
  //兑换优惠券
  toAddCoupon(e){
    console.log(e)
    var that = this;
    var coupon = e.target.dataset.c;
    var integral = coupon*1*100;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var integrals = my.getStorageSync({
      key: 'integral', // 缓存数据的key
    }).data;
    var result = integrals*1-integral*1
    if(result>=0){
      my.httpRequest({
        url: app.globalData.baseUrl+'IF/integralLog/editIntegral.do', // 目标服务器url
        method: 'POST',
        header:{
              'content-type': 'application/x-www-form-urlencoded'
            },
        data: {
          userId:userId,
          integral:integral,
          type:2,
          remark:'兑换优惠券',
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            my.setStorageSync({
              key: 'integral', // 缓存数据的key
              data: result, // 要缓存的数据
            });
            my.httpRequest({
              url: app.globalData.baseUrl+'IF/coupon/addCoupon.do', // 目标服务器url
              method: 'POST',
              header:{
                    'content-type': 'application/x-www-form-urlencoded'
                  },
              data: {
                userId:userId,
                money:coupon,
                name:'积分优惠券',
                remark:'积分兑换优惠券',
                endTime:'3',
              },
              dataType: 'json',
              success: (res) => {
                if(res.data.success){
                  my.alert({
                    title: '兑换成功！' 
                  });
                }else{
                  my.alert({
                    title: '兑换失败！' 
                  });
                }
              },
            });
          }else{
            my.alert({
              title: res.data.message, 
            });
          }
        },
      });
    }else{
      my.alert({
        title: '积分不足！！！' 
      });
    }
  },
});
