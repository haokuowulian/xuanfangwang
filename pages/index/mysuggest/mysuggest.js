var app = getApp();
var userId='';
Page({
  data: {
    myList:[],
    show:false,
    pageIndex:1,
  },
  onLoad() {
    userId = my.getStorageSync({
     key: 'userId', // 缓存数据的key
   }).data;
   console.log(userId+'******************')
  this.getMySuggest(userId);
  },
  onShow(){
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
      url: app.globalData.baseUrl+'/IF/complaintSuggest/getComplaintSuggestList.do',
      method: 'POST',
      data:{
        uid:userId,
        type:type,
        pageIndex:that.data.pageIndex,
        pageSize:5,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res);
        var arr = res.data.data;
        console.log(arr);
        for(let i =0;i<arr.length;i++){
          if(arr[i].images!=''&&arr[i].images!=null){
            arr[i].images = app.globalData.baseUrl+arr[i].images;
          }else{
            arr[i].images='';
          }
        }
        console.log(arr);
        if(res.data.success){
           if(that.data.pageIndex==1){
                 that.setData({
            myList:arr,
          });
            }else if(that.data.myList.length<res.data.count){
               that.setData({
                myList:that.data.myList.concat(arr)
              });
            }
          my.stopPullDownRefresh();
        }
      },
    });
  },
  showClick(e){
    var that = this;
    var index = e.currentTarget.dataset.index;
    var arr = that.data.myList;
    if(arr[index].deleted){
      arr[index].deleted=false;
    }else{
      arr[index].deleted=true;
    }
    that.setData({
      // pageIndex:1,
      myList:arr,
    });
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
