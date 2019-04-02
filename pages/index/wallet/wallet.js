var app = getApp();
Page({
  data: {
    money:'',
  },
  onLoad() {},
  onShow(){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    if(userId!=''){
      my.httpRequest({
        url:app.globalData.baseUrl+ 'IF/wallet/getWalletByUserId.do', // 目标服务器url
        method: 'POST',
        data:{
          userId:75,
        },
        dataType: 'json',
        success: (res) => {
          that.setData({
            money:res.data.wallet.money,
          });
        },
      });
    }
  },
  toMyBill(){
    my.navigateTo({
      url: '/pages/index/wallet/my_bill/my_bill',
    });
  },
  toRecharge(){
    my.navigateTo({
      url: '/pages/index/wallet/recharge/recharge',
    });
  },
  toWithdraw(){
    my.navigateTo({
      url: '/pages/index/wallet/cash_withdrawal/cash_withdrawal',
    });
  },
  toBankCard(){
    my.navigateTo({
      url: '/pages/index/wallet/bank_card/bank_card',
    });
  },
  toInfo(){
    my.navigateTo({
      url: '/pages/index/wallet/myinfo/myinfo',
    });
  },
  updataPassword(){
    my.navigateTo({
      url: '/pages/index/wallet/updata_pwd/updata_pwd',
    });
  },
  forgetPassword(){
    my.navigateTo({
      url: '/pages/index/wallet/forget_pwd/forget_pwd',
    });
  },
});
