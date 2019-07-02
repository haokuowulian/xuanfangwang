var app = getApp();
Page({
  data: {
    NickName:'',
  },
  onLoad() {},
  toInput(e){
    var that = this;
    console.log(e)
    that.setData({
      NickName:e.detail.value
    });
  },
  chageNickName(){
    var that = this;
    console.log(that.data.NickName)
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.request({
      url: app.globalData.baseUrl+'IF/user/editUserInfo.do', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        id:userId,
        nickName:that.data.NickName
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        if(res.data.success){
          my.setStorageSync({
            key: 'nickName', // 缓存数据的key
            data: that.data.NickName, // 要缓存的数据
          });
          my.alert({
            title: '保存成功！' ,
            success: () => {
              my.navigateBack({
                delta: 2
              });
            },
          });
        }
      },
    });
  },
});
