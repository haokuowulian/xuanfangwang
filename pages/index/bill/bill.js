var app = getApp();
Page({
  data: {
    bill:[],
    pageIndex:1,
  },
  onLoad() {
    var that = this;
    that.getMyOrder();
  },
  getMyOrder(){
    var that = this;
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+'IF/bill/getBillByUserId.do', // 目标服务器url
      method: 'POST',
      data:{
        userId:uid,
        pageIndex:that.data.pageIndex,
        pageSize:6,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        var list = res.data.data;
        if(that.data.pageIndex==1){
          that.setData({
            bill:res.data.data,
          });
        }else if(res.data.data.length<res.data.count){
          that.setData({
            bill:that.data.bill.concat(res.data.data),
          });
        }
        my.stopPullDownRefresh();
      },
    });
  },
  toPay(e){
    var that = this;
    console.log(e)
    var id = e.target.dataset.id;
    var mark = e.target.dataset.mark;
    var totalMoney = e.target.dataset.totalMoney;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+'IF/bill/addAlipayAuditing.do', // 目标服务器url
      method: 'POST',
      data:{
        billId:id,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        if(res.data.success){
          var trade_No = res.data.tradeNo;
          var out_trade_no = res.data.out_trade_no;
          my.tradePay({
            tradeNO:trade_No,
            success: (res) => {
              console.log(res)
              my.httpRequest({
                url: app.globalData.baseUrl_whj+'IF/bill/payAlipayAuditing.do', // 目标服务器url
                method: 'POST',
                data:{
                  billId:id,
                  resultCode:res.resultCode,
                  tradeNo:trade_No,
                  out_trade_no:out_trade_no,
                },
                dataType: 'json',
                success: (res) => {
                  console.log(res)
                  that.toAddIntegral(totalMoney,mark);
                  that.getMyOrder();
                },
              });
            },
          });
        }
      },
    });
    
  },
  onPullDownRefresh() {
    this.setData({
      pageIndex:1
    });
    this.getMyOrder();
  },
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
    this.getMyOrder();
  },
  toAddIntegral(integral,remark){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+'IF/integralLog/editIntegral.do', // 目标服务器url
      method: 'POST',
      data:{
        userId:userId,
        integral:integral,
        type:1,
        remark:remark,
      },
      dataType: 'json',
      success: (res) => {
        console.log('积分添加成功！')
      },
    });
  },
});
