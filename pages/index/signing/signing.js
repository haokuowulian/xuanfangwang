const app = getApp();
var date0;
var date01;
var date02;
var date03;
var startDate1;
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
    currentDate:'',
    date10:'',
    date1:'',
    date2:'',
    date3:'',
    endDate:'',
    choose:0,
    choose0:false,
    choose1:false,
    choose2:false,
    choose3:false,
    payment:0,
    beginDate:'',
    houseInfo:'',
    rentType:0,
    month:1,
    payWay:'月付',
    price:0,//一个月租/押金
    pay:0,//租期租金
    allPay:0,//首次应付
    fee:0,//服务费
    myEndDates:[],
    myEndDate:'',
    index1:0,
    my_payway:'',
    voucher:0,//抵用券金额
    voucher_id:null,
  },
  onLoad(option) {
    var that = this;
    var houseInfo = JSON.parse(option.houseDetail);
    console.log(houseInfo)
    var rentType = option.rentType;
    this.setData({
      houseDetail:JSON.parse(option.houseDetail),
      rentType:option.rentType,
      houseInfo:houseInfo,
    });
    my.setStorageSync({
      key: 'urentType', // 缓存数据的key
      data: option.rentType, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'uhouseInfo', // 缓存数据的key
      data: JSON.parse(option.houseDetail), // 要缓存的数据
    });

    var payment = houseInfo.template.payment;
   
    that.getCurrentDate1(payment);
    if(payment==1){
      that.setData({
        choose0:true,
        choose:0,
        payment:payment,
        my_payway:'月付',
      });
    }else if(payment==3){
      that.setData({
        choose1:true,
        choose:1,
        payment:payment,
        my_payway:'季付',
      });
    }else if(payment==6){
      that.setData({
        choose2:true,
        choose:2,
        payment:payment,
        my_payway:'半年付',
      });
    }else if(payment==12){
      that.setData({
        choose3:true,
        choose:3,
        payment:payment,
        my_payway:'年付',
      });
    }


    that.getMyData(houseInfo,rentType,payment);
    this.getUserInfo();
  },
  onShow(){
    var that= this;
    that.setData({
      voucher:that.data.voucher,
      voucher_id:that.data.voucher_id,
    });
  },
  toConfirm1(){
    var that = this;
    console.log(that.data.rentType)
    console.log(that.data.username)
    console.log(that.data.usersex)
    console.log(that.data.cardId)
    console.log(that.data.phone)
    console.log(that.data.endDate)
    console.log(startDate1)
    var uid = my.getStorageSync({
      key: 'userId', // 用户id
    }).data;
    var rentType = that.data.rentType;
    var houseInfo = that.data.houseInfo;
    var voucher = that.data.voucher;
    var couponId = that.data.voucher_id;
    if(rentType==1){
      var housingId = houseInfo.id;
    }
    if(rentType==2){
      var housingId = houseInfo.id;
    }
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/order/addOrder.do", // 目标服务器
      method: 'POST',
      data:{
        userId:uid,
        startDate:startDate1,
        endDate:that.data.endDate,
        housingId:housingId,
        housingType:rentType,
        origin:2,
        couponId:couponId,
        discounts:voucher,
      },
      dataType: 'json',
      success: (res) => {
        console.log('222222222')
        console.log(res)
        console.log('222222222')
        if(res.data.success){
          var orderId = res.data.id;
          my.httpRequest({
            url:  app.globalData.baseUrl_whj+"IF/alipay/fundAuthOrderAppFreeze.do", // 目标服务器
            method: 'POST',
            data:{
              // userId:uid,
              orderId:orderId,
            },
            dataType: 'json',
            success: (res) => {
              console.log('333333333333')
              console.log(res)
              console.log('333333333333')
              if(res.data.success){
                var myOrderStr = res.data.data;
                console.log(myOrderStr)
                my.tradePay({
                  orderStr: myOrderStr, //完整的支付参数拼接成的字符串，从服务端获取
                  success: (res) => {
                    var json1 = res.result;
                    console.log('444444444444')
                    console.log(res)
                    console.log('444444444444')
                    if(res.resultCode ==6001){
                      my.navigateTo({
                        url:'/pages/index/signing/payment_result/payment_result?resultCode='+res.resultCode+'&type=1',
                      });
                    }else if(res.resultCode ==9000){
                      var json2 = JSON.parse(json1);
                      console.log(json2)
                      var json3 = json2['alipay_fund_auth_order_app_freeze_response'];
                      var alipayOrderNo = json3.auth_no;
                      console.log(alipayOrderNo)
                      that.uploadCode(orderId,1,res.resultCode,alipayOrderNo);
                      //改优惠券状态
                      // that.editCouponState();
                    }
                  },
                  fail: (res) => {
                    my.alert({
                      content: JSON.stringify(res),
                    });
                  }
                });
              }
            }
          });
        }else{
          my.alert({
            title: res.data.message 
          });
        }
      },
      fail: (res) => {
       console.log(res);
       console.log('请求失败2~~');
       my.alert({
        title: '请求失败,请稍后再试！', 
      });
      },
    });

  },
  //改优惠券状态
  editCouponState(){
    var that = this;
    var voucher_id = that.data.voucher_id;
    var userId = my.getStorageSync({
      key: 'userId', // 用户id
    }).data;
    if(voucher_id!=null||voucher_id!=''){
      my.httpRequest({
        url: app.globalData.baseUrl_whj+'IF/coupon/editCouponState.do', // 目标服务器url
        method: 'POST',
        data:{
          id:voucher_id,
          userId:userId,
          state:2,
        },
        dataType: 'json',
        success: (res) => {
          console.log('优惠券使用成功')
        },
      });
    }else{
      console.log('没有使用优惠券')
    }
  },
  //上传支付结果状态码
  uploadCode(orderId,payWay,resultCode,alipayOrderNo){
    my.httpRequest({
      url: app.globalData.baseUrl_whj+'IF/order/paySuccessAndSetAutoNo.do', // 目标服务器url
      method: 'POST',
      data:{
        orderId:orderId,
        payWay:payWay,
        auth_no:alipayOrderNo,
      },
      dataType: 'json',
      success: (res) => {
        //  that.sign();
        console.log('success');
        console.log(res);
        if(res.data.success){
          my.navigateTo({
            url:'/pages/index/signing/payment_result/payment_result?resultCode='+resultCode+'&type=1',
          });
        }
      },
    });
  },
  //预览合同
  toContractPage(){
    var that = this;
    my.setStorageSync({
      key: 'udateType', // 缓存数据的key
      data: that.data.choose, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'ustartDate', // 缓存数据的key
      data: startDate1, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'uendDate', // 缓存数据的key
      data: that.data.endDate, // 要缓存的数据
    });
    my.navigateTo({
      url: '/pages/index/signing/contract_preview/contract_preview',
    });
  },

  getMyData(houseInfo,rentType,payType){
    var that = this;
    var month;
    var payWay;
    // var payType = my.getStorageSync({
    //  key: 'upayType', // 缓存数据的key
    // }).data;
    // var rentType = my.getStorageSync({
    //  key: 'urentType', // 缓存数据的key
    // }).data;
    // var houseInfo =my.getStorageSync({
    //  key: 'uhouseInfo', // 缓存数据的key
    // }).data;
    var voucher = that.data.voucher;
    if(rentType==1){
      var price = houseInfo.entireRents;
    }
    if(rentType==2){
      var price = houseInfo.rents;
    }
    my.setStorageSync({
      key: 'udeposit', // 缓存数据的key
      data: price, // 要缓存的数据
    });
    switch(payType){
      case 1:
        month=1;
        break;
      case 3:
        month=3;
        break;
      case 6:
        month=6;
        break;
      case 12:
        month=12;
        break;
      default:
        month=1;
        break;
    }
    switch(month){
      case 1:
        payWay='月付';
        break;
      case 3:
        payWay='季付';
        break;
      case 6:
        payWay='半年付';
        break;
      case 12:
        payWay='年付';
        break;
      default:
        payWay='月付';
        break;
    }

    var pay = month*price;
    var allPay = (pay+price+that.data.fee).toFixed(1);
    that.setData({
      houseInfo:houseInfo,
      rentType:rentType,
      month:month,
      payWay:payWay,
      price:price,
      pay:pay,
      allPay:allPay,
    });

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
    if(sex==1||sex=='女'){
      usersex='女';
    }else{
      usersex='男';
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
        console.log('--------------1---------------');
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

  // toConfirm(){
  //   if(this.data.username==''||this.data.usersex==''||this.data.cardId==''||this.data.phone==''){
  //     my.alert({
  //       title: '请完善信息' 
  //     });
  //   }else{
  //     this.submit();
  //   }
  // },

  //确认联系人
  bindNameInput(e){
    this.setData({
      username:e.detail.value
    });
  },
  //选择结束时间
  bindPickerChange(e){
    console.log(e)
    var that = this;
    var arr = this.data.myEndDates;
    var idx = e.detail.value;
    if(idx==0){
      that.getCurrentDate2(1);
      that.setData({
        index1:e.detail.value,
        myEndDate:arr[idx],
      });
    }
    if(idx==1){
      that.getCurrentDate2(3);
      that.setData({
        index1:e.detail.value,
        myEndDate:arr[idx],
      });
    }
    if(idx==2){
      that.getCurrentDate2(6);
      that.setData({
        index1:e.detail.value,
        myEndDate:arr[idx],
      });
    }
    if(idx==3){
      that.getCurrentDate2(12);
      that.setData({
        index1:e.detail.value,
        myEndDate:arr[idx],
      });
    }
  },
   bindPickerChange5(e){
    var that = this;
    var arr = that.data.sexarr;
    var idx = e.detail.value;
    console.log(e)
    if(idx==0){
      that.setData({
        index5:e.detail.value,
        usersex:arr[idx],
        sexCondition:0
      });
    }
    if(idx==1){
      that.setData({
        index5:e.detail.value,
        usersex:arr[idx],
        sexCondition:1
      });
    }
    if(idx==2){
      that.setData({
        index5:e.detail.value,
        usersex:arr[idx],
        sexCondition:2
      });
    }
      
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

    console.log(startDate1)
    console.log(that.data.endDate)
    my.setStorageSync({
      key: 'udateType', // 缓存数据的key
      data: that.data.choose, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'ustartDate', // 缓存数据的key
      data: startDate1, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'uendDate', // 缓存数据的key
      data: that.data.endDate, // 要缓存的数据
    });

    if(uname!=''&&usex!=''&&ucard!=''&&uphone!=''){
      var res_id = app.checkId(ucard);
      console.log('身份证号校验')
      console.log(res_id)
      var mobileNum =(/^1[3456789]\d{9}$/.test(uphone))
        if(res_id==1){
          if(mobileNum){
            
            my.navigateTo({
              url: '/pages/index/signing/contract_confirm/contract_confirm',
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
        }else if(res_id==5){
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
  


  onChoose(e){
    var that = this;
    var id = e.currentTarget.id;
    that.toChooseDate(id);
  },
  toChooseDate(id){
    console.log('---------------')
    console.log(id)
    var that = this;
    switch(id){
      case '1':
        that.setData({
          choose0:false,
          choose1:true,
          choose2:false,
          choose3:false,
          choose:1,
          endDate:date01,
        });
        break;
      case '2':
        that.setData({
          choose0:false,
          choose1:false,
          choose2:true,
          choose3:false,
          choose:2,
          endDate:date02,
        });
        break;
      case '3':
        that.setData({
          choose0:false,
          choose1:false,
          choose2:false,
          choose3:true,
          choose:3,
          endDate:date03,
        });
        break;
        case '10':
        that.setData({
          choose0:true,
          choose1:false,
          choose2:false,
          choose3:false,
          choose:0,
          endDate:date0,
        });
        break;
      default:
        that.setData({
          choose0:true,
          choose1:false,
          choose2:false,
          choose3:false,
          choose:0,
          endDate:date01,
        });
        break;
    }
  },
  // toNext(){
  //   var that=this;
  //   console.log(startDate1)
  //   console.log(that.data.endDate)
  //   my.setStorageSync({
  //     key: 'udateType', // 缓存数据的key
  //     data: that.data.choose, // 要缓存的数据
  //   });
  //   my.setStorageSync({
  //     key: 'ustartDate', // 缓存数据的key
  //     data: startDate1, // 要缓存的数据
  //   });
  //   my.setStorageSync({
  //     key: 'uendDate', // 缓存数据的key
  //     data: that.data.endDate, // 要缓存的数据
  //   });
    
  //   my.navigateTo({
  //    url: '/pages/index/signing/payway/payway',
  //   });
   
  // },

  //选择开始时间
  chooseDate(){
    var startDate = app.getDate('yyyy-MM-dd',0);
    var currentDate = app.getFormateDate2('yyyy-MM-dd',0,0,0);
    var endDate = app.getFormateDate2('yyyy-MM-dd',0,0,7);
    console.log(currentDate+'***********'+endDate)
    my.datePicker({
      format: 'yyyy年MM月dd日',
      currentDate: currentDate,
      startDate: currentDate,
      endDate: endDate,
      success: (res) => {
        console.log(res)
        console.log('-------------1--------------')
        console.log(res.date)
        console.log(this.data.payment)
        console.log('-------------2--------------')
        // my.alert({
        //   content: res.data,
        // });
        // this.setData({
        //   currentDate:res.date,
        // });
        this.getCurrentDate(this.data.payment,res.date);
        
      },
    });
  },
  //获取当前3、6、12个月后日期
  getCurrentDate(payment,beginDate){
    var that = this;
    
    //获取三、六、十二个月后日期
    startDate1 = app.getFormateDate(beginDate,'yyyy-MM-dd日',0);
    var currentDate = app.getFormateDate(beginDate,'yyyy年MM月dd日',0);
    console.log('************')
    console.log(currentDate)
    console.log(startDate1)
    console.log('************')
    var date10 = app.getFormateDate(beginDate,'yyyy年MM月dd日',1);
    date0 =app.getFormateDate(beginDate,'yyyy-MM-dd',1);
    var date1 = app.getFormateDate(beginDate,'yyyy年MM月dd日',3);
    date01 =app.getFormateDate(beginDate,'yyyy-MM-dd',3);
    var date2 = app.getFormateDate(beginDate,'yyyy年MM月dd日',6);
    date02 =app.getFormateDate(beginDate,'yyyy-MM-dd',6);
    var date3 = app.getFormateDate(beginDate,'yyyy年MM月dd日',12);
    date03 =app.getFormateDate(beginDate,'yyyy-MM-dd',12);
    console.log(date0+'-----------')
    console.log(date01+'-----------')
    console.log(date02+'-----------')
    console.log(date03+'-----------')
    var list = that.data.myEndDates;
    
    console.log(payment)
    if(payment==1){
      list[0]=date10;
      list[1]=date1;
      list[2]=date2;
      list[3]=date3;
      that.setData({
        currentDate:currentDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date0,
        myEndDates:list,
        myEndDate:date10,
      });
    }
    if(payment==3){
      list[0]=date1;
      list[1]=date2;
      list[2]=date3;
      that.setData({
        currentDate:currentDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date01,
        myEndDates:list,
        myEndDate:date1,
      });
    }
    if(payment==6){
      list[0]=date2;
      list[1]=date3;
      that.setData({
        currentDate:currentDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date02,
        myEndDates:list,
        myEndDate:date2,
      });
    }
    if(payment==12){
      list[0]=date3;
      that.setData({
        currentDate:currentDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date03,
        myEndDates:list,
        myEndDate:date3,
      });
    }
  },

  //初始获取当前1、3、6、12个月后日期
  getCurrentDate1(payment){
    var that = this;
    var startDate=app.getDate('yyyy年MM月dd日',0);
    startDate1=app.getDate('yyyy-MM-dd',0);
    //获取一、三、六、十二个月后日期
    var date10 = app.getFormateDate3('yyyy年MM月dd日',1);
    date0 =app.getFormateDate3('yyyy-MM-dd',1);
    var date1 = app.getFormateDate3('yyyy年MM月dd日',3);
    date01 =app.getFormateDate3('yyyy-MM-dd',3);
    var date2 = app.getFormateDate3('yyyy年MM月dd日',6);
    date02 =app.getFormateDate3('yyyy-MM-dd',6);
    var date3 = app.getFormateDate3('yyyy年MM月dd日',12);
    date03 =app.getFormateDate3('yyyy-MM-dd',12);
    console.log(date01+'-----------')
    var list = [];
    // list[0]=date10;
    // list[1]=date1;
    // list[2]=date2;
    // list[3]=date3;
    // this.setData({
    //   currentDate:startDate,
    //   date10:date10,
    //   date1:date1,
    //   date2:date2,
    //   date3:date3,
    //   endDate:date0,
    //   myEndDates:list,
    //   myEndDate:date10,
    // });
    if(payment==1){
      list[0]=date10;
      list[1]=date1;
      list[2]=date2;
      list[3]=date3;
      that.setData({
        currentDate:startDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date0,
        myEndDates:list,
        myEndDate:date10,
      });
    }
    if(payment==3){
      list[0]=date1;
      list[1]=date2;
      list[2]=date3;
      that.setData({
        currentDate:startDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date01,
        myEndDates:list,
        myEndDate:date1,
      });
    }
    if(payment==6){
      list[0]=date2;
      list[1]=date3;
      that.setData({
        currentDate:startDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date02,
        myEndDates:list,
        myEndDate:date2,
      });
    }
    if(payment==12){
      list[0]=date3;
      that.setData({
        currentDate:startDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date03,
        myEndDates:list,
        myEndDate:date3,
      });
    }
    console.log(startDate)
  },
  //保存结束日期
  getCurrentDate2(payment){
    var that = this;
    var startDate=app.getDate('yyyy年MM月dd日',0);
    startDate1=app.getDate('yyyy-MM-dd',0);
    //获取一、三、六、十二个月后日期
    var date10 = app.getFormateDate3('yyyy年MM月dd日',1);
    date0 =app.getFormateDate3('yyyy-MM-dd',1);
    var date1 = app.getFormateDate3('yyyy年MM月dd日',3);
    date01 =app.getFormateDate3('yyyy-MM-dd',3);
    var date2 = app.getFormateDate3('yyyy年MM月dd日',6);
    date02 =app.getFormateDate3('yyyy-MM-dd',6);
    var date3 = app.getFormateDate3('yyyy年MM月dd日',12);
    date03 =app.getFormateDate3('yyyy-MM-dd',12);
    console.log(date01+'-----------')
    var list = [];
    if(payment==1){
      that.setData({
        endDate:date0,
        choose:0,
      });
      my.setStorageSync({
      key: 'uendDate', // 缓存数据的key
        data: date0, // 要缓存的数据
      });
      my.setStorageSync({
      key: 'udateType', // 缓存数据的key
        data: 0, // 要缓存的数据
      });
    }
    if(payment==3){
      that.setData({
        endDate:date01,
        choose:1,
      });
      my.setStorageSync({
      key: 'uendDate', // 缓存数据的key
        data: date01, // 要缓存的数据
      });
      my.setStorageSync({
      key: 'udateType', // 缓存数据的key
        data: 1, // 要缓存的数据
      });
    }
    if(payment==6){
      that.setData({
        endDate:date02,
        choose:2,
      });
      my.setStorageSync({
      key: 'uendDate', // 缓存数据的key
        data: date02, // 要缓存的数据
      });
      my.setStorageSync({
      key: 'udateType', // 缓存数据的key
        data: 2, // 要缓存的数据
      });
    }
    if(payment==12){
      that.setData({
        endDate:date03,
        choose:3,
      });
      my.setStorageSync({
      key: 'uendDate', // 缓存数据的key
        data: date03, // 要缓存的数据
      });
      my.setStorageSync({
      key: 'udateType', // 缓存数据的key
        data: 3, // 要缓存的数据
      });
    }
    console.log(startDate)
  },
  chooseVoucher(){
    var that = this;
    var voucher_id = that.data.voucher_id;
    my.setStorageSync({
      key: 'voucher_id', // 缓存数据的key
      data: voucher_id, // 要缓存的数据
    });
    my.navigateTo({
      url: '/pages/index/voucher_choose/voucher_choose',
    });
  },
});
