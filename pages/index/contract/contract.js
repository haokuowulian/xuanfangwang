
var app = getApp();
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    contract:[],
    roleId:'',
    roleType:'',
    pageIndex:0,

  },
  onLoad(option) {
    var roleType = option.roleType;
    this.setData({
      roleType:roleType,
    });
   if(roleType==1){
     this.getFdContractList();
   }
   if(roleType==2){
     this.getContract();
   }
  },
  getFdContractList(){
    var that = this;
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url:app.globalData.baseUrl+ 'IF/contract/getFdContractList.do', // 目标服务器url
      data:{
        // uid:59,
        fdid:uid,
        pageIndex:that.data.pageIndex,
        pageSize:6,
      },
      dataType: 'json',
      success: (res) => {
        console.log('-------------------------');
        console.log(res.data.data);
         if(that.data.pageIndex==1){
                 that.setData({
            contract:res.data.data
          });
            }else if(that.data.contract.length<res.data.count){
               that.setData({
                contract:that.data.contract.concat(res.data.data)
              });
            }
          my.stopPullDownRefresh();
        console.log(res);
        // that.setData({
        //   contract:res.data.data,
        // });
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res){
         my.hideLoading();
      }
    });
  },
  getContract(){
    var that = this;
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url:app.globalData.baseUrl+ 'IF/contract/getContractList.do', // 目标服务器url
      data:{
        // uid:59,
        uid:uid,
        pageIndex:that.data.pageIndex,
        pageSize:6,
      },
      dataType: 'json',
      success: (res) => {
         if(that.data.pageIndex==1){
                 that.setData({
            contract:res.data.data
          });
            }else if(that.data.contract.length<res.data.count){
               that.setData({
                contract:that.data.contract.concat(res.data.data)
              });
            }
          my.stopPullDownRefresh();
        console.log(res);
        // that.setData({
        //   contract:res.data.data,
        // });
      },
      fail: function(res) {
        console.log('-------fail--------');
        console.log(res);
      },
      complete: function(res){
         my.hideLoading();
      }
    });
  },
  toContractinfo:function(event){
    var id = event.target.dataset.contractid;
    my.navigateTo({
      url:'/pages/index/contractinfo/contractinfo?id='+id+'&type='+this.data.roleType,
    });
  },
  onPullDownRefresh() {
    this.setData({
      pageIndex:1
    });
    this.getContract();
  },
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
    this.getContract();
  },
});
