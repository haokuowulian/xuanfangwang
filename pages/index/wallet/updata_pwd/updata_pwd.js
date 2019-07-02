var app = getApp();
Page({
  data: {
    payPassword:'',
  },
  onLoad() {},
  inputPwd(e){
    this.setData({
      payPassword:e.detail.value,
    });
  },
  toNext(){
    var that = this;
    var payPassword = that.data.payPassword;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    if(payPassword!=''){
      my.request({
        url: app.globalData.baseUrl+'IF/wallet/isPassword.do', // 目标服务器url
        method: 'POST',
        headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          userId:userId,
          payPassword:payPassword,
        },
        dataType: 'json',
        success: (res) => {
          if(res.data.success){
            my.navigateTo({
              url: '/pages/index/wallet/new_pwd/new_pwd?payPassword='+payPassword,
            });
          }else{
            my.alert({
              title: '原支付密码错误！' 
            });
          }
        },
      });
    }else{
      my.alert({
        title: '请先验证原支付密码！' 
      });
    }
    
  },
});
