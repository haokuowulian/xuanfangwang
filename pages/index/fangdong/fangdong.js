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
                url: '/pages/index/account_completed/account_completed',
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
      number: '18815026547', // 电话号码
      success: (res) => {
        console.log('拨打电话')
      },
    });
  },
});
