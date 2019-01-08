const app=getApp();


Page({
  data: {
    uid:'',
    headimg:'',
    nickName:'',
    complete:false,
    click1:true,
    click2:false,
    pageIndex:1,
    planList:[],
    imgUrl:app.globalData.baseImgUrl_whj
  },
  onLoad() {
    var that = this;
    var avatar = my.getStorageSync({
     key: 'avatar', // 缓存数据的key
   }).data;
    var nickName = my.getStorageSync({
     key: 'nickName', // 缓存数据的key
   }).data;
   var uid = my.getStorageSync({
          key: 'userId', // 缓存数据的key
        }).data;
        console.log('--------'+this.data.pageIndex);
   that.setData({
     headimg:avatar,
     nickName:nickName,
     uid:uid
   });
    
   this.getBespeakList();
  },
  onShow(){
    // console.log(app.globalData.userid+'111')
  },
  
  unfinished(){
    this.setData({
      complete:false,
      click1:true,
      click2:false,
      pageIndex:1
    });
    this.getBespeakList();
  },
  finish(){
    this.setData({
      complete:true,
      click1:false,
      click2:true,
      pageIndex:1
    });
     this.getBespeakList();
  },
  //获取预约列表
  getBespeakList(){
    // my.showLoading();
    var that=this;
    var manageState=0;
    if(!this.data.complete){
      manageState=0;
    }else{
      manageState=1;
    }
    
    var that=this;
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/bespeak/getBespeakList.do',
      method: 'POST',
      data: {
        uid:this.data.uid,
        pageIndex:this.data.pageIndex,
        pageSize: 3,
        manageState:manageState
      },
      dataType: 'json',
      success: function(res) {
       console.log(res);
       my.hideLoading();
            if(res.data.success){
              if(that.data.pageIndex==1){
                that.setData({
                  planList:res.data.data
                });
            }else if(that.data.planList.length<res.data.count){
                that.setData({
                  planList:that.data.planList.concat(res.data.data)
                });
            }
           
            my.stopPullDownRefresh();
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
     this.getBespeakList();
  },
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
    this.getBespeakList();
  },
  //联系房东
  contact(e){
    let number = e.target.dataset.number;
     my.confirm({
      title: '温馨提示',
      content: '确定要联系该房东吗?',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
       if(result.confirm){
         my.makePhoneCall({ number: number });
       }
      },
    });
    
  },
  //提示取消约看
  alertCancel(e){
    let id = e.target.dataset.pid;
     my.confirm({
      title: '温馨提示',
      content: '确定要取消约看该房源吗?',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
       if(result.confirm){
         this.cancel(id)
       }
      },
    });
  },
  //取消约看
  cancel(id){
    var that=this;
    my.showLoading();
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/bespeak/editBespeak.do',
      method: 'POST',
      data: {
        uid:this.data.uid,
        id:id,
        state:3
      },
      dataType: 'json',
      success: function(res) {
       console.log(res);
       my.hideLoading();
       that.setData({
         pageIndex:1
       });
       that.getBespeakList();
      if(res.data.success){
          my.showToast({
            type: 'success',
            content: '取消成功',
            duration: 2000
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
  alertDelete(e){
    let id = e.target.dataset.pid;
     my.confirm({
      title: '温馨提示',
      content: '确定要删除该房源吗?',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
       if(result.confirm){
         this.delete(id)
       }
      },
    });
  },
  //删除
  delete(id){
    var that=this;
    my.showLoading();
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/bespeak/delBespeakById.do',
      method: 'POST',
      data: {
        id:id
      },
      dataType: 'json',
      success: function(res) {
       console.log(res);
       my.hideLoading();
       that.setData({
         pageIndex:1
       });
       that.getBespeakList();
      if(res.data.success){
          my.showToast({
            type: 'success',
            content: '删除成功',
            duration: 2000
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
  //前往详情
  goToDetail(e){
      let houseId = e.target.dataset.houseId;
      let roomId = e.target.dataset.roomId;
      let rentType = e.target.dataset.rentType;
      let id='0';
      if(rentType==1){
        id=houseId;
      }else if(rentType==2){
        id=roomId
      }
      my.navigateTo({
        url: '/pages/houseinfo/houseinfo01/houseinfo01?id='+id+'&rentType='+rentType,
      })
  }
    
});
