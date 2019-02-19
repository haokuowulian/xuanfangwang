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
    type:0
  },
  onLoad(option) {
    var that = this;
    var id = option.orderid;
    that.setData({
      orderid:id,
      type:option.type
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
        if(res.confirm){
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
              title: '订单取消成功', 
              success: (res) => {
                my.navigateBack();
              }
            });
          },
          fail: (res) => {
            console.log(res);
            my.alert({ title: '取消失败，请稍后再试' });
          },
        });
        }
        
      },
    });
    
  },
  onRefund(){
    var id = this.data.orderid;
    var uid = this.data.userId;
    my.confirm({
      title: '申请退款',
      content: '您正在申请退款，稍后由工作人员联系，是否确定？',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (res) => {
        if(res.confirm){
          my.httpRequest({
          url:app.globalData.baseUrl_whj+'IF/order/refundApplication.do', // 目标服务器url
          method: 'POST',
          data:{
            userId:uid,
            orderId:id,
          },
          dataType: 'json',
          success: (res) => {
            console.log(res);
            my.alert({
              title: '订单退款申请中', 
              success: (res) => {
                console.log(res);
              }
            });
          },
          fail: (res) => {
            console.log(res);
            my.alert({ title: '申请退款失败，请稍后再试' });
          },
        });
        }
        
      },
    });
  },
  toPay(){
    var that = this;
    var tradeNO=that.data.tradeNO;
    var uid = that.data.userId;
    var orderId = that.data.orderid;
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
    //退款处理
  dealOrder(){
    var that=this;
    my.confirm({
      title: '提示',
      content: '是否同意该退款申请',
      confirmButtonText: '同意',
      cancelButtonText: '拒绝',
      success: (result) => {
        if(result.confirm){//同意
          that.confirm();
        }else{//拒绝
          that.refuse();
        }
      },
    });
  },
  //同意退款
  confirm(){
    var that=this;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/order/refundAlipayOrder.do", // 目标服务器url
      method: 'POST',
      data:{
        userId:this.data.userId,
        orderId:this.data.orderid
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
           my.showToast({
            content: '退款处理成功',
            duration: 2000
          });
          that.navigateBack();
        }
      },
      fail: function(res) {
        console.log('-------fail--------'+res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  }
});
