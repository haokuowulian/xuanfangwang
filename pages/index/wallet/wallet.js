Page({
  data: {},
  onLoad() {},
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
