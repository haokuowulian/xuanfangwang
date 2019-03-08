var app = getApp();
Page({
  data: {
    type:0,
    second:60,
    phoneNum:'',
    phoneCode:'',
    send:true,
    alreadySend:false,
    oldPassword:'',
    newPassword:'',
    confirmPassword:'',
    eyeclose1:true,
    eyeopen1:false,
    eyeclose2:true,
    eyeopen2:false,
    eyeclose3:true,
    eyeopen3:false,
  },
  onLoad(option) {
    var that = this;
    var type = option.type;
    var phone = my.getStorageSync({
      key: 'phone', // 缓存数据的key
    }).data;
    if(type==1){
      that.setData({
        type:type,
        phoneNum:phone,
      });
    }
  },
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
    if(e.target.dataset.t==3){
      this.setData({
        eyeclose3:true,
        eyeopen3:false,
      });
    }
  },
    //发送手机验证码
  sendMsg(){
    var that = this;
    var phoneNum = that.data.phoneNum;
    console.log('phoneNum'+phoneNum)
    if(phoneNum!=''){
      var mobileNum =(/^1[3456789]\d{9}$/.test(phoneNum))
      if(mobileNum){
        my.httpRequest({
          url: app.globalData.baseUrl+'IF/user/registerVerificationCode.do', // 目标服务器url
          method: 'POST',
          header:{
                'content-type': 'application/x-www-form-urlencoded'
              },
          data: {
            telphone:phoneNum,
          },
          dataType: 'json',
          success: (res) => {
            console.log(res)
          },
        });
        that.setData({
            alreadySend: true,
            send: false,
          })
        that.timer();
      }else{
        my.alert({
          title: '请输入正确的手机号！',
          success:() =>{
            that.setData({
              phoneNum:'',
            });
          },
        });
      }
    }else{
      alert('请输入手机号！');
    }
    
  },
  timer(){
    let promise = new Promise((resolve, reject) => {
      let setTimer = setInterval(
        () => {
          this.setData({
            second: this.data.second - 1
          })
          if (this.data.second <= 0) {
            this.setData({
              second: 60,
              alreadySend: false,
              send: true
            })
            resolve(setTimer)
          }
        }
        , 1000)
    })
    promise.then((setTimer) => {
      clearInterval(setTimer)
    })
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
  toNext(){
    var that = this;
    var phoneNum = that.data.phoneNum;
    var phoneCode = that.data.phoneCode;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    if(phoneCode!=''){
      my.httpRequest({
        url: app.globalData.baseUrl+'IF/user/isCode.do', // 目标服务器url
        method: 'POST',
        data:{
          userName:phoneNum,
          code:phoneCode,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            console.log("success!")
            that.setData({
              type:2,
            });
          }else{
            console.log("fail!")
          }
        },
      });
    }else{
      my.alert({
        title: '验证码不能为空！' 
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
      my.httpRequest({
        url: app.globalData.baseUrl+'IF/user/forgetPassword.do', // 目标服务器url
        method: 'POST',
        data:{
          id:userId,
          newPassword:newPassword,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            my.alert({
              title: '密码修改成功！',
              success: () =>{
                my.navigateBack({
                  delta: 3
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
