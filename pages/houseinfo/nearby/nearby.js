Page({
  data: {
    scale:15,
    markers:[],
    circles:[],
    radius:1000,
    longitude:0,
    latitude:0,
    rentType:0
  },
  onReady ()
  {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext( 'map' );

  },
  onLoad(option) {
     if(option.rentType==1){
      this.setData({
        longitude: JSON.parse(option.houseDetail).longitude,
        latitude: JSON.parse(option.houseDetail).latitude,
        rentType:option.rentType
      });
     }else if(option.rentType==2){
      this.setData({
        longitude: JSON.parse(option.houseDetail).house.longitude,
        latitude: JSON.parse(option.houseDetail).house.latitude,
        rentType:option.rentType
      });
     }
    
    this.getNearBy(JSON.parse(option.houseDetail));
    
  },
  getNearBy(houseDetail){
    var that=this;
    var longitude;
    var latitude;
    
     my.httpRequest({
      url: "https://restapi.amap.com/v3/place/around",
      method: 'POST',
      data: {
        key: '27ff363a4598f97538daaebf1d1f9c9f',
        location:this.data.longitude+','+this.data.latitude ,
        keywords:'公交站|地铁',
        radius:that.data.radius
      },
      dataType: 'json',
      success: function(res) {
        console.log("附近交通查询成功")
        console.log(res)
        var nearBy=[];
        for(var i=0;i<(res.data.pois.length<10?res.data.pois.length:10);i++){
          var obj={
            id:i+1,
            latitude: res.data.pois[i].location.split(',')[1],
            longitude: res.data.pois[i].location.split(',')[0],
            width: 1,
            height: 1,
            // iconPath: '/image/mark_bs.png',
            "label": {
              content: res.data.pois[i].name,
              color: "#ffffff",
              fontSize: 16,
              borderRadius: 5,
              bgColor: "#fd9f28",
              padding: 10,
              display: 'ALWAYS',
            },
            markerLevel: 2
          }
            nearBy.push(obj);
            
    }
        that.setData({
          markers:nearBy,
         
          circles: [ {
            longitude: that.data.longitude,
            latitude: that.data.latitude,
            fillColor: '#0099FF33',
            radius: that.data.radius,
            strokeWidth: 3,
          } ]
        });
         that.mapMoveToLocation();
      },
      fail: function(res) {
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
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
});
