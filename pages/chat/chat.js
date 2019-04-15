var app = getApp();
Page({
  data: {
    allContentList:[],
    lastId:'',
    msg:'',
    addImg:false,
    landlordId:'',
    userId:'',
    avatar:'',
    imgUrl:'',
    your_nickName:'',
    my_nickName:'',
    scrollTop:1000,
    interval:null,
  },
  onLoad(option) {
    var that = this;
    var uid = option.uid;
    var your_nickName = option.nickName;
    var imgUrl = option.avatar;
    my.setNavigationBar({
      title: your_nickName,
    });
    console.log(uid+'*******'+your_nickName+'***********'+imgUrl)
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/chat/isFirstChat.do', // 目标服务器url
      method: 'POST',
      data: {
        landlordId:userId,
        userId:uid,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        that.setData({
          imgUrl:imgUrl,
          your_nickName:your_nickName,
          userId:uid,
        });
        // that.getMessage(uid);
        that.getMessage(uid);
        that.getMessageTimely(uid);
      },
    });


    
  },
  onShow(){
    // var that = this;
    // that.getMessage();
  },

  getMessage(uid){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var avatar = my.getStorageSync({
      key: 'avatar', // 缓存数据的key
    }).data;
    var nickName = my.getStorageSync({
      key: 'nickName', // 缓存数据的key
    }).data;
    var roleId = my.getStorageSync({
      key: 'roleId', // 缓存数据的key
    }).data;
    if(roleId==7){
      that.setData({
        landlordId:userId,
        avatar:avatar,
        my_nickName:nickName,
        userId:uid,
      });
    }else{
      that.setData({
        landlordId:userId,
        avatar:avatar,
        my_nickName:nickName,
        userId:uid,
      });
    }
    
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/chat/getChat.do', // 目标服务器url
      method: 'POST',
      data: {
        landlordId:userId,
        userId:uid,
        pageIndex:1,
        pageSize:30,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        console.log("get success!")
        var list = res.data.data;
        that.setData({
          allContentList:list,
        });
        my.pageScrollTo({
          scrollTop: list.length*500,
        });
      },
    });
  },
  onFocus(){
    var that = this;
    clearInterval(that.data.interval);
  },
  onBlur(){
    console.log('失焦')
    var that = this;
    var uid = that.data.userId;
    that.getMessageTimely(uid);
    
  },
  bindKeyInput(e){
    var that = this;
    console.log(e.detail.value)
    that.setData({
      msg:e.detail.value,
    });
  },
  submitTo(){
    var that = this;
    var landlordId = that.data.landlordId;
    var content = that.data.msg;
    var userId = that.data.userId;
    var type = that.data.type;
    that.getMessage(userId);
    if(content!=''){
      my.httpRequest({
        url: app.globalData.baseUrl+'IF/chat/addChat.do', // 目标服务器url
        method: 'POST',
        data: {
          landlordId:landlordId,
          type:1,
          content:content,
          userId:userId,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            that.getMessage(userId);
            that.setData({
              msg:'',
            });
          }
        },
      });
    }
    
  },
  //定时刷新页面
  getMessageTimely(uid){
    var that = this;
    console.log('刷新成功！')
    that.data.interval = setInterval(function(){that.getMessage(uid)}, 5000);
  },
  // 页面被关闭
  onUnload() {
    var that = this;
    clearInterval(that.data.interval);
  },
});
