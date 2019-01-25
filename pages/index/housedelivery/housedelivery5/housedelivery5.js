Page({
  data: {
    rentType:0,
    roomcount:0,
    roomList:[],
    furniture:'',
    furniturelist:'',
    feature:'',
    featurelist:'',
    
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
  },
  next(){
    var that = this;
    var roomList = that.data.roomList;
    if(roomList.length>0){
      my.navigateTo({
        url: '/pages/index/housedelivery/housedelivery6/housedelivery6',
      })
    }else{
      my.alert({
        title: '至少需要出租一间房间' 
      });
    }
    
  },
  toRoominfo(){
    my.navigateTo({
      url: '/pages/index/housedelivery/roominfo/roominfo',
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
  }
});
