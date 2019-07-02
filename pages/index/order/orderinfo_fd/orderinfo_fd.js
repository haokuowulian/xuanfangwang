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
    pay:false,
    linkOrderId:'',
  },
  onLoad(option) {
    var that = this;
    var id = option.orderid;
    that.setData({
      orderid:id,
      type:option.type
    });
    console.log(id)
    my.request({
      // url: app.globalData.baseUrl_whj+'IF/order/getOrderById.do', // 目标服务器url
      url: app.globalData.baseUrl_whj+'IF/order/getOrderById.do', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        id:id,
      },
      dataType: 'json',
      success: (res) => {
        console.log('----------info-----------')
        console.log(res)
        var order = res.data.data;
        if(order.status==9){
            that.setData({
              pay:true,
            });
          }else{
            that.setData({
              pay:false,
            });
          }
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
          linkOrderId:order.linkOrderId,
          couponId:order.couponId,
        });
      },
    });
  },
  onShow(){
    console.log('刷新页面中')
    var that = this;
    var id = that.data.orderid;
    if(id!=''&&id!=null){
      my.request({
        // url: app.globalData.baseUrl_whj+'IF/order/getOrderById.do', // 目标服务器url
        url: app.globalData.baseUrl_whj+'IF/order/getOrderById.do', // 目标服务器url
        method: 'POST',
        headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          id:id,
        },
        dataType: 'json',
        success: (res) => {
          console.log('----------info-----------')
          console.log(res)
          var order = res.data.data;
          if(order.status==9){
            that.setData({
              pay:true,
            });
          }else{
            that.setData({
              pay:false,
            });
          }
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
            couponId:order.couponId,
          });
        },
      });
    }
    
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
          my.request({
          url:app.globalData.baseUrl_whj+'IF/order/cancelLocalOrder.do', // 目标服务器url
          method: 'POST',
          headers:{
            'content-type': 'application/x-www-form-urlencoded'
          },
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
    var status = that.data.status;
    console.log(status)
    console.log(certified)
    var pay = that.data.pay;
    if(certified){
      if(status==9){
        my.navigateTo({
          url:'/pages/index/credit1/credit1?userId='+userId+'&uidCard='+uidCard+'&orderid='+orderid+'&pay=false'+'&status='+status,
        });
      }else{
        my.navigateTo({
          url:'/pages/index/credit/credit?userId='+userId+'&uidCard='+uidCard+'&orderid='+orderid+'&pay=false'+'&status='+status,
        });
      }
    }else{
      console.log(uidCard)
      my.request({
        // app.globalData.baseUrl_whj+
        url: app.globalData.baseUrl_whj+'IF/alipay/certifiedPay.do', // 目标服务器url
        method: 'POST',
        headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
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
                if(status==9){
                  my.navigateTo({
                    url:'/pages/index/credit1/credit1?userId='+userId+'&uidCard='+uidCard+'&orderid='+orderid+'&pay=false'+'&status='+status,
                  });
                }else{
                  my.navigateTo({
                    url:'/pages/index/credit/credit?userId='+userId+'&uidCard='+uidCard+'&orderid='+orderid+'&pay=false'+'&status='+status,
                  });
                }
                
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
  toCredit(){
    var that = this;
    var orderid = that.data.orderid;
    var userId = that.data.userId;
    var uidCard = this.data.uidCard;
    var status = that.data.status;
    if(status==9){
      my.navigateTo({
        url:'/pages/index/credit1/credit1?userId='+userId+'&uidCard='+uidCard+'&orderid='+orderid+'&pay=false'+'&status='+status,
      });
    }else{
      my.navigateTo({
        url:'/pages/index/credit/credit?userId='+userId+'&uidCard='+uidCard+'&orderid='+orderid+'&pay=false'+'&status='+status,
      });
    }
  },
  //房东认证支付成功http://192.168.1.193:8080/LLGY/IF/order/successCertified.do
  successCertified(orderid){
    my.request({
      // app.globalData.baseUrl_whj+
      url: app.globalData.baseUrl_whj+'IF/order/successCertified.do', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
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
    my.request({
      url: app.globalData.baseUrl_whj+"IF/alipay/refundUnfreezeOrder.do", // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        userId:this.data.userId,
        orderId:this.data.orderid
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          that.editCouponState();
          my.alert({
            title: '退款操作成功！' ,
            success: () => {
              my.navigateBack();
            },

          });
      
        }
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
      //改优惠券状态
  editCouponState(){
    var that = this;
    var userId = that.data.userId;
    var couponId = that.data.couponId;
    if(couponId!=null&&couponId!=''){
      my.request({
        url: app.globalData.baseUrl_whj+'IF/coupon/editCouponState.do', // 目标服务器url
        method: 'POST',
        headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
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
});
