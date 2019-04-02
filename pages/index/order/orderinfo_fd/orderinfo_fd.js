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
    type:0,
    sex:'男',
    age:0,
    certified:false,
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
      // url: app.globalData.baseUrl_whj+'IF/order/getOrderById.do', // 目标服务器url
      url: app.globalData.base_whj+'IF/order/getOrderById.do', // 目标服务器url
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
          certified:order.certified,
        });
      },
    });
  },
  onCancel(){
    console.log('取消订单')
    var id = this.data.orderid;
    var uid = this.data.userId;
    console.log(id)
    console.log(uid)
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
            userId:this.data.userId,
            orderId:this.data.orderid,
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
  
  toPay(){
    var that = this;
    var orderid = that.data.orderid;
    var userId = that.data.userId;
    var uidCard = this.data.uidCard;
    var certified = this.data.certified;
    if(certified){
      my.navigateTo({
        url:'/pages/index/credit/credit?userId='+userId+'&uidCard='+uidCard+'&orderid='+orderid,
      });
    }else{
      console.log(uidCard)
      my.httpRequest({
        // app.globalData.baseUrl_whj+
        url: app.globalData.base_whj+'IF/alipay/certifiedPay.do', // 目标服务器url
        method: 'POST',
        data:{
          orderId:orderid,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          var trade_no = res.data.trade_no;
          my.tradePay({
            tradeNO:trade_no,
            success: (res) => {
              if(res.resultCode==9000){
                that.successCertified(orderid);
                my.navigateTo({
                  url:'/pages/index/credit/credit?userId='+userId+'&uidCard='+uidCard+'&orderid='+orderid,
                });
              }else{
                my.alert({
                  title: '支付失败！' 
                });
              }
            },
            
          });
          
        },
      });
    }
    
  },
  //房东认证支付成功http://192.168.1.193:8080/LLGY/IF/order/successCertified.do
  successCertified(orderid){
    my.httpRequest({
      // app.globalData.baseUrl_whj+
      url: app.globalData.base_whj+'IF/order/successCertified.do', // 目标服务器url
      method: 'POST',
      data:{
        orderId:orderid,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
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
          // that.refuse();
        }
      },
    });
  },
  //同意退款
  confirm(){
    var that=this;
    my.httpRequest({
      url: app.globalData.base_whj+"IF/alipay/refundUnfreezeOrder.do", // 目标服务器url
      method: 'POST',
      data:{
        userId:this.data.userId,
        orderId:this.data.orderid
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          my.alert({
            title: '退款操作成功！' ,
            success: () => {
              my.navigateBack();
            },

          });
          //  my.showToast({
          //   content: '退款处理成功',
          //   duration: 2000
          // });
          
        }
      },
      // fail: function(res) {
      //   console.log('-------fail--------'+res);
      //   console.log(res);
      // },
      complete: function(res) {
        my.hideLoading();
      }
    });
  }
});
