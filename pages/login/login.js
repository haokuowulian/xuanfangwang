var app=getApp();
Page({
  data: {
    currentTime:'',
    account:'',
    passwords:'',
    eyeclose:true,
    eyeopen:false,
    showxfw:false,
    showPhone:true,
    second:60,
    phoneNum:'',
    phoneCode:'',
    send:true,
    alreadySend:false,
    
  },
  onLoad() {
    
  },
  toInput(e){
    console.log(e.detail.value)
    var that = this;
    if(e.target.dataset.t==1){
      that.setData({
        account:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        passwords:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        phoneNum:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        phoneCode:e.detail.value,
      });
    }
  },
    //授权登录
  antLogin(){
    my.showLoading({
      content: '正在登陆...',
    });
    console.log('验证登陆')
    my.getAuthCode({
      scopes: 'auth_user',
      // scopes: 'auth_base',
      success: (res) => {
        var myCode=res.authCode;
        console.log('-------------authCode--------------');
        console.log(myCode)
        console.log(res)
        console.log('-------------authCode--------------');
        if(res.authCode){
          my.httpRequest({
            url: app.globalData.baseUrl+'/IF/user/appLogin.do?authCode='+myCode,
            // url: app.globalData.baseUrl_whj+'/IF/user/appLogin.do?authCode='+myCode,
            method: 'POST',
            header:{
              'content-type': 'application/json'
            },
            dataType: 'json',
            success: (res) => {
              my.hideLoading();
              app.getCity();
              console.log('---------------------------');
               console.log(res);
               console.log('---------------------------');
               my.setStorageSync({
                 key: 'userId', // 缓存数据的key
                 data: res.data.info.id, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'upayUserId', // 缓存数据的key
                 data: res.data.info.payUserId, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'token', // 缓存数据的key
                 data: res.data.token, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'userName', // 缓存数据的key
                 data: res.data.info.userName, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'certNo', // 缓存数据的key
                 data: res.data.info.certNo, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'avatar', // 缓存数据的key
                 data: res.data.info.avatar, // 要缓存的数据
               });
                my.setStorageSync({
                 key: 'nickName', // 缓存数据的key
                 data: res.data.info.nickName, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'roleId', // 缓存数据的key
                 data: res.data.info.roleId, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'certName', // 缓存数据的key
                 data: res.data.info.certName, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'phone', // 缓存数据的key
                 data: res.data.info.userName, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'sex', // 缓存数据的key
                 data: res.data.info.sex, // 要缓存的数据
               });
               if(res.data.info.roleId==8){//租客
                 if(res.data.info.certNo&&res.data.info.certNo!=''){//已完善信息
                   my.setStorageSync({
                    key: 'userCompleted', // 缓存数据的key
                    data: true, // 要缓存的数据
                  });
                  my.setStorageSync({
                    key: 'userlogin', // 缓存数据的key
                    data: true, // 要缓存的数据
                  });
                    
                 }else{//未完善信息
                   my.setStorageSync({
                    key: 'userCompleted', // 缓存数据的key
                    data: false, // 要缓存的数据
                  });
                  my.setStorageSync({
                    key: 'userlogin', // 缓存数据的key
                    data: true, // 要缓存的数据
                  });
                   
                 }
                
               }else if(res.data.info.roleId==7){//房东
                my.setStorageSync({
                  key: 'roleUser', // 缓存数据的key
                  data: false, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'userCompleted', // 缓存数据的key
                  data: true, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'userlogin', // 缓存数据的key
                  data: true, // 要缓存的数据
                });
              }
              my.navigateBack({
              });
            },
            fail: function(res) {
               console.log(res);
            }
          });
        }
      },
    });
  },
  //账号密码登陆
  xfwLogin(){
    my.showLoading({
      content: '正在登陆...',
    });
    var that = this;
    var userName = that.data.account;
    var passwords = that.data.passwords;
    if(userName!=''){
      if(passwords!=''){
        my.httpRequest({
          url: app.globalData.baseUrl+'IF/user/webLogin.do', // 目标服务器url
          method: 'POST',
          data:{
            userName:userName,
            password:passwords,
          },
          success: (res) => {
            console.log(res)
            if(res.data.success){
              my.hideLoading();
              console.log("登录成功！")
              app.getCity();
              // that.getPayId();
              my.setStorageSync({
                 key: 'userId', // 缓存数据的key
                 data: res.data.userId, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'upayUserId', // 缓存数据的key
                 data: res.data.payUserId, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'token', // 缓存数据的key
                 data: res.data.token, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'userName', // 缓存数据的key
                 data: res.data.userName, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'certNo', // 缓存数据的key
                 data: res.data.certNo, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'avatar', // 缓存数据的key
                 data: res.data.avatar, // 要缓存的数据
               });
                my.setStorageSync({
                 key: 'nickName', // 缓存数据的key
                 data: res.data.nickName, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'roleId', // 缓存数据的key
                 data: res.data.roleId, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'certName', // 缓存数据的key
                 data: res.data.certName, // 要缓存的数据
               });
               
               my.setStorage({
                key: 'currentIdentityIsUser', // 缓存数据的key
                data: true, // 要缓存的数据
              });
              my.setStorageSync({
                key: 'userlogin', // 缓存数据的key
                data: true, // 要缓存的数据
              });
              if(res.data.certNo&&res.data.certNo!=''){
                my.setStorageSync({
                  key: 'userCompleted', // 缓存数据的key
                  data: true, // 要缓存的数据
                });
              }else{
                my.setStorageSync({
                  key: 'userCompleted', // 缓存数据的key
                  data: false, // 要缓存的数据
                });
              }
               
              //  my.setStorageSync({
              //    key: 'phone', // 缓存数据的key
              //    data: res.data.info.userName, // 要缓存的数据
              //  });
              //  my.setStorageSync({
              //    key: 'sex', // 缓存数据的key
              //    data: res.data.info.sex, // 要缓存的数据
              //  });
              my.navigateBack({
                
              });
              // that.onShow();
            }else{
              my.alert({
                title: res.data.message,
              });
            }
          },
        });
      }else{
        my.alert({
        title: '请输入密码！',
      });
      }
    }else{
      my.alert({
        title: '用户名不能为空！',
      });
    }
  },
  //清空当前输入框
  toEmpty(e){
    console.log(e.target.dataset.t)
    var that = this;
    if(e.target.dataset.t==1){
      that.setData({
        account:'',
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        passwords:'',
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        phoneNum:'',
      });
    }
  },
  toOpen(){
    this.setData({
      eyeclose:false,
      eyeopen:true,
    });
  },
  toClose(){
    this.setData({
      eyeclose:true,
      eyeopen:false,
    });
  },
   //切换选房网账号密码登陆
  toXfwLogin(){
    var that = this;
    that.setData({
      showxfw:true,
      showPhone:false,
    });
  },
  //切换手机验证码注册/登陆
  toPhoneLogin(){
    var that = this;
    that.setData({
      showxfw:false,
      showPhone:true,
    });
  },
  //发送手机验证码
    //发送手机验证码
  sendMsg(){
    var that = this;
    var phoneNum = that.data.phoneNum;
    console.log(phoneNum)
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
            if(!res.data.success){
              my.alert({
                title: '24小时内验证码发送次数已达上限！' 
              });
            }
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
      alert('请填写完整');
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
  quickLogin(){
    var that = this;
    var phoneNum = that.data.phoneNum;
    var phoneCode = that.data.phoneCode;


    if(phoneNum!=''&&phoneCode!=''){
       my.getAuthCode({
        // scopes: 'auth_user',
        scopes: 'auth_base',
        success: (res) => {
          // var myCode=res.authCode;
          console.log('-------------authCode--------------');
          console.log(res)
          console.log('-------------authCode--------------');
          that.phoneLogin(phoneNum,phoneCode,res.authCode);
        }
      });

    }else{
      alert('请填写完整');
    }
  },
  phoneLogin(phoneNum,phoneCode,authCode){
    my.showLoading({
      content: '正在登陆...',
    });
    var that = this;
    my.httpRequest({
      url:app.globalData.baseUrl+ 'IF/user/register.do', // 目标服务器url
      method: 'POST',
      header:{
            'content-type': 'application/x-www-form-urlencoded'
          },
      data: {
        phone:phoneNum,
        code:phoneCode,
        authCode:authCode,
      },
      dataType: 'json',
      success: (res) => {
        console.log('-------------userLogin--------------');
        console.log(res)
        console.log('-------------userLogin--------------');
        if(res.data.success){
          my.hideLoading();
          console.log("登录成功！")
          app.getCity();
          // that.getPayId();
          my.setStorageSync({
              key: 'userId', // 缓存数据的key
              data: res.data.users.id, // 要缓存的数据
            });
          my.setStorageSync({
              key: 'upayUserId', // 缓存数据的key
              data: res.data.users.payUserId, // 要缓存的数据
            });
           my.setStorageSync({
             key: 'token', // 缓存数据的key
             data: res.data.token, // 要缓存的数据
           });
           my.setStorageSync({
            key: 'userName', // 缓存数据的key
            data: res.data.users.userName, // 要缓存的数据
          });
            my.setStorageSync({
              key: 'certNo', // 缓存数据的key
              data: res.data.users.certNo, // 要缓存的数据
            });
            my.setStorageSync({
              key: 'avatar', // 缓存数据的key
              data: res.data.users.avatar, // 要缓存的数据
            });
            my.setStorageSync({
              key: 'nickName', // 缓存数据的key
              data: res.data.users.nickName, // 要缓存的数据
            });
            my.setStorageSync({
              key: 'roleId', // 缓存数据的key
              data: res.data.users.roleId, // 要缓存的数据
            });
            my.setStorageSync({
              key: 'certName', // 缓存数据的key
              data: res.data.users.certName, // 要缓存的数据
            });

            my.setStorage({
            key: 'currentIdentityIsUser', // 缓存数据的key
            data: true, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'userlogin', // 缓存数据的key
            data: true, // 要缓存的数据
          });
          if(res.data.certNo&&res.data.certNo!=''){
            my.setStorageSync({
              key: 'userCompleted', // 缓存数据的key
              data: true, // 要缓存的数据
            });
          }else{
            my.setStorageSync({
              key: 'userCompleted', // 缓存数据的key
              data: false, // 要缓存的数据
            });
          }
            
          //  my.setStorageSync({
          //    key: 'phone', // 缓存数据的key
          //    data: res.data.info.userName, // 要缓存的数据
          //  });
          //  my.setStorageSync({
          //    key: 'sex', // 缓存数据的key
          //    data: res.data.info.sex, // 要缓存的数据
          //  });
          my.navigateBack({
           
          });
          // that.onShow();
        }else{
          alert(res.data.msg);
        }
      },
    });

  },
});
