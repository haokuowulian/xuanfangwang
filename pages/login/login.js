var app=getApp();
Page({
  data: {
    account:'',
    passwords:'',
    eyeclose:true,
    eyeopen:false,
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
  },

  xfwLogin(){
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
            passwords:passwords,
          },
          success: (res) => {
            console.log(res)
            if(res.data.success){
              console.log("登录成功！")
              my.setStorageSync({
                 key: 'userId', // 缓存数据的key
                 data: res.data.userId, // 要缓存的数据
               });
              //  my.setStorageSync({
              //    key: 'upayUserId', // 缓存数据的key
              //    data: res.data.info.payUserId, // 要缓存的数据
              //  });
              //  my.setStorageSync({
              //    key: 'token', // 缓存数据的key
              //    data: res.data.info.token, // 要缓存的数据
              //  });
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
              //  my.setStorageSync({
              //    key: 'phone', // 缓存数据的key
              //    data: res.data.info.userName, // 要缓存的数据
              //  });
              //  my.setStorageSync({
              //    key: 'sex', // 缓存数据的key
              //    data: res.data.info.sex, // 要缓存的数据
              //  });
              my.navigateBack({
                delta: 1
              });
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
});
