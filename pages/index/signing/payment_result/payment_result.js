Page({
  data: {
    content:'',
  },
  onLoad(option) {
    var that = this;
    console.log(option.payment)
    var result = option.payment;
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
});
