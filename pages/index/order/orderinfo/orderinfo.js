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
    tradeNO:null,
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
          tradeNO:order.alipayOrderNo,
        });
      },
    });
  },
  onCancel(){
    console.log('取消订单')
    var id = this.data.orderid;
    var uid = this.data.userId;
    my.confirm({
      title: '取消订单提示',
      content: '您正在取消订单，是否确定？',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (res) => {
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
    
  },
  toPay(){
    var tradeNO=this.data.tradeNO;
    var uid = this.data.userId;
    my.tradePay({
      tradeNO: tradeNO, // 调用统一收单交易创建接口alipay.trade.create）,获得返回字段支付宝交易号trade_no
      success: (res) => {
        console.log('-------success--------');
        console.log(res);
        that.uploadCode(uid,orderId,res.resultCode);
        my.navigateTo({
          url:'/pages/index/signing/payment_result/payment_result?payment='+res.resultCode,
        });
      },
      fail: (res) => {
        console.log('-------fail--------');
        console.log(res);
        that.uploadCode(uid,orderId,res.resultCode);
        my.navigateTo({
          url:'/pages/index/signing/payment_result/payment_result?payment='+res.resultCode,
        });
      }
    });
  },
  uploadCode(uid,orderId,resultCode){
    my.httpRequest({
      url: app.globalData.baseUrl_whj+'IF/order/payAlipayOrder.do', // 目标服务器url
      method: 'POST',
      data:{
        userId:uid,
        orderId:orderId,
        resultCode:resultCode,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res+'状态码上传成功');
      },
    });
  },
});
