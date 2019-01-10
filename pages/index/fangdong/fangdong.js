Page({
  data: {
    roleId:'',
  },
  onLoad() {
  },
  onShow(){
    var roleId = my.getStorageSync({
     key: 'roleId', // 缓存数据的key
   }).data;
   this.setData({
     roleId:roleId,
   });
   console.log(roleId)
  },
  toBeOwner(){
    if(this.data.roleId!=null&&this.data.roleId!=''){
      my.navigateTo({
      url: '/pages/index/fangdongreg/fangdongreg',
    });
    }else{
      my.alert({
        title: '请先登录' 
      });
    }
  },
  toDelivery(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery',
    });
  },
});
