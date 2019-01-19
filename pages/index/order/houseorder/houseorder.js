var app = getApp();
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
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
  toOrderInfo(e){
    console.log(e.currentTarget.dataset.id)
    var orderid = e.currentTarget.dataset.id
    my.navigateTo({
      url: '/pages/index/order/orderinfo/orderinfo?orderid='+orderid,
    });
  },
  toHouseInfo(e){
    console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.type)
  },
});
