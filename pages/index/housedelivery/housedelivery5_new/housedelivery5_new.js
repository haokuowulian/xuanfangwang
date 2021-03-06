const app=getApp();
const dates = ['','','',''];
Page({
  data: {
    rentType:0,
    roomcount:0,
    roomList:[],
    nameList:[],
    tempList:[],
    
    endDates:'',
    startDates:'',
    count:6,
    housename:'',//房源名称
    describe:'',//房源描述
    describe1:'小区位置，交通方便，眼界开阔,房间干净舒适，光线足，通风性能良好，可随时看房。',//房源描述
  },
  onLoad() {
    var that = this;
    var rentType = my.getStorageSync({
      key: 'r_rentType', // 缓存数据的key
    }).data;
    var roomcount = my.getStorageSync({
      key: 'r_roomcount', // 缓存数据的key
    }).data;
    var page3 = my.getStorageSync({
      key: 'page3', // 缓存数据的key
    }).data;
    
    that.setData({
      rentType:rentType,
      roomcount:roomcount,
    });
    if(page3.roomcount==roomcount){
      my.confirm({
        title: '温馨提示',
        content: '是否加载上回未提交数据？',
        confirmButtonText: '是',
        cancelButtonText: '否',
        success: (res) => {
          if(res.confirm){
            that.setData({
              rentType:rentType,
              roomList:page3.roomList,
              tempList:page3.tempList,
              housename:page3.housename,
              roomcount:page3.roomcount,
              endDates:page3.endDates,
              describe:page3.describe,
              roomcount:page3.roomcount,
            });
          }else{
            that.setData({
              rentType:rentType,
              roomcount:roomcount,
            });
          }
        },
      });
      
    }else{
      that.setData({
        rentType:rentType,
        roomcount:roomcount,
      });
    }
  },
  onShow(){
    console.log(this.data.roomList)
    console.log(this.data.tempList)
    this.setData({
      roomList:this.data.roomList,
      furniturelist:this.data.furniturelist,
      featurelist:this.data.featurelist,
    });
    my.setStorageSync({
      key: 'r_roomList', // 缓存数据的key
      data: this.data.roomList, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'r_tempList', // 缓存数据的key
      data: this.data.tempList, // 要缓存的数据
    });
  },







  publish(){
    var that = this;
    var roomList = that.data.roomList;
      if(roomList.length>0){
        that.getHouseInfo(roomList);
      }else{
        my.alert({
          title: '至少需要出租一间房间' 
        });
      }
  },
  toRoominfo(e){
    var tar = e.target.dataset.t;
    my.navigateTo({
      url: '/pages/index/housedelivery/roominfo/roominfo?tar='+tar,
    })
  },

  getHouseInfo(roomList){
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
    var ownerTel = my.getStorageSync({
      key: 'r_vownerTel', // 缓存数据的key
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


    var housename = that.data.housename;
    if(that.data.describe!=''){
      var describe = that.data.describe; 
    }else{
      var describe = that.data.describe1;
    }
    
    var nearby = my.getStorageSync({
      key: 'r_nearby', // 缓存数据的key
    }).data;
    var rentType = my.getStorageSync({
      key: 'r_rentType', // 缓存数据的key
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

    var unit = my.getStorageSync({
      key: 'r_unit', // 缓存数据的key
    }).data;
    var floor = my.getStorageSync({
      key: 'r_floor', // 缓存数据的key
    }).data;
    var totalFloor = my.getStorageSync({
      key: 'r_totalFloor', // 缓存数据的key
    }).data;
    var elevator = my.getStorageSync({
      key: 'r_elevator', // 缓存数据的key
    }).data;

    var streetId = my.getStorageSync({
      key: 'r_streetId', // 缓存数据的key
    }).data;

    var address = village+vaddress;
    var templateName = address+houseNo;

    var tempList = that.data.tempList;
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
      streetId:streetId,
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
      ownerName:vowner,
      ownerIdentityCard:vownerCard,
      ownerTel:ownerTel,

      unit:unit,
      floor:floor,
      totalFloor:totalFloor,
      elevator:elevator,

      issuerRelation:vrelation,
      identityCardFront:img1url,
      identityCardReverse:img2url,
      propertyOwnershipCertificate:img3url,
      contract:img4url,
      rentType:rentType,
      description:describe,
      spell:0,
    };

    var template = tempList;
    var room = roomList;

    console.log(apartment)
    console.log(house)
    console.log(template)
    console.log(room)
    
    my.confirm({
      title: '温馨提示',
      content:'确认发布后管理员将进行审核，审核通过则上架房源',
      confirmButtonText: '确认提交',
      cancelButtonText: '取消提交',
      success: (res) => {
        if(res.confirm){
          my.request({
            url: app.globalData.baseUrl_whj+ 'IF/housing/addHousingIF.do?userId='+uid,
            headers:{
              'content-type':'application/json'
            },
            method:'POST',
            dataType:'json',
            data:{
              apartment:apartment,
              house:house,
              rooms:room,
              templates:template,
            },
            success: (res) => {
              console.log(res)
              that.sign(res.data.apartmentId,res.data.houseId);
              my.alert({
                title: '提交成功！',
                success: () => {
                  my.removeStorageSync({
                    key: 'page1', // 缓存数据的key
                  });
                  my.removeStorageSync({
                    key: 'page2', // 缓存数据的key
                  });
                  my.removeStorageSync({
                    key: 'page3', // 缓存数据的key
                  });
                  my.navigateTo({
                    url:'/pages/index/housedelivery/page_result/page_result?type=1',
                  });
                }, 
              });
            },
          });
        }
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
    var startDate = that.data.startDates; 
    var endDate = that.data.endDates; 
    // var houseInfo = my.getStorageSync({
    //   key: 'uhouseInfo', // 房源详情
    // }).data;
    // var apartmentId=houseInfo.apartment.id;
    // var houseId=houseInfo.id;
    
    my.request({
      url: app.globalData.baseUrl+"IF/landlordCompanyServlet", // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        name:name,
        idNo:idNo,
        apartmentId:apartmentId,
        houseId:houseId,
        uid:uid,
        startTime:startDate,
        endTime:endDate,
        rentType:2,
      },
      dataType: 'json',
      success: (res) => {
        console.log('---------------');
        console.log(res);
        if(res.data.success){
          // that.setData({
          //   url:res.data.url,
          // });
          console.log('url:   '+that.data.url);
        }

      },
      fail: (res) => {
       console.log(res);
       console.log('请求失败~~');
      },
    });
  },

  
   chooseDate(){
    var startDate = app.getDate('yyyy-MM-dd',0);
    var currentDate = app.getFormateDate1('yyyy-MM-dd',1,0);
    var endDate = app.getFormateDate1('yyyy-MM-dd',10,12);
    console.log(currentDate+'***********'+endDate)
    my.datePicker({
      format: 'yyyy-MM-dd',
      currentDate: currentDate,
      startDate: currentDate,
      endDate: endDate,
      success: (res) => {
        console.log(res)
        console.log(res.date)
        this.setData({
          startDates:currentDate,
          endDates:res.date,
        });
        my.setStorageSync({
          key: 'm_startDate', // 缓存数据的key
          data: startDate, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'm_endDate', // 缓存数据的key
          data: res.date, // 要缓存的数据
        });
        // my.alert({
        //   content: res.date,
        // });
      },
    });
  },
  toInput(e){
    var that = this;
    console.log(e.detail.value)
    if(e.target.dataset.t==1){
      that.setData({
        housename:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      
      if(e.detail.value!=''){
        var describe = e.detail.value; 
        that.setData({
          describe:e.detail.value,
        });
      }else{
        var describe = that.data.describe1;
      }
      my.setStorageSync({
        key: 'r_describe', // 缓存数据的key
        data: describe, // 要缓存的数据
      });
    }

    
  },
  onUnload() {
    var that = this;
    var page3 = {
      roomList:that.data.roomList,
      tempList:that.data.tempList,
      housename:that.data.housename,
      roomcount:that.data.roomcount,
      endDates:that.data.endDates,
      describe:that.data.describe,
    }
    my.setStorageSync({
      key: 'page3', // 缓存数据的key
      data: page3, // 要缓存的数据
    });
 
  },
});
