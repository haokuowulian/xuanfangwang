Page({
  data: {},
  onLoad() {
    console.log(11111111);
  },
  userLogout(){
    my.clearStorage();
    console.log(11111111+'logout');
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      account:'',
      passwords:'',
    });
    my.navigateBack();
  },
});
