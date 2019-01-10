const app = getApp();
Page({
  data: {
    houseDetail:null,
    imgUrl:app.globalData.baseImgUrl_whj,
    rentType:0,
    username:'胡海',
    usersex:'男',
    cardId:'34************23',
    phone:'12345678921',
    sexarr:['男','女'],
    index:0,

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

  //确认联系人
  bindNameInput(e){
    this.setData({
      username:e.detail.value
    });
  },
  //确认性别
  bindPickerChange(e){
    var arr = this.data.sexarr;
    var idx = e.detail.value;
      this.setData({
        index:e.detail.value,
        usersex:arr[idx],
    });
   
  },
  //确认身份证号码
  bindCadeInput(e){
    this.setData({
      cardId:e.detail.value
    });
  },
  //确认手机号
  bindPhoneInput(e){
    this.setData({
      phone:e.detail.value
    });
  },
  
  //提交信息
  submit(){
    console.log('信息确认提交')
    my.navigateTo({
      url: '/pages/index/signing/emergency_contact/emergency_contact',
    });
    // my.showLoading();
    // var userId = my.getStorageSync({
    //  key: 'userId', // 缓存数据的key
    // }).data;
    // var apartmentId='';
    // var houseId='';
    // var fdid='';
    // var roomId='';
    // if(this.data.rentType==1){
    //   apartmentId=this.data.houseDetail.apartmentId;
    //   houseId=this.data.houseDetail.id;
    //   fdid=this.data.houseDetail.landlordId;
    // }else if(this.data.rentType==2){
    //   apartmentId=this.data.houseDetail.house.apartment.id;
    //   houseId=this.data.houseDetail.houseId;
    //   fdid=this.data.houseDetail.house.landlordId;
    //   roomId=this.data.houseDetail.id
    // }
    //  var that=this;
    //  my.httpRequest({
    //   url: app.globalData.baseUrl+"IF/bespeak/saveBespeak.do",
    //   method: 'POST',
    //   data: {
    //     apartmentId: apartmentId,
    //     houseId: houseId,
    //     rentType:that.data.rentType,
    //     contacts:that.data.contacts,
    //     contactWay:that.data.contactWay,
    //     expectedTime:that.data.expectTime,
    //     leaveWord:that.data.leaveWord,
    //     fdid:fdid,
    //     uid:userId,
    //     roomId:roomId
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     console.log(res.data);
    //     if(res.data.success){
    //       my.hideLoading();
    //       my.navigateTo({
    //         url: '/pages/index/submitresult/submitresult',
    //     });
    //     }else{
    //       my.alert({
    //         title: res.data.message 
    //       });
    //     }
        
    //   },
    //   fail: function(res) {
    //     console.log(res);
    //     my.alert({
    //         title: '预约失败'
    //       });
    //     my.hideLoading();
    //   },
    //   complete: function(res) {
    //     my.hideLoading();
    //   }
    // });
  }
});
