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
    isLandrord:false
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
    this.getHouseDetail();
  
  },

  //获取房源详情
  getHouseDetail(){
    var that=this;
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHousingDetailIF.do",
      method: 'POST',
      data: {
        id: this.data.id,
        rentType: this.data.rentType
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
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
            furnitureList:list
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
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/myFavorite/isCollect.do",
      method: 'POST',
      data: {
        userId:this.data.userId,
        housingId: this.data.id,
        housingType: this.data.rentType
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
     
     my.httpRequest({
      url: app.globalData.baseUrl+"IF/bespeak/isBespeak.do",
      method: 'POST',
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
        title: '请在先登录' 
      });
    }else{
      if(userCompleted){
        my.navigateTo({
          url: '/pages/index/confirmpage/confirmpage?houseDetail='+JSON.stringify(this.data.houseDetail)+'&rentType='+this.data.rentType,
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
                url: '/pages/index/account_completed/account_completed',
              });
            }
            
          },
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
        title: '请先登录' 
      });
    }else{
      
      if(this.data.isColect){//已收藏
        this.unCollect();
      }else{//未收藏
        this.collect();
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
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/myFavorite/addMyFavorite.do",
      method: 'POST',
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
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/myFavorite/delMyFavorite.do",
      method: 'POST',
      data: {
        userId:this.data.userId,
        id: this.data.collectId
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
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/bespeak/editBespeak.do',
      method: 'POST',
      data: {
        uid:this.data.userId,
        id:this.data.bespeakId,
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
        title: '请先登录' 
      });
    }else{
      my.navigateTo({
      url:'/pages/index/complaint/complaint?houseId='+this.data.id+'&rentType='+this.data.rentType,
    });
    }
    
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
        title: '请先登录' 
      });
    }else{
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
                url: '/pages/index/account_completed/account_completed',
              });
            }
          },
        });
      }
      
    }
  },
  onPaymentMethod(){
    my.navigateTo({
      url: '/pages/houseinfo/payment_method/payment_method?houseDetail='+JSON.stringify(this.data.houseDetail)+'&rentType='+this.data.rentType,
    });
  },
  
});
