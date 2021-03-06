var circles = []
Page( {
  data: {
    scale: 12,
    longitude: '',
    latitude: '',
    circles,
    markers: '',
    titleCss1: true,
    titleCss2: false,
    distance: 0,
    distance1: false,
    distance2: false,
    distance3: false,
    distance4: false,
    distance5: false,
    hasLocation: false,
    housemenu: false,
    housecount: '3',
    tabdisplay1: true,
    tabdisplay2: false,
    map1: true,
    map2: false,
  },
  onReady ()
  {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext( 'map' );

  },
  onLoad ( option )
  {
  var houseMarkers=[];
  if(option.rentType==1){
    var obj={
      latitude: JSON.parse(option.houseDetail).latitude,
      longitude: JSON.parse(option.houseDetail).longitude,
      width: 1,
      height: 1,
      // iconPath: '/image/mark_bs.png',
      "label": {
        content: JSON.parse(option.houseDetail).apartment.address,
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
    this.getLocation();
    this.setData({
      longitude: JSON.parse(option.houseDetail).longitude,
      latitude: JSON.parse(option.houseDetail).latitude,
      rentType:option.rentType,
      markers: houseMarkers,
      distance:option.distance,
    });
    }else if(option.rentType==2){
      var obj={
        latitude: JSON.parse(option.houseDetail).house.latitude,
        longitude: JSON.parse(option.houseDetail).house.longitude,
        width: 1,
        height: 1,
        // iconPath: '/image/mark_bs.png',
        "label": {
          content: JSON.parse(option.houseDetail).house.apartment.address,
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
    this.getLocation();
    this.setData({
      longitude: JSON.parse(option.houseDetail).house.longitude,
      latitude: JSON.parse(option.houseDetail).house.latitude,
      rentType:option.rentType,
      markers: houseMarkers,
      distance:option.distance,
    });
    }
    
    
    
  },
  getLocation ()
  {
    var that = this;
    my.showLoading();
    my.getLocation( {
      success ( res )
      {
        my.hideLoading();
        that.setData( {
          hasLocation: true,
          scale: that.data.scale,
          longitude: res.longitude,
          latitude: res.latitude,
          circles: [ {
            longitude: res.longitude,
            latitude: res.latitude,
            fillColor: '#0099FF33',
            radius: that.data.distance,
            strokeWidth: 3,
          } ]
        } )
        circles = [ {
          longitude: res.longitude,
          latitude: res.latitude,
          fillColor: '#0099FF33',
          radius: that.data.distance,
          strokeWidth: 3,
        } ]
        console.log( circles )
      },
      fail ()
      {
        my.hideLoading();
        my.alert( { title: '定位失败' } );
      },
    } )
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
  searchHouse ()
  {
    console.log( '222222222222' )
    my.navigateTo( {
      url: '/pages/index/renting/renting',
    } );
  },

} );

