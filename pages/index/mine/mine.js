Page({
  data: {
    role1:false,
    role2:true,
    userlogin:false,
    username:'张三',
    user:'',
    headimg:'',
  },
  onLoad() {
    // console.log(user);
    // console.log(user.certName);
   let user = my.getStorageSync({
     key: 'userinfo', // 缓存数据的key
   });
   if(user!=null&&user!=''){
     this.setData({
      // username:user.data.info.certName,
      headimg:user.data.info.avatar,
      userlogin:true,
    });
   }else{
     this.setData({
      userlogin:false,
    });
    // antLogin();
   }
   
   console.log('success')
   console.log(user)
   console.log(user.data.info.certName)
  },
  antLogin(){
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        console.log(res.authCode);
        var myCode=res.authCode;
        if(res.authCode){
          my.httpRequest({
            url: 'http://192.168.1.89:8080/LLGY/IFBaseAction/IFUser/appLogin.do?authCode='+myCode,            // 目标服务器url
            method: 'POST',
            header:{
              'content-type': 'application/json'
            },
            dataType: 'json',
            success: (res) => {
               console.log(res);
               my.setStorageSync({
                 key: 'userinfo', // 缓存数据的key
                 data: res.data, // 要缓存的数据
               });
               this.setData({
                 userlogin:true,
                 headimg:user.data.info.avatar,
               });
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
    this.setData({
      role1:true,
      role2:false,
    });
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
