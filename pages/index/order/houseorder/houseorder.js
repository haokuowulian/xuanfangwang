var app = getApp();
// const house = [
//       {
//         orderid:1,
//         houseimg:'/image/house6.png',
//         housename:'萧山宝龙城市广场5居室-02室',
//         time:'2018-10-04至2019-09-03',
//         firstpay:'￥8031元',
//         payway:'季付',
//         orderstatus:1,
//       },
//       {
//         orderid:2,
//         houseimg:'/image/house6.png',
//         housename:'萧山宝龙城市广场5居室-02室',
//         time:'2018-03-04至2018-10-06',
//         firstpay:'￥8031元',
//         payway:'季付',
//         orderstatus:2,
//       },
//       {
//         orderid:3,
//         houseimg:'/image/house6.png',
//         housename:'萧山宝龙城市广场5居室-02室',
//         time:'2017-03-04至2018-03-06',
//         firstpay:'￥8031元',
//         payway:'季付',
//         orderstatus:2,
//       },
//     ]
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    // house,
    orderList:[],
    pageIndex:1,
  },
  onLoad() {
    this.getOrder();
  },
  getOrder(){
    var that = this;
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/order/getOrderByConsumer.do", // 目标服务器url
      method: 'POST',
      data:{
        userId:uid,
        pageIndex:that.data.pageIndex,
        pageSize:5,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res);
        var arr = res.data.data;
        console.log(arr);
        // for(let i =0;i<arr.length;i++){
        //   if(arr[i].images!=''&&arr[i].images!=null){
        //     arr[i].images = app.globalData.baseUrl+arr[i].images;
        //   }else{
        //     arr[i].images='';
        //   }
        // }
        // console.log(arr);
        if(res.data.success){
           if(that.data.pageIndex==1){
                 that.setData({
            orderList:arr,
          });
            }else if(that.data.orderList.length<res.data.count){
               that.setData({
                orderList:that.data.orderList.concat(arr)
              });
            }
          my.stopPullDownRefresh();
        }
      },
    });
  },
  toOrderInfo(){
    my.navigateTo({
      url: '/pages/index/order/orderinfo/orderinfo',
    });
  },
});
