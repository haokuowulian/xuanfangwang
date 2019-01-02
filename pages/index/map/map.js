const housemarkers1 = [
  {
  id: 0,
  latitude: 30.1188800000,
  longitude: 120.1814500000,
  width: 1,
  height: 1,
  // iconPath: '/image/mark_bs.png',
  "label":{
    content:"￥5500起",
    color:"#ffffff",
    fontSize:16,
    borderRadius:5,
    bgColor:"#FF9900",
    padding:12,
    display:'ALWAYS',
  },
  markerLevel: 2
},
  {
  id: 1,
  latitude: 30.1048400000,
  longitude: 120.1902000000,
  width: 1,
  height: 1,
  // iconPath: '/image/mark_bs.png',
  "label":{
    content:"￥1800起",
	  color:"#ffffff",
  	fontSize:16,
	  borderRadius:5,
  	bgColor:"#FF9900",
  	padding:12,
    display:'ALWAYS',
  },
  markerLevel: 2
},
{
  id: 2,
  latitude: 30.1124300000,
  longitude: 120.1888300000,
  width: 1,
  height: 1,
  // iconPath: '/image/mark_bs.png',
  "label":{
    content:"￥1980起",
    color:"#ffffff",
    fontSize:16,
    borderRadius:5,
    bgColor:"#FF9900",
    padding:10,
    display:'ALWAYS',
  },
  markerLevel: 2
},
];


const hotels = [
  { 
    id: 10001,
    latitude: 30.1119500000,
    longitude: 120.1863200000,
    width: 1,
    height: 1,
    // iconPath: '/image/mark_bs.png',
  "label":{
    content:"￥1980起",
    color:"#ffffff",
    fontSize:16,
    borderRadius:10,
    bgColor:"#FF9900",
    padding:10,
    display:'ALWAYS',
    
  },
  markerLevel: 2
}
]
// const longitude = 120.186984;
// const latitude = 30.112627;
const includePoints = [{
  latitude: 30.266786,
  longitude: 120.10675,
}];

var circles=[]

Page({
  data: {
    scale: 15,
    longitude:'',
    latitude:'',
    includePoints,
    circles,
    markers:'',
    titleCss1:true,
    titleCss2:false,
    location:'杭州市萧山区湘湖科创园',
    distance:'1km',
    distance1:false,
    distance2:false,
    distance3:false,
    distance4:false,
    distance5:false,
    hasLocation: false,
    housemenu:false,
    housecount:'3',
    tabdisplay1:true,
    tabdisplay2:false,
    map1:true,
    map2:false,
  },
  onReady() {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext('map');
    
  },
  onLoad(){
    
    this.getLocation();
    this.setData({
      markers:housemarkers1,
    });
  },
  getLocation() {
    var that = this;
    // my.showLoading();
    my.getLocation({
      success(res) {
        // my.hideLoading();
        console.log(res)
        console.log(res.longitude)
        console.log(res.latitude)
        that.setData({
          hasLocation: true,
          scale: 15,
          longitude:res.longitude,
          latitude:res.latitude,
          circles:[{
            longitude:res.longitude,
            latitude:res.latitude,
            fillColor: '#0099FF33',
            radius: 1000,
            strokeWidth:3,
          }]
        })
        circles = [{
            longitude:res.longitude,
            latitude:res.latitude,
            fillColor: '#0099FF33',
            radius: 1000,
            strokeWidth:3,
          }]
          console.log(circles)
      },
      fail() {
        my.hideLoading();
        my.alert({ title: '定位失败' });
      },
    })
  },
  regionchange(e) {
    console.log('regionchange', e);
  },
  markertap(e) {
    console.log('marker tap', e);
  },
  controltap(e) {
    console.log('control tap', e);
  },
  tap() {
    console.log('tap');
  },
  callouttap(e) {
    console.log('callout tap', e);
  },
  mapMoveToLocation() {
    this.mapCtx.moveToLocation();
  },

  // 跳转房屋查找
  searchHouse(){
    console.log('222222222222')
     my.navigateTo({
      url: '/pages/index/renting/renting',
    });
  },

});

