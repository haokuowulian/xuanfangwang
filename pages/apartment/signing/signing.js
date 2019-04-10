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
    // var username = my.getStorageSync({
    //  key: 'certName', // 缓存数据的key
    // }).data;
    var userId = my.getStorageSync({
     key: 'userId', // 缓存数据的key
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

    my.httpRequest({
      url:app.globalData.baseUrl_whj+'IF/user/getUserInfoById.do', // 目标服务器url
      method: 'POST',
      data:{
        userId:userId,
      },
      dataType: 'json',
      success: (res) => {
        console.log('----------------');
        console.log(res);
        if(res.data.success){
          this.setData({
            username:res.data.data.certName,
          });
        }
      },
    });

    this.setData({
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
    console.log(e)
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
    var uname = that.data.username;
    var usex = that.data.usersex;
    var ucard =  that.data.cardId;
    var uphone = that.data.phone;
    if(uname!=''&&usex!=''&&ucard!=''&&uphone!=''){
      var res_id = app.checkId(ucard);
      console.log('身份证号校验')
      console.log(res_id)
      var mobileNum =(/^1[3456789]\d{9}$/.test(uphone))
        if(res_id==1){
          if(mobileNum){
            my.navigateTo({
              // url: '/pages/index/signing/emergency_contact/emergency_contact',
              url: '/pages/index/signing/renting_date/renting_date',
            });
          }else{
            my.alert({
            title: '请输入正确的手机号！',
            success:() =>{
              that.setData({
                phone:'',
              });
            },
          });
          }
        }else if(res_id==2){
          my.alert({
          title: '身份证号码位数不对',
          success:() =>{
            that.setData({
              cardId:'',
            });
            },
          });
        }else if(res_id==3){
          my.alert({
          title: '身份证号码出生日期超出范围或含有非法字符',
          success:() =>{
            that.setData({
              cardId:'',
            });
            },
          });
        }else if(res_id==4){
          my.alert({
          title: '身份证号码校验错误',
          success:() =>{
            that.setData({
              cardId:'',
            });
            },
          });
        }else if(res_id==4){
          my.alert({
          title: '身份证地区非法',
          success:() =>{
            that.setData({
              cardId:'',
            });
            },
          });
        }
      }else{
        my.alert({
          title: '请填写完整！' 
        });
      }
   
  },
  
});
