Page({
  data: {
    free:false,
    powerprice:'',
    waterprice:'',
    advanceprice:'',
    payways:[
      '月付',
      '季付',
      '半年付',
      '年付',
    ],
    payway:'月付',
    index1:0,

    charges:[
      '预收',
      '随租金',
    ],
    charge:'预收',
    index2:0,
    waterScale:'',
    electricityScale:'',
    property:'',
  },
  onLoad(option) {
    var that = this;
    var arr = option.waterlist;
    console.log(option)
    var waterfree = option.waterfree;
    var watersave =option.watersave;
    if(waterfree==true){
        that.setData({
          free:true,
        });
      }else{
        that.setData({
          free:false,
        });
      }
    that.getInfo(arr,watersave);
    console.log(waterfree+'是否免费')
    // if(waterfree!=null&&waterfree!=''){
      
    // }else{
    //   that.setData({
    //     free:false,
    //   });
    // }
  },
  onShow(){
    
    var that = this;
    var waterfree = my.getStorageSync({
      key: 't_waterfree', // 缓存数据的key
    }).data;
    var watersave = my.getStorageSync({
      key: 't_watersave', // 缓存数据的key
    }).data;
    var waterlist = my.getStorageSync({
      key: 't_waterlist', // 缓存数据的key
    }).data;
    if(waterfree==true){
        that.setData({
          free:true,
        });
      }else{
        that.setData({
          free:false,
        });
      }
      that.getInfo(waterlist,watersave);
  },
  switchChange(e){
    console.log('switchChange 事件，值:', e.detail.value)
    if(e.detail.value){
      this.setData({
      free:e.detail.value,
      powerprice:'',
      waterprice:'',
      advanceprice:'',
      payway:'月付',
      index1:0,
      charge:'预收',
      index2:0,
    });
    // this.setData({
    //   free:e.detail.value,
    // });
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      waterfree:true,
      watersave:false,
    });
    }else{
      this.setData({
        free:false,
      });
    }
    // else{
    //   let pages = getCurrentPages();
    //   let prevPage = pages[pages.length - 2];
    //   prevPage.setData({
    //     waterfree:false,
    //     watersave:false,
    //   });
    // }
    
    
  },
  bindPickerChange1(e){
    var that = this;
    var arr = that.data.payways;
    var idx = e.detail.value;
    console.log(idx+'****************')
      that.setData({
        index1:e.detail.value,
        payway:arr[idx],
    });
  },
  bindPickerChange2(e){
    var that = this;
    var arr = that.data.charges;
    var idx = e.detail.value;
      that.setData({
        index2:e.detail.value,
        charge:arr[idx],
    });
  },
  toSave(){
    var that = this;
    // var rpayway = that.data.index1+1;
    // var rpaymethod = that.data.index2;
    var powerprice = that.data.powerprice;
    var waterprice = that.data.waterprice;
    var waterScale = that.data.waterScale;
    var electricityScale = that.data.electricityScale;
    var property = that.data.property;
    // var advanceprice = that.data.advanceprice;
    var regNum1=new RegExp('[0-9]','g');
    var regNum2=new RegExp('[0-9]','g');
    if(powerprice!=''&&waterprice!=''){
      // if(rpaymethod==0){
        // if(advanceprice!=''){
        var powerpriceNum = regNum1.exec(powerprice);
        var waterpriceNum = regNum2.exec(waterprice);
         if(powerpriceNum){
           if(waterpriceNum){
             console.log('保存成功')
              var obj = {
                // rpayway:rpayway,
                // rpaymethod:rpaymethod,
                powerprice:powerprice,
                waterprice:waterprice,
                waterScale:waterScale,
                electricityScale:electricityScale,
                property:property,
                // advanceprice:advanceprice,
              };
              let pages = getCurrentPages();
              let prevPage = pages[pages.length - 2];
              prevPage.setData({
                waterfree:false,
                watersave:true,
                waterdefault:false,
                waterlist:obj,
                waterRate:waterprice,
                electricRate:powerprice,
                waterScale:waterScale,
                electricityScale:electricityScale,
                property:property,
              });
              
              my.navigateBack({
                delta: 1
              });
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
        title: '请填写完整' 
      });
    }
  
    
  },
  toInput(e){
    var that = this;
    console.log(e)
    if(e.target.dataset.t==1){
      that.setData({
        powerprice:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        waterprice:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        electricityScale:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        waterScale:e.detail.value,
      });
    }
    if(e.target.dataset.t==5){
      that.setData({
        property:e.detail.value,
      });
    }
  },
  getInfo(arr,watersave){
    var that = this;
    if(arr!=''&&arr!=null){
      var waterScale = arr.waterScale;
      var electricityScale = arr.electricityScale;
      var rpayway=arr.rpayway;
      var rpaymethod=arr.rpaymethod;
      var rpowerprice=arr.powerprice;
      var rwaterprice=arr.waterprice;
      var radvanceprice=arr.advanceprice;
      var property = arr.property;
      if(watersave!=null&&watersave!=''){
      that.setData({
        watersave:watersave,
        waterScale:waterScale,
        electricityScale:electricityScale,
        property:property,
      });
    }
    if(rpayway!=null&&rpayway!=''){
      that.setData({
        index1:rpayway,
      });
      switch(rpayway){
        case 0:
        that.setData({
          payway:'月付', 
        });
        break;
        case 1:
        that.setData({
          payway:'季付',
        });
        break;
        case 2:
        that.setData({
          payway:'半年付',
        });
        break;
        case 3:
        that.setData({
          payway:'年付',
        });
        break;
        default:
        that.setData({
          payway:'月付',
        });
        break;
      }
      that.setData({
        index1:rpayway,
      });
    }
    if(rpaymethod!=null&&rpaymethod!=''){
      that.setData({
        index2:rpaymethod,
      });
      if(rpaymethod==0){
        that.setData({
          charge:'预收',
        });
      }
      if(rpaymethod==1){
        that.setData({
          charge:'随租金',
        });
      }
    }
    if(rpowerprice!=null&&rpowerprice!=''){
      that.setData({
        powerprice:rpowerprice,
      });
    }
    if(rwaterprice!=null&&rwaterprice!=''){
      that.setData({
        waterprice:rwaterprice,
      });
    }
    if(radvanceprice!=null&&radvanceprice!=''){
      that.setData({
        advanceprice:radvanceprice,
      });
    }
    }

    
  },
});
