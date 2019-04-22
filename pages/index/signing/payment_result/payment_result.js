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
    console.log('resultCode:')
    console.log(option.resultCode)
    var result = option.resultCode;
    // this.setData({
    var type=option.type;
    console.log(type)
    console.log(result)
    that.setData({
      type:type,
    });
    // });
    if(result==9000){
      that.setData({
        content:'下单成功！请等待房东确认',
        // url:app.globalData.baseUrl+option.url,
        // showUrl:true,
      });
    }
    if(result==8000){
      that.setData({
        content:'正在处理中',
        showUrl:false,
      });
    }
    if(result==4000){
      that.setData({
        content:'订单支付失败',
        showUrl:false,
      });
    }
    if(result==6001){
      that.setData({
        content:'用户中途取消',
        showUrl:false,
      });
    }
    if(result==6002){
      that.setData({
        content:'网络连接出错',
        showUrl:false,
      });
    }
    if(result==6004){
      that.setData({
        content:'支付结果未知，请查询订单列表中订单的支付状态',
        showUrl:false,
      });
    }
    if(result==99){
      that.setData({
        content:'用户忘记密码',
        showUrl:false,
      });
    }
  },
  toOrder(){
    if(this.data.type==2){
      my.navigateBack();
    }else{
      my.navigateTo({
        url:'/pages/index/order/order?type=2',
      });
    }
    
  },
  onUnload() {
    // 页面被关闭
    if(this.data.type==1){
      my.navigateBack({
        delta:2
      });
    }
    if(this.data.type==2){
      my.navigateBack({
        delta:1
      });
    }
    
  },

});
