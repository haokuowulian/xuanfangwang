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
    imgUrl:app.globalData.baseImgUrl_whj,
    nowTime:null,
    state:2,
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
    if(!that.data.complete){
      manageState=0;
    }else{
      manageState=1;
    }
    var myDate = new Date();
    var nowTime = myDate.getTime();
    var state = that.data.state;
   
    my.request({
      url: app.globalData.baseUrl+'IF/bespeak/getFdBespeakList.do',
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        uid:that.data.uid,
        pageIndex:that.data.pageIndex,
        state:state,
        pageSize: 6,
        manageState:manageState
      },
      dataType: 'json',
      success: function(res) {
      console.log(res);
      my.hideLoading();
      if(res.data.success){
        var list = res.data.data;
        // var listdata = res.data;
        console.log('list:---------');
        // for(let i=0;i<list.length;i++){
        //   var expectedTime = list[i].expectedTime+':00';
        //   console.log(expectedTime);
        //   var t = expectedTime.replace(new RegExp("-","gm"),"/");
        //   var pt =  (new Date(expectedTime)).getTime();
        //   if(pt<nowTime){
        //     list[i]['state']=5;
        //   }
        // }
        console.log(list);
        if(that.data.pageIndex==1){
          that.setData({
            nowTime:nowTime,
            planList:list,
          });
        }else if(that.data.planList.length< res.data.count){
          that.setData({
            nowTime:nowTime,
            planList:that.data.planList.concat(list)
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
    my.makePhoneCall({ number: number });
  },
  //提示取消约看
  alertCancel(e){
    let id = e.target.dataset.pid;
    let uid =  e.target.dataset.uid;
     my.confirm({
      title: '温馨提示',
      content: '确定要拒绝约看该房源吗?',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
       if(result.confirm){
         this.cancel(id,uid)
       }
      },
    });
  },
  //取消约看
  cancel(id,uid){
    var that=this;
    my.showLoading();
    my.request({
      url: app.globalData.baseUrl+'IF/bespeak/editBespeak.do',
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        uid:uid,
        id:id,
        state:0,
        // manageState:1,
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
    my.request({
      url: app.globalData.baseUrl+'IF/bespeak/delBespeakById.do',
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
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
  },
  sayYes(e){
    var that = this;
    my.showLoading();
    let id = e.target.dataset.pid;
    let uid =  e.target.dataset.uid;
    my.request({
      url: app.globalData.baseUrl+'IF/bespeak/editBespeak.do', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id:id,
        uid:uid,
        state:1,
      },
      dataType: 'json',
      success: (res) => {
        my.hideLoading();
        if(res.data.success){
          that.getBespeakList();
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
  allRight(e){
    var that = this;
    my.showLoading();
    let id = e.target.dataset.pid;
    let uid =  e.target.dataset.uid;
    my.request({
      url: app.globalData.baseUrl+'IF/bespeak/editBespeak.do', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id:id,
        uid:uid,
        state:4,
      },
      dataType: 'json',
      success: (res) => {
        my.hideLoading();
        if(res.data.success){
          that.getBespeakList();
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
});
