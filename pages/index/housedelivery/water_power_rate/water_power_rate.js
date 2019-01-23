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
  },
  onLoad() {
    this.getInfo();
    var waterfree = my.getStorageSync({
      key: 'waterfree', // 缓存数据的key
    }).data;
    
    if(waterfree!=null&&waterfree!=''){
      this.setData({
        free:waterfree,
      });
    }else{
      this.setData({
        free:false,
      });
    }
  },
  onShow(){
    this.getInfo();
  },
  switchChange(e){
    console.log('switchChange 事件，值:', e.detail.value)
    if(e.detail.value){
      my.removeStorage({
        key: 'r_payway', // 缓存数据的key
      });
      my.removeStorage({
        key: 'r_paymethod', // 缓存数据的key
      });
      my.removeStorage({
        key: 'r_powerprice', // 缓存数据的key
      });
      my.removeStorage({
        key: 'r_waterprice', // 缓存数据的key
      });
      my.removeStorage({
        key: 'r_advanceprice', // 缓存数据的key
      });
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
    }
    my.setStorageSync({
      key: 'waterfree', // 缓存数据的key
      data: e.detail.value, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'watersave', // 缓存数据的key
      data: false, // 要缓存的数据
    });
    this.setData({
      free:e.detail.value,
    });
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
    var rpayway = that.data.index1;
    var rpaymethod = that.data.index2;
    var powerprice = that.data.powerprice;
    var waterprice = that.data.waterprice;
    var advanceprice = that.data.advanceprice;
   
    if(powerprice!=''&&waterprice!=''){
      if(rpaymethod==0){
        if(advanceprice!=''){
          my.setStorageSync({
            key: 'watersave', // 缓存数据的key
            data: true, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'waterfree', // 缓存数据的key
            data: false, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'r_payway', // 缓存数据的key
            data: rpayway, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'r_paymethod', // 缓存数据的key
            data: rpaymethod, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'r_powerprice', // 缓存数据的key
            data: powerprice, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'r_waterprice', // 缓存数据的key
            data: waterprice, // 要缓存的数据
          });
          my.setStorageSync({
            key: 'r_advanceprice', // 缓存数据的key
            data: advanceprice, // 要缓存的数据
          });
          console.log('保存成功')
          my.navigateBack({
            delta: 1
          });
        }else{
          my.alert({
            title: '预收金额不能为空' 
          });
        }
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
        advanceprice:e.detail.value,
      });
    }
  },
  getInfo(){
    var that = this;
    

    var watersave = my.getStorageSync({
      key: 'watersave', // 缓存数据的key
    }).data;

    var rpayway = my.getStorageSync({
      key: 'r_payway', // 缓存数据的key
    }).data;

    var rpaymethod = my.getStorageSync({
      key: 'r_paymethod', // 缓存数据的key
    }).data;

    var rpowerprice = my.getStorageSync({
      key: 'r_powerprice', // 缓存数据的key
    }).data;

    var rwaterprice = my.getStorageSync({
      key: 'r_waterprice', // 缓存数据的key
    }).data;

    var radvanceprice = my.getStorageSync({
      key: 'r_advanceprice', // 缓存数据的key
    }).data;


    if(watersave!=null&&watersave!=''){
      that.setData({
        watersave:watersave,
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
  },
});
