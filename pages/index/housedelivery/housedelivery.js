var app = getApp();
Page({
  data: {
    city:'',
    cityCode:'',
    areaList:[],
    area:'',
    areaId:'',
    showBottom: false,
    street:'',
    village:'',
    vphone:'',
    vyear:'',
    vgreen:'',
    vcubage:'',
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
  toInput(e){
    console.log(e.detail.value)
    var that = this;
    if(e.target.dataset.t==1){
      that.setData({
        street:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        village:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        vphone:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        vyear:e.detail.value,
      });
    }
    if(e.target.dataset.t==5){
      that.setData({
        vgreen:e.detail.value,
      });
    }
    if(e.target.dataset.t==6){
      that.setData({
        vcubage:e.detail.value,
      });
    }
  },
  next(){
    var that = this;
    var cityCode = that.data.cityCode;
    var areaId = that.data.areaId;
    var street = that.data.street;
    var village = that.data.village;
    var vphone = that.data.vphone;
    var vyear = that.data.vyear;
    var vcubage = that.data.vcubage;

    if(cityCode!=''&&areaId!=''&&street!=''){
      my.setStorage({
        key: 'r_cityCode', // 缓存数据的key
        data: cityCode, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_areaId', // 缓存数据的key
        data: areaId, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_street', // 缓存数据的key
        data: street, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_village', // 缓存数据的key
        data: village, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_vphone', // 缓存数据的key
        data: vphone, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_vyear', // 缓存数据的key
        data: vyear, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_vcubage', // 缓存数据的key
        data: vcubage, // 要缓存的数据
      });
      that.toNext();
    }else{
      my.alert({
        title: '位置信息请填写完整' 
      });
    }
  },
  toNext(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery2/housedelivery2',
    })
  },
});
