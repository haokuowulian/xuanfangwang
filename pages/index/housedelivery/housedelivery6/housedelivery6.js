const app=getApp();
Page({
  data: {
    houserent:'',
    waterprice:'',
    powerprice:'',
    property:'',
    payways:[
      '月付',
      '季付',
      '半年付',
      '年付',
    ],
    payway:'月付',
    index1:0,
    payment:1,
    
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
    var property = that.data.property;
    var payway = that.data.payway;
    var regNum=new RegExp('[0-9]','g');
    if(houserent!=''&&waterprice!=''&&powerprice!=''){
      var houserentNum = regNum.exec(houserent);
      var waterpriceNum = regNum.exec(waterprice);
      var powerpriceNum = regNum.exec(powerprice);
      if(houserentNum){
        if(waterpriceNum){
          if(powerpriceNum){
            that.getHouseInfo(houserent,waterprice,powerprice);
          }else{
            my.alert({
            title: '电费请输入数字',
            success:() =>{
              that.setData({
                houseNo:'',
              });
            },
          });
          }
        }else{
          my.alert({
          title: '水费请输入数字',
          success:() =>{
            that.setData({
              houseNo:'',
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

    var rentType = my.getStorageSync({
      key: 'r_rentType', // 缓存数据的key
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
    var houseimg = my.getStorageSync({
      key: 'r_houseimg', // 缓存数据的key
    }).data;

    var furniture = my.getStorageSync({
      key: 'r_furniture', // 缓存数据的key
    }).data;
    var feature = my.getStorageSync({
      key: 'r_feature', // 缓存数据的key
    }).data;

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

    console.log(that.data.extinguisher)
    console.log(that.data.smokeMask)
    console.log(that.data.flashlight)
    console.log(that.data.rope)

    var payment = this.data.payment;
   
   
 

// private Boolean extinguisher;	//灭火器
// 	private Boolean smokeMask;		//防烟面罩
// 	private Boolean flashlight;		//手电筒
// 	private Boolean rope;			//逃脱绳

    var apartment = {
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
      // vowner:vowner,
      // vownerCard:vownerCard,
      // vrelation:vrelation,
      // idcard_positive:img1url,
      // idcard_reverse:img2url,
      // licence:img3url,
      rentType:rentType,
      entireRents:houserent,
      description:describe,
      images:houseimg,
      
    };
    var template = {
      userId:uid,
      area:varea,
      decorateType:decorateType,
      payment:payment,
      furniture:furniture,
      feature:feature,

      extinguisher:extinguisher,
      smokeMask:smokeMask,
      flashlight:flashlight,
      rope:rope,
      extinguisherimg:extinguisherimg,
      smokeMaskimg:smokeMaskimg,
      flashlightimg:flashlightimg,
      ropeimg:ropeimg,
    };
// console.log('uerId==='+uid)
    my.httpRequest({
      url:app.globalData.baseUrl_whj+ 'IF/housing/addHousingIF.do', // 目标服务器url
      headers:{
        "Content-Type":'application/json'
      },
      method:'POST',
      dataType:'json',
      data:{
        apartment:apartment,
        house:house,
        template:template,
      },
      success: (res) => {
        console.log('提交成功'+res)
      },
    });
  },
});
