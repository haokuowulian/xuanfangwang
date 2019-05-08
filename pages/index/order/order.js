var app = getApp();
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    orderList:[],
    pageIndex:1,
    type:0
  },
  onLoad(option) {
    if(option.type!=''){
      this.setData({
        type:option.type
      });
    }
   
   console.log(this.data.type);
  },
  onShow(){
    console.log(this.data.type);
     this.getOrder();
    // this.onPullDownRefresh();

  },
  // onUnload() {
  //   // 页面被关闭
  //   if(this.data.type==2){
  //     my.navigateBack({
  //       delta: 8
  //     });
  //   }
  // },
  getOrder(){
    var url=app.globalData.baseUrl_whj+"IF/order/getOrderByConsumer.do";
    
    console.log('url='+url);
    var that = this;
    console.log('----------------'+that.data.pageIndex);
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var token= my.getStorageSync({
      key: 'token', // 缓存数据的key
    }).data;
    console.log('token='+token)
    my.httpRequest({
      url: url, // 目标服务器url
      method: 'POST',
      data:{
        userId:uid,
        pageIndex:that.data.pageIndex,
        pageSize:6,
        token:token,
      },
      dataType: 'json',
     success: function(res) {
        console.log('111');
        console.log(res.data);
        console.log('222');
        console.log(res.data.count)
        if(res.data.success){
           if(that.data.pageIndex==1){
            that.setData({
              orderList:res.data.data,
            });
            }else if(that.data.orderList.length<res.data.count){
               that.setData({
                orderList:that.data.orderList.concat(res.data.data)
              });
            }
          my.stopPullDownRefresh();
        }else{
          console.log('获取失败');
          my.alert({
            title: '登陆超时，请重新登录！',
            buttonText: '确定',
            success: () => {
              my.navigateTo({
                url: '/pages/login/login',
              });
            },
          });
        }
      },
      fail: function(res) {
        console.log('-------fail--------');
        console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
  
  toOrderInfo(e){
    console.log(e.currentTarget.dataset.id)
    var orderid = e.currentTarget.dataset.id
    my.navigateTo({
      url: '/pages/index/order/orderinfo/orderinfo?orderid='+orderid+'&type='+this.data.type,
    });
  },
  toHouseInfo(e){
    console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.type)
    my.navigateTo({
      url: '/pages/houseinfo/houseinfo02/houseinfo02?id='+e.currentTarget.dataset.id+'&rentType='+e.currentTarget.dataset.type,
    })
  },
  //上拉监听
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
    this.getOrder();
  },
  onPullDownRefresh() {
    this.setData({
      pageIndex:1
    });
    this.getOrder();
  },
  //申请退款
  onRefund(e){
    console.log(e)
    var orderid = e.target.dataset.id;
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    
    my.confirm({
      title: '申请退款',
      content: '您正在申请退款，稍后由工作人员联系，是否确定？',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (res) => {
        if(res.confirm){
          my.httpRequest({
            url:app.globalData.base_whj+'IF/order/refundApplication.do', // 目标服务器url
            method: 'POST',
            data:{
              userId:uid,
              orderId:orderid,
            },
            dataType: 'json',
            success: (res) => {
              console.log(res);
              my.alert({
                title: '订单退款申请中', 
                success: (res) => {
                  console.log(res);
                  this.getOrder();
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
  // deleteOrder(e){
  //   console.log(e)
  // },
  //立即支付
  toPay(e){
    var that = this;
    var orderId = e.target.dataset.id;
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;

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
      url: app.globalData.base_whj+'IF/order/paySuccessAndSetAutoNo.do', // 目标服务器url
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
  //确认入住
  onConfirm(e){
    var that = this;
    var orderId = e.target.dataset.id;
    my.getAuthCode({
      scopes: 'auth_base',
      success: (res) => {
        var myCode=res.authCode;
        console.log(myCode)
        my.httpRequest({
          url:app.globalData.base_whj+ 'IF/alipay/tradePay.do', // 目标服务器url
          method: 'POST',
          data:{
            orderId:orderId,
            autoCode:myCode,
          },
          dataType: 'json',
          success: (res) => {
            console.log(res)
            if(res.data.success){
              that.getOrder();
            }
          },
        });
      },
    });
  },
  //删除订单
  deleteOrder(e){
    var that = this;
    var orderId = e.target.dataset.id;
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    console.log(uid)
    console.log(orderId)
    console.log('-------------delete1-----------------')
    my.httpRequest({
      url: app.globalData.base_whj+'IF/order/disabledOrder.do', // 目标服务器url
      method: 'POST',
      data:{
        orderId:orderId,
        userId:uid,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        console.log('-------------delete-----------------')
        if(res.data.success){
          console.log('-------------delete2-----------------')
          my.alert({
            title: '删除成功！' ,
            success: () => {
              that.onPullDownRefresh();
            },
          });
        }else{
          my.alert({
            title: '删除失败，请稍候再试！' 
          });
        }
      },
    });
  },
});


