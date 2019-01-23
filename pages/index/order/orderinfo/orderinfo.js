var app = getApp();
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    orderinfo:'',
    uname:'',
    uidCard:'',
    uphone:'',
    startDate:'',
    endDate:'',
    houseName:'',
    orderNo:'',
    payment:0,
    deposit:0,
    images:'',
    totalMoney:0,
    area:'',
    orderid:null,
    userId:null,
    status:null,
  },
  onLoad(option) {
    var that = this;
    var id = option.orderid;
    that.setData({
      orderid:id,
    });
    console.log(id)
    my.httpRequest({
      url: app.globalData.baseUrl_whj+'IF/order/getOrderById.do', // 目标服务器url
      method: 'POST',
      data:{
        id:id,
      },
      dataType: 'json',
      success: (res) => {
        console.log('----------info-----------')
        console.log(res)
        var order = res.data.data;
        that.setData({
          uname:order.consumerName,
          uidCard:order.consumerIdCard,
          uphone:order.consumerTel,
          startDate:order.startDate,
          endDate:order.endDate,
          houseName:order.housingName,
          orderNo:order.localOrderNo,
          payment:order.payment,
          deposit:order.deposit,
          images:order.images,
          totalMoney:order.totalMoney,
          area:order.area,
          userId:order.consumerId,
          status:order.status,
        });
      },
    });
  },
  onCancel(){
    console.log('取消订单')
    var id = this.data.orderid;
    var uid = this.data.userId;
    my.httpRequest({
      url:app.globalData.baseUrl_whj+'IF/order/cancelLocalOrder.do', // 目标服务器url
      method: 'POST',
      data:{
        userId:uid,
        orderId:id,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res);
        my.alert({
          title: '订单取消成功' 
        });
      },
      fail: (res) => {
        console.log(res);
        my.alert({ title: '取消失败，请稍后再试' });
      },
    });
  },
});
