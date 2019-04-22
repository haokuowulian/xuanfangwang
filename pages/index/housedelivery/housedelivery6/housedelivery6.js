const app=getApp();
Page({
  data: {
    houserent:'',
    waterprice:'',
    powerprice:'',
    property:'',
    payways:[
      '押一付一',
      '押一付三',
      '押一付六',
      '押一付十二',
    ],
    payway:'月付',
    index1:0,
    payment:1,
    electricityScale:'',
    waterScale:'',
  },
  onLoad() {},
  toInput(e){
    var that = this;
    console.log(e)
    if(e.target.dataset.t==1){
      that.setData({
        houserent:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        waterprice:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        powerprice:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        property:e.detail.value,
      });
    }
    if(e.target.dataset.t==5){
      that.setData({
        electricityScale:e.detail.value,
      });
    }
    if(e.target.dataset.t==6){
      that.setData({
        waterScale:e.detail.value,
      });
    }
  },
  bindPickerChange1(e){
    var that = this;
    var arr = that.data.payways;
    var idx = e.detail.value;
    console.log(idx+'****************')
    if(idx==0){
      that.setData({
        index1:e.detail.value,
        payway:arr[idx],
        payment:1,
      });
    }
    if(idx==1){
      that.setData({
        index1:e.detail.value,
        payway:arr[idx],
        payment:3,
      });
    }
    if(idx==2){
      that.setData({
        index1:e.detail.value,
        payway:arr[idx],
        payment:6,
      });
    }
    if(idx==3){
      that.setData({
        index1:e.detail.value,
        payway:arr[idx],
        payment:12,
      });
    }
  },
  publish(){
    var that = this;
    var houserent = that.data.houserent;
    var waterprice = that.data.waterprice;
    var powerprice = that.data.powerprice;
    var payway = that.data.payway;
    var property = that.data.property;
    var electricityScale = that.data.electricityScale;
    var waterScale = that.data.waterScale;
    var regNum1=new RegExp('[0-9]','g');
    var regNum2=new RegExp('[0-9]','g');
    var regNum3=new RegExp('[0-9]','g');
    var houserentNum = regNum1.exec(houserent);
    var waterpriceNum = regNum2.exec(waterprice);
    var powerpriceNum = regNum3.exec(powerprice);
    console.log(houserentNum)
    console.log(waterpriceNum)
    console.log(powerpriceNum)
    if(houserent!=''&&waterprice!=''&&powerprice!=''&&electricityScale!=''&&waterScale!=''&&property!=''){
      if(houserentNum){
        if(waterpriceNum){
          if(powerpriceNum){
            that.getHouseInfo(houserent,waterprice,powerprice);
          }else{
            my.alert({
            title: '电费请输入数字',
            success:() =>{
              that.setData({
                powerprice:'',
              });
            },
          });
          }
        }else{
          my.alert({
          title: '水费请输入数字',
          success:() =>{
            that.setData({
              waterprice:'',
            });
          },
        });
        }
      }else{
        my.alert({
          title: '租金请输入数字',
          success:() =>{
            that.setData({
              houseNo:'',
            });
          },
        });
      }
      
    }else{
      my.alert({
        title: '请填写完整' 
      });
    }
  },
  getHouseInfo(houserent,waterprice,powerprice){
    var that = this;
    var provinceCode = my.getStorageSync({
      key: 'r_provinceCode', // 缓存数据的key
    }).data;
    var cityCode = my.getStorageSync({
      key: 'r_cityCode', // 缓存数据的key
    }).data;
    var countryCode = my.getStorageSync({
      key: 'r_countryCode', // 缓存数据的key
    }).data;
    var longitude = my.getStorageSync({
      key: 'r_longitude', // 缓存数据的key
    }).data;
    var latitude = my.getStorageSync({
      key: 'r_latitude', // 缓存数据的key
    }).data;
    var village = my.getStorageSync({
      key: 'r_village', // 缓存数据的key
    }).data;
    var vphone = my.getStorageSync({
      key: 'r_vphone', // 缓存数据的key
    }).data;
    var vyear = my.getStorageSync({
      key: 'r_vyear', // 缓存数据的key
    }).data;
    var vgreen = my.getStorageSync({
      key: 'r_vgreen', // 缓存数据的key
    }).data;
    var vcubage = my.getStorageSync({
      key: 'r_vcubage', // 缓存数据的key
    }).data;
    var vaddress = my.getStorageSync({
      key: 'r_vaddress', // 缓存数据的key
    }).data;
    var houseNo = my.getStorageSync({
      key: 'r_houseNo', // 缓存数据的key
    }).data;
    var huxing = my.getStorageSync({
      key: 'r_huxing', // 缓存数据的key
    }).data;

    var roomcount = my.getStorageSync({
      key: 'r_roomcount', // 缓存数据的key
    }).data;
    var hallcount = my.getStorageSync({
      key: 'r_hallcount', // 缓存数据的key
    }).data;

    var chaoxiang = my.getStorageSync({
      key: 'r_chaoxiang', // 缓存数据的key
    }).data;
    var decorateType = my.getStorageSync({
      key: 'r_decorateType', // 缓存数据的key
    }).data;
    var varea = my.getStorageSync({
      key: 'r_varea', // 缓存数据的key
    }).data;
    var vowner = my.getStorageSync({
      key: 'r_vowner', // 缓存数据的key
    }).data;
    var vownerCard = my.getStorageSync({
      key: 'r_vownerCard', // 缓存数据的key
    }).data;
    var vrelation = my.getStorageSync({
      key: 'r_vrelation', // 缓存数据的key
    }).data;
    var img1url = my.getStorageSync({
      key: 'r_img1url', // 缓存数据的key
    }).data;
    var img2url = my.getStorageSync({
      key: 'r_img2url', // 缓存数据的key
    }).data;
    var img3url = my.getStorageSync({
      key: 'r_img3url', // 缓存数据的key
    }).data;
    var img4url = my.getStorageSync({
      key: 'r_img4url', // 缓存数据的key
    }).data;

    var rentType = my.getStorageSync({
      key: 'r_rentType', // 缓存数据的key
    }).data;
    var sexCondition = my.getStorageSync({
      key: 'r_sexCondition', // 性别限制
    }).data;

    var housename = my.getStorageSync({
      key: 'r_housename', // 缓存数据的key
    }).data;
    var describe = my.getStorageSync({
      key: 'r_describe', // 缓存数据的key
    }).data;
    var nearby = my.getStorageSync({
      key: 'r_nearby', // 缓存数据的key
    }).data;
    var houseimg1 = my.getStorageSync({
      key: 'r_houseimg', // 缓存数据的key
    }).data;
    var houseimg = houseimg1.join(',');
    console.log(houseimg);

    var furniture = my.getStorageSync({
      key: 'r_furniture', // 缓存数据的key
    }).data;
    var feature = my.getStorageSync({
      key: 'r_feature', // 缓存数据的key
    }).data;
    // var furniture = furnitures.join(",");
    // var feature = features.join(",");
    console.log(furniture)
    console.log(feature)
    var extinguisher = my.getStorageSync({
      key: 'r_extinguisher', // 缓存数据的key
    }).data;
    var smokeMask = my.getStorageSync({
      key: 'r_smokeMask', // 缓存数据的key
    }).data;
    var flashlight = my.getStorageSync({
      key: 'r_flashlight', // 缓存数据的key
    }).data;
    var rope = my.getStorageSync({
      key: 'r_rope', // 缓存数据的key
    }).data;

    var extinguisherimg = my.getStorageSync({
      key: 'r_extinguisherimg', // 缓存数据的key
    }).data;
    var smokeMaskimg = my.getStorageSync({
      key: 'r_smokeMaskimg', // 缓存数据的key
    }).data;
    var flashlightimg = my.getStorageSync({
      key: 'r_flashlightimg', // 缓存数据的key
    }).data;
    var ropeimg = my.getStorageSync({
      key: 'r_ropeimg', // 缓存数据的key
    }).data;

    var uid = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;

    var villageimg = my.getStorageSync({
      key: 'r_villageimg', // 缓存数据的key
    }).data;

    var v_address = my.getStorageSync({
      key: 'r_address', // 缓存数据的key
    }).data;

    var buildingType = my.getStorageSync({
      key: 'r_buildingType', // 缓存数据的key
    }).data;

    console.log(that.data.extinguisher)
    console.log(that.data.smokeMask)
    console.log(that.data.flashlight)
    console.log(that.data.rope)
    var property = that.data.property;
    var electricityScale = that.data.electricityScale;
    var waterScale = that.data.waterScale;

    var payment = this.data.payment;
   
    var address = village+vaddress;
    var templateName = address+houseNo;

    var roomList = [];
    for(var i=0;i<roomcount;i++){
      var roomName ='房间'+(i+1);
      roomList[i]={roomName:roomName,rents:0}
    };
    console.log(roomList)
    var apartment = {
      buildingType:buildingType,
      address:address,
      provinceId:provinceCode,
      cityId:cityCode,
      districtId:countryCode,
      apartmentName:village,
      tel:vphone,
      longitude:longitude,
      latitude:latitude,
      age:vyear,
      green:vgreen,
      plotRatio:vcubage,
      images:villageimg,
    };
    var house = {
      buildingUnit:vaddress,
      houseNo:houseNo,
      room:roomcount,
      hall:hallcount,
      toward:chaoxiang,
      area:varea,
      longitude:longitude,
      latitude:latitude,
      landlordId:uid,
      vowner:vowner,
      vownerCard:vownerCard,
      // vrelation:vrelation,
      // idcard_positive:img1url,
      // idcard_reverse:img2url,
      // licence:img3url,
      //sexCondition 性别限制
      issuerRelation:vrelation,
      identityCardFront:img1url,
      identityCardReverse:img2url,
      propertyOwnershipCertificate:img3url,
      contract:img4url,
      waterScale:waterScale,
      electricityScale:electricityScale,
      // property:property,
      rentType:rentType,
      entireRents:houserent,
      description:describe,
      images:houseimg,
      spell:0,
    };
    var template = [{
      templateName:templateName,
      area:varea,
      decorateType:decorateType,
      payment:payment,
      furniture:furniture,
      feature:feature,
      waterRate:waterprice,
      electricRate:powerprice,

      extinguisher:extinguisher,
      smokeMask:smokeMask,
      flashlight:flashlight,
      rope:rope,
      extinguisherimg:extinguisherimg,
      smokeMaskimg:smokeMaskimg,
      flashlightimg:flashlightimg,
      ropeimg:ropeimg,
      sexneed:sexCondition,
      propertyFee:property,
    }];
console.log('uerId==='+uid)
console.log(apartment)
console.log(house)
console.log(template)
console.log(roomList)
    my.httpRequest({
      url:app.globalData.baseUrl_whj+ 'IF/housing/addHousingIF.do?userId='+uid, // 目标服务器url
      // url: 'http://192.168.1.193:8080/LLGY/IF/housing/addHousingIF.do?userId='+uid, // 目标服务器url
      headers:{
        "Content-Type":'application/json'
      },
      method:'POST',
      dataType:'json',
      data:{
        // userId:uid,
        apartment:apartment,
        house:house,
        rooms:roomList,
        templates:template,
      },
      success: (res) => {

        console.log(res)
        that.sign(res.data.apartmentId,res.data.houseId);
        my.confirm({
          title: '温馨提示',
          content:'确认发布后管理员将进行审核，审核通过则上架房源',
          confirmButtonText: '确认提交',
          cancelButtonText: '取消提交',
          success: (res) => {
            my.navigateTo({
              url:'/pages/index/housedelivery/page_result/page_result?type=2',
            });
            // my.alert({
            //   title: '提交成功！',
            //   success: () => {
            //     my.navigateTo({
            //       url:'/pages/index/housedelivery/page_result/page_result?type=2',
            //     });
            //   // my.navigateBack({
            //   //   delta: 7,
            //   // });
            // }, 
            // });
            
          },
        });
      },
    });
  },
  //签订合同
  sign(apartmentId,houseId){
    var that = this;
    var name = my.getStorageSync({
      key: 'certName', // 缓存数据的key
    }).data;
    var idNo = my.getStorageSync({
      key: 'certNo', // 缓存数据的key
    }).data;
    var uid = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var startDate = my.getStorageSync({
      key: 'm_startDate', // 缓存数据的key
    }).data;
    var endDate = my.getStorageSync({
      key: 'm_endDate', // 缓存数据的key
    }).data;
    // var houseInfo = my.getStorageSync({
    //   key: 'uhouseInfo', // 房源详情
    // }).data;
    // var apartmentId=houseInfo.apartment.id;
    // var houseId=houseInfo.id;
    
    my.httpRequest({
      url: app.globalData.baseUrl+"IF/landlordCompanyServlet", // 目标服务器url
      method: 'POST',
      data:{
        
        name:name,
        idNo:idNo,
        apartmentId:apartmentId,
        houseId:houseId,
        uid:uid,
        startTime:startDate,
        endTime:endDate,
        rentType:1,
      },
      dataType: 'json',
      success: (res) => {
        console.log('---------------');
        console.log(res);
        if(res.data.success){
          // that.setData({
          //   url:res.data.url,
          // });
          console.log('url:   '+res.data.url);
        }

      },
      fail: (res) => {
       console.log(res);
       console.log('请求失败~~');
      },
    });
  },
});
