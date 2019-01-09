Page({
  data: {
    roleId:'',
  },
  onLoad() {
    var roleId = my.getStorageSync({
     key: 'roleId', // 缓存数据的key
   }).data;
   this.setData({
     roleId:roleId,
   });
   console.log(roleId)
  },
  toBeOwner(){
    my.navigateTo({
      url: '/pages/index/fangdongreg/fangdongreg',
    });
  },
  toDelivery(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery',
    });
  },
});
