const app = getApp();


const includePoints = [{
  latitude: 30.266786,
  longitude: 120.10675,
}];



Page({
  data: {
    scale: 11,
    lng: '',
    lat: '',
    nearByHouseList:[],
    circles:[],
    markers: '',
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
  },
  onReady() {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext('map');
    
  },
  onLoad(){
    // this.getLocation();
  },
  onShow(){
    this.getLocation();
  },
  //获取当前位置
  getLocation(){
    var that=this;
    my.getLocation({
      type:2,
      success(res) {
        my.hideLoading();
        that.setData({
          lng:res.longitude,
          lat:res.latitude,
          circles: [ {
              longitude: res.longitude,
              latitude: res.latitude,
              fillColor: '#0099FF33',
              radius: that.data.distance,
              strokeWidth: 3,
            } ]
        });
       
        that.getNearByHousing();
        
      },
      fail() {
        my.hideLoading();
        my.alert({ title: '定位失败' });
      },
    })
 },
  //获取附近房源
  getNearByHousing(){
     var that=this;
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/homePage/getHomeHouseIF.do",
      method: 'POST',
      data: {
        lng: this.data.lng,
        lat: this.data.lat,
        distance:this.data.distance
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          that.setData({
            // houseNum:res.data.count,
            nearByHouseList:res.data.data,
            housecount:res.data.data.length
          });
          that.setMarkers();
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
  setMarkers(){
     var houseMarkers=[];
    for(var i=0;i<this.data.nearByHouseList.length;i++){
      var obj={
        id:i+1,
        latitude: this.data.nearByHouseList[i].latitude,
        longitude: this.data.nearByHouseList[i].longitude,
        width: 1,
        height: 1,
        // iconPath: '/image/mark_bs.png',
        "label": {
          content: this.data.nearByHouseList[i].apartment.apartmentName,
          color: "#ffffff",
          fontSize: 16,
          borderRadius: 5,
          bgColor: "#fd9f28",
          padding: 10,
          display: 'ALWAYS',
        },
        markerLevel: -1
      }
      houseMarkers.push(obj);
    }
   
    this.setData( {
      markers: houseMarkers,
      distance:this.data.distance
    } );
  },
  regionchange ( e )
  {
    console.log( 'regionchange', e );
  },
  markertap ( e )
  {
    console.log( 'marker tap', e );
  },
  controltap ( e )
  {
    console.log( 'control tap', e );
  },
  tap ()
  {
    console.log( 'tap' );
  },
  callouttap ( e )
  {
    console.log( 'callout tap', e );
  },
  mapMoveToLocation ()
  {
    this.mapCtx.moveToLocation();
  },

  // 跳转房屋查找
  searchHouse(){
    console.log('222222222222')
     my.navigateTo({
      // url: '/pages/index/renting/renting?type=1',
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
  // titleClick1(e){
  //   if(this.titleCss1){
  //     this.setData({
  //       titleCss1:false,
  //       titleCss2:false,
  //       tabdisplay1:true,
  //       tabdisplay2:false,
  //       circles,
  //       markers:housemarkers1,
  //       map1:true,
  //       map2:false,
  //     });
  //   }else{
  //     this.setData({
  //       titleCss1:true,
  //       titleCss2:false,
  //       tabdisplay1:true,
  //       tabdisplay2:false,
  //       circles,
  //       markers:housemarkers1,
  //       map1:true,
  //       map2:false,
  //     });
  //   }
  // },
  // titleClick2(e){
  //   if(this.titleCss2){
  //     this.setData({
  //       titleCss1:false,
  //       titleCss2:false,
  //       tabdisplay1:true,
  //       tabdisplay2:false,
  //       circles:[],
  //       markers:hotels,
  //       map1:false,
  //       map2:true,
  //     });
  //   }else{
  //     this.setData({
  //       titleCss1:false,
  //       titleCss2:true,
  //       tabdisplay1:false,
  //       tabdisplay2:true,
  //       circles:[],
  //       markers:hotels,
  //       map1:false,
  //       map2:true,
  //     });
  //   }
  // },

  // distanceChange(e){
  //   console.log(e.detail.value)
    
  //   if(e.detail.value>0&&e.detail.value<=410){
  //     this.setData({
  //       distance1:false,
  //       distance2:false,
  //       distance3:false,
  //       distance4:false,
  //       distance5:false,
  //       distance:'1km',
  //       scale: 14,
  //       newradius:1000,
  //       markers:housemarkers1,
  //       // markers:housemarkers,
  //     });
  //   }
  //   if(e.detail.value>410&&e.detail.value<=1550){
  //     this.setData({
  //       distance1:true,
  //       distance2:false,
  //       distance3:false,
  //       distance4:false,
  //       distance5:false,
  //       distance:'1km',
  //       scale: 14,
  //       ['circles[0].radius']:1000,
  //       markers:housemarkers1,
  //     });
  //   }
  //   if(e.detail.value>1550&&e.detail.value<=2750){
  //     this.setData({
  //       distance1:true,
  //       distance2:true,
  //       distance3:false,
  //       distance4:false,
  //       distance5:false,
  //       distance:'2km',
  //       scale: 13,
  //       ['circles[0].radius']:2000,
  //       markers:housemarkers1,
  //     });
  //   }
  //   if(e.detail.value>2750&&e.detail.value<=3920){
  //     this.setData({
  //       distance1:true,
  //       distance2:true,
  //       distance3:true,
  //       distance4:false,
  //       distance5:false,
  //       distance:'3km',
  //       scale: 13,
  //       ['circles[0].radius']:3000,
  //     });
  //   }
  //   if(e.detail.value>3920&&e.detail.value<=5120){
  //     this.setData({
  //       distance1:true,
  //       distance2:true,
  //       distance3:true,
  //       distance4:true,
  //       distance5:false,
  //       distance:'4km',
  //       scale: 12,
  //       ['circles[0].radius']:4000,
  //     });
  //   }
  //   if(e.detail.value>5120){
  //     this.setData({
  //       distance1:true,
  //       distance2:true,
  //       distance3:true,
  //       distance4:true,
  //       distance5:true,
  //       distance:'5km',
  //       scale: 12,
  //       ['circles[0].radius']:5000,
  //     });
  //   }
  // },
});

