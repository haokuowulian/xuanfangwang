// const chatlist = [
//   {
//     uid:0,
//     img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2122463124,2987890103&fm=27&gp=0.jpg',
//     status:0,
//   },
//   {
//     uid:1,
//     img:'http://img3.imgtn.bdimg.com/it/u=1069844940,1990511673&fm=26&gp=0.jpg',
//     status:0,
//   },
// ]
var app = getApp();
Page({
  data: {
    chatlist:[],
    userlogin:false,
  },
  onLoad() {
    
  },
  onShow(){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var userlogin = my.getStorageSync({
      key: 'userlogin', 
    }).data;
    if(userlogin){
      var token = my.getStorageSync({
        key: 'token', 
      }).data;
      var userName = my.getStorageSync({
        key: 'userName', 
      }).data;
      console.log(token)
      my.httpRequest({
        url: app.globalData.baseUrl+'IF/token/getToken.do', // 目标服务器url
        method: 'POST',
        data:{
          phone:userName,
          token:token,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            my.httpRequest({
              url: app.globalData.baseUrl+'IF/chatList/getFdChatList.do', // 目标服务器url
              method: 'POST',
              data: {
                landlordId:userId,
                pageIndex:1,
                pageSize:10,
              },
              dataType: 'json',
              success: (res) => {
                console.log(res)
                if(res.data.success){
                  that.setData({
                    userlogin:true,
                    chatlist:res.data.data,
                  });
                }
              },
            });
          }else{
            my.setStorageSync({
              key: 'userlogin', // 缓存数据的key
              data: false, // 要缓存的数据
            });
            that.setData({
              userlogin:false,
            });
          }
        }
      });
    }else{
      that.setData({
        userlogin:false,
      });
    }
  },
  toChat(e){
    console.log(e)
    var uid = e.target.dataset.uid;
    var avatar = e.target.dataset.avatar;
    var nickName = e.target.dataset.nickName;
    my.navigateTo({
       url: '/pages/chat/chat?uid='+uid+'&avatar='+avatar+'&nickName='+nickName,
    });
  },
  toLogin(){
    my.navigateTo({
      url: '/pages/login/login',
    });
  },
  toDelete(){
    console.log('delete...')
  },
});
