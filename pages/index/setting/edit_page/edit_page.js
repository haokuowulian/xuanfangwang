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
    if(type==1){
      my.setNavigationBar({
        title:'绑定手机号'
      });
    }
    if(type==2){
      my.setNavigationBar({
        title:'绑定邮箱'
      });
    }
    if(type==3){
      my.setNavigationBar({
        title:'修改密码'
      });
    }
    that.setData({
      type:type,
    });
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
        oldPassword:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        newPassword:e.detail.value,
      });
    }
    if(e.target.dataset.t==5){
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
    if(e.target.dataset.t==3){
      this.setData({
        eyeclose3:false,
        eyeopen3:true,
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
    if(e.target.dataset.t==1){
      that.setData({
        phoneNum:'',
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        oldPassword:'',
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        newPassword:'',
      });
    }
    if(e.target.dataset.t==5){
      that.setData({
        confirmPassword:'',
      });
    }
  },

  //确认绑定
  bindPhone(){
    var that = this;
    var phoneNum = that.data.phoneNum;
    var phoneCode = that.data.phoneCode;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    if(phoneNum!=''&&phoneCode!=''){
      my.httpRequest({
        url: app.globalData.baseUrl+'IF/user/editMobile.do', // 目标服务器url
        method: 'POST',
        data:{
          id:userId,
          userName:phoneNum,
          code:phoneCode,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          
          if(res.data.success){
            my.alert({
              title: res.data.message,
              success: () =>{
                my.navigateBack();
              }
            });
            
          }else{
            my.alert({
              title: res.data.message
            });
          }
        },
      });
    }
  },
  //修改密码
  updataPassword(){
    var that = this;
    var oldPassword = that.data.oldPassword;
    var newPassword = that.data.newPassword;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/user/editPassword.do', // 目标服务器url
      method: 'POST',
      data:{
        id:userId,
        password:oldPassword,
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
    
  },
  //忘记密码
  pwdForget(){
    my.navigateTo({
       url: '/pages/index/setting/forget_pwd/forget_pwd?type=1',
    });
  },
});
