const app = getApp();
var oldfee;
Page({
  data: {
    imgUrl:app.globalData.baseImgUrl_whj,
    houseInfo:'',
    rentType:0,
    month:1,
    payWay:'月付',
    price:0,//一个月租/押金
    pay:0,//租期租金
    allPay:0,//首次应付
    fee:0,//服务费
  },
  onLoad() {},
  onShow(){
    var that=this;
    that.getMyData();
  },
  toConfirm(){
    var that = this;
    my.setStorageSync({
      key: 'upayWay', // 缓存数据的key
      data: that.data.payWay, // 要缓存的数据
    });
    my.navigateTo({
     url: '/pages/index/signing/contract_confirm/contract_confirm',
    });
  },
  getMyData(){
    var that = this;
    var month;
    var payWay;
    var payType = my.getStorageSync({
     key: 'upayType', // 缓存数据的key
    }).data;
    var rentType = my.getStorageSync({
     key: 'urentType', // 缓存数据的key
    }).data;
    var houseInfo =my.getStorageSync({
     key: 'uhouseInfo', // 缓存数据的key
    }).data;
    if(rentType==1){
      var price = houseInfo.entireRents;
    }
    if(rentType==2){
      var price = houseInfo.rents;
    }
    
    switch(payType){
      case 1:
        month=1;
        break;
      case 2:
        month=3;
        break;
      case 3:
        month=6;
        break;
      case 4:
        month=12;
        break;
      default:
        month=1;
        break;
    }
    switch(month){
      case 1:
        payWay='月付';
        break;
      case 3:
        payWay='季付';
        break;
      case 4:
        payWay='半年付';
        break;
      case 12:
        payWay='年付';
        break;
      default:
        payWay='月付';
        break;
    }

    var pay = month*price;
    var allPay = (pay+price+that.data.fee).toFixed(1);
    that.setData({
      houseInfo:houseInfo,
      rentType:rentType,
      month:month,
      payWay:payWay,
      price:price,
      pay:pay,
      allPay:allPay,
    });

  },
  bindChangeInput(e){
    var newfee = e.detail.value;
    oldfee = this.data.fee;
    var allPay = (this.data.allPay*1-oldfee*1+newfee*1).toFixed(1);
    this.setData({
      fee:newfee,
      allPay:allPay,
    });
  },
});
