var app = getApp();
Page({
  data: {
    imgUrl:app.globalData.baseImgUrl_whj,
    uname:'',
    ucard:'',
    startDate:'',
    endDate:'',
    houseInfo:null,
    payway:'',
    rentType:0,
    url:''
  },
  onLoad() {
    this.getOrderInfo();
  },
  goBack(){
    my.navigateBack({
      delta: 6
    });
  },
  toConfirm(){
    var that = this;
    that.toUpload();
  },
  getOrderInfo(){
    var that = this;
    var ucard = my.getStorageSync({
      key: 'ucard', // 缓存数据的key
    }).data;
    var uname= my.getStorageSync({
      key: 'uname', // 缓存数据的key
    }).data;
    var startDate = my.getStorageSync({
      key: 'ustartDate', // 缓存数据的key
    }).data;
    var endDate = my.getStorageSync({
      key: 'uendDate', // 缓存数据的key
    }).data;
    var houseInfo = my.getStorageSync({
      key: 'uhouseInfo', // 缓存数据的key
    }).data;
    var payway = my.getStorageSync({
      key: 'upayWay', // 缓存数据的key
    }).data;
    var rentType = my.getStorageSync({
      key: 'urentType', // 缓存数据的key
    }).data;

    that.setData({
      uname:uname,
      ucard:ucard,
      startDate:startDate,
      endDate:endDate,
      houseInfo:houseInfo,
      payway:payway,
      rentType:rentType,
    });
  },
  //预览合同
  toContractPage(){
    my.navigateTo({
      url: '/pages/index/signing/contract_preview/contract_preview',
    });
  },
  //签订合同
  // sign(){
  //    var that = this;
  //     var userId = my.getStorageSync({
  //     key: 'userId', // 消费者身份证号
  //   }).data;
  //   var ucard = my.getStorageSync({
  //     key: 'ucard', // 消费者身份证号
  //   }).data;
    
  //   var uname= my.getStorageSync({
  //     key: 'uname', // 消费者姓名
  //   }).data;
  //   var startDate = my.getStorageSync({
  //     key: 'ustartDate', // 出租时间
  //   }).data;
  //   var endDate = my.getStorageSync({
  //     key: 'uendDate', // 截止时间
  //   }).data;
    
  //   var urentType = my.getStorageSync({
  //     key: 'urentType', // 房源类型1/整租2/合租
  //   }).data;
  //   var houseInfo = my.getStorageSync({
  //     key: 'uhouseInfo', // 房源详情
  //   }).data;
  //   var landlordId = houseInfo.landlordId;//房东id
  //   var apartmentId='';
  //   var houseId='';
  //   var roomId='';
  //   var landlordId='';
  //   if(urentType==1){
  //     apartmentId=houseInfo.apartment.id;
  //     houseId=houseInfo.id;
  //     landlordId = houseInfo.landlordId;//房东id
  //   }else if(urentType==2){
  //     apartmentId=houseInfo.house.apartment.id
  //     houseId=houseInfo.houseId;
  //     roomId=houseInfo.id;
  //     landlordId = houseInfo.house.landlordId;//房东id
  //   }
  //    my.httpRequest({
  //     url: app.globalData.baseUrl+"IF/landlordRenterServlet", // 目标服务器url
  //     method: 'POST',
  //     data:{
        
  //       zkname:uname,
  //       zkidNo:ucard,
  //       apartmentId:apartmentId,
  //       houseId:houseId,
  //       rentType:urentType,
  //       roomId:roomId,
  //       uid:userId,
  //       fdid:landlordId,
  //       startTime:startDate,
  //       endTime:endDate,
  //     },
  //     dataType: 'json',
  //     success: (res) => {
  //       console.log('---------------');
  //       console.log(res);
  //       if(res.data.success){
  //         that.setData({
  //           url:res.data.url,
  //         });
  //         console.log('url:   '+that.data.url);
  //         // that.toUpload(res.data.contractId);
  //         that.toUpload();
  //       }

  //     },
  //     fail: (res) => {
  //      console.log(res);
  //      console.log('请求失败1~~');
  //     },
  //   });
  // },
  toUpload(){//contractId
    var that = this;
    var ucard = my.getStorageSync({
      key: 'ucard', // 消费者身份证号
    }).data;
    var upayUserId = my.getStorageSync({
      key: 'upayUserId', // 支付宝订单交易号
    }).data;
    var uname= my.getStorageSync({
      key: 'uname', // 消费者姓名
    }).data;
    var startDate = my.getStorageSync({
      key: 'ustartDate', // 出租时间
    }).data;
    var endDate = my.getStorageSync({
      key: 'uendDate', // 截止时间
    }).data;
    var payment = my.getStorageSync({
      key: 'upayment', // 支付形式(月/季/半年/年)
    }).data;
    var phone = my.getStorageSync({
      key: 'uphone', // 消费者联系方式
    }).data;
    var uid = my.getStorageSync({
      key: 'userId', // 用户id
    }).data;
    var fee = my.getStorageSync({
      key: 'ufee', // 服务费
    }).data;
    var deposit = my.getStorageSync({
      key: 'udeposit', // 押金
    }).data;
    var totalMoney = my.getStorageSync({
      key: 'uallPay', // 总金额
    }).data;
    var urentType = my.getStorageSync({
      key: 'urentType', // 房源类型1/整租2/合租
    }).data;
    var houseInfo = my.getStorageSync({
      key: 'uhouseInfo', // 房源详情
    }).data;
    var landlordId ;//房东id
    var housingId;
    var housingName;
    var rents;
    var area;
    var images;
    if(urentType==1){
      landlordId = houseInfo.landlordId;//房东id
      housingId = houseInfo.id;
      housingName = houseInfo.apartment.apartmentName+houseInfo.buildingUnit+houseInfo.houseNo;
      rents = houseInfo.entireRents;
      area = houseInfo.area;
      images = houseInfo.images.split(',')[0]
    }
    if(urentType==2){
      landlordId = houseInfo.house.landlordId;//房东id
      housingId = houseInfo.id;
      housingName = houseInfo.house.apartment.apartmentName+houseInfo.house.buildingUnit+houseInfo.roomName;
      rents = houseInfo.rents;
      area = houseInfo.area;
      images = houseInfo.images.split(',')[0]
    }
    // app.globalData.baseUrl_whj+
    my.httpRequest({
      // url: app.globalData.baseUrl_whj+"IF/order/addLocalOrder.do", // 目标服务器url 
      // url: app.globalData.baseUrl_whj+"IF/order/addAlipayOrder.do", // 目标服务器url
      // url: app.globalData.baseUrl_whj+"IF/order/addAlipayFreezeOrder2.do", // 目标服务器url
      // url: app.globalData.baseUrl_whj+"IF/order/addAlipayFreezeOrder.do", // 目标服务器url
      // url: app.globalData.baseUrl_whj+"IF/order/addOrder.do", // 目标服务器urlhttp://192.168.1.89:8080/LLGY/
      url: app.globalData.baseUrl_whj+"IF/order/addOrder.do", // 目标服务器
      method: 'POST',
      data:{
        userId:uid,
        // buyer_id:upayUserId,
        // totalMoney:totalMoney,
        // deposit:deposit,
        // fee:fee,
        // payment:payment,
        startDate:startDate,
        endDate:endDate,
        housingId:housingId,
        housingType:urentType,
        origin:2,
        // housingName:housingName,
        // rents:rents,
        // area:area,
        // images:images,
        // consumerId:uid,
        // consumerName:uname,
        // consumerIdCard:ucard,
        // consumerTel:phone,
        // landlordId:landlordId,
        // contractId:contractId
      },
      dataType: 'json',
      success: (res) => {
        console.log('222222222')
        console.log(res)
        console.log('222222222')
        if(res.data.success){
          var orderId = res.data.id;
          my.httpRequest({
            url:  app.globalData.baseUrl_whj+"IF/alipay/fundAuthOrderAppFreeze.do", // 目标服务器
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
                    console.log('444444444444')
                    console.log(res)
                    console.log('444444444444')
                    if(res.resultCode ==6001){
                      my.navigateTo({
                        url:'/pages/index/signing/payment_result/payment_result?resultCode='+res.resultCode+'&type=1',
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


        
        }else{
          my.alert({
            title: res.data.message 
          });
        }

      },
      fail: (res) => {
       console.log(res);
       console.log('请求失败2~~');
      },
    });
  },
  //上传支付结果状态码
  uploadCode(orderId,payWay,resultCode,alipayOrderNo){
    my.httpRequest({
      // url: app.globalData.baseUrl_whj+'IF/order/payAlipayFreezeOrder.do', // 目标服务器url
      //  url: app.globalData.baseUrl_whj+'IF/order/payAlipayOrder.do', // 目标服务器url
      url: app.globalData.baseUrl_whj+'IF/order/paySuccessAndSetAutoNo.do', // 目标服务器url
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
            url:'/pages/index/signing/payment_result/payment_result?resultCode='+resultCode+'&type=1',
          });
        }
      },
    });
  },
  
});
