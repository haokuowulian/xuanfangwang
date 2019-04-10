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
    var selected1 = that.data.selected1;
    var selected2 = that.data.selected2;
    if(selected1){
      my.navigateTo({
        url: '/pages/index/housedelivery/housedelivery5/housedelivery5',
      })
    }
    if(selected2){
      my.navigateTo({
        url: '/pages/index/housedelivery/housedelivery5_new/housedelivery5_new',
      })
    }
    
  }
});
