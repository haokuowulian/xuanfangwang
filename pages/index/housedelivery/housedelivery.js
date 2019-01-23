var app = getApp();
Page({
  data: {
    city:'',
    cityCode:'',
    areaList:[],
    area:'',
    areaId:'',
    showBottom: false,
  },
  onLoad() {

    
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
  next(){
     my.navigateTo({
    url: '/pages/index/housedelivery/housedelivery2/housedelivery2',
    })
  }
});
