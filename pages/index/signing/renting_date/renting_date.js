const app = getApp();
Page({
  data: {
    currentDate:'',
    date1:'',
    date2:'',
    date3:'',
    endDate:'',
    choose:1,
    choose1:false,
    choose2:false,
    choose3:false,
  },
  onLoad() {
    this.setData({
      choose1:true,
      choose:1,
    });
  },
  onShow(){
    this.getCurrentDate();
  },
  onChoose(e){
    var that = this;
    var id = e.currentTarget.id;
    switch(id){
      case '1':
        that.setData({
          choose1:true,
          choose2:false,
          choose3:false,
          choose:1,
          endDate:that.data.date1,
        });
        break;
      case '2':
        that.setData({
          choose1:false,
          choose2:true,
          choose3:false,
          choose:2,
          endDate:that.data.date2,
        });
        break;
      case '3':
        that.setData({
          choose1:false,
          choose2:false,
          choose3:true,
          choose:3,
          endDate:that.data.date3,
        });
        break;
      default:
        that.setData({
          choose1:true,
          choose2:false,
          choose3:false,
          choose:1,
          endDate:that.data.date1,
        });
        break;
    }
  },
  toNext(){
    var that=this;
    my.setStorageSync({
      key: 'udateType', // 缓存数据的key
      data: that.data.choose, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'ustartDate', // 缓存数据的key
      data: that.data.currentDate, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'uendtDate', // 缓存数据的key
      data: that.data.endDate, // 要缓存的数据
    });
    my.navigateTo({
     url: '/pages/index/signing/payway/payway',
    });
  },
  //获取当前日期
  getCurrentDate(){
    var startDate=app.getDate('yyyy年MM月dd日',0);
    //获取三、六、十二个月后日期
    var date1 = app.getFormateDate(0,3);
    var date2 = app.getFormateDate(0,6);
    var date3 = app.getFormateDate(0,12);
    this.setData({
      currentDate:startDate,
      date1:date1,
      date2:date2,
      date3:date3,
    });
    console.log(startDate)
  },
  
});
