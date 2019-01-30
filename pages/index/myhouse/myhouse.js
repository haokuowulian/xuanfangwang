var app=getApp();
Page({
  data: {
    click1:true,
    click2:false,
    userId:'',
    pageIndex:1,
    rentType:1,
    houseList:[],
    imgUrl:app.globalData.baseImgUrl_whj
  },
  onLoad() {
    
    this.getHouseList();
  },
  onShow(){},
  toMyroominfo(e){
    var id = e.target.dataset.roomid;
    
    console.log(id+"iiiiiiiiiiiiiii")
     my.navigateTo({
      url: '/pages/index/myroominfo/myroominfo?id='+id,
    });
  },
  unfinished(){
    this.setData({
      click1:true,
      click2:false,
      pageIndex:1,
      rentType:1
    });
    this.getHouseList();
  },
  finish(){
    this.setData({
      click1:false,
      click2:true,
      pageIndex:1,
      rentType:2
    });
     this.getHouseList();
  },
  //获取房源列表
  getHouseList(){
    var userId=my.getStorageSync({
      key: 'userId', // 缓存数据的key
    });
    var that=this;
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHousingListIFByLandlord.do",
      method: 'POST',
      data: {
        userId:userId,
        rentType:this.data.rentType,
        pageIndex: this.data.pageIndex,
        pageSize: 6,
      },
      dataType: 'json',
      success: function(res) {
       console.log(res.data);
        if(res.data.success){
           if(that.data.pageIndex==1){
                 that.setData({
            houseList:res.data.data
          });
            }else if(that.data.houseList.length<res.data.count){
               that.setData({
                houseList:that.data.houseList.concat(res.data.data)
              });
            }
          my.stopPullDownRefresh();
          console.log(that.data.houseList);
        }
      },
      fail: function(res) {
       console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
  onPullDownRefresh() {
    this.setData({
      pageIndex:1
    });
     
    this.getHouseList();
  },
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
     this.getHouseList();
  },
  //前往房源详情
  goToHouseDetail(e){
    my.navigateTo({
    url: '/pages/houseinfo/houseinfo01/houseinfo01?id='+e.target.dataset.text+'&rentType='+e.target.dataset.type+'&isLandrord=true',
    })
  }
});
