Page({
  data: {},
  onLoad() {},
  toBankCard(){
    my.navigateTo({
      url: '/pages/index/wallet/bank_card/bank_card',
    });
  },
  toMyPayment(){
    my.navigateTo({
      url: '/pages/index/wallet_fangdong/my_payment/my_payment',
    });
  },
  toMySettlement(){
    my.navigateTo({
      url: '/pages/index/wallet_fangdong/settlement/settlement',
    });
  },
});
