var app=getApp();
Page({
  data: {
    content:'',
    url:'',
    showUrl:false,
    type:0,
  },
  onLoad(option) {
    var that = this;
    c
    // this.setData({
    var type=option.type;
    console.log(type)
    that.setData({
      type:type,
    });
    // });
    
  },
  toMyhouse(){
    if(this.data.type==2){
      my.navigateBack();
    }else{
      my.navigateTo({
        url: '/pages/index/myhouse/myhouse',
      });
    }
    
  },
  onUnload() {
    // 页面被关闭
    if(this.data.type==1){
      my.navigateBack({
        delta:7
      });
    }
    if(this.data.type==2){
      my.navigateBack({
        delta:8
      });
    }
    
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
