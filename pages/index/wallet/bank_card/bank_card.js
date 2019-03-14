const mycard = [
  {
    id:0,
    name:'工商银行',
    type:'储蓄卡',
    cardNo:'************5456',
  },
  {
    id:1,
    name:'农业银行',
    type:'储蓄卡',
    cardNo:'************9292',
  },
]
Page({
  data: {
    mycard:mycard,
  },
  onLoad() {},
  toAddCard(){
    my.navigateTo({
      url: '/pages/index/wallet/add_card/add_card',
    });
  },
  //验证银行卡是否有效
  toText(){
    my.httpRequest({
      //https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?cardNo=1111&cardBinCheck=true
      url: 'https://ccdcapi.alipay.com/validateAndCacheCardInfo.json', // 目标服务器url
      method: 'POST',
      data: {
        cardNo:'6212261203018719574',
        cardBinCheck:true,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
      },
    });
  },
});
