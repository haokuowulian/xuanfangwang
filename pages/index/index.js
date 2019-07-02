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
    sharedHousing:[],
    houseNum:0,
    address:'',
    nearByHouseList:[],
    lag:0,
    lng:0,
    distance:20000,
    city:'',
    cityCode:'',
  },
  onLoad(){
    const updateManager = my.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      my.confirm({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
      my.alert({
        title: '更新提示',
        content: '更新失败！',
      });
    })
  },
  onShow(){
    this.getLocation();
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
  //选择城市
  chooseCity() {
    // my.alert({
    //   title: '暂无其他城市房源！' 
    // });
    var that = this;
    my.chooseCity({
      success: (res) => {
        console.log(res)
        this.setData({
          city:res.city,
          cityCode:res.adCode,
	      });
        my.setStorageSync({
          key: 'cityAdcode', // 缓存数据的key
          data: res.adCode, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'cityAdname', // 缓存数据的key
          data: res.city, // 要缓存的数据
        });
        that.getNearByHousing();
        that.getBanner(res.adCode);
        that.getBoutiqueHousing(res.adCode);
        that.getWholeRentalHousing(res.adCode);
        that.getSharedHousing(res.adCode);
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
    if(tp==4){
      my.navigateTo({
        url: '/pages/apartment/apartment_list/apartment_list?type='+tp,
      });
    }else{
      my.navigateTo({
      url: '/pages/index/houselist/houselist?type='+tp,
    });
    }
  },

  //获取banner图
  getBanner(cityAdcode){
   var that=this;
    my.request({
      url: app.globalData.baseUrl_whj+"IF/homePage/getHomeImageIF.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
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

 

  //获取精选房源
  getBoutiqueHousing(cityAdcode){
    var that=this;
    my.request({
      url: app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        decorateType:-3,
        rentType:1,
        pageIndex: 0,
        pageSize: 6,
        cityAdcode:cityAdcode,
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
  getWholeRentalHousing(cityAdcode){
    var that=this;
    my.request({
      url: app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        rentType:1,
        pageIndex: 0,
        pageSize: 6,
        cityAdcode:cityAdcode,
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
  getSharedHousing(cityAdcode){
    var that=this;
    my.request({
      url: app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        rentType:2,
        pageIndex: 0,
        pageSize: 6,
        cityAdcode:cityAdcode,
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
//获取当前位置
 getLocation(){
    var that=this;
    var cityAdcode = my.getStorageSync({
      key: 'cityAdcode', // 缓存数据的key
    }).data;
    if(cityAdcode!=''&&cityAdcode!=null){
      var cityAdname = my.getStorageSync({
        key: 'cityAdname', // 缓存数据的key
      }).data;
      var lng = my.getStorageSync({
        key: 'local_longitude', // 缓存数据的key
      }).data;
      var lag = my.getStorageSync({
        key: 'local_latitude', // 缓存数据的key
      }).data;
      var address = my.getStorageSync({
        key: 'local_address', // 缓存数据的key
      }).data;
      that.setData({
        city:cityAdname,
        cityCode:cityAdcode,
        lng:lng,
        lag:lag,
        address:address,
      });
      that.getNearByHousing();
      that.getBanner(cityAdcode);
      that.getBoutiqueHousing(cityAdcode);
      that.getWholeRentalHousing(cityAdcode);
      that.getSharedHousing(cityAdcode);
    }else{
      my.getLocation({
        type:2,
        success(res) {
          console.log('***********')
          console.log(res)
          console.log('***********')
          my.hideLoading();
          var city = res.city
          console.log(city)
          var str = city.split('市');
          console.log(str[0])
        that.setData({
          address:res.streetNumber.street+res.streetNumber.number,
          lng:res.longitude,
          lag:res.latitude,
          city:str,
          cityCode:res.cityAdcode,
        });
          my.setStorageSync({
            key: 'cityAdcode', // 缓存数据的key
            data: res.cityAdcode, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'cityAdname', // 缓存数据的key
            data: str, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'local_longitude', // 缓存数据的key
            data: res.longitude, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'local_latitude', // 缓存数据的key
            data: res.latitude, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'local_address', // 缓存数据的key
            data: res.streetNumber.street+res.streetNumber.number, // 要缓存的数据
          });
          that.getNearByHousing();
          that.getBanner(res.cityAdcode);
          that.getBoutiqueHousing(res.cityAdcode);
          that.getWholeRentalHousing(res.cityAdcode);
          that.getSharedHousing(res.cityAdcode);
        
        },
        fail() {
          my.hideLoading();
          my.alert({ title: '定位失败' });
          that.setData({
            city:'杭州',
            cityCode:'330100',
          });
          my.setStorageSync({
            key: 'cityAdcode', // 缓存数据的key
            data: '330100', // 要缓存的数据
          });
          my.setStorageSync({
            key: 'cityAdname', // 缓存数据的key
            data: '杭州', // 要缓存的数据
          });
          my.setStorageSync({
            key: 'local_longitude', // 缓存数据的key
            data: '120.12703', // 要缓存的数据
          });
          my.setStorageSync({
            key: 'local_latitude', // 缓存数据的key
            data: '30.273923', // 要缓存的数据
          });
          that.getNearByHousing();
          that.getBanner('330100');
          that.getBoutiqueHousing('330100');
          that.getWholeRentalHousing('330100');
          that.getSharedHousing('330100');
        },
      })
    }
 },
  //获取附近房源
  getNearByHousing(){
     var that=this;
     var lng = my.getStorageSync({
       key: 'local_longitude', // 缓存数据的key
     }).data;
     var lag = my.getStorageSync({
       key: 'local_latitude', // 缓存数据的key
     }).data;
     my.request({
      url: app.globalData.baseUrl_whj+"IF/homePage/getHomeHouseIF.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        lng: this.data.lng,
        lat: this.data.lag,
        distance:this.data.distance
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          that.setData({
            houseNum:res.data.count,
            nearByHouseList:res.data.data
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
  //前往附近地图页
  goToMap(){
    var lngLag={
      lng:this.data.lng,
      lag:this.data.lag
    }
    console.log(lngLag);
    my.navigateTo({
    url: '/pages/index/map/map?list='+ JSON.stringify(this.data.nearByHouseList)+'&lngLag='+JSON.stringify(lngLag)+'&distance='+this.data.distance,
    })
  },
  //前往房源详情
  goToHouseDetail(e){
    my.navigateTo({
      url: '/pages/houseinfo/houseinfo03/houseinfo03?id='+e.target.dataset.text+'&rentType='+e.target.dataset.type,
    })
  },
  scan(){
    // my.navigateTo({
    //   url: '/pages/index/news/news',
    // })
    my.scan({
      type: 'qr',
      success: (res) => {
        console.log(res)
        console.log('扫描成功')
        var myData=res.code;
        var infolist = myData.split(",");
        var roomId=infolist[0];
        var rent_type=infolist[1];
        my.navigateTo({
          url: '/pages/houseinfo/houseinfo01/houseinfo01?id='+roomId+'&rentType='+rent_type,
        })
      },
    });
  },
});
