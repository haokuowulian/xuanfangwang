const app = getApp();

Page({
  data: {
    value: '',
    imgUrl:app.globalData.baseImgUrl_whj,
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 3000,
    circular: true,
    boutiqueHousing:[],
    wholeRentalHousing:[],
    sharedHousing:[]

  },
  onLoad(){
    this.getBanner();
    this.getNearByHousing();
    this.getBoutiqueHousing();
    this.getWholeRentalHousing();
    this.getSharedHousing();
  },
  handleInput(value) {
    this.setData({
      value,
    });
  },
  handleClear(value) {
    this.setData({
      value: '',
    });
  },
  handleFocus() { },
  handleBlur() { },
  handleCancel() {
    this.setData({
      value: '',
    });
  },
  handleSubmit(value) {
    my.alert({
      content: value,
    });
  },
  chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => {
        my.alert({
          title: 'chooseAlipayContact response: ' + JSON.stringify(res),
        });
      },
    });
  },
  onSearchBarTap() {
    my.navigateTo({
      url: '/pages/search/search',
    });
  },
  houseInfoTap(e){
    // 获取房源id
    var id = e.currentTarget.dataset.text;
    console.log(id)
    my.navigateTo({
      url: '/pages/houseinfo/houseinfo01/houseinfo01',
    });
  },
  choose1OnTap(e){
    var tp = e.currentTarget.dataset.choose;
    console.log(tp);
    my.navigateTo({
      url: '/pages/index/houselist/houselist?tp='+tp,
    });
  },

  //获取banner图
  getBanner(){
   var that=this;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/homePage/getHomeImageIF.do",
      method: 'POST',
      data: {
        pageIndex: 0,
        pageSize: 3,
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          that.setData({
            imgUrls:res.data.data
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

  //获取附近房源
  getNearByHousing(){
    console.log("getNearByHousing");
  },

  //获取精选房源
  getBoutiqueHousing(){
    var that=this;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      data: {
        decorateType:-3,
        rentType:1,
        pageIndex: 0,
        pageSize: 6,
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          that.setData({
            boutiqueHousing:res.data.data
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

  //获取整租房源
  getWholeRentalHousing(){
    var that=this;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      data: {
        rentType:1,
        pageIndex: 0,
        pageSize: 6,
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          that.setData({
            wholeRentalHousing:res.data.data
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

  //获取合租房源
  getSharedHousing(){
    var that=this;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      data: {
        rentType:2,
        pageIndex: 0,
        pageSize: 6,
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          that.setData({
            sharedHousing:res.data.data
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
});
