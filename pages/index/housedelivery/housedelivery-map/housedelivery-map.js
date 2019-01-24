var app=getApp();
Page({
  data: {
    keywords:'',
    searchResults:[],
    isShow:false,
    longitude:'',
    latitude:'',
    scale:14,
    value:''
  },
  
  onLoad() {
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
         longitude:res.longitude,
         latitude:res.latitude
       });
       
      },
      fail() {
        my.hideLoading();
        my.alert({ title: '定位失败' });
      },
    })
 },
search(){
  var city=my.getStorageSync({
    key: 'city', // 缓存数据的key
  }).data;
  var that=this;
  my.httpRequest({
      url: "https://restapi.amap.com/v3/place/text?parameters",
      method: 'POST',
      data: {
        key: '27ff363a4598f97538daaebf1d1f9c9f',
        keywords:this.data.keywords,
        types:'住宅',
        city:city
      },
      dataType: 'json',
      success: function(res) {
        that.setData({
          searchResults:res.data.pois
        });
        console.log(that.data.searchResults[0].name);
      },
      fail: function(res) {
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
},
bindKeyInput(e){
  this.setData({
    keywords:e.detail.value,
  });
  if(e.detail.value.length>0){
    this.search();
    this.setData({
      isShow:true
    });
  }else{
    this.setData({
      isShow:false
    });
  }
  
},
selectIt(event){
   this.setData({
      isShow:false
    });
  console.log()
  var location=event.target.dataset.item.location;
  this.setData({
    longitude:location.split(',')[0],
    latitude:location.split(',')[1],
    keywords:event.target.dataset.item.name,
    value:event.target.dataset.item.name,
  });
},
confirm(){
  console.log(this.data.keywords);
  my.navigateBack();
}
});
