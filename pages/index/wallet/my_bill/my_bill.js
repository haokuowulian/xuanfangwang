var app = getApp();
Page({
  data: {
    orderList:[],
  },
  onLoad() {
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    if(userId!=''){
      my.httpRequest({
        url:app.globalData.baseUrl+ 'IF/walletLog/getWalletLogListByUserId.do', // 目标服务器url
        method: 'POST',
        data:{
          userId:75,
          pageIndex:1,
          pageSize:10,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          var list = res.data.data;
          that.setData({
            orderList:list,
          });
        },
      });
    }else{

    }
  },
});
