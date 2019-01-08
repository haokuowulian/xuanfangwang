const app = getApp();
Page({
  data: {
    houseDetail:null,
    imgUrl:app.globalData.baseImgUrl_whj,
    rentType:0,
    expectTime:'',
    contacts:'',
    contactWay:'',
    leaveWord:''
  },
  onLoad(option) {
    this.setData({
      houseDetail:JSON.parse(option.houseDetail),
      rentType:option.rentType
    });
  },
  toConfirm(){
    if(this.data.contacts==''||this.data.contactWay==''||this.data.expectTime==''||this.data.leaveWord==''){
      my.alert({
        title: '请完善信息' 
      });
    }else{
      this.submit();
   
    }
    
  },
  //选择期望看房时间
  selectTime(){
    var startDate=app.getDate('yyyy-MM-dd HH:mm',0);
    var endDate=app.getDate('yyyy-MM-dd HH:mm',5);
    my.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      currentDate: startDate,
      startDate: startDate,
      endDate: endDate,
      success: (res) => {
        this.setData({
          expectTime:res.date
        });
      },
    });
  },
  //获取联系人
  bindContactsInput(e){
    this.setData({
      contacts:e.detail.value
    });
  },
  //获取联系方式
  bindContactWayInput(e){
    this.setData({
      contactWay:e.detail.value
    });
  },
  //获取留言
  bindLeaveWordInput(e){
    this.setData({
      leaveWord:e.detail.value
    });
  },
  //提交信息
  submit(){
    my.showLoading();
    var userId = my.getStorageSync({
     key: 'userId', // 缓存数据的key
    }).data;
    var apartmentId='';
    var houseId='';
    var fdid='';
    var roomId='';
    if(this.data.rentType==1){
      apartmentId=this.data.houseDetail.apartmentId;
      houseId=this.data.houseDetail.id;
      fdid=this.data.houseDetail.landlordId;
    }else if(this.data.rentType==2){
      apartmentId=this.data.houseDetail.house.apartment.id;
      houseId=this.data.houseDetail.houseId;
      fdid=this.data.houseDetail.house.landlordId;
      roomId=this.data.houseDetail.id
    }
     var that=this;
     my.httpRequest({
      url: app.globalData.baseUrl+"IF/bespeak/saveBespeak.do",
      method: 'POST',
      data: {
        apartmentId: apartmentId,
        houseId: houseId,
        rentType:that.data.rentType,
        contacts:that.data.contacts,
        contactWay:that.data.contactWay,
        expectedTime:that.data.expectedTime,
        leaveWord:that.data.leaveWord,
        fdid:fdid,
        uid:userId,
        roomId:roomId
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          my.hideLoading();
          my.navigateTo({
            url: '/pages/index/submitresult/submitresult',
        });
        }else{
          my.alert({
            title: res.data.message 
          });
        }
        
      },
      fail: function(res) {
        console.log(res);
        my.alert({
            title: '预约失败'
          });
        my.hideLoading();
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  }
});
