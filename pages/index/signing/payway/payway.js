Page({
  data: {
    selected:1,
    selected1:false,
    selected2:false,
    selected3:false,
    selected4:false,
    dateType:3,
    houseInfo:'',
    rentType:0,
    payment:0,
  },
  onLoad() {
    var that=this;
    that.setData({
      selected1:true,
    });
    var dateType = my.getStorageSync({
     key: 'udateType', // 缓存数据的key
    }).data;
    var rentType = my.getStorageSync({
     key: 'urentType', // 缓存数据的key
    }).data;
    var houseInfo =my.getStorageSync({
     key: 'uhouseInfo', // 缓存数据的key
    }).data;
    var payment = houseInfo.template.payment;
    if(payment==1){
      that.setData({
        dateType:dateType,
        houseInfo:houseInfo,
        rentType:rentType,
        payment:payment,
        selected1:true,
        selected:1,
      });
    }else if(payment==3){
      that.setData({
        dateType:dateType,
        houseInfo:houseInfo,
        rentType:rentType,
        payment:payment,
        selected2:true,
        selected:2,
      });
    }else if(payment==6){
      that.setData({
        dateType:dateType,
        houseInfo:houseInfo,
        rentType:rentType,
        payment:payment,
        selected3:true,
        selected:3,
      });
    }else if(payment==12){
      that.setData({
        dateType:dateType,
        houseInfo:houseInfo,
        rentType:rentType,
        payment:payment,
        selected4:true,
        selected:4,
      });
    }
    
  },
  onChoose(e){
    var that = this;
    var id = e.currentTarget.id;
    switch(id){
      case '1':
       that.setData({
          selected1:true,
          selected2:false,
          selected3:false,
          selected4:false,
          selected:1,
        });
        break;
      case '2':
        that.setData({
          selected1:false,
          selected2:true,
          selected3:false,
          selected4:false,
          selected:2,
        });
        break;
      case '3':
        that.setData({
          selected1:false,
          selected2:false,
          selected3:true,
          selected4:false,
          selected:3,
        });
        break;
        case '4':
        that.setData({
          selected1:false,
          selected2:false,
          selected3:false,
          selected4:true,
          selected:4,
        });
        break;
      default:
        that.setData({
          selected1:true,
          selected2:false,
          selected3:false,
          selected4:false,
          selected:1,
        });
        break;
    }
  },
  toConfirm(){
    var that = this;
    my.setStorageSync({
      key: 'upayType', // 缓存数据的key
      data: that.data.selected, // 要缓存的数据
    });
    console.log(that.data.selected)
    my.navigateTo({
     url: '/pages/index/signing/confirmagain/confirmagain',
    });
  },
});
