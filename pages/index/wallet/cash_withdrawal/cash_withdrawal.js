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
      that.setData({
        pxopen:true,
      });
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
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/wallet/aliPayApple.do', // 目标服务器url
      method: 'POST',
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
