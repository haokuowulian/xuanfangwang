const app = getApp();
Page({
  data: {
    houseDetail:null,
    imgUrl:app.globalData.baseImgUrl_whj,
    rentType:0,
    username:'',
    usersex:'',
    cardId:'',
    phone:'',
    sexarr:['男','女'],
    index:0,
  },
  onLoad(option) {
    this.setData({
      houseDetail:JSON.parse(option.houseDetail),
      rentType:option.rentType
    });
    my.setStorageSync({
      key: 'urentType', // 缓存数据的key
      data: option.rentType, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'uhouseInfo', // 缓存数据的key
      data: JSON.parse(option.houseDetail), // 要缓存的数据
    });
    this.getUserInfo();
  },
  
  getUserInfo(){
    var username = my.getStorageSync({
     key: 'certName', // 缓存数据的key
    }).data;
    var sex = my.getStorageSync({
     key: 'sex', // 缓存数据的key
    }).data;
    var cardId = my.getStorageSync({
     key: 'certNo', // 缓存数据的key
    }).data;
    var usersex;
    if(sex==0||sex=='男'){
      usersex='男';
    }else{
      usersex='女';
    }
    var phone = my.getStorageSync({
     key: 'phone', // 缓存数据的key
    }).data;
    this.setData({
      username:username,
      usersex:usersex,
      cardId:cardId,
      phone:phone,
    });
  },

  toConfirm(){
    if(this.data.username==''||this.data.usersex==''||this.data.cardId==''||this.data.phone==''){
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
    var that=this;
    console.log('信息确认提交')
    my.setStorageSync({
      key: 'uname', // 缓存数据的key
      data: that.data.username, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'usex', // 缓存数据的key
      data: that.data.usersex, // 要缓存的数据
    });
    // my.setStorageSync({
    //   key: 'usex', // 缓存数据的key
    //   data: that.data.usersex, // 要缓存的数据
    // });
    my.setStorageSync({
      key: 'ucard', // 缓存数据的key
      data: that.data.cardId, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'uphone', // 缓存数据的key
      data: that.data.phone, // 要缓存的数据
    });

    my.navigateTo({
      // url: '/pages/index/signing/emergency_contact/emergency_contact',
      url: '/pages/index/signing/renting_date/renting_date',
    });
   
  },
  
});
