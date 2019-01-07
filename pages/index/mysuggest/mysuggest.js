var app = getApp();
var userId='';
Page({
  data: {
    myList:[],
  },
  onLoad() {
    userId = my.getStorageSync({
     key: 'userId', // 缓存数据的key
   }).data;
   console.log(userId+'******************')
  this.getMySuggest(userId);
  },
  getMySuggest(userId){
    var that = this;
    var type = 0;
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/complaintSuggest/getComplaintSuggestList.do', // 目标服务器url
      method: 'POST',
      data:{
        uid:userId,
        type:type,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res.data.data);
        that.setData({
          myList:res.data.data,
        });
      },
    });
  },
});
