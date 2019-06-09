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
  onCancel(e){
    console.log('取消订单')
    var id = this.data.orderid;
    var uid = this.data.userId;
    var couponId = e.target.dataset.couponId;
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
            console.log('取消成功');
            console.log(res);
            if(couponId!=''&&couponId!=null){
              that.editCouponState(couponId);
            }
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
    //改优惠券状态
  editCouponState(couponId){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 用户id
    }).data;
    if(voucher_id!=null||voucher_id!=''){
      my.httpRequest({
        url: app.globalData.baseUrl_whj+'IF/coupon/editCouponState.do', // 目标服务器url
        method: 'POST',
        data:{
          id:couponId,
          userId:userId,
          state:0,
        },
        dataType: 'json',
        success: (res) => {
          console.log('优惠券返还成功')
        },
      });
    }else{
      console.log('优惠券返还失败')
    }
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
                my.navigateBack();
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
    var orderId = that.data.orderid;

    my.httpRequest({
      url: app.globalData.base_whj+"IF/alipay/fundAuthOrderAppFreeze.do", // 目标服务器
      method: 'POST',
      data:{
        // userId:uid,
        orderId:orderId,
      },
      dataType: 'json',
      success: (res) => {
        console.log('333333333333')
        console.log(res)
        console.log('333333333333')
        if(res.data.success){
          var myOrderStr = res.data.data;
          console.log(myOrderStr)
          my.tradePay({
            orderStr: myOrderStr, //完整的支付参数拼接成的字符串，从服务端获取
            success: (res) => {
              var json1 = res.result;
              console.log(res)
              if(res.resultCode ==6001){
                my.navigateTo({
                  url:'/pages/index/signing/payment_result/payment_result?resultCode='+res.resultCode+'&type=2',
                });
              }else if(res.resultCode ==9000){
                var json2 = JSON.parse(json1);
                console.log(json2)
                var json3 = json2['alipay_fund_auth_order_app_freeze_response'];
                var alipayOrderNo = json3.auth_no;
                
                console.log(alipayOrderNo)
                that.uploadCode(orderId,1,res.resultCode,alipayOrderNo);
              }

            },
            fail: (res) => {
              my.alert({
                content: JSON.stringify(res),
              });
            }
          });
        }
      }
    });
  },
   //上传支付结果状态码
  uploadCode(orderId,payWay,resultCode,alipayOrderNo){
    my.httpRequest({
      // url: app.globalData.baseUrl_whj+'IF/order/payAlipayFreezeOrder.do', // 目标服务器url
      //  url: app.globalData.baseUrl_whj+'IF/order/payAlipayOrder.do', // 目标服务器url
      url:  app.globalData.base_whj+'IF/order/paySuccessAndSetAutoNo.do', // 目标服务器url
      method: 'POST',
      data:{
        orderId:orderId,
        payWay:payWay,
        auth_no:alipayOrderNo,
      },
      dataType: 'json',
      success: (res) => {
        //  that.sign();
        console.log('success');
        console.log(res);
        if(res.data.success){
          my.navigateTo({
            url:'/pages/index/signing/payment_result/payment_result?resultCode='+resultCode+'&type=2',
          });
        }
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
