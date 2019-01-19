var app = getApp();
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    orderinfo:'',
  },
  onLoad(option) {
    var that = this;
    var id = option.orderid;
    console.log(id)
    my.httpRequest({
      url: app.globalData.baseUrl_whj+'IF/order/getOrderById.do', // 目标服务器url
      method: 'POST',
      data:{
        id:id,
      },
      dataType: 'json',
      success: (res) => {
        console.log('----------info-----------')
        console.log(res)
      },
    });
  },
});
