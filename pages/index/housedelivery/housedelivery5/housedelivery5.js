Page({
  data: {
    rentType:0,
    roomcount:0,
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
  next(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery6/housedelivery6',
    })
  },
  toRoominfo(){
    my.navigateTo({
      url: '/pages/index/housedelivery/roominfo/roominfo',
    })
  },
});
