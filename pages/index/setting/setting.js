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
  toBindPhone(){
    my.navigateTo({
      url:'/pages/index/setting/edit_page/edit_page?type=1',
    });
  },
  toBindEmail(){
    my.navigateTo({
      url:'/pages/index/setting/edit_page/edit_page?type=2',
    });
  },
  toChangePassword(){
    my.navigateTo({
      url:'/pages/index/setting/edit_page/edit_page?type=3',
    });
  },
  toAccountInfo(){
    my.navigateTo({
      url: '/pages/index/accountinfo/accountinfo',
    });
  },
});
