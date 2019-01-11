const app = getApp();
var date01;
var date02;
var date03;
var startDate1;
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
          endDate:date01,
        });
        break;
      case '2':
        that.setData({
          choose1:false,
          choose2:true,
          choose3:false,
          choose:2,
          endDate:date02,
        });
        break;
      case '3':
        that.setData({
          choose1:false,
          choose2:false,
          choose3:true,
          choose:3,
          endDate:date03,
        });
        break;
      default:
        that.setData({
          choose1:true,
          choose2:false,
          choose3:false,
          choose:1,
          endDate:date01,
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
      data: startDate1, // 要缓存的数据
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
    startDate1=app.getDate('yyyy-MM-dd',0);
    //获取三、六、十二个月后日期
    var date1 = app.getFormateDate('yyyy年MM月dd日',0,3);
    date01 =app.getFormateDate('yyyy-MM-dd',0,3);
    var date2 = app.getFormateDate('yyyy年MM月dd日',0,6);
    date02 =app.getFormateDate('yyyy-MM-dd',0,6);
    var date3 = app.getFormateDate('yyyy年MM月dd日',0,12);
    date03 =app.getFormateDate('yyyy-MM-dd',0,12);
    this.setData({
      currentDate:startDate,
      date1:date1,
      date2:date2,
      date3:date3,
    });
    console.log(startDate)
  },
  
});
