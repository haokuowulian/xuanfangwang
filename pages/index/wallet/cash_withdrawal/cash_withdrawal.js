var app = getApp();
Page({
  data: {
    money:'',
    pxopen:false,
    password:'',
  },
  onLoad() {},
  input(e){
    var that = this;
    console.log(e.detail.value)
    that.setData({
      money:e.detail.value,
    });
  },
  input1(e){
    var that = this;
    console.log(e.detail.value)
    that.setData({
      password:e.detail.value,
    });
  },
   toConfirm(){
    var that = this;
    var money = that.data.money;
    if(money!=''){
      if(money>=0.2){
        that.setData({
          pxopen:true,
        });
      }else{
        my.alert({
          title: '提现金额不能少于0.2！' 
        });
      }
      
    }
  },
  toBack(){
    var that = this;
    that.setData({
      pxopen:false,
      password:'',
    });
  },
  toConfirm1(){
    var that = this;
    var money = that.data.money;
    var password = that.data.password;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    console.log(money)
    console.log(password)
    my.request({
      url: app.globalData.baseUrl+'IF/wallet/aliPayApple.do', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        userId:userId,
        changeMoney:money,
        payPassword:password,
        remark:'提现',
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        if(res.data.success){
          my.alert({
            title: '已提交提现申请，请耐心等待' ,
            success: () => {
              my.navigateBack();
            },
          });
        }else{
          my.alert({
            title: res.data.message 
          });
        }
      },
    });
  },
});
