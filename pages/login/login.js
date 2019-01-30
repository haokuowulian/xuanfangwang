var app=getApp();
Page({
  data: {

  },
  onLoad() {
    
  },
  antLogin(){
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        console.log(res.authCode);
        var myCode=res.authCode;
        if(res.authCode){
          my.httpRequest({
            url: app.globalData.baseUrl+'/IFBaseAction/IFUser/appLogin.do?authCode='+myCode, // 目标服务器url
            method: 'POST',
            header:{
              'content-type': 'application/json'
            },
            dataType: 'json',
            success: (res) => {
               console.log(res);
               my.setStorageSync({
                 key: 'userinfo', // 缓存数据的key
                 data: res.data, // 要缓存的数据
               });
               if(res.data.rowid=1){
                my.navigateTo({
                  url: '/pages/index/mine/mine',
                });
               }
               
            },
          });
        }
      },
    });
  },
  xfwLogin(){},
});
