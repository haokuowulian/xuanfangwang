var app = getApp();
var userId='';
var certNo='';
var avatar='';
var nickName='';
var roleId='';
var currentIdentityIsUser=true;
Page({
  data: {
    userlogin:false,//是否登录
    userCompleted:false,//是否已完善信息
    isRoleUser:true,//是否是租客
    userId:'',
    username:'',
    headimg:'',
    certNo:'',
    password:'',
    roleId:'',
    sex:'',
    sexCode:'',
    city:'',
    cityCode:'',
    area:'',
    showBottom: false,
    areaList:[],
    areaId:'',
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
    chatlist:[],
  },
  onLoad() {
    // var userId = my.getStorageSync({
    //   key: 'userId', // 缓存数据的key
    // }).data;
    // if(userId!=''&&userId!=null){
    //   this.antLogin();
    // }
   
    var userlogin = my.getStorageSync({
      key: 'userlogin', 
    }).data;
    if(userlogin!=''){
      
    }else{
      my.setStorageSync({
        key: 'userlogin', // 缓存数据的key
        data: false, // 要缓存的数据
      });
    }
    
    
  },
  onShow(){
    var that = this;
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
   roleId = my.getStorageSync({
     key: 'roleId', // 缓存数据的key
   }).data;
   currentIdentityIsUser = my.getStorageSync({
     key: 'currentIdentityIsUser', // 缓存数据的key
   }).data;
  if(userId&&userId!=''){
    var token = my.getStorageSync({
      key: 'token', 
    }).data;
    var userName = my.getStorageSync({
      key: 'userName', 
    }).data;
  console.log(token)
    my.httpRequest({
        url: app.globalData.baseUrl+'IF/token/getToken.do', // 目标服务器url
        method: 'POST',
        data:{
          phone:userName,
          token:token,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
              if(certNo&&certNo!=''){
                my.setNavigationBar({
                  title:'个人中心'
                });
                that.getChatList();
                if(roleId==7&&!currentIdentityIsUser){//房东
                  that.setData({
                    userlogin:true,
                    userCompleted:true,
                    isRoleUser:false,
                    headimg:avatar,
                    username:nickName,
                    userId:userId
                  });
                }else if(roleId==7&&currentIdentityIsUser){//房东&租客
                  that.setData({
                    userlogin:true,
                    userCompleted:true,
                    isRoleUser:true,
                    headimg:avatar,
                    username:nickName,
                    userId:userId
                  });
                }else if(roleId==8){//租客
                  that.setData({
                    userlogin:true,
                    userCompleted:true,
                    isRoleUser:true,
                    headimg:avatar,
                    username:nickName,
                    userId:userId
                  });
                }
      
            }else{
              // my.setNavigationBar({
              //       title:'完善信息'
              //     });
              that.setData({
                userlogin:true,
                userCompleted:false,
                headimg:avatar,
                username:nickName,
                userId:userId
              });
            }
          }else{
            my.alert({
              title: '登陆超时，请重新登录！',
              buttonText: '确定',
              success: () => {
                my.clearStorage();
                my.navigateTo({
                  url: '/pages/login/login',
                });
              },
            });
          }
        },
      });


    
    
  }else{
    my.setNavigationBar({
       title:'登录'
     });
    this.setData({
      userlogin:false,
      second:60,
      phoneNum:'',
      phoneCode:'',
      send:true,
      alreadySend:false,
    });
  }
  },
  getChatList(){
    var that = this;
    var userId = my.getStorageSync({
     key: 'userId', // 缓存数据的key
   }).data;
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/chatList/getFdChatList.do', // 目标服务器url
      method: 'POST',
      data: {
        landlordId:userId,
        pageIndex:1,
        pageSize:10,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        if(res.data.success){
          that.setData({
            chatlist:res.data.data,
          });
        }
      },
    });
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
              console.log('---------------------------');
               console.log(res);
               console.log('---------------------------');
               my.hideLoading();
              //  app.getCity();
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
                   my.setNavigationBar({
                    title:'个人中心'
                   });
                   my.setStorageSync({
                    key: 'userCompleted', // 缓存数据的key
                    data: true, // 要缓存的数据
                  });
                  my.setStorageSync({
                    key: 'userlogin', // 缓存数据的key
                    data: true, // 要缓存的数据
                  });
                  
                   this.setData({
                      certNo:res.data.info.certNo,
                      userlogin:true,
                      userCompleted:true,
                      headimg:res.data.info.avatar,
                      username:res.data.info.nickName,
                      isRoleUser:true,
                      userId:res.data.info.id
                   });
                    
                 }else{//未完善信息
                  // my.setNavigationBar({
                  //   title:'完善信息'
                  // });
                   my.setStorageSync({
                    key: 'userCompleted', // 缓存数据的key
                    data: false, // 要缓存的数据
                  });
                  my.setStorageSync({
                    key: 'userlogin', // 缓存数据的key
                    data: true, // 要缓存的数据
                  });
                   this.setData({
                      certNo:res.data.info.certNo,
                      userlogin:true,
                      userCompleted:false,
                      headimg:res.data.info.avatar,
                      username:res.data.info.nickName,
                      isRoleUser:true,
                      userId:res.data.info.id
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
                this.setData({
                  userlogin:true,
                  headimg:res.data.info.avatar,
                  username:res.data.info.nickName,
                  isRoleUser:false,
                  userCompleted:true,
                  userId:res.data.info.id
               });
               }
            },
            fail: function(res) {
               console.log(res);
            }
          });
        }
      },
    });
  },
  
  changeRole1(){//切换为租客

    this.setData({
      isRoleUser:true
    });
    my.setStorage({
      key: 'currentIdentityIsUser', // 缓存数据的key
      data: true, // 要缓存的数据
    });
    
  },
  changeRole2(){//切换为房东或申请成为房东
     roleId = my.getStorageSync({
        key: 'roleId', // 缓存数据的key
    }).data;
    my.setStorage({
      key: 'currentIdentityIsUser', // 缓存数据的key
      data: false, // 要缓存的数据
      
    });
    if(roleId==7){
      this.setData({
      isRoleUser:false
    });
    
    }else{
      my.navigateTo({
        url: '/pages/index/fangdongreg/fangdongreg',
      });
    }
     
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
      url: '/pages/index/order/order?type=1',//1:租客；2：房东
    });
  },
  //前往房东时我的订单
  toMyOrder(){
    my.navigateTo({
      url: '/pages/index/order/houseorder/houseorder?type=2',//1:租客；2：房东
    });
  },
  toEvaluate(){
    my.navigateTo({
      url: '/pages/index/evaluate/evaluate',
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
  toDelivery(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery',
    });
  },
  toSuggest(){
    my.navigateTo({
      url: '/pages/index/mysuggest/mysuggest',
    });
  },
  toMyhouse(){
    my.navigateTo({
      url: '/pages/index/myhouse/myhouse',
    });
  },
  toContract(){
    if(roleId==7&&!this.data.isRoleUser){
      my.navigateTo({
        url: '/pages/index/contract/contract?roleType=1',//1房东，2租客
      });
    }
    if(roleId==7&&this.data.isRoleUser){
      my.navigateTo({
        url: '/pages/index/contract/contract?roleType=2',
      });
    }
    if(roleId==8){
      my.navigateTo({
        url: '/pages/index/contract/contract?roleType=2',
      });
    }
  },
  toContract1(){
    my.navigateTo({
      url: '/pages/index/contract/contract?roleType=2',
    });
  },
  toContract2(){
    my.navigateTo({
      url: '/pages/index/contract/contract?roleType=1',
    });
  },
  toMyKey(){
    // my.navigateTo({
    //   url: '/pages/index/myKey/myKey',
    // });
    // my.openCardList();
    // my.openTicketList();
    my.ap.navigateToAlipayPage({
      path:'alipays://platformapi/startapp?appId=60000032&url=%2Fwww%2FexternalCard.html%3FcertDocType%3DCYBER_TRUSTED_ID%26bizType%3DHZ_HOTEL_ROOM_RENT_CYBER_TRUSTED_ID',
      success:(res) => {
        console.log('系统信息success')
        console.log(JSON.stringify(res))
          // my.alert({content:'系统信息' + JSON.stringify(res)});
      },
      fail:(error) => {
        console.log('系统信息fail')
        console.log(JSON.stringify(res))
          // my.alert({content:'系统信息' + JSON.stringify(error)});        
      }
    })
  },




  toMore(){
    my.navigateTo({
      url: '/pages/index/more/more',
    });
  },
  toMyPlan(){
    my.navigateTo({
      url: '/pages/index/my_plan/my_plan',
    });
  },
  toAccountInfo(){
    my.navigateTo({
      url: '/pages/index/accountinfo/accountinfo',
    });
  },
  toWallet(){
    my.navigateTo({
      url: '/pages/index/wallet/wallet',
    });
  },
  toMyWallet(){
    my.navigateTo({
      url: '/pages/index/wallet_fangdong/wallet_fangdong',
    });
  },
  toMyLock(){
    my.navigateTo({
      url: '/pages/index/myLock/myLock',
    });
  },
  //选择性别
  selectSex(){
    my.showActionSheet({
      title: '性别选择',
      items: ['男', '女'],
      cancelButtonText: '取消',
      success: (res) => {
        if(res.index==0){
          this.setData({
            sexCode:0,
            sex:'男'
          });
        }else if(res.index==1){
          this.setData({
            sexCode:1,
            sex:'女'
          });
        }
        console.log(res.index);
      },
    });
  },
  //选择城市
  selectCity(){
    my.chooseCity({
      success: (res) => {
        this.setData({
          city:res.city,
          cityCode:res.adCode
        
	      });
      },
    });
  },
  //选择区县
  selectArea(){
    if(this.data.cityCode==''){
      my.alert({
        title: '请先选择城市' 
      });
    }else{
      var that=this;
       my.httpRequest({
      url: app.globalData.baseUrl+"IF/user/getAreaDist.do",
      method: 'POST',
      data: {
        cityCode: this.data.cityCode,
      },
      dataType: 'json',
      success: function(res) {
       console.log(res.data);
        if(res.data.success){
          that.setData({
            areaList:res.data.data,
            showBottom: true,
          });
          
        }
      },
      fail: function(res) {
       console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
    }
    
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
    if(this.data.sex==''||this.data.cityCode==''||this.data.areaId==''||this.data.certNo==''||this.data.password==''){
       my.alert({
         title: '请完善信息' 
       });
     }else{
      
    my.confirm({
      title: '温馨提示',
      content: '点击同意后即授权该应用获取您的手机号和真实姓名',
      confirmButtonText: '同意',
      cancelButtonText: '拒绝',
      success: (result) => {
       if(result.confirm){
          console.log('同意');
          this.faceVerify();
       }else{
          console.log('拒绝');
       }
      },
    });
     }
  },
getServerTime(){
    my.getServerTime({
      success: (res) => {
        this.setData({
          currentTime:res.time
        });
      },
    });
  },
  //刷脸验证
  faceVerify(){
    this.getServerTime();
    my.ap.faceVerify({
    bizId: this.data.currentTime+''+this.data.userId, //业务请求的唯一标识，需要保证唯一性
    bizType: '2', //业务场景参数，必须填写‘2’，代表刷脸认证  
    success: (res) => {
       
       console.log(res);
       if(res.faceRetCode==1000){
         this.complexUserInfo();
       }else{
         my.alert({
            content: res.retCode,
        });
       }
        
    },
    fail: (res) => {
        my.alert({
            content: JSON.stringify(res),
        });
      }
    });
  },
  //请求服务器完善信息
   complexUserInfo(){
     
     var that=this;
      my.httpRequest({
        url: app.globalData.baseUrl+'/IF/user/editUser.do',
        method: 'POST',
        header:{
              'content-type': 'application/json'
            },
        data: {
         sex:this.data.sexCode,
         cityCode:this.data.cityCode,
         cityName:this.data.city,
         areaCode:this.data.areaId,
         areaName:this.data.area,
         certNo:this.data.certNo,
         password:this.data.password,
         id:this.data.userId,
        },
        dataType: 'json',
        success: function(res) {
          if(res.data.success){
            that.setData({
              userCompleted:true,
              userlogin:true,
              headimg:that.data.headimg,
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
     
   },
   onPopupClose() {
    this.setData({
      showBottom: false,
    });
  },
  //获取选中地区
  getIndex(e){
    console.log(e.target.dataset.index);
    this.setData({
      area:this.data.areaList[e.target.dataset.index].distName,
      areaId:this.data.areaList[e.target.dataset.index].distCode
    });
    this.onPopupClose();
  },
  
// 以下为登录界面方法

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

  xfwLogin(){
    my.showLoading({
      content: '正在登陆...',
    });
    var that = this;
    var userName = that.data.account;
    var passwords = that.data.passwords;
    if(userName!=''){
      if(passwords!=''){
        // my.showLoading();
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
              // app.getCity();
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
                 key: 'phone', // 缓存数据的key
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
               that.setData({
                 account:'',
                 passwords:'',
               });
              //  my.setStorageSync({
              //    key: 'phone', // 缓存数据的key
              //    data: res.data.info.userName, // 要缓存的数据
              //  });
              //  my.setStorageSync({
              //    key: 'sex', // 缓存数据的key
              //    data: res.data.info.sex, // 要缓存的数据
              //  });
              // my.navigateBack({
              //   delta: 1
              // });
              that.onShow();
            }else{
              my.alert({
                title: res.data.message,
              });
              my.hideLoading();
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
  //静默授权获取支付宝id
  // getPayId(){
  //   console.log('验证登陆')
  //   my.getAuthCode({
  //     // scopes: 'auth_user',
  //     scopes: 'auth_base',
  //     success: (res) => {
  //       // var myCode=res.authCode;
  //       console.log('-------------authCode--------------');
  //       console.log(res)
  //       console.log('-------------authCode--------------');
  //     }
  //   });
        
  // },
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
          // app.getCity();
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
          if(res.data.reg){
            my.alert({
              title: '温馨提示',
              content:'您的初始密码为手机号后6位，请尽快完善个人信息并修改密码。',
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
          // my.navigateBack({
          //   delta: 1
          // });
          that.onShow();
        }else{
          alert(res.data.msg);
        }
      },
    });

  },
  toChat(){
    my.navigateTo({
       url: '/pages/chatlist/chatlist',
    });
  },
});
