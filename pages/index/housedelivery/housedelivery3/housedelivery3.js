Page({
  data: {
    selected1:true,
    selected2:false,
    rentType:1,
  },
  onLoad() {},
  onChoose1(){
    this.setData({
      selected1:true,
      selected2:false,
      rentType:1,
    });
  },
  onChoose2(){
    this.setData({
      selected1:false,
      selected2:true,
      rentType:2,
    });
  },
  next(){
    var that = this;
    var rentType = that.data.rentType;
    my.setStorageSync({
      key: 'r_rentType', // 缓存数据的key
      data: rentType, // 要缓存的数据
    });
    my.navigateTo({
    url: '/pages/index/housedelivery/housedelivery4/housedelivery4',
    })
  }
});
