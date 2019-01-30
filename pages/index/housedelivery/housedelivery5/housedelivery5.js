const app=getApp();
const fires = [
  {
    id:1,
    name:'灭火器',
    selected:false,
  },
  {
    id:2,
    name:'防烟面罩',
    selected:false,
  },
  {
    id:3,
    name:'多功能手电筒',
    selected:false,
  },
  {
    id:4,
    name:'逃生绳',
    selected:false,
  },
]
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    fireList:fires,
    rentType:0,
    roomcount:0,
    roomList:[],
    nameList:[],
    furniture:'',
    furniturelist:'',
    feature:'',
    featurelist:'',
    images:[],
    img:'',
    canAddImg:true,
    upload:false,
    selectId:'',
    extinguisher:false,
    smokeMask:false,
    flashlight:false,
    rope:false,
  },
  onLoad() {
    var that = this;
    var rentType = my.getStorageSync({
      key: 'r_rentType', // 缓存数据的key
    }).data;
    var roomcount = my.getStorageSync({
      key: 'r_roomcount', // 缓存数据的key
    }).data;
    that.setData({
      rentType:rentType,
      roomcount:roomcount,
    });
  },
  onShow(){
    console.log(this.data.roomList)
    this.setData({
      roomList:this.data.roomList
    });
     my.setStorageSync({
      key: 'r_roomList', // 缓存数据的key
      data: this.data.roomList, // 要缓存的数据
    });
  },
  addImg(){
    var that = this;
    my.chooseImage({
      chooseImage: 1,
      success: (res) => {
        var tempFilePaths = res.apFilePaths
        console.log(tempFilePaths)
        that.data.images[0]=tempFilePaths[0];
        that.setData({
          img:tempFilePaths[0],
          upload:true,
          canAddImg:false,
        });
      },
    });
  },
  delImg(){
    var that = this;
    that.setData({
      img:'',
      upload:false,
      canAddImg:true,
    });
  },
  onChange(e) {
    var that = this;
    console.log(e)
    console.log(e.detail.value)
    var list = e.detail.value;
    var r1 = list.indexOf(1);
    var r2 = list.indexOf(2);
    var r3 = list.indexOf(3);
    var r4 = list.indexOf(4);
    if(r1==-1){
      that.setData({
        extinguisher:false,
      });
    }else{
      that.setData({
        extinguisher:true,
      });
    }
    if(r2==-1){
      that.setData({
        smokeMask:false,
      });
    }else{
      that.setData({
        smokeMask:true,
      });
    }
    if(r3==-1){
      that.setData({
        flashlight:false,
      });
    }else{
      that.setData({
        flashlight:true,
      });
    }
    if(r4==-1){
      that.setData({
        rope:false,
      });
    }else{
      that.setData({
        rope:true,
      });
    }

     that.setData({
       selectId:e.detail.value
     });
  },
  next(){
    var that = this;
    console.log(that.data.extinguisher)
    console.log(that.data.smokeMask)
    console.log(that.data.flashlight)
    console.log(that.data.rope)

    var furniture = that.data.furniture;
    var feature = that.data.feature;
    var fireid = that.data.selectId;
    if(furniture!=''&&feature!=''&&fireid!=''){
      my.setStorageSync({
        key: 'r_furniture', // 缓存数据的key
        data: furniture, // 要缓存的数据
      });
      my.setStorageSync({
        key: 'r_feature', // 缓存数据的key
        data: feature, // 要缓存的数据
      });
      my.setStorageSync({
        key: 'r_extinguisher', // 缓存数据的key
        data: that.data.extinguisher, // 要缓存的数据
      });
       my.setStorageSync({
        key: 'r_smokeMask', // 缓存数据的key
        data: that.data.smokeMask, // 要缓存的数据
      });
       my.setStorageSync({
        key: 'r_flashlight', // 缓存数据的key
        data: that.data.flashlight, // 要缓存的数据
      });
       my.setStorageSync({
        key: 'r_rope', // 缓存数据的key
        data: that.data.rope, // 要缓存的数据
      });
      my.navigateTo({
        url: '/pages/index/housedelivery/housedelivery6/housedelivery6',
      })
    }else{
      my.alert({ title: '请填写完整' });
    }
    
    

    
  },
  publish(){
    var that = this;
    var roomList = that.data.roomList;
    var furniture = that.data.furniture;
    var feature = that.data.feature;
    if(furniture!=''&&feature!=''){
      my.setStorageSync({
        key: 'r_furniture', // 缓存数据的key
        data: furniture, // 要缓存的数据
      });
      my.setStorageSync({
        key: 'r_feature', // 缓存数据的key
        data: feature, // 要缓存的数据
      });
      if(roomList.length>0){
        that.getHouseInfo(roomList,furniture,feature);
      }else{
        my.alert({
          title: '至少需要出租一间房间' 
        });
      }
    }else{
      my.alert({ title: '请填写完整' });
    }
    
  },
  toRoominfo(e){
    var tar = e.target.dataset.t;
    my.navigateTo({
      url: '/pages/index/housedelivery/roominfo/roominfo?tar='+tar,
    })
  },
  //前往便利设施
  goTo1(){
     my.hideKeyboard();
     my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery5-1/housedelivery5-1',
    })
  },
  //前往房屋特色
  goTo2(){
    my.hideKeyboard();
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery5-2/housedelivery5-2',
    })
  },
  getHouseInfo(roomList,furniture,feature){
     var provinceCode = my.getStorageSync({
      key: 'r_provinceCode', // 缓存数据的key
    }).data;
    var cityCode = my.getStorageSync({
      key: 'r_cityCode', // 缓存数据的key
    }).data;
    var countryCode = my.getStorageSync({
      key: 'r_countryCode', // 缓存数据的key
    }).data;
    var longitude = my.getStorageSync({
      key: 'r_longitude', // 缓存数据的key
    }).data;
    var latitude = my.getStorageSync({
      key: 'r_latitude', // 缓存数据的key
    }).data;
    var village = my.getStorageSync({
      key: 'r_village', // 缓存数据的key
    }).data;
    var vphone = my.getStorageSync({
      key: 'r_vphone', // 缓存数据的key
    }).data;
    var vyear = my.getStorageSync({
      key: 'r_vyear', // 缓存数据的key
    }).data;
    var vgreen = my.getStorageSync({
      key: 'r_vgreen', // 缓存数据的key
    }).data;
    var vcubage = my.getStorageSync({
      key: 'r_vcubage', // 缓存数据的key
    }).data;
    var vaddress = my.getStorageSync({
      key: 'r_vaddress', // 缓存数据的key
    }).data;
    var houseNo = my.getStorageSync({
      key: 'r_houseNo', // 缓存数据的key
    }).data;
    var huxing = my.getStorageSync({
      key: 'r_huxing', // 缓存数据的key
    }).data;

    var roomcount = my.getStorageSync({
      key: 'r_roomcount', // 缓存数据的key
    }).data;
    var hallcount = my.getStorageSync({
      key: 'r_hallcount', // 缓存数据的key
    }).data;

    var chaoxiang = my.getStorageSync({
      key: 'r_chaoxiang', // 缓存数据的key
    }).data;
    var decorateType = my.getStorageSync({
      key: 'r_decorateType', // 缓存数据的key
    }).data;
    var varea = my.getStorageSync({
      key: 'r_varea', // 缓存数据的key
    }).data;
    var vowner = my.getStorageSync({
      key: 'r_vowner', // 缓存数据的key
    }).data;
    var vownerCard = my.getStorageSync({
      key: 'r_vownerCard', // 缓存数据的key
    }).data;
    var vrelation = my.getStorageSync({
      key: 'r_vrelation', // 缓存数据的key
    }).data;
    var img1url = my.getStorageSync({
      key: 'r_img1url', // 缓存数据的key
    }).data;
    var img2url = my.getStorageSync({
      key: 'r_img2url', // 缓存数据的key
    }).data;
    var img3url = my.getStorageSync({
      key: 'r_img3url', // 缓存数据的key
    }).data;


    var housename = my.getStorageSync({
      key: 'r_housename', // 缓存数据的key
    }).data;
    var describe = my.getStorageSync({
      key: 'r_describe', // 缓存数据的key
    }).data;
    var nearby = my.getStorageSync({
      key: 'r_nearby', // 缓存数据的key
    }).data;
    var houseimg = my.getStorageSync({
      key: 'r_houseimg', // 缓存数据的key
    }).data;

    var rentType = my.getStorageSync({
      key: 'r_rentType', // 缓存数据的key
    }).data;
    var uid = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;


     var apartment = {
      provinceId:provinceCode,
      cityId:cityCode,
      districtId:countryCode,
      apartmentName:village,
      tel:vphone,
      longitude:longitude,
      latitude:latitude,
      age:vyear,
      green:vgreen,
      plotRatio:vcubage,
    };
    var house = {
      buildingUnit:vaddress,
      houseNo:houseNo,
      room:roomcount,
      hall:hallcount,
      toward:chaoxiang,
      // vowner:vowner,
      // vownerCard:vownerCard,
      // vrelation:vrelation,
      // idcard_positive:img1url,
      // idcard_reverse:img2url,
      // licence:img3url,
      rentType:rentType,
      description:describe,
      images:houseimg,
    };

    var template = {
      userId:uid,
      area:varea,
      decorateType:decorateType,
      furniture:furniture,
      feature:feature,
    };

    var room = roomList;








    my.httpRequest({
      url: app.globalData.baseUrl_whj+ 'IF/housing/addHousingIF.do',
      headers:{
        "Content-Type":'application/json'
      },
      method:'POST',
      dataType:'json',
      data:{
        apartment:apartment,
        house:house,
        room:room,
        template:template,
        // provinceCode:provinceCode,
        // cityCode:cityCode,
        // countryCode:countryCode,
        // longitude:longitude,
        // latitude:latitude,
        // village:village,
        // vphone:vphone,
        // vyear:vyear,
        // vgreen:vgreen,
        // vcubage:vcubage,
        // vaddress:vaddress,
        // huxing:huxing,
        // chaoxiang:chaoxiang,
        // zhuangxiu:zhuangxiu,
        // varea:varea,
        // vowner:vowner,
        // vownerCard:vownerCard,
        // vrelation:vrelation,
        // img1url:img1url,
        // img2url:img2url,
        // img3url:img3url,
        // rentType:rentType,
        // roomList:roomList,
        // furniture:furniture,
        // feature:feature,
      },
      success: (res) => {
        console.log('提交成功'+res)
      },
    });
  },
});
