var app = getApp();
Page({
  data: {
    nickName:'',
    phone:'',
    userId:'',
    userType:'',
    avatar:'',
  },
  onLoad() {
    var that = this;
    that.getInfo();
  },
  onShow(){
    var that = this;
    that.getInfo();
  },
  getInfo(){
    var that = this;
    var nickName = my.getStorageSync({
      key: 'nickName', // 缓存数据的key
    }).data;
    var phone = my.getStorageSync({
      key: 'phone', // 缓存数据的key
    }).data;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var avatar = my.getStorageSync({
      key: 'avatar', // 缓存数据的key
    }).data;
    var userCompleted = my.getStorageSync({
      key: 'userCompleted', // 缓存数据的key
    }).data;
    if(userCompleted){
      that.setData({
        nickName:nickName,
        phone:phone,
        userId:userId,
        avatar:avatar,
        userType:'已完善',
      });
    }else{
      that.setData({
        nickName:nickName,
        phone:phone,
        userId:userId,
        avatar:'avatar',
        userType:'待完善',
      });
    }
  },
  toChangePhone(){
    my.navigateTo({
      url:'/pages/index/setting/edit_page/edit_page?type=1',
    });
  },
  toAccountCompleted(){
    my.navigateTo({
      url:'/pages/index/account_completed/account_completed',
    });
  },
  toChangeNickName(){
    my.navigateTo({
      url:'/pages/index/accountinfo/edit_nickname/edit_nickname',
    });
  },
});
