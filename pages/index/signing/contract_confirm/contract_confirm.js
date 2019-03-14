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
    // that.toUpload();
    // that.sign();
    // my.confirm({
    //   title: '租 房 合 同 书（模板）',
    //   content: '甲方将房屋租给乙方使用，经双方协商，订立如下协议： 一、 租用期时间自选。二、 租金按约定金额支付，收租期为合同生效下个月当天。三、 付款方法：签订合同后，甲方向乙方收取一个月押金，而押金不能作租金用途。四、 电费、水费、卫生费、物业费等一切杂费由双方协商。五、 乙方如中途退房，应提前一个月通知甲方，否则不退押金，不能私自转租他人及更改用途，否则甲方有权收回此房屋，押金不退。六、 乙方要遵守法律制度及治安管理条例，如有违法乙方自行解决与甲方无关。七、 乙方要自觉爱护甲方财物，如有损坏，则要按价赔偿。八、 乙方如违反合约或有违法行为，甲方有权提前收回此房屋，押金不退。九、 乙方在房屋内装修需甲方同意。十、 此合同将生产电子合同，双方各执一份，双方电子签章后生效。',
    //   confirmButtonText: '确认',
    //   cancelButtonText: '取消',
    //   success: (res) => {
    //     console.log(res)
    //     if(res.confirm){
    //       console.log('同意合同内容')
    //       // that.sign();
    //       // that.toUpload();
    //     }else{
    //       // my.navigateBack();
    //     }
    //   },
    // });


    my.confirm({
      title: '确认合同',
      content: '您确认签订此合同吗？',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (res) => {
        console.log(res)
        if(res.confirm){
          that.sign();
        }else{
          my.alert({
            title: '合同取消签订！'
          });
        }
      },
    });
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
  sign(){
     var that = this;
      var userId = my.getStorageSync({
      key: 'userId', // 消费者身份证号
    }).data;
    var ucard = my.getStorageSync({
      key: 'ucard', // 消费者身份证号
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
    
    var urentType = my.getStorageSync({
      key: 'urentType', // 房源类型1/整租2/合租
    }).data;
    var houseInfo = my.getStorageSync({
      key: 'uhouseInfo', // 房源详情
    }).data;
    var landlordId = houseInfo.landlordId;//房东id
    var apartmentId='';
    var houseId='';
    var roomId='';
    var landlordId='';
    if(urentType==1){
      apartmentId=houseInfo.apartment.id;
      houseId=houseInfo.id;
      landlordId = houseInfo.landlordId;//房东id
    }else if(urentType==2){
      apartmentId=houseInfo.house.apartment.id
      houseId=houseInfo.houseId;
      roomId=houseInfo.id;
      landlordId = houseInfo.house.landlordId;//房东id
    }
     my.httpRequest({
      url: app.globalData.baseUrl+"IF/landlordRenterServlet", // 目标服务器url
      method: 'POST',
      data:{
        
        zkname:uname,
        zkidNo:ucard,
        apartmentId:apartmentId,
        houseId:houseId,
        rentType:urentType,
        roomId:roomId,
        uid:userId,
        fdid:landlordId,
        startTime:startDate,
        endTime:endDate,
      },
      dataType: 'json',
      success: (res) => {
        console.log('---------------');
        console.log(res);
        if(res.data.success){
          that.setData({
            url:res.data.url,
          });
          console.log('url:   '+that.data.url);
          that.toUpload(res.data.contractId);
        }

      },
      fail: (res) => {
       console.log(res);
       console.log('请求失败1~~');
      },
    });
  },
  toUpload(contractId){//contractId
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
      url: app.globalData.baseUrl_whj+"IF/order/addAlipayOrder.do", // 目标服务器url
      // url: app.globalData.baseUrl_whj+"IF/order/addAlipayFreezeOrder2.do", // 目标服务器url
      method: 'POST',
      data:{
        // userId:uid,
        buyer_id:upayUserId,
        totalMoney:totalMoney,
        deposit:deposit,
        fee:fee,
        payment:payment,
        startDate:startDate,
        endDate:endDate,
        housingId:housingId,
        housingType:urentType,
        housingName:housingName,
        rents:rents,
        area:area,
        images:images,
        consumerId:uid,
        consumerName:uname,
        consumerIdCard:ucard,
        consumerTel:phone,
        landlordId:landlordId,
        contractId:contractId
      },
      dataType: 'json',
      success: (res) => {
        console.log('222222222')
        console.log(res)
        // if(res.data.success){
        //   var orderId = res.data.orderId;
        // var myOrderStr = res.data.message;
        // my.tradePay({
        //   orderStr: myOrderStr, //完整的支付参数拼接成的字符串，从服务端获取
        //   success: (res) => {
        //     // console.log(res)
        //     // console.log(JSON.stringify(res))
        //     var json1 = res.result;
        //     console.log(res)
        //     if(res.resultCode ==6001){
        //       my.navigateTo({
        //         url:'/pages/index/signing/payment_result/payment_result?resultCode='+res.resultCode,
        //       });
        //     }else{
        //       var json2 = JSON.parse(json1);
        //       console.log(json2)
        //       var json3 = json2['alipay_fund_auth_order_app_freeze_response'];
        //       // console.log(json3)
        //       var alipayOrderNo = json3.auth_no;
              
        //       console.log(alipayOrderNo)
        //       that.uploadCode(uid,orderId,alipayOrderNo,res.resultCode);
        //     }

        //   },
        //   fail: (res) => {
        //     my.alert({
        //       content: JSON.stringify(res),
        //     });
        //     }
        //   });
        // }else{
        //   my.alert({
        //     title: res.data.message 
        //   });
        // }
        

        // my.httpRequest({
        //   url: app.globalData.baseUrl_whj+'IF/test/alipayTest2.do', // 目标服务器url
        //   method: 'POST',
        //   dataType: 'json',
        //   success: (res) => {
        //     console.log(res)
        //     var myOrderStr = res.data.message;
        //     my.tradePay({
        //       orderStr: myOrderStr, //完整的支付参数拼接成的字符串，从服务端获取
        //       success: (res) => {
        //         console.log(res)
        //         console.log(JSON.stringify(res))
        //         // my.alert({
        //         //   content: JSON.stringify(res),
        //         // });
        //       },
        //       fail: (res) => {
        //         my.alert({
        //         content: JSON.stringify(res),
        //       });
        //       }
        //     });
        //   },
        // });


        console.log('---------------');
        console.log(res);
        console.log('订单提交成功！！！')
        var orderId = res.data.orderId;
        console.log(orderId);
        // var myOrderStr = res.data.message;
        // my.tradePay({
        //   orderStr: myOrderStr, //完整的支付参数拼接成的字符串，从服务端获取
        //   success: (res) => {
        //     console.log(res)
        //     console.log(JSON.stringify(res))
        //     my.alert({
        //       content: JSON.stringify(res),
        //     });
        //   },
        //   fail: (res) => {
        //     my.alert({
        //     content: JSON.stringify(res),
        //   });
        //   }
        // });
        
        my.tradePay({
            tradeNO: res.data.data.alipay_trade_create_response.trade_no,
            success: (res) => {
              console.log('-------success--------');
              console.log(res);
              console.log('开始支付:');
              that.uploadCode(uid,orderId,res.resultCode,contractId);
              if(res.resultCode ==6001){
                my.navigateTo({
                  url:'/pages/index/order/order?type=2',
                });
              }else{
                my.navigateTo({
                  // url:'/pages/index/signing/payment_result/payment_result?payment='+res.resultCode+'&url='+that.data.url,
                  url:'/pages/index/signing/payment_result/payment_result?resultCode='+res.resultCode+'&type=1',
                });
              }
             
            },
            fail: (res) => {
              console.log('-------fail--------');
              console.log(res);
              that.uploadCode(uid,orderId,res.resultCode,contractId);
              // my.navigateTo({
              //   url:'/pages/index/signing/payment_result/payment_result?payment='+res.resultCode,
              // });
            }
          });

      },
      fail: (res) => {
       console.log(res);
       console.log('请求失败2~~');
      },
    });
  },
  uploadCode(uid,orderId,resultCode,contractId){//,contractId
    my.httpRequest({
      // url: app.globalData.baseUrl_whj+'IF/order/payAlipayFreezeOrder.do', // 目标服务器url
       url: app.globalData.baseUrl_whj+'IF/order/payAlipayOrder.do', // 目标服务器url
      method: 'POST',
      data:{
        userId:uid,
        orderId:orderId,
        resultCode:resultCode,
        contractId:contractId,
      },
      dataType: 'json',
      success: (res) => {
        //  that.sign();
        console.log('success');
        console.log(res);
        if(res.data.success){
          console.log('------')
          console.log(resultCode)
          console.log('------')
          my.navigateTo({
            url:'/pages/index/signing/payment_result/payment_result?resultCode='+resultCode+'&type=1',
          });
        }
      },
    });
  },
  // uploadCode(uid,orderId,alipayOrderNo,resultCode,contractId){//,contractId
  //   my.httpRequest({
  //     // url: app.globalData.baseUrl_whj+'IF/order/payAlipayFreezeOrder.do', // 目标服务器url
  //      url: app.globalData.baseUrl_whj+'IF/order/payAlipayOrder.do', // 目标服务器url
  //     method: 'POST',
  //     data:{
  //       userId:uid,
  //       orderId:orderId,
  //       alipayOrderNo:alipayOrderNo,
  //       contractId:contractId,
  //     },
  //     dataType: 'json',
  //     success: (res) => {
  //       //  that.sign();
  //       console.log('success');
  //       console.log(res);
  //       if(res.data.success){
  //         console.log('------')
  //         console.log(resultCode)
  //         console.log('------')
  //         my.navigateTo({
  //           url:'/pages/index/signing/payment_result/payment_result?resultCode='+resultCode+'&type=1',
  //         });
  //       }
  //     },
  //   });
  // },
  
});
