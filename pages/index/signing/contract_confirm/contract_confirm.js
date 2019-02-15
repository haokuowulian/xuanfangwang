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
    my.confirm({
      title: '确认合同',
      content: '您确认签订此合同吗？',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (res) => {
        console.log(res)
        if(res.confirm){
          that.sign();
          // my.tradePay({
          //   tradeNO: '201711152100110410533667792', // 调用统一收单交易创建接口alipay.trade.create）,获得返回字段支付宝交易号trade_no
          //   success: (res) => {
          //     my.alert({
          //     content: JSON.stringify(res),
          //   });
          //   },
          //   fail: (res) => {
          //     my.alert({
          //     content: JSON.stringify(res),
          //   });
          //   }
          // });

          // my.alert({
          //   title: '合同签订成功！',
          //   success: () => {
          //     that.goBack();
          // },
          // });
          
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
       console.log('请求失败~~');
      },
    });
  },
  toUpload(contractId){
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
        console.log('---------------');
        console.log(res);
        console.log('订单提交成功！！！')
        var orderId = res.data.orderId;
        console.log(orderId);
        my.tradePay({
            tradeNO: res.data.data.alipay_trade_create_response.trade_no, // 调用统一收单交易创建接口alipay.trade.create）,获得返回字段支付宝交易号trade_no
            success: (res) => {
              console.log('-------success--------');
              console.log(res);
              console.log('url:   '+that.data.url);
              that.uploadCode(uid,orderId,res.resultCode,contractId);
              my.navigateTo({
                url:'/pages/index/signing/payment_result/payment_result?payment='+res.resultCode+'&url='+that.data.url,
              });
             
            },
            fail: (res) => {
              console.log('-------fail--------');
              console.log(res);
              that.uploadCode(uid,orderId,res.resultCode,contractId);
              my.navigateTo({
                url:'/pages/index/signing/payment_result/payment_result?payment='+res.resultCode,
              });
            }
          });

      },
      fail: (res) => {
       console.log(res);
       console.log('请求失败~~');
      },
    });
  },
  uploadCode(uid,orderId,resultCode,contractId){
    my.httpRequest({
      url: app.globalData.baseUrl_whj+'IF/order/payAlipayOrder.do', // 目标服务器url
      method: 'POST',
      data:{
        userId:uid,
        orderId:orderId,
        resultCode:resultCode,
        contractId:contractId
      },
      dataType: 'json',
      success: (res) => {
         that.sign();
        console.log(res+'状态码上传成功');
      },
    });
  },
  
});
