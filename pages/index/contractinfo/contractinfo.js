var app = getApp();
Page({
  data: {},
  onLoad(option) {
    this.getContractinfo(option.id);
  },
  getContractinfo(id){
    var that = this;
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url:app.globalData.baseUrl+ 'IF/contract/getContractInfo.do', // 目标服务器url
      data:{
        id:54,
        // id:id,
        // pageIndex:that.data.pageIndex,
        // pageSize:6,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res.data.contractInfo);
        that.setData({
          contract:res.data.contractInfo,
        });
      },
      fail: function(res) {
        console.log('-------fail--------');
        console.log(res);
      },
    });
  },
});
