var app = getApp();
Page({
  data: {
    money:'',
    perfect:false,
    payPassword:'',
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
          userId:userId,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            that.setData({
              money:res.data.wallet.money,
              payPassword:res.data.wallet.payPassword,
            });
            if(res.data.wallet.txAlipay!=''&&res.data.wallet.txAlipay!=null){
              that.setData({
                perfect:true,
              });
            }
          }
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
    var that = this;
    if(that.data.perfect){
      my.navigateTo({
        url: '/pages/index/wallet/cash_withdrawal/cash_withdrawal',
      });
    }else{
      my.alert({
        title: '请先完善钱包信息' 
      });
    }
    
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
  toEditInfo(){
    my.navigateTo({
      url: '/pages/index/wallet/myinfo_edit/myinfo_edit',
    });
  },
  updataPassword(){
    my.navigateTo({
      url: '/pages/index/wallet/updata_pwd/updata_pwd',
    });
  },
  forgetPassword(){
    my.navigateTo({
      url: '/pages/index/wallet/forget_pwd/forget_pwd?payPassword='+this.data.payPassword,
    });
  },
});
