const app = getApp();
Page({
  data: {
    houseList:[],
  },
  onLoad(option) {
    var that = this;
    // my.setNavigationBar({
    //   title:'个人中心'
    // });
    var streetId = option.streetId;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHousingByStreetId.do",
      method: 'POST',
      data: {
        streetId:streetId,
      },
      dataType: 'json',
      success: function(res) {
        console.log(res);
        my.hideLoading();
        that.setData({
          houseList:res.data.data,
        });
      },
      fail: function(res) {
        console.log(res);
        my.hideLoading();
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
  //前往房源详情
  toHouseInfo(e){
    my.navigateTo({
      url: '/pages/houseinfo/houseinfo03/houseinfo03?id='+e.target.dataset.id+'&rentType='+e.target.dataset.rentType,
    })
  },
});
