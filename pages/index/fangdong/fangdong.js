var app = getApp();
Page({
  data: {
    roleId:'',
  },
  onLoad() {
  },
  onShow(){
    var roleId = my.getStorageSync({
      key: 'roleId', // 缓存数据的key
    }).data;
    this.setData({
      roleId:roleId,
    });
    console.log(roleId)
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

          }else{
            my.setStorageSync({
              key: 'userlogin', // 缓存数据的key
              data: false, // 要缓存的数据
            });
            my.alert({
              title: '登陆超时，请重新登录！',
              buttonText: '确定',
              success: () => {
                my.clearStorage();
                my.navigateTo({
                  url: '/pages/login/login',
                });
              },
            });
          }
        }
      });
    }
  },
  toBeOwner(){
    var userCompleted = my.getStorageSync({
      key: 'userCompleted', 
    }).data;
    if(this.data.roleId!=null&&this.data.roleId!=''){
      if(userCompleted){
        my.navigateTo({
          url: '/pages/index/fangdongreg/fangdongreg',
        });
      }else{
        my.confirm({
          title: '温馨提示',
          content: '请先完善个人信息',
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          success: (res) => {
            if(res.confirm){
              my.navigateTo({
                // url: '/pages/index/account_completed/account_completed',
                url: '/pages/index/account_completed/account_mine/account_mine',
              });
            }
            
          },
        });
      }
      
    }else{
      my.alert({
        title: '请先登录',
        buttonText: '确定',
        success: () => {
          my.navigateTo({
            url: '/pages/login/login',
          });
        },
      });
    }
  },
  toDelivery(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery',
    });
  },
  onCall(){
    my.makePhoneCall({
      number: '057187029218', // 电话号码
      success: (res) => {
        console.log('拨打电话')
      },
    });
  },
});
