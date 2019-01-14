Page({
  data: {
    uname:'',
    ucard:'',
    startDate:'',
    endDate:'',
    houseInfo:'',
    payway:'',
  },
  onLoad() {
    this.getOrderInfo();
  },
  toConfirm(){
    my.confirm({
      title: '确认合同',
      content: '您确认签订此合同吗？',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (res) => {
        console.log(res)
        if(res.confirm){
          my.alert({
            title: '合同签订成功！'
          });
          // my.removeStorage({
          //   key: 'ustartDate', // 缓存数据的key
          //   success: (res) => {
          //     console.log('remove success!')
          //   },
          // });
          // my.removeStorage({
          //   key: 'uendDate', // 缓存数据的key
          //   success: (res) => {
          //     console.log('remove success!')
          //   },
          // });
          // my.removeStorage({
          //   key: 'ustartDate', // 缓存数据的key
          //   success: (res) => {
          //     console.log('remove success!')
          //   },
          // });
        }else{
          my.alert({
            title: '合同取消签订！' 
          });
        }
      },
    });
  },
  getOrderInfo(){
    var that = this;
    var ucard = my.getStorageSync({
      key: 'ucard', // 缓存数据的key
    }).data;
    var uname= my.getStorageSync({
      key: 'uname', // 缓存数据的key
    }).data;
    var startDate = my.getStorageSync({
      key: 'ustartDate', // 缓存数据的key
    }).data;
    var endDate = my.getStorageSync({
      key: 'uendtDate', // 缓存数据的key
    }).data;
    var houseInfo = my.getStorageSync({
      key: 'uhouseInfo', // 缓存数据的key
    }).data;
    var payway = my.getStorageSync({
      key: 'upayWay', // 缓存数据的key
    }).data;

    that.setData({
      uname:uname,
      ucard:ucard,
      startDate:startDate,
      endDate:endDate,
      houseInfo:houseInfo,
      payway:payway,
    });
  },
});
