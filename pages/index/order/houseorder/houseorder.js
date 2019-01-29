var app = getApp();
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    orderList:[],
    pageIndex:1,
    type:0
  },
  onLoad(option) {
   this.setData({
     type:option.type
   });
   console.log(this.data.type);
  },
  onShow(){
    console.log(this.data.type);
     this.getOrder();

  },
  getOrder(){
    var url;
    if(this.data.type==1){
      url=app.globalData.baseUrl_whj+"IF/order/getOrderByConsumer.do"
    }else if(this.data.type==2){
       url=app.globalData.baseUrl_whj+"IF/order/getOrderByLandlord.do"
    }
    var that = this;
    console.log('----------------'+that.data.pageIndex);
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url: url, // 目标服务器url
      method: 'POST',
      data:{
        userId:uid,
        pageIndex:that.data.pageIndex,
        pageSize:6,
      },
      dataType: 'json',
     success: function(res) {
        console.log(res.data);
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
      url: '/pages/index/order/orderinfo/orderinfo?orderid='+orderid+'&type='+this.data.type,
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
