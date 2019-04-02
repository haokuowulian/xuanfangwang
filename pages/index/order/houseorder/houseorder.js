var app = getApp();
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    orderList:[],
    pageIndex:1,
    type:0
  },
  onLoad(option) {
    if(option.type!=''){
      this.setData({
        type:option.type
      });
    }
   
   console.log(this.data.type);
  },
  onShow(){
    console.log(this.data.type);
     this.getOrder();

  },
  getOrder(){
    var that = this;
    var url=app.globalData.baseUrl_whj+"IF/order/getOrderByLandlord.do";
    // if(this.data.type==1){
    //   url=app.globalData.baseUrl_whj+"IF/order/getOrderByConsumer.do"
    // }else if(this.data.type==2){
    //    url=app.globalData.baseUrl_whj+"IF/order/getOrderByLandlord.do"
    // }
    console.log('url='+url);
    console.log('----------------'+that.data.pageIndex);
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var token= my.getStorageSync({
      key: 'token', // 缓存数据的key
    }).data;
    console.log('token='+token)
    my.httpRequest({
      url: url, // 目标服务器url
      // headers:{
      //   'Content-Type': 'application/json',
      //   'Cookie': "uuid=" + token,
      //   },
      method: 'POST',
      data:{
        userId:uid,
        pageIndex:that.data.pageIndex,
        pageSize:6,
        token:token,
      },
      dataType: 'json',
     success: function(res) {
        console.log('111');
        console.log(res.data);
        console.log('222');
        if(res.data.success){
           if(that.data.pageIndex==1){
            that.setData({
              orderList:res.data.data,
          });
            }else if(that.data.orderList.length<res.data.count){
               that.setData({
                orderList:that.data.orderList.concat(res.data.data)
              });
            }
          my.stopPullDownRefresh();
        }else{
          my.alert({
            title: '登陆超时，请重新登录！',
            buttonText: '确定',
            success: () => {
              my.navigateTo({
                url: '/pages/login/login',
              });
            },
          });
        }
      },
      fail: function(res) {
        console.log('-------fail--------');
        console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
  
  toOrderInfo(e){
    console.log(e.currentTarget.dataset.id)
    var orderid = e.currentTarget.dataset.id
    my.navigateTo({
      url: '/pages/index/order/orderinfo_fd/orderinfo_fd?orderid='+orderid+'&type='+this.data.type,
    });
  },
  toHouseInfo(e){
    console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.type)
    my.navigateTo({
    url: '/pages/houseinfo/houseinfo01/houseinfo01?id='+e.currentTarget.dataset.id+'&rentType='+e.currentTarget.dataset.type,
    })
  },
  //上拉监听
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
    this.getOrder();
  },

});
