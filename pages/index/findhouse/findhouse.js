const app = getApp();


const includePoints = [{
  latitude: 30.266786,
  longitude: 120.10675,
}];



Page({
  data: {
    cityId:'',
    scale: 10,
    lng: '',
    lat: '',
    nearByHouseList:[],
    circles:[],
    markers: [],
    titleCss1: true,
    titleCss2: false,
    distance: 20000,
    distance1: false,
    distance2: false,
    distance3: false,
    distance4: false,
    distance5: false,
    hasLocation: false,
    housemenu: false,
    housecount: 0,
    map1: true,
    map2: false,

    show1:false,
    show2:false,

    showList:false,
    houseList:[],

    map_width:'100%',
    map_height:'100vh',
  },
  onReady() {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext('map');
    
  },
  onLoad(){
    this.getLocation();
    // var map = new aMap.Map('container',{
    //    center:[117.000923,36.675807],
    //    zoom:11
    // });
    
  },
  onShow(){
    // this.getLocation();
  },
  //获取当前位置
  getLocation(){
    var that=this;
    var cityId = my.getStorageSync({
      key: 'cityAdcode', // 缓存数据的key
    }).data;
    var lng = my.getStorageSync({
      key: 'local_longitude', // 缓存数据的key
    }).data;
    var lat = my.getStorageSync({
      key: 'local_latitude', // 缓存数据的key
    }).data;

    that.getNearByHousing(cityId);
    that.setData({
      lng: lng,
      lat: lat,
      cityId:cityId,
    });
    // my.getLocation({
    //   type:2,
    //   success(res) {
    //     my.hideLoading();
    //     that.setData({
    //       lng:res.longitude,
    //       lat:res.latitude,
    //     });
       
    //     that.getNearByHousing();
        
    //   },
    //   fail() {
    //     my.hideLoading();
    //     my.alert({ title: '定位失败' });
    //   },
    // })
 },
  //获取附近房源
  getNearByHousing(cityId){
     var that=this;
     my.request({
      url: app.globalData.baseUrl_whj+"IF/housing/getDistHousingCount.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        cityId:cityId,
      },
      dataType: 'json',
      success: function(res) {
        console.log(res);
        if(res.data.success){
          // that.setData({
          //   scale:11,
          // });
          that.setMarkers(res.data.data,11);
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

  setMarkers(houseList,scale){
    var that = this;
    // that.data.markers=[];
    var houseMarkers=[];
    console.log(houseList.length)
    for(var i=0;i<houseList.length;i++){
      var obj={
        id:houseList[i].id,
        latitude: houseList[i].latitude,
        longitude: houseList[i].longitude,
        width: 1,
        height: 1,
        "label": {
          content: houseList[i].distName+' '+houseList[i].count+'套',
          color: "#ffffff",
          fontSize: 16,
          borderRadius: 5,
          bgColor: "#fd9f28",
          padding: 10,
          // display: 'ALWAYS',
        },
        markerLevel: -1
      }
      houseMarkers.push(obj);
    }
    that.onShow();
    that.setData( {
      markers: houseMarkers,
      distance:that.data.distance,
      scale:scale,
    } );
  },
setMarkers1(houseList,scale){
    var that = this;
    // that.data.markers=[];
    var houseMarkers=[];
    console.log(houseList.length)
    for(var i=0;i<houseList.length;i++){
      if(houseList[i].count>0){
         var obj={
          id:houseList[i].id,
          latitude: houseList[i].latitude,
          longitude: houseList[i].longitude,
          width: 1,
          height: 1,
          "label": {
            content: houseList[i].distName+' '+houseList[i].count+'套',
            color: "#ffffff",
            fontSize: 16,
            borderRadius: 5,
            bgColor: "#fd9f28",
            padding: 10,
            // display: 'ALWAYS',
          },
          markerLevel: -1
        }
        houseMarkers.push(obj);
      }else{
       
      }
    }
    that.onShow();
    that.setData( {
      markers: houseMarkers,
      distance:that.data.distance,
      scale:scale,
    } );
  },
  regionchange ( e )
  {
    var that = this;
    console.log( 'regionchange', e );
  },
  markertap ( e )
  {
    console.log( 'marker tap', e );
    this.callouttap(e);
  },
  controltap ( e )
  {
    console.log( 'control tap', e );
  },
  tap ()
  {
    console.log( 'tap' );
    this.setData({
      showList:false,
    });
  },
  callouttap ( e )
  {
    var that = this;
    console.log( 'callout tap', e );
    var distId = e.markerId;
    console.log(distId)
    console.log(String(distId).length)
    if(String(distId).length==6){
      console.log( 'come in' );
      that.setData( {
        distance:that.data.distance,
        // scale:13,
        lng: e.longitude,
        lat: e.latitude,
      } );
      my.request({
        url: app.globalData.baseUrl_whj+"IF/housing/getStreetHousingCount.do",
        method: 'POST',
        headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
        data: {
          distId:distId,
        },
        dataType: 'json',
        success: function(res) {
          console.log(res);
          my.hideLoading();
          if(res.data.success){
            that.setMarkers1(res.data.data,13);
          }
        },
        fail: function(res) {
          console.log(res);
          my.hideLoading();
        },
        complete: function(res) {
          my.hideLoading();
        }
      });
    }
    if(String(distId).length==9){
      console.log( 'come in' );
      my.navigateTo({
        url:'/pages/index/findhouse/house_street/house_street?streetId='+distId,
      });
      // that.setData( {
      //   distance:that.data.distance,
      //   scale:14,
      //   lng: e.longitude,
      //   lat: e.latitude,
      //   showList:true,
      //   map_width:'100%',
      //   map_height:'40%',
      // } );
      // my.request({
      //   url: app.globalData.baseUrl_whj+"IF/housing/getHousingByStreetId.do",
      //   method: 'POST',
      //   data: {
      //     streetId:distId,
      //   },
      //   dataType: 'json',
      //   success: function(res) {
      //     console.log(res);
      //     my.hideLoading();
      //     that.setData({
      //       houseList:res.data.data,
      //     });
      //   },
      //   fail: function(res) {
      //     console.log(res);
      //     my.hideLoading();
      //   },
      //   complete: function(res) {
      //     my.hideLoading();
      //   }
      // });
    }
  },
  mapMoveToLocation ()
  {
    // this.mapCtx.moveToLocation();
    this.getLocation();
  },

  // 跳转房屋查找
  searchHouse(){
    console.log('222222222222')
     my.navigateTo({
      url: '/pages/search/search',
    });
  },

  houseCountClick(e){
    if(this.data.housemenu){
       this.setData({
      housemenu:false,
    });
    }else{
      this.setData({
      housemenu:true,
    });
    }
  },
});
