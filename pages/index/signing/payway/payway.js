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
    that.setData({
      dateType:dateType,
      houseInfo:houseInfo,
      rentType:rentType,
    });
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
    my.navigateTo({
     url: '/pages/index/signing/confirmagain/confirmagain',
    });
  },
});
