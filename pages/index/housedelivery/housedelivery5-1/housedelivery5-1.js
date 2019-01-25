var  app = getApp();
Page({
  data: {
    furnitureList:[],
    selectId:''
  },
  onLoad() {
    this.getFurnitureList();
  },
  //获取家具
  getFurnitureList(){
    var that=this;
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/selectData/getFurnitureListIF.do",
      method: 'POST',
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          that.setData({
            furnitureList:res.data.data
          });
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
   onChange(e) {
     this.setData({
       selectId:e.detail.value
     });
    
  },
  confirm(){
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      furniture: this.data.selectId,
      furniturelist:'已添加',
    })
    my.navigateBack({
      delta: 1,
    });
    // my.alert({
    //   title: this.data.selectId,
    // });
  }

});
