const app = getApp();
var date0;
var date01;
var date02;
var date03;
var startDate1;
Page({
  data: {
    currentDate:'',
    date10:'',
    date1:'',
    date2:'',
    date3:'',
    endDate:'',
    choose:0,
    choose0:false,
    choose1:false,
    choose2:false,
    choose3:false,
    payment:0,
    beginDate:'',
  },
  onLoad() {
    var that = this;
    var houseInfo =my.getStorageSync({
     key: 'uhouseInfo', // 缓存数据的key
    }).data;
    var payment = houseInfo.template.payment;
    console.log(payment)
    var startDate=app.getDate('yyyy年MM月dd日',0);
    console.log('++++++++++1++++++++++++')
    console.log(startDate)
    console.log('++++++++++2++++++++++++')
    if(startDate!=''){
      that.getCurrentDate(payment,startDate);
    }
    if(payment==1){
      that.setData({
        choose0:true,
        choose:0,
        payment:payment,
      });
    }else if(payment==3){
      that.setData({
        choose1:true,
        choose:1,
        payment:payment,
      });
    }else if(payment==6){
      that.setData({
        choose2:true,
        choose:2,
        payment:payment,
      });
    }else if(payment==12){
      that.setData({
        choose3:true,
        choose:3,
        payment:payment,
      });
    }
    // this.setData({
    //   choose1:true,
    //   choose:1,
    // });
  },
  onShow(){
    
  },
  onChoose(e){
    var that = this;
    var id = e.currentTarget.id;
    that.toChooseDate(id);
  },
  toChooseDate(id){
    console.log('---------------')
    console.log(id)
    var that = this;
    switch(id){
      case '1':
        that.setData({
          choose0:false,
          choose1:true,
          choose2:false,
          choose3:false,
          choose:1,
          endDate:date01,
        });
        break;
      case '2':
        that.setData({
          choose0:false,
          choose1:false,
          choose2:true,
          choose3:false,
          choose:2,
          endDate:date02,
        });
        break;
      case '3':
        that.setData({
          choose0:false,
          choose1:false,
          choose2:false,
          choose3:true,
          choose:3,
          endDate:date03,
        });
        break;
        case '10':
        that.setData({
          choose0:true,
          choose1:false,
          choose2:false,
          choose3:false,
          choose:0,
          endDate:date0,
        });
        break;
      default:
        that.setData({
          choose0:true,
          choose1:false,
          choose2:false,
          choose3:false,
          choose:0,
          endDate:date01,
        });
        break;
    }
  },
  toNext(){
    var that=this;
    console.log(startDate1)
    console.log(that.data.endDate)
    my.setStorageSync({
      key: 'udateType', // 缓存数据的key
      data: that.data.choose, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'ustartDate', // 缓存数据的key
      data: startDate1, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'uendDate', // 缓存数据的key
      data: that.data.endDate, // 要缓存的数据
    });
    

    my.navigateTo({
     url: '/pages/index/signing/payway/payway',
    });
   
   
   
  },
  //选择开始时间
  chooseDate(){
    var startDate = app.getDate('yyyy-MM-dd',0);
    var currentDate = app.getFormateDate2('yyyy-MM-dd',0,0,0);
    var endDate = app.getFormateDate2('yyyy-MM-dd',0,0,7);
    console.log(currentDate+'***********'+endDate)
    my.datePicker({
      format: 'yyyy年MM月dd日',
      currentDate: currentDate,
      startDate: currentDate,
      endDate: endDate,
      success: (res) => {
        console.log(res)
        console.log('-------------1--------------')
        console.log(res.date)
        console.log('-------------2--------------')
        // my.alert({
        //   content: res.data,
        // });
        this.setData({
          currentDate:res.date,
        });
        this.getCurrentDate(this.data.payment,res.date);
        
      },
    });
  },
  //获取当前3、6、12个月后日期
  getCurrentDate(payment,beginDate){
    var that = this;
    
    //获取三、六、十二个月后日期
    startDate1 = app.getFormateDate(beginDate,'yyyy-MM-dd日',0);
    var currentDate = app.getFormateDate(beginDate,'yyyy年MM月dd日',0);
    console.log('************')
    console.log(currentDate)
    console.log(startDate1)
    console.log('************')
    var date10 = app.getFormateDate(beginDate,'yyyy年MM月dd日',1);
    date0 =app.getFormateDate(beginDate,'yyyy-MM-dd',1);
    var date1 = app.getFormateDate(beginDate,'yyyy年MM月dd日',3);
    date01 =app.getFormateDate(beginDate,'yyyy-MM-dd',3);
    var date2 = app.getFormateDate(beginDate,'yyyy年MM月dd日',6);
    date02 =app.getFormateDate(beginDate,'yyyy-MM-dd',6);
    var date3 = app.getFormateDate(beginDate,'yyyy年MM月dd日',12);
    date03 =app.getFormateDate(beginDate,'yyyy-MM-dd',12);
    console.log(date01+'-----------')
    console.log(date02+'-----------')
    console.log(date03+'-----------')
    if(payment==1){
      that.setData({
        currentDate:currentDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date0,
      });
    }
    if(payment==3){
      that.setData({
        currentDate:currentDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date01,
      });
    }
    if(payment==6){
      that.setData({
        currentDate:currentDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date02,
      });
    }
    if(payment==12){
      that.setData({
        currentDate:currentDate,
        date10:date10,
        date1:date1,
        date2:date2,
        date3:date3,
        endDate:date03,
      });
    }
  },
  
});
