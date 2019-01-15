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
  },
  onLoad() {
    this.getOrderInfo();
  },
  toConfirm(){
    var that = this;
    that.toUpload();
    // my.confirm({
    //   title: '确认合同',
    //   content: '您确认签订此合同吗？',
    //   confirmButtonText: '确定',
    //   cancelButtonText: '取消',
    //   success: (res) => {
    //     console.log(res)
    //     if(res.confirm){
    //       // my.alert({
    //       //   title: '合同签订成功！'
    //       // });
    //       that.toRequest();
    //     }else{
    //       my.alert({
    //         title: '合同取消签订！' 
    //       });
    //     }
    //   },
    // });
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

    that.setData({
      uname:uname,
      ucard:ucard,
      startDate:startDate,
      endDate:endDate,
      houseInfo:houseInfo,
      payway:payway,
    });
  },
  toUpload(){
    var that = this;
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
    var housingId;
    var housingName;
    var rents;
    var area;
    var images;
    if(urentType==1){
      housingId = houseInfo.id;
      housingName = houseInfo.apartment.apartmentName+houseInfo.buildingUnit+houseInfo.houseNo;
      rents = houseInfo.entireRents;
      area = houseInfo.area;
      images = houseInfo.images.split(',')[0]
    }
    if(urentType==2){
      housingId = houseInfo.id;
      housingName = houseInfo.house.apartment.apartmentName+houseInfo.house.buildingUnit+houseInfo.roomName;
      rents = houseInfo.rents;
      area = houseInfo.area;
      images = houseInfo.images.split(',')[0]
    }
    // app.globalData.baseUrl_whj+
    my.httpRequest({
      url:"http://192.168.1.193:8080/LLGY/IF/order/addOrder.do", // 目标服务器url
      method: 'POST',
      // header:{'Content-Type': 'application/x-www-form-urlencoded'},
      data:{
        userId:uid,
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
      },
      dataType: 'json',
      success: (res) => {
        console.log(res);
        console.log('订单提交成功！！！')
      },
      fail: (res) => {
       console.log(res);
       console.log('请求失败~~');
      },
    });
  },
});
