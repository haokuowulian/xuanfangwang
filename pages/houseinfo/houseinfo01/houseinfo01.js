const app = getApp();



Page({
  data: {
    userId:'',
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
    bespeakId:''
  },
   
  onLoad(option) {
    var userId = my.getStorageSync({
          key: 'userId', // 缓存数据的key
        }).data;

    this.setData({
      id:option.id,
      rentType:option.rentType,
      userId:userId
    });
    console.log(this.data.id);
    console.log(this.data.rentType);
    this.getHouseDetail();
    this.getIsCollect();
  
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
    if(this.data.userId==''){
      this.setData({
        collectUrl:'/image/houseicon/uncollect.png',
        isColect:false
      });
      my.alert({
        title: '请先登录' 
      });
      
    }else{
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
  getIsCollect(){
    if(this.data.userId==''){
      this.setData({
        collectUrl:'/image/houseicon/uncollect.png',
        isColect:false
      });
    }else{
      var that=this;
     my.httpRequest({
      url: app.globalData.baseUrl+"IF/bespeak/isBespeak.do",
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
    my.navigateTo({
      url: '/pages/index/confirmpage/confirmpage?houseDetail='+JSON.stringify(this.data.houseDetail)+'&rentType='+this.data.rentType,
    });
  },
  //收藏或取消收藏
  collectOrUncollect(){
    if(this.data.isColect){//已收藏
      this.unCollect();
    }else{//未收藏
      this.collect();
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
  }
});
