const app = getApp();
Page({
  data: {
    userId:'',
    certNo:'',//身份证信息，判断是否完善信息
    housedetails:'',
    housesupport:'',
    imgUrl:app.globalData.baseImgUrl_whj,
    iconUrl:app.globalData.baseUrl_whj,
    rentType:0,//房源类型，1：整租；2：分租
    id:0,//房源Id
    interval:3000,//滚动切换时间
    houseDetail:null,//详情
    furnitureList:[],
    collectUrl:'/image/houseicon/uncollect.png',
    isColect:false,
    collectId:'',
    isDisable:false,
    isBespeak:false,
    bespeakId:'',
    isLandrord:false,
    landlordId:'',

    scale:15,
    markers:[],
    circles:[],
    radius:1000,
    longitude:0,
    latitude:0,

    showpage:false,
  },
  onReady() {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext( 'map' );
  },
  onLoad(option) {
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var certNo = my.getStorageSync({
      key: 'certNo', // 缓存数据的key
    }).data;
    var userlogin = my.getStorageSync({
      key: 'userlogin', 
    }).data;
    if(userlogin){

    }
    this.setData({
      id:option.id,
      rentType:option.rentType,
      isLandrord:option.isLandrord,
      userId:userId,
      certNo:certNo
    });
    console.log('id:'+this.data.id);
    console.log('type:'+this.data.rentType);
    
    this.getIsCollect();
    this.getIsBespeak();
    this.getHouseDetail(this.data.rentType);

  },
  
  //获取房源详情
  getHouseDetail(rentType){
    var that=this;
     my.request({
      url: app.globalData.baseUrl_whj+"IF/housing/getHousingDetailIF.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: that.data.id,
        rentType: that.data.rentType
      },
      dataType: 'json',
      success: function(res) {
        console.log("房源详情");
        console.log(res.data);
        if(rentType==1){
          that.setData({
            longitude:res.data.data.longitude,
            latitude:res.data.data.latitude,
            landlordId:res.data.data.landlordId,
          });
        }else if(rentType==2){
          that.setData({
            longitude:res.data.data.house.longitude,
            latitude:res.data.data.house.latitude,
            landlordId:res.data.data.house.landlordId,
          });
        }
        
        var list=[];
        for(var i=0;i<res.data.furnitureList.length;i++ ){
          var object={
            icon:that.data.iconUrl+res.data.furnitureList[i].icon,
            text:res.data.furnitureList[i].furniture
          }
          list.push(object);
        }
        if(res.data.success){
          that.setData({
            houseDetail:res.data.data,
            alandlordId:res.data.data.landlordId,
            furnitureList:list,
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
  },
  //获取是否收藏
  getIsCollect(){
     console.log('-------');
    if(!this.data.userId||this.data.userId==''){
      this.setData({
        collectUrl:'/image/houseicon/uncollect.png',
        isColect:false
      });
      
    }else{
      console.log(this.data.rentType);
      var that=this;
     my.request({
      url: app.globalData.baseUrl_whj+"IF/myFavorite/isCollect.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        userId:that.data.userId,
        housingId: that.data.id,
        housingType: that.data.rentType
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        
        if(res.data.success){
          if(res.data.isCollect){
            that.setData({
              isColect:true,
              collectUrl:'/image/houseicon/collect.png',
              collectId:res.data.collectId
            });
          }else{
            that.setData({
              isColect:false,
              collectUrl:'/image/houseicon/uncollect.png'
            });
          }
          console.log(that.data.collectUrl);
          
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
 //获取是否预约
  getIsBespeak(){
    var that = this;
    if(!this.data.userId||this.data.userId==''){
      this.setData({
        collectUrl:'/image/houseicon/uncollect.png',
        isColect:false
      });
    }else{
     
     my.request({
      url: app.globalData.baseUrl+"IF/bespeak/isBespeak.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        userId:that.data.userId,
        housingId: that.data.id,
        housingType: that.data.rentType
      },
      dataType: 'json',
      success: function(res) {
        console.log('是否预约？');
        console.log(that.data.userId+'*********'+that.data.id+'******'+that.data.rentType);
        console.log(res.data);
        
        if(res.data.success){
          if(res.data.isBespeak){
            that.setData({
              isBespeak:true,
              bespeakId:res.data.bespeakId
            });
          }else{
            that.setData({
              isBespeak:false
            });
          }
          
          
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
  //前往周边交通
  goToNearBy(){
    my.navigateTo({
      url: '/pages/houseinfo/nearby/nearby?houseDetail='+JSON.stringify(this.data.houseDetail)+'&rentType='+this.data.rentType,
    })
  },
  toConfirmpage(){
    var userlogin = my.getStorageSync({
      key: 'userlogin', 
    }).data;
    var userCompleted = my.getStorageSync({
      key: 'userCompleted', 
    }).data;
    if(!userlogin){
      my.alert({
        title: '请在先登录',
        buttonText: '确定',
        success: () => {
          my.navigateTo({
            url: '/pages/login/login',
          });
        },
      });
    }else{
      if(userlogin){
        var token = my.getStorageSync({
          key: 'token', 
        }).data;
        var userName = my.getStorageSync({
          key: 'userName', 
        }).data;
        console.log(token)
        my.request({
          url: app.globalData.baseUrl+'IF/token/getToken.do', // 目标服务器url
          method: 'POST',
          headers:{
            'content-type': 'application/x-www-form-urlencoded'
          },
          data:{
            phone:userName,
            token:token,
          },
          dataType: 'json',
          success: (res) => {
            console.log(res)
            if(res.data.success){
              // if(userCompleted){
                my.navigateTo({
                  url: '/pages/index/confirmpage/confirmpage?houseDetail='+JSON.stringify(this.data.houseDetail)+'&rentType='+this.data.rentType,
                });
              // }else{
              //   my.confirm({
              //     title: '温馨提示',
              //     content: '请先完善个人信息',
              //     confirmButtonText: '确认',
              //     cancelButtonText: '取消',
              //     success: (res) => {
              //       if(res.confirm){
              //         my.navigateTo({
              //           url: '/pages/index/account_completed/account_mine/account_mine',
              //         });
              //       }
                    
              //     },
              //   });
              // }
            }else{
              my.setStorageSync({
                key: 'userlogin', // 缓存数据的key
                data: false, // 要缓存的数据
              });
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
          }
        });
      }
    }
    
  },
  //收藏或取消收藏
  collectOrUncollect(){
    var userlogin = my.getStorageSync({
      key: 'userlogin', 
    }).data;
     
    if(!userlogin){
      my.alert({
        title: '请先登录',
        buttonText: '确定',
          success: () => {
            my.navigateTo({
              url: '/pages/login/login',
            });
          },
      });
    }else{
      if(userlogin){
        var token = my.getStorageSync({
          key: 'token', 
        }).data;
        var userName = my.getStorageSync({
          key: 'userName', 
        }).data;
        console.log(token)
        my.request({
          url: app.globalData.baseUrl+'IF/token/getToken.do', // 目标服务器url
          method: 'POST',
          headers:{
            'content-type': 'application/x-www-form-urlencoded'
          },
          data:{
            phone:userName,
            token:token,
          },
          dataType: 'json',
          success: (res) => {
            console.log(res)
            if(res.data.success){
              if(this.data.isColect){//已收藏
                this.unCollect();
              }else{//未收藏
                this.collect();
              }
            }else{
              my.setStorageSync({
                key: 'userlogin', // 缓存数据的key
                data: false, // 要缓存的数据
              });
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
          }
        });
      }
    }
    
  
  },
  
  //收藏
  collect(){
    this.setData({
      isDisable:true
    });
     var that=this;
     my.showLoading();
     my.request({
      url: app.globalData.baseUrl_whj+"IF/myFavorite/addMyFavorite.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        userId:this.data.userId,
        housingId: this.data.id,
        housingType: this.data.rentType
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        
        if(res.data.success){
          my.hideLoading();
          that.setData({
            isColect:!that.data.isColect,
            collectUrl:'/image/houseicon/collect.png',
            collectId:res.data.collectId,
            isDisable:false
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
  },
  //取消收藏
  unCollect(){
    this.setData({
      isDisable:true
    });
    console.log(this.data.collectId);
    my.showLoading();
    var that=this;
    my.request({
      url: app.globalData.baseUrl_whj+"IF/myFavorite/delMyFavorite.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        userId:that.data.userId,
        id: that.data.collectId
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        
        if(res.data.success){
          my.hideLoading();
          that.setData({
            isColect:!that.data.isColect,
            collectUrl:'/image/houseicon/uncollect.png',
            isDisable:false
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
  },
  //提示是否取消预约
  alertPromt(){
     my.confirm({
      title: '提示',
      content: '确定要取消该预约吗?',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
       if(result.confirm){
         this.cancel();
       }
      },
    });
  },
  //取消预约
  cancel(){
    var that=this;
    my.showLoading();
    my.request({
      url: app.globalData.baseUrl+'IF/bespeak/editBespeak.do',
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        uid:that.data.userId,
        id:that.data.bespeakId,
        state:3
      },
      dataType: 'json',
      success: function(res) {
       console.log(res);
       my.hideLoading();
       that.setData({
         isBespeak:false
       });
      
      },
      fail: function(res) {
       console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
  toComplaint(){
    var userCompleted = my.getStorageSync({
      key: 'userCompleted', 
    }).data;
    var userlogin = my.getStorageSync({
      key: 'userlogin', 
    }).data;
    if(!userlogin){
      my.alert({
        title: '请先登录',
        buttonText: '确定',
            success: () => {
              my.navigateTo({
                url: '/pages/login/login',
              });
            },
      });
    }else{
      my.navigateTo({
        url:'/pages/index/complaint/complaint?houseId='+this.data.id+'&rentType='+this.data.rentType,
      });
    }
    
  },
//页面分享
  toShare(){
    var that = this;
    that.setData({
      showpage:true,
    });
  },

  onShareAppMessage(){
    console.log(this.data.id)
    console.log(this.data.rentType)
    return {
      title: '房源详情分享',
      desc: '房源详情分享',
      path: '/pages/houseinfo/houseinfo03/houseinfo03?id='+this.data.id+'&rentType='+this.data.rentType,

    };
  },
  toSigning(){
    var userCompleted = my.getStorageSync({
      key: 'userCompleted', 
    }).data;
    var userlogin = my.getStorageSync({
      key: 'userlogin', 
    }).data;
    console.log(userCompleted)
     if(!userlogin){
      my.alert({
        title: '请先登录',
        buttonText: '确定',
            success: () => {
              my.navigateTo({
                url: '/pages/login/login',
              });
            },
      });
    }else{
    if(userlogin){
      var token = my.getStorageSync({
        key: 'token', 
      }).data;
      var userName = my.getStorageSync({
        key: 'userName', 
      }).data;
      console.log(token)
      my.request({
        url: app.globalData.baseUrl+'IF/token/getToken.do', // 目标服务器url
        method: 'POST',
        headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          phone:userName,
          token:token,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            if(userCompleted){
              my.navigateTo({
                url: '/pages/index/signing/signing?houseDetail='+JSON.stringify(this.data.houseDetail)+'&rentType='+this.data.rentType,
              });
            }else{
              my.confirm({
                title: '温馨提示',
                content: '请先完善个人信息',
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                success: (res) => {
                  if(res.confirm){
                    my.navigateTo({
                      url: '/pages/index/account_completed/account_mine/account_mine',
                    });
                  }
                },
              });
            }
          }else{
            my.setStorageSync({
              key: 'userlogin', // 缓存数据的key
              data: false, // 要缓存的数据
            });
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
        }
      });
    }
      
      
    }
  },
  onPaymentMethod(){
    my.navigateTo({
      url: '/pages/houseinfo/payment_method/payment_method?houseDetail='+JSON.stringify(this.data.houseDetail)+'&rentType='+this.data.rentType,
    });
  },
  toMap(){
    my.navigateTo({
      url: '/pages/index/map_house/map_house?houseDetail='+JSON.stringify(this.data.houseDetail)+'&rentType='+this.data.rentType,
    });
  },
  //待修改，添加房东id、头像、昵称
  toChat(){
    var that = this;
    var landlordId = that.data.landlordId;
    var userCompleted = my.getStorageSync({
      key: 'userCompleted', 
    }).data;
    var userlogin = my.getStorageSync({
      key: 'userlogin', 
    }).data;
    if(!userlogin){
      my.alert({
        title: '请先登录',
        buttonText: '确定',
        success: () => {
          my.navigateTo({
            url: '/pages/login/login',
          });
        },
      });
    }else{
      if(userlogin){
        var token = my.getStorageSync({
          key: 'token', 
        }).data;
        var userName = my.getStorageSync({
          key: 'userName', 
        }).data;
        console.log(token)
        my.request({
          url: app.globalData.baseUrl+'IF/token/getToken.do', // 目标服务器url
          method: 'POST',
          headers:{
            'content-type': 'application/x-www-form-urlencoded'
          },
          data:{
            phone:userName,
            token:token,
          },
          dataType: 'json',
          success: (res) => {
            console.log(res)
            if(res.data.success){
              console.log(landlordId)
              console.log('2233')
              // var landlordId = housedetail.landlordId;
              // console.log(landlordId)
              my.request({
                url: app.globalData.baseUrl+'IF/user/getUserInfoById.do', // 目标服务器url
                method: 'POST',
                headers:{
                  'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                  userId:landlordId,
                },
                dataType: 'json',
                success: (res) => {
                  console.log(res)

                  my.navigateTo({
                    url: '/pages/chat/chat?uid='+landlordId+'&avatar='+res.data.data.avatar+'&nickName='+res.data.data.nickName,
                  });
                },
              });
            }else{
              my.setStorageSync({
                key: 'userlogin', // 缓存数据的key
                data: false, // 要缓存的数据
              });
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
          }
        });
      }
    }
    
  },
  
});
