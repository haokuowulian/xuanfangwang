Page({
  data: {},
  onLoad() {
    console.log(11111111);
  },
  userLogout(){
    my.clearStorage();
    console.log(11111111);
    my.navigateBack({
      url: '/pages/index/index',
    });
  },
});