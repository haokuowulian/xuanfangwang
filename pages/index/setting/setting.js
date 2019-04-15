Page({
  data: {
    userType:'',
    userCompleted:false,
  },
  onLoad() {
    console.log(11111111);
  },
  onShow(){
    var that = this;
    var userCompleted = my.getStorageSync({
      key: 'userCompleted', // 缓存数据的key
    }).data;
    if(userCompleted){
      that.setData({
        userType:'已完善',
        userCompleted:userCompleted,
      });
    }else{
      that.setData({
        userType:'待完善',
        userCompleted:userCompleted,
      });
    }
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
  toAccountCompleted(){
    var that = this;
    if(that.data.userCompleted){
      my.navigateTo({
        url:'/pages/index/account_completed/account_completed',
      });
    }else{
      my.navigateTo({
        url: '/pages/index/account_completed/account_mine/account_mine',
      });
    }
  },
});
