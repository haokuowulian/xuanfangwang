var app = getApp();
var userId='';
Page({
  data: {
    myList:[],
    show:false,
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
  showClick(){
    if(this.data.show){
      this.setData({
        show:false,
      });
    }else{
      this.setData({
        show:true,
      });
    }
  },
  toComplaint(){
    my.navigateTo({
      url: '/pages/index/complaint/complaint',
    });
  },
  toProposal(){
    my.navigateTo({
      url: '/pages/index/proposal/proposal',
    });
  },
});
