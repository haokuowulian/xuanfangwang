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
    // this.setData({
    var type=option.type;
    console.log(type)
    that.setData({
      type:type,
    });
    // });
    
  },
  toMyhouse(){
    my.navigateTo({
      url: '/pages/index/myhouse/myhouse',
    });
    // if(this.data.type==2){
    //   my.navigateBack();
    // }else{
    //   my.navigateTo({
    //     url: '/pages/index/myhouse/myhouse',
    //   });
    // }
    
  },
  // onUnload() {
  //   console.log('页面关闭')
  //   if(this.data.type==1){
  //     my.navigateBack({
  //       delta:4
  //     });
  //   }
  //   if(this.data.type==2){
  //     my.navigateBack({
  //       delta:5
  //     });
  //   }
    
  // },
  onUnload() {
    console.log('页面关闭')
    if(this.data.type==1){
      my.navigateBack({
        delta:3
      });
    }
    if(this.data.type==2){
      my.navigateBack({
        delta:4
      });
    }
    
  },
  
});
