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
 
});
