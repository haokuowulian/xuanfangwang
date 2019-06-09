var app = getApp();
Page({
  data: {
    integral:null,
    couponlist:[],
    pageIndex:1,
    choose:false,
  },
  onLoad(option) {
    // that.getCouponList();
  },
  onShow(){
    var that = this;
    that.getIntegral();
    that.getCouponList();
  },
  //获取用户消费积分
  getIntegral(){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/integralLog/getIntegralByUserId.do', // 目标服务器url
      method: 'POST',
      header:{
            'content-type': 'application/x-www-form-urlencoded'
          },
      data: {
        userId:userId,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        that.setData({
          integral:res.data.user.integral,
        });
        my.setStorageSync({
          key: 'integral', // 缓存数据的key
          data: res.data.user.integral, // 要缓存的数据
        });
      },
    });
  },
  //获取用户优惠券列表
  getCouponList(){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var voucher_id = my.getStorageSync({
      key: 'voucher_id', // 缓存数据的key
    }).data;
    
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/coupon/getCouponListByUserId.do', // 目标服务器url
      method: 'POST',
      header:{
            'content-type': 'application/x-www-form-urlencoded'
          },
      data: {
        userId:userId,
        state:0,
        pageIndex:that.data.pageIndex,
        pageSize:5,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        var list = res.data.data;
        for(let i=0;i<list.length;i++){
          if(list[i].id==voucher_id){
            list[i].disabled=true;
            break;
          }
        }
        if(that.data.pageIndex==1){
          that.setData({
            couponlist:list,
          });
        }else if(that.data.couponlist.length<res.data.count){
          that.setData({
            couponlist:that.data.couponlist.concat(list)
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
    my.removeStorageSync({
      key: 'voucher_id',
    });
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.data.voucher_id=null;
    prevPage.data.voucher=0;
    my.navigateBack({
      delta: 1,
    });
    
  },
  //选定优惠券
  toChoose(e){
    var that = this;
    var couponlist = that.data.couponlist;
    var index = e.target.dataset.index;
    var id = e.target.dataset.id;
    var money = e.target.dataset.money;
    for(let i=0;i<couponlist.length;i++){
      if(couponlist[i].id==id){
        couponlist[i].disabled=true;
      }else{
        couponlist[i].disabled=false;
      }

    }
    that.setData({
      couponlist:couponlist,
    });

    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.data.voucher_id=id;
    prevPage.data.voucher=money;
    my.navigateBack({
      delta: 1,
    });
    // my.navigateBack();
  },
});