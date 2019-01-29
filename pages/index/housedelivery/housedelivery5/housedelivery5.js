const app=getApp();
const fires = [
  {
    id:1,
    name:'灭火器',
    selected:false,
  },
  {
    id:2,
    name:'防烟面罩',
    selected:false,
  },
  {
    id:3,
    name:'多功能手电筒',
    selected:false,
  },
  {
    id:4,
    name:'逃生绳',
    selected:false,
  },
]
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    fireList:fires,
    rentType:0,
    roomcount:0,
    roomList:[],
    nameList:[],
    furniture:'',
    furniturelist:'',
    feature:'',
    featurelist:'',
    images:[],
    img:'',
    canAddImg:true,
    upload:false,
    selectId:'',
  },
  onLoad() {
    var that = this;
    var rentType = my.getStorageSync({
      key: 'r_rentType', // 缓存数据的key
    }).data;
    var roomcount = my.getStorageSync({
      key: 'r_roomcount', // 缓存数据的key
    }).data;
    that.setData({
      rentType:rentType,
      roomcount:roomcount,
    });
  },
  onShow(){
    console.log(this.data.roomList)
     my.setStorageSync({
      key: 'r_roomList', // 缓存数据的key
      data: this.data.roomList, // 要缓存的数据
    });
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
  onChange(e) {
     this.setData({
       selectId:e.detail.value
     });
  },
  next(){
    var that = this;
    var furniture = that.data.furniture;
    var feature = that.data.feature;
    var image = that.data.img;
    if(furniture!=''&&feature!=''){
      my.setStorageSync({
        key: 'r_furniture', // 缓存数据的key
        data: furniture, // 要缓存的数据
      });
      my.setStorageSync({
        key: 'r_feature', // 缓存数据的key
        data: feature, // 要缓存的数据
      });
      my.uploadFile({
        url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do', // 开发者服务器地址
        filePath: image, // 要上传文件资源的本地定位符
        fileName: 'file', 
        fileType: 'image', // 文件类型，image / video / audio
        formData:{savePrefix:'landlord'},
        success: (res) => {
          var json2 = JSON.parse(res.data);
          console.log(res);
          var newimgs=json2['message'];
          my.setStorageSync({
            key: 'r_fireimg', // 缓存数据的key
            data: newimgs, // 要缓存的数据
          });
          my.navigateTo({
            url: '/pages/index/housedelivery/housedelivery6/housedelivery6',
          })
        },
        fail: function(res) {
          console.log(res);
          my.alert({ title: '上传失败' });
        },
      });
    }else{
      my.alert({ title: '请填写完整' });
    }
    
    

    
  },
  publish(){
    var that = this;
    var roomList = that.data.roomList;
    var furniture = that.data.furniture;
    var feature = that.data.feature;
    if(furniture!=''&&feature!=''){
      my.setStorageSync({
        key: 'r_furniture', // 缓存数据的key
        data: furniture, // 要缓存的数据
      });
      my.setStorageSync({
        key: 'r_feature', // 缓存数据的key
        data: feature, // 要缓存的数据
      });
      if(roomList.length>0){
        that.getHouseInfo(roomList,furniture,feature);
      }else{
        my.alert({
          title: '至少需要出租一间房间' 
        });
      }
    }else{
      my.alert({ title: '请填写完整' });
    }
    
  },
  toRoominfo(e){
    var tar = e.target.dataset.t;
    my.navigateTo({
      url: '/pages/index/housedelivery/roominfo/roominfo?tar='+tar,
    })
  },
  //前往便利设施
  goTo1(){
     my.hideKeyboard();
     my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery5-1/housedelivery5-1',
    })
  },
  //前往房屋特色
  goTo2(){
    my.hideKeyboard();
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery5-2/housedelivery5-2',
    })
  },
  getHouseInfo(roomList,furniture,feature){
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
    var huxing = my.getStorageSync({
      key: 'r_huxing', // 缓存数据的key
    }).data;
    var chaoxiang = my.getStorageSync({
      key: 'r_chaoxiang', // 缓存数据的key
    }).data;
    var zhuangxiu = my.getStorageSync({
      key: 'r_zhuangxiu', // 缓存数据的key
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
    my.httpRequest({
      url: '', // 目标服务器url
      headers:{
        "Content-Type":'application/json'
      },
      method:'POST',
      dataType:'json',
      data:{
        
      },
      success: (res) => {
        
      },
    });
  },
});
