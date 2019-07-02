var app = getApp();
Page({
  data: {
    txAlipay:'',
    payPassword:'',
  },
  onLoad() {},
      //清空当前输入框
  toEmpty(e){
    console.log(e.target.dataset.t)
    var that = this;
    if(e.target.dataset.t==1){
      that.setData({
        txAlipay:'',
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        payPassword:'',
      });
    }
  
  },
   toInput(e){
    console.log(e.detail.value)
    var that = this;
    if(e.target.dataset.t==1){
      that.setData({
        txAlipay:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        payPassword:e.detail.value,
      });
    }
    
  },
  toSave(){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var txAlipay = that.data.txAlipay;
    var payPassword = that.data.payPassword;
    if(txAlipay!=''){
      if(payPassword!=''){
        my.request({
          url: app.globalData.baseUrl+'IF/wallet/editWallet.do', // 目标服务器url
          method: 'POST',
          headers:{
            'content-type': 'application/x-www-form-urlencoded'
          },
          data:{
            userId:userId,
            payPassword:payPassword,
            txAlipay:txAlipay,
          },
          dataType: 'json',
          success: (res) => {
            console.log(res)
            if(res.data.success){
              my.navigateBack();
            }else{
              my.alert({
                title: '保存出错，请稍后再试！' 
              });
            }
          },
        });
      }else{
        my.alert({
          title: '提现密码不能为空！' 
        });
      }
    }else{
      my.alert({
        title: '提现账号不能为空！' 
      });
    }
  },
});
