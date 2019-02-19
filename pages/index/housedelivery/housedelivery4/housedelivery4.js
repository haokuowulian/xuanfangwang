const app=getApp();
const dates = ['','','',''];
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    housename:'',//房源名称
    describe:'',//房源描述
    nearby:'',//房源周边
    images:[],
    img:'',
    canAddImg:true,
    upload:false,
    rentType:0,
    endDates:'',
  },
  onLoad() {
    var that = this;
    var rentType = my.getStorageSync({
      key: 'r_rentType', // 缓存数据的key
    }).data;
    that.setData({
      rentType:rentType,
    });
  },
  chooseDate(){
    var startDate = app.getDate('yyyy-MM-dd',0);
    var currentDate = app.getFormateDate('yyyy-MM-dd',1,0);
    var endDate = app.getFormateDate('yyyy-MM-dd',10,12);
    console.log(currentDate+'***********'+endDate)
    my.datePicker({
      format: currentDate,
      currentDate: currentDate,
      startDate: currentDate,
      endDate: endDate,
      success: (res) => {
        this.setData({
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
      that.setData({
        describe:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        nearby:e.detail.value,
      });
    }
    
  },
  addImg(){
    var that = this;
    my.chooseImage({
      chooseImage: 1,
      success: (res) => {
        var tempFilePaths = res.apFilePaths
        console.log(tempFilePaths)
        that.data.images[0]=tempFilePaths[0];
        that.setData({
          img:tempFilePaths[0],
          upload:true,
          canAddImg:false,
        });
      },
    });
  },
  delImg(){
    var that = this;
    that.setData({
      img:'',
      upload:false,
      canAddImg:true,
    });
  },
  next(){
    var that = this;
    // that.toNext();
    var housename = that.data.housename;
    var describe = that.data.describe;
    var nearby = that.data.nearby;
    var image = that.data.img;
    if(housename!=''&&describe!=''&&nearby!=''){
       my.setStorageSync({
        key: 'r_housename', // 缓存数据的key
        data: housename, // 要缓存的数据
      });
      my.setStorageSync({
        key: 'r_describe', // 缓存数据的key
        data: describe, // 要缓存的数据
      });
      my.setStorageSync({
        key: 'r_nearby', // 缓存数据的key
        data: nearby, // 要缓存的数据
      });
      my.uploadFile({
        url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do', // 开发者服务器地址
        filePath: image, // 要上传文件资源的本地定位符
        fileName: 'file', 
        fileType: 'image', // 文件类型，image / video / audio
        formData:{savePrefix:'landlord'},
        success: (res) => {
          console.log('success');
          var json2 = JSON.parse(res.data);
          console.log(res);
          var newimgs=json2['message'];
          console.log(newimgs);
          my.setStorageSync({
            key: 'r_houseimg', // 缓存数据的key
            data: newimgs, // 要缓存的数据
          });
          that.toNext();
        },
        fail: (res) => {
          console.log(res);
          my.alert({ title: '上传失败' });
        },
      });
    }else{
      my.alert({
        title: '请填写完整' 
      });
    }
  },
  toNext(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery5/housedelivery5',
    })
  },
});
