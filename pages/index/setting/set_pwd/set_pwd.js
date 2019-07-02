var app = getApp();
Page({
  data: {
    eyeclose1:true,
    eyeopen1:false,
    newPassword:'',
    eyeclose2:true,
    eyeopen2:false,
  },
  onLoad() {},
  toInput(e){
    console.log(e.detail.value)
    var that = this;
    if(e.target.dataset.t==1){
      that.setData({
        phoneNum:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        phoneCode:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        newPassword:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        confirmPassword:e.detail.value,
      });
    }
    
  },
  //清空当前输入框
  toEmpty(e){
    console.log(e.target.dataset.t)
    var that = this;
    if(e.target.dataset.t==3){
      that.setData({
        newPassword:'',
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        confirmPassword:'',
      });
    }
  },
  toOpen(e){
    console.log(e)
    if(e.target.dataset.t==1){
      this.setData({
        eyeclose1:false,
        eyeopen1:true,
      });
    }
    if(e.target.dataset.t==2){
      this.setData({
        eyeclose2:false,
        eyeopen2:true,
      });
    }
    
    
  },
  toClose(e){
    console.log(e)
    if(e.target.dataset.t==1){
      this.setData({
        eyeclose1:true,
        eyeopen1:false,
      });
    }
    if(e.target.dataset.t==2){
      this.setData({
        eyeclose2:true,
        eyeopen2:false,
      });
    }
    
  },
  updataPassword(){
    var that = this;
    var newPassword = that.data.newPassword;
    var confirmPassword = that.data.confirmPassword;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    if(newPassword==confirmPassword){
      my.request({
        url: app.globalData.baseUrl+'IF/user/forgetPassword.do', // 目标服务器url
        method: 'POST',
        headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          id:userId,
          newPassword:newPassword,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            my.alert({
              title: '密码设置成功！',
              success: () =>{
                my.navigateBack({
                  delta: 2
                });
              }
            });
          }else{
            my.alert({
              title: res.data.message+'！' 
            });
          }
        },
      });
   
    }else{
      my.alert({
        title: '两次输入密码不一致！' 
      });
    }
  },
});
