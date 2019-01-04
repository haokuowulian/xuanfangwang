var app = getApp();
var userId='';
var certNo='';
var avatar='';
var nickName='';
Page({
  data: {
    roleUser:false,
    roleOwner:true,
    userlogin:false,
    userCompleted:false,
    username:'',
    user:'',
    headimg:'',
    certNo:'',
    password:'',
  },
  onLoad() {
  
  },
  onShow(){
   userId = my.getStorageSync({
     key: 'userId', // 缓存数据的key
   }).data;
   certNo = my.getStorageSync({
     key: 'certNo', // 缓存数据的key
   }).data;
   avatar = my.getStorageSync({
     key: 'avatar', // 缓存数据的key
   }).data;
   nickName = my.getStorageSync({
     key: 'nickName', // 缓存数据的key
   }).data;
   if(userId&&userId!=''){
        if(certNo&&certNo!=''){
          this.setData({
            headimg:avatar,
            username:nickName,
            userlogin:true,
            userCompleted:true
          });
        }else {
          this.setData({
            headimg:avatar,
            username:nickName,
            userlogin:true,
            userCompleted:false
          });
        }
     
   }else{
    this.setData({
      userlogin:false,
      userCompleted:false
    });
   }
  
  },
  //授权登录
  antLogin(){
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        var myCode=res.authCode;
        if(res.authCode){
          my.httpRequest({
            url: app.globalData.baseUrl+'IF/user/appLogin.do?authCode='+myCode,
            method: 'POST',
            header:{
              'content-type': 'application/json'
            },
            dataType: 'json',
            success: (res) => {
               console.log(res);
               my.setStorageSync({
                 key: 'userId', // 缓存数据的key
                 data: res.data.info.id, // 要缓存的数据
               });
               my.setStorageSync({
                 key: 'token', // 缓存数据的key
                 data: res.data.info.token, // 要缓存的数据
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
               app.globalData.userId=res.data.info.id;
               if(res.data.info.roleId==8){//用户
               console.log("2222222233333333333333333");
                 if(res.data.info.certNo){//已完善信息
                   this.setData({
                      certNo:res.data.info.certNo,
                      userCompleted:true,
                      userlogin:true,
                      headimg:res.data.info.avatar,
                      username:res.data.info.nickName,
                      roleUser:true,
                      roleOwner:false,
                   });
                    
                 }else{//未完善信息
                 console.log("2222222233333334444444");
                   this.setData({
                      certNo:res.data.info.certNo,
                      userCompleted:false,
                      userlogin:true,
                      headimg:res.data.info.avatar,
                      username:res.data.info.nickName,
                      roleUser:true,
                      roleOwner:false,
                   });
                 }
                
               }
               if(res.data.info.roleId==7){//房东
               console.log("2222222233333333335555555");
                this.setData({
                  userlogin:true,
                  headimg:res.data.info.avatar,
                  username:res.data.info.nickName,
                  roleUser:false,
                  roleOwner:true,
                  userCompleted:true,
               });
               }
               
              //  onLoad();
              //  console.log(username);
            },
            fail: function(res) {
               console.log(res);
            }
          });
        }
      },
    });
  },
  xfwLogin(){},
  changeRole1(){
    this.setData({
      roleUser:false,
      roleOwner:true,
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
  toMyhouse(){
    my.navigateTo({
      url: '/pages/index/myhouse/myhouse',
    });
  },
  //输入身份证
  bindIdCard(e){
    this.setData({
      certNo:e.detail.value
    })
  },
  //输入密码
  bindPassword(e){
    this.setData({
      password:e.detail.value
    })
  },
  //完善信息
  submit(){
    my.confirm({
      title: '温馨提示',
      content: '点击同意后即授权该应用获取您的手机号和真实姓名',
      confirmButtonText: '同意',
      cancelButtonText: '拒绝',
      success: (result) => {
       if(result.confirm){
          console.log('同意');
          this.complexUserInfo();
       }else{
          console.log('拒绝');
       }
      },
    });
  },
  //请求服务器完善信息
   complexUserInfo(){
     var that=this;
      my.httpRequest({
        url: app.globalData.baseUrl+'IF/user/editUser.do',
        method: 'POST',
        header:{
              'content-type': 'application/json'
            },
        data: {
         userName:'13754327232',
         CertName:'张金飞',
         certNo:this.data.certNo,
         password:this.data.password,
         id:userId,
        },
        dataType: 'json',
        success: function(res) {
          if(res.data.success){
            that.setData({
              userCompleted:true,
              userlogin:true,
              headimg:avatar,
              userName:nickName
            });
            
             my.setStorageSync({
                 key: 'certNo', // 缓存数据的key
                 data: that.data.certNo, // 要缓存的数据
               });

          }
        },
        fail: function(res) {
        },
        complete: function(res) {
          my.hideLoading();
        }
      });
   }
});
