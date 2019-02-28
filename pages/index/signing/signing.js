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
    my.confirm({
      title: '租 房 合 同 书（模板）',
      content: '甲方将房屋租给乙方使用，经双方协商，订立如下协议： 一、 租用期时间自选。二、 租金按约定金额支付，收租期为合同生效下个月当天。三、 付款方法：签订合同后，甲方向乙方收取一个月押金，而押金不能作租金用途。四、 电费、水费、卫生费、物业费等一切杂费由双方协商。五、 乙方如中途退房，应提前一个月通知甲方，否则不退押金，不能私自转租他人及更改用途，否则甲方有权收回此房屋，押金不退。六、 乙方要遵守法律制度及治安管理条例，如有违法乙方自行解决与甲方无关。七、 乙方要自觉爱护甲方财物，如有损坏，则要按价赔偿。八、 乙方如违反合约或有违法行为，甲方有权提前收回此房屋，押金不退。九、 乙方在房屋内装修需甲方统一。十、 此合同将生产电子合同，双方各执一份，双方电子签章后生效。',
      confirmButtonText: '同意',
      cancelButtonText: '拒绝',
      success: (res) => {
        console.log(res)
        if(res.confirm){
          console.log('同意协议')
        }else{
          my.navigateBack();
        }
      },
    });
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
