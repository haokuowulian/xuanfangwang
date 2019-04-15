var app = getApp();
Page({
  data: {
    orderList:[],
    pageIndex:1,
  },
  onLoad() {
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    if(userId!=''){
      my.httpRequest({
        url:app.globalData.baseUrl+ 'IF/wallet/getWalletLogListByUserId.do', // 目标服务器url
        method: 'POST',
        data:{
          userId:userId,
          pageIndex:1,
          pageSize:10,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
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
        },
      });
    }else{

    }
  },
});
