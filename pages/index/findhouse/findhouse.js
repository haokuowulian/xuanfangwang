const areaHouse = [
  {
    areaCode:'330106',
    areaName:'西湖区',
    houseCount:'10',
    longitude:'120.1302600000',
    latitude:'30.2596100000',
  },
  {
    areaCode:'330108',
    areaName:'滨江区',
    houseCount:'10',
    longitude:'120.2120100000',
    latitude:'30.2084000000',
  },
  {
    areaCode:'330109',
    areaName:'萧山区',
    houseCount:'10',
    longitude:'120.2645700000',
    latitude:'30.1853400000',
  },
  {
    areaCode:'330102',
    areaName:'上城区',
    houseCount:'10',
    longitude:'120.1692900000',
    latitude:'30.2425900000',
  },
];

const streetHouse = [
  {
    areaCode:'330102001',
    areaName:'清波街道',
    houseCount:'10',
    longitude:'120.1609400000',
    latitude:'30.2383400000',
  },
  {
    areaCode:'330108001',
    areaName:'西兴街道',
    houseCount:'10',
    longitude:'120.2329200000',
    latitude:'30.1871900000',
  },
  {
    areaCode:'330109109',
    areaName:'闻堰镇',
    houseCount:'10',
    longitude:'120.1838000000',
    latitude:'30.1230700000',
  },
  {
    areaCode:'330106008',
    areaName:'西湖街道',
    houseCount:'10',
    longitude:'120.1250680000',
    latitude:'30.2253630000',
  },
];


const app = getApp();


const includePoints = [{
  latitude: 30.266786,
  longitude: 120.10675,
}];

Page({
  data: {
    scale: 10,
    lng: '',
    lat: '',
    nearByHouseList:[],
    markers: '',

    show1:false,
    show2:false,
  },
  onReady() {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext('map');
    
  },
  onLoad(){
    this.getLocation();
  },
  onShow(){
    // this.getLocation();
  },
  //获取当前位置
  getLocation(){
    var that=this;
    my.getLocation({
      type:2,
      success(res) {
        my.hideLoading();
        console.log(res)
        that.setData({
          lng:res.longitude,
          lat:res.latitude,
        });
       
        // that.getNearByHousing();
        that.setMarkers(areaHouse,that.data.scale);
      },
      fail() {
        my.hideLoading();
        my.alert({ title: '定位失败' });
      },
    })
 },

  setMarkers(houseList,scale){
    var that = this;
    var houseMarkers=[];
    

    for(var i=0;i<houseList.length;i++){
      var obj={
        id:houseList[i].areaCode,
        latitude: houseList[i].latitude,
        longitude: houseList[i].longitude,
        width: 1,
        height: 1,
        // iconPath: "/image/circle.png",
        // iconAppendStr:houseList[i].areaName+' '+houseList[i].houseCount+'套房源',
        "label": {
          content: houseList[i].areaName+' '+houseList[i].houseCount+'套房源',
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
    this.mapCtx.getCenterLocation({
      success: res => {
        console.log(res.longitude);
        console.log(res.latitude);
        that.setData({
          lng: res.longitude,
          lat: res.latitude,
          markers: houseMarkers,
          distance:this.data.distance,
          scale:scale,
        });
      }
    });
    // this.setData( {
    //   markers: houseMarkers,
    //   distance:this.data.distance,
    // } );
   
  },
  regionchange ( e )
  {
    var that = this;
    console.log( 'regionchange', e );
    var scale = e.scale;
    // this.mapCtx.getCenterLocation({
    //   success: res => {
    //     console.log(res.longitude);
    //     console.log(res.latitude);
    //     that.setData({
    //       lng: res.longitude,
    //       lat: res.latitude,
    //     });
    //   }
    // });
    console.log(scale)
    if(scale<12){
      that.setMarkers(areaHouse);
      that.setData({
        scale:scale,
      });
    }
    if(scale>=12&&scale<14){
      that.setMarkers(streetHouse,scale);
      that.setData({
        scale:scale,
      });
    }
    if(scale>=14&&scale<=16){
      this.mapCtx.getCenterLocation({
        success: res => {
          console.log(res.longitude);
          console.log(res.latitude);
          that.setData({
            lng: res.longitude,
            lat: res.latitude,
            scale:scale,
          });
        }
      });
      // that.setData({
      //   scale:scale,
      // });
    }
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
  //点击查询列表
  callouttap ( e )
  {
    var that = this;
    var scale = that.data.scale;
    console.log( 'callout tap', e );
    var id = e.markerId;
    console.log('areaCode',id)
  },
  mapMoveToLocation ()
  {
    this.mapCtx.moveToLocation();
  },


});



// Page({
//   data: {
//     scale: 11,
//     lng: '',
//     lat: '',
//     nearByHouseList:[],
//     circles:[],
//     markers: '',
//     titleCss1: true,
//     titleCss2: false,
//     distance: 20000,
//     distance1: false,
//     distance2: false,
//     distance3: false,
//     distance4: false,
//     distance5: false,
//     hasLocation: false,
//     housemenu: false,
//     housecount: 0,
//     map1: true,
//     map2: false,

//     show1:false,
//     show2:false,
//   },
//   onReady() {
//     // 使用 my.createMapContext 获取 map 上下文
//     this.mapCtx = my.createMapContext('map');
    
//   },
//   onLoad(){
//     // this.getLocation();
//   },
//   onShow(){
//     this.getLocation();
//   },
//   //获取当前位置
//   getLocation(){
//     var that=this;
//     my.getLocation({
//       type:2,
//       success(res) {
//         my.hideLoading();
//         that.setData({
//           lng:res.longitude,
//           lat:res.latitude,
//           circles: [ {
//               longitude: res.longitude,
//               latitude: res.latitude,
//               fillColor: '#0099FF33',
//               radius: that.data.distance,
//               strokeWidth: 3,
//             } ]
//         });
       
//         that.getNearByHousing();
        
//       },
//       fail() {
//         my.hideLoading();
//         my.alert({ title: '定位失败' });
//       },
//     })
//  },
//   //获取附近房源
//   getNearByHousing(){
//      var that=this;
//      my.httpRequest({
//       url: app.globalData.baseUrl_whj+"IF/homePage/getHomeHouseIF.do",
//       method: 'POST',
//       data: {
//         lng: this.data.lng,
//         lat: this.data.lat,
//         distance:this.data.distance
//       },
//       dataType: 'json',
//       success: function(res) {
//         console.log(res.data);
//         if(res.data.success){
//           that.setData({
//             // houseNum:res.data.count,
//             nearByHouseList:res.data.data,
//             housecount:res.data.data.length
//           });
//           that.setMarkers();
//         }
//       },
//       fail: function(res) {
//        console.log(res);
//       },
//       complete: function(res) {
//         my.hideLoading();
//       }
//     });
//   },
//   setMarkers(){
//      var houseMarkers=[];
//     for(var i=0;i<this.data.nearByHouseList.length;i++){
//       var obj={
//         id:i+1,
//         latitude: this.data.nearByHouseList[i].latitude,
//         longitude: this.data.nearByHouseList[i].longitude,
//         width: 1,
//         height: 1,
//         // iconPath: '/image/mark_bs.png',
//         "label": {
//           content: this.data.nearByHouseList[i].apartment.apartmentName,
//           color: "#ffffff",
//           fontSize: 16,
//           borderRadius: 5,
//           bgColor: "#fd9f28",
//           padding: 10,
//           display: 'ALWAYS',
//         },
//         markerLevel: -1
//       }
//       houseMarkers.push(obj);
//     }
   
//     this.setData( {
//       markers: houseMarkers,
//       distance:this.data.distance
//     } );
//   },
//   regionchange ( e )
//   {
//     console.log( 'regionchange', e );
//   },
//   markertap ( e )
//   {
//     console.log( 'marker tap', e );
//   },
//   controltap ( e )
//   {
//     console.log( 'control tap', e );
//   },
//   tap ()
//   {
//     console.log( 'tap' );
//   },
//   callouttap ( e )
//   {
//     console.log( 'callout tap', e );
//   },
//   mapMoveToLocation ()
//   {
//     this.mapCtx.moveToLocation();
//   },

//   // 跳转房屋查找
//   searchHouse(){
//     console.log('222222222222')
//      my.navigateTo({
//       // url: '/pages/index/renting/renting?type=1',
//       url: '/pages/search/search',
//     });
//   },

//   houseCountClick(e){
//     if(this.data.housemenu){
//        this.setData({
//       housemenu:false,
//     });
//     }else{
//       this.setData({
//       housemenu:true,
//     });
//     }
//   },

// });

