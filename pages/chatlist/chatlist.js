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
      my.request({
        url: app.globalData.baseUrl+'IF/token/getToken.do', // 目标服务器url
        method: 'POST',
        headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          phone:userName,
          token:token,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            my.request({
              url: app.globalData.baseUrl+'IF/chatList/getFdChatList.do', // 目标服务器url
              method: 'POST',
              headers:{
                'content-type': 'application/x-www-form-urlencoded'
              },
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

  //长按删除
  // toDelete(e){
  //   console.log('delete...')
  //   console.log(e)
  //   var that = this;
  //   var id = e.target.dataset.uid;
  //   my.confirm({
  //     title: '温馨提示',
  //     content: '是否删除该条聊天记录？',
  //     confirmButtonText: '删除',
  //     cancelButtonText: '取消',
  //     success: (res) => {
  //       if(res.confirm){
  //         my.request({
  //           url: app.globalData.baseUrl+'IF/chatList/delChatListById.do', // 目标服务器url
  //           method: 'POST',
  //           data:{
  //             id:id,
  //           },
  //           dataType: 'json',
  //           success: (res) => {
  //             if(res.data.success){
  //               my.alert({
  //                 title: '删除成功！' ,
  //                 success: (res) => {
  //                   that.onShow();
  //                 },
  //               });
  //             }
  //           },
  //         });
  //       }
  //     },
  //   });
  // },
});
