Page({
  data: {},
  onLoad() {},
  toHouseOrderList(){
    my.navigateTo({
      url: '/pages/index/order/houseorder/houseorder?type=1',//1：租客；2：房东
    });
  },
  toTest(){
    my.navigateTo({
      url: '/pages/index/order/orderinfo/orderinfo',
    });
  },
});
