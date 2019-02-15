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
    currentTime:''
  },
  onLoad() {
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    if(userId!=''&&userId!=null){
      this.antLogin();
    }
    
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
   roleId = my.getStorageSync({
     key: 'roleId', // 缓存数据的key
   }).data;
   currentIdentityIsUser = my.getStorageSync({
     key: 'currentIdentityIsUser', // 缓存数据的key
   }).data;
  if(userId&&userId!=''){
    if(certNo&&certNo!=''){
      my.setNavigationBar({
            title:'个人中心'
          });
      if(roleId==7&&!currentIdentityIsUser){//房东
        this.setData({
          userlogin:true,
          userCompleted:true,
          isRoleUser:false,
          headimg:avatar,
          username:nickName,
          userId:userId
        });
      }else if(roleId==7&&currentIdentityIsUser){//房东&租客
        this.setData({
          userlogin:true,
          userCompleted:true,
          isRoleUser:true,
          headimg:avatar,
          username:nickName,
          userId:userId
        });
      }else if(roleId==8){//租客
        this.setData({
          userlogin:true,
          userCompleted:true,
          isRoleUser:true,
          headimg:avatar,
          username:nickName,
          userId:userId
        });
      }
      
    }else{
      my.setNavigationBar({
            title:'完善信息'
          });
      this.setData({
        userlogin:true,
        userCompleted:false,
        headimg:avatar,
        username:nickName,
        userId:userId
      });
    }
    
  }else{
    my.setNavigationBar({
       title:'登录'
     });
    this.setData({
      userlogin:false
    });
  }
  },
  //授权登录
  antLogin(){
    console.log('验证登陆')
    my.getAuthCode({
      scopes: 'auth_user',
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
                  my.setNavigationBar({
                    title:'完善信息'
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
  xfwLogin(){
    my.navigateTo({
      url: '/pages/login/login',
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
      url: '/pages/index/order/order',
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
        url: '/pages/index/contract/contract?roleType=1',
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
  toMore(){
    my.navigateTo({
      url: '/pages/index/more/more',
    });
  },
  toAccountInfo(){
    my.navigateTo({
      url: '/pages/index/accountinfo/accountinfo',
    });
  },
  // toTest(){
  //   my.navigateTo({
  //     url: '/pages/index/order/orderinfo/orderinfo',
  //   });
  // },

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
  }
});
