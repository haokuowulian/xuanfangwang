const app = getApp();



Page({
  data: {
    bannerpath:'/image/house2.png',
    infohouse:'',
    housedetails:'',
    housesupport:'',
    imgUrl:app.globalData.baseImgUrl_whj,
    iconUrl:app.globalData.baseUrl_whj,
    rentType:0,//房源类型，1：整租；2：分租
    id:0,//房源Id
    interval:3000,//滚动切换时间
    houseDetail:null,//详情
    furnitureList:[]
  },
   
  onLoad(option) {
    this.setData({
      id:option.id,
      rentType:option.rentType
    });
    console.log(this.data.id);
    console.log(this.data.rentType);
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
  toComplaint(){
    my.navigateTo({
      url:'/pages/index/complaint/complaint?houseId='+this.data.id+'&rentType='+this.data.rentType,
    });
  },
  
  
});
