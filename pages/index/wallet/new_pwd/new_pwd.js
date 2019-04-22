var app = getApp();
Page({
  data: {
    payPassword:'',
    oldPwd:'',
  },
  onLoad(option) {
    this.setData({
      oldPwd:option.payPassword,
    });
  },
  inputPwd(e){
    var that = this;
    that.setData({
      payPassword:e.detail.value,
    });
  },
  toSave(){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var oldPwd = that.data.oldPwd;
    var payPassword = that.data.payPassword;
    if(payPassword!=''){
      if(payPassword!=oldPwd){
        my.httpRequest({
          url: app.globalData.baseUrl+'IF/wallet/forgetPassword.do', // 目标服务器url
          method: 'POST',
          data:{
            userId:userId,
            payPassword:payPassword,
          },
          dataType: 'json',
          success: (res) => {
            if(res.data.success){
              my.alert({
                title: '修改成功！',
                success: () => {
                  my.navigateBack({
                    delta:2
                  });
                },
              });
            }else{
              my.alert({
                title: '未知错误，请稍候再试！' 
              });
            }
          },
        });
      }else{
        my.alert({
          title: '新密码不能与旧密码相同！' 
        });
      }
      
    }else{
      my.alert({
        title: '请填写完整！' 
      });
    }
  },

});
