Page({
  data: {},
  onLoad() {
    console.log(11111111);
  },
  userLogout(){
    // my.setStorageSync({
    //   key: '', // 缓存数据的key
    //   data: '', // 要缓存的数据
    // });
    my.clearStorage();
    console.log(11111111);
    my.navigateBack({
      url: '/pages/index/index',
    });
    // my.navigateTo({
    //   url: '/pages/index/index',
    // });
  },
});
