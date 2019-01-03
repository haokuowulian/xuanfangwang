var app = getApp();
Page({
  data: {
    role1:false,
    role2:true,
    userlogin:false,
    username:'',
    user:'',
    headimg:'',
  },
  onLoad() {
   let user = my.getStorageSync({
     key: 'userinfo', // 缓存数据的key
   });
   if(user!=null&&user!=''){
     this.setData({
      headimg:user.data.info.avatar,
      username:user.data.info.nickName,
      userlogin:true,
    });
   }else{
     this.setData({
      userlogin:false,
    });
   }
   
   console.log('success')
   console.log(user)
   console.log(user.data.info.certName)
  },
  onShow(){
    let user = my.getStorageSync({
     key: 'userinfo', // 缓存数据的key
   });
   console.log(user)
   if(user.data==null||user.data==''){
     this.setData({
      userlogin:false,
    });
   }else{
     console.log('已登录状态')
   }
    console.log(444444)
  },
  antLogin(){
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        console.log(res.authCode);
        var myCode=res.authCode;
        if(res.authCode){
          my.httpRequest({
            url: app.globalData.baseUrl+'IF/user/appLogin.do?authCode='+myCode,            // 目标服务器url  http://192.168.1.89:8080/LLGY/IFBaseAction/IFUser/
       // http://192.168.1.89:8080/LLGY/IF/user/appLogin.do
            method: 'POST',
            header:{
              'content-type': 'application/json'
            },
            dataType: 'json',
            success: (res) => {
              console.log(11111111);
               console.log(res);
               my.setStorageSync({
                 key: 'userinfo', // 缓存数据的key
                 data: res.data, // 要缓存的数据
               });
               if(res.data.info.roleId=8){
                this.setData({
                 userlogin:true,
                 headimg:res.data.info.avatar,
                 username:res.data.info.nickName,
                 role1:true,
                 role2:false,
               });
               }
               if(res.data.info.roleId=7){
                this.setData({
                 userlogin:true,
                 headimg:res.data.info.avatar,
                 username:res.data.info.nickName,
                 role1:false,
                 role2:true,
               });
               }
               
              //  onLoad();
              //  console.log(username);
            },
          });
        }
      },
    });
  },
  xfwLogin(){},
  changeRole1(){
    this.setData({
      role1:false,
      role2:true,
    });
  },
  changeRole2(){
     my.navigateTo({
      url: '/pages/index/fangdongreg/fangdongreg',
    });
    // this.setData({
    //   role1:true,
    //   role2:false,
    // });
  },
  toShoucang(){
    my.navigateTo({
      url: '/pages/index/shoucang/shoucang',
    });
  },
  toPlan(){
    my.navigateTo({
      url: '/pages/index/plan/plan',
    });
  },
  toOrder(){
    my.navigateTo({
      url: '/pages/index/order/order',
    });
  },
  toEvaluate(){
    my.navigateTo({
      url: '/pages/index/evaluate/evaluate',
    });
  },
  toContract(){
    my.navigateTo({
      url: '/pages/index/contract/contract',
    });
  },
  toBill(){
    my.navigateTo({
      url: '/pages/index/bill/bill',
    });
  },
  toRepair(){
    my.navigateTo({
      url: '/pages/index/onlinerepair/onlinerepair',
    });
  },
  toSetting(){
    my.navigateTo({
      url: '/pages/index/setting/setting',
    });
  },
});
