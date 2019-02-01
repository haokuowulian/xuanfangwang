var app=getApp();
Page({
  data: {
    content:'',
    url:''
  },
  onLoad(option) {
    var that = this;
    console.log(option.payment)
    var result = option.payment;
    this.setData({
      url:app.globalData.baseUrl+option.url
    });
    if(result==9000){
      that.setData({
        content:'订单支付成功！',
      });
    }
    if(result==8000){
      that.setData({
        content:'正在处理中',
      });
    }
    if(result==4000){
      that.setData({
        content:'订单支付失败',
      });
    }
    if(result==6001){
      that.setData({
        content:'用户中途取消',
      });
    }
    if(result==6002){
      that.setData({
        content:'网络连接出错',
      });
    }
    if(result==6004){
      that.setData({
        content:'支付结果未知，请查询订单列表中订单的支付状态',
      });
    }
    if(result==99){
      that.setData({
        content:'用户忘记密码',
      });
    }
  },
  onUnload() {
    // 页面被关闭
    my.navigateBack({
      delta:5
    });
  },
  downloadUrl(){
    console.log(this.data.url);
    //  my.navigateTo({
    //             url:'/pages/index/downloadwebview/downloadwebview?url='+that.data.url,
    //           });
  //   my.downloadFile({
  //         url: app.globalData.baseUrl+this.data.url, // 下载文件地址
  //         success: (res) => {
  //           console.log('download+------'+res)
  //           // my.saveFile({
  //           //   apFilePath: res.apFilePath,
  //           //   success: (res) => {
  //           //     console.log(res);
  //           //   },
  //           //   fail: (msg) => {
  //           //     console.log(msg);
  //           //   },
  //           // });
  //         },fail:(err)=>{
  //           console.log(err)
  //         }
  //       });
  //   //  my.saveFile({
  //   //   apFilePath:app.globalData.baseUrl+this.data.url,
  //   //   success: (res) => {
  //   //     console.log(JSON.stringify(res))
  //   //   },
  //   // });
   }
});
