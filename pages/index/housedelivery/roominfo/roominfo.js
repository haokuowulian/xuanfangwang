const app=getApp();
var imgs1 = '';
var imgs2 = '';
var waterfree;
var watersave;
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    roomname:'',
    roomarea:'',
    roomrent:'',
    tar:null,
    images:[],
    img1:'',
    img2:'',
    img1url:'',
    img2url:'',
    canAddImg1:true,
    canAddImg2:true,
    upload1:false,
    upload2:false,
    waterfree:false,
    watersave:false,
    waterdefault:true,
    water:'',
    waterlist:[],
    payways:[
      '押一付一',
      '押一付三',
      '押一付六',
      '押一付十二',
    ],
    payway:'押一付一',
    index1:0,
    pBathroom:[
      '是',
      '否',
    ],
    privatebath :'该房间是否有独立卫生间',
    index2:0,
    peoples:[
      '1人',
      '2人',
    ],
    people:'请选择可住人数',
    index3:0,
    beds:[
      '无床位',
      '单人床',
      '双人床',
      '双人沙发床',
    ],
    bed:'请为房间添加床位',
    index4:0,
  },
  onLoad(option) {
    console.log(option)
    console.log(option.tar)
    var tar = option.tar*1;
    this.setData({
      tar:tar*1,
    });
    var imgurl = this.data.imgurl;
    var roomList = my.getStorageSync({
     key: 'r_roomList', // 缓存数据的key
    }).data;
    console.log(roomList)
    if(roomList[tar]!=''&&roomList[tar]!=null){
      this.setData({
        roomname:roomList[tar].roomname,
        roomarea:roomList[tar].roomarea,
        roomrent:roomList[tar].roomrent,
        payway:roomList[tar].payway,
        water:roomList[tar].water,
        privatebath:roomList[tar].privatebath,
        people:roomList[tar].people,
        bed:roomList[tar].bed,
        img1:imgurl+roomList[tar].imgs1,
        img2:imgurl+roomList[tar].imgs2,
      });
    }

  },
  onShow(){
    console.log(this.data.waterlist)
    waterfree = my.getStorageSync({
     key: 'waterfree', // 缓存数据的key
    }).data;
    watersave = my.getStorageSync({
     key: 'watersave', // 缓存数据的key
    }).data;
    var waterdefault = my.getStorageSync({
     key: 'waterdefault', // 缓存数据的key
    }).data;

    if(waterfree!=null&&waterfree!=''){
      if(waterfree){
        this.setData({
          waterfree:waterfree,
          waterdefault:false,
          water:'免水电费',
        });
      }else{
        this.setData({
          waterfree:false,
          waterdefault:true,
          water:'请添加水电费价格',
        });
      }
      
    }else{
      this.setData({
        waterfree:false,
        waterdefault:true,
        water:'请添加水电费价格',
      });
    }
    if(watersave!=null&&watersave!=''){
      if(watersave){
          this.setData({
          watersave:watersave,
          waterdefault:false,
          water:'已填写',
        });
      }
      
    }else{
      this.setData({
        watersave:false,
      });
    }
  },
  toInput(e){
    var that = this;
    console.log(e.detail.value)
    if(e.target.dataset.t==1){
      that.setData({
        roomname:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        roomarea:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        roomrent:e.detail.value,
      });
    }
    
  },
  //添加图片
  addImg(e){
    var that = this;
    my.chooseImage({
      chooseImage: 1,
      success: (res) => {
        var tempFilePaths = res.apFilePaths
        console.log(tempFilePaths)
        that.data.images[0]=tempFilePaths[0];
        if(e.target.dataset.t==1){
          that.setData({
            img1:tempFilePaths[0],
            upload1:true,
            canAddImg1:false,
          });
        }
        if(e.target.dataset.t==2){
          that.data.images[1]=tempFilePaths[0];
          that.setData({
            img2:tempFilePaths[0],
            upload2:true,
            canAddImg2:false,
          });
        }
          
      },
    });
  },
  delImg(e){
    var that = this;
    if(e.target.dataset.t==1){
        that.setData({
        img1:'',
        upload1:false,
        canAddImg1:true,
      });
    }
    if(e.target.dataset.t==2){
        that.setData({
        img2:'',
        upload2:false,
        canAddImg2:true,
      });
    }
    
  },
  bindPickerChange1(e){
    var that = this;
    var arr = that.data.payways;
    var idx = e.detail.value;
      that.setData({
        index1:e.detail.value,
        payway:arr[idx],
    });
  },
  bindPickerChange2(e){
    var that = this;
    var arr = that.data.pBathroom;
    var idx = e.detail.value;
      that.setData({
        index2:e.detail.value,
        privatebath:arr[idx],
    });
  },
  bindPickerChange3(e){
    var that = this;
    var arr = that.data.peoples;
    var idx = e.detail.value;
      that.setData({
        index3:e.detail.value,
        people:arr[idx],
    });
  },
  bindPickerChange4(e){
    var that = this;
    var arr = that.data.beds;
    var idx = e.detail.value;
      that.setData({
        index4:e.detail.value,
        bed:arr[idx],
    });
  },
  toWERate(){
    my.navigateTo({
      url: '/pages/index/housedelivery/water_power_rate/water_power_rate?waterlist='+this.data.waterlist,
    });
  },
  toSave(){
    var that = this;
    var img1 = that.data.img1;
    var img2 = that.data.img2;
    // var imgs = [];
    // imgs[0]=img1;
    // imgs[1]=img2;
    that.uploadImg(img1,1);
    that.uploadImg(img2,2);
    
  },
  uploadImg(image,n){
    var that = this;
    
    var newimgs = '';
    
    my.uploadFile({
      url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do',
      fileName: 'file', 
      fileType: 'image', 
      formData:{savePrefix:'landlord'},
      filePath: image,
      success: (res) => {
        var json1 = JSON.parse(res.data);
        if(n==1){
          newimgs=json1['message'];
          that.toSaveData(newimgs,1);
        }
        if(n==2){
          newimgs=json1['message'];
          that.toSaveData(newimgs,2);
        }
        
      },
      fail: function(res) {
        console.log(res);
        my.alert({ title: '上传失败' });
      },
    });
   
    
  },
  toSaveData(url,n){
    var that = this;
    console.log(url+'----------'+n)
    if(n==1){
      imgs1=url;
      console.log('---0-------'+n)
    }
    if(n==2){
      console.log('---1-------'+n)
      imgs2=url;
      // var water;
      // var waterfree = my.getStorageSync({
      // key: 'waterfree', // 缓存数据的key
      // }).data;
      // var watersave = my.getStorageSync({
      // key: 'watersave', // 缓存数据的key
      // }).data;
      // console.log('---3-------'+waterfreen)
      // if(waterfree){
      //   water=that.data.water;
      // }
      // if(watersave){
      //   water=that.data.waterlist;
      // }
      // var waterfree;
      // var watersave;
      var tar = that.data.tar;
      var water=that.data.water;
      var waterlist = that.data.waterlist;
      if(waterlist!=''&&waterlist!=null){
        water=waterlist;
      }
      var obj = {
        roomname:that.data.roomname,
        roomarea:that.data.roomarea,
        roomrent:that.data.roomrent,
        payway:that.data.payway,
        water:water,
        privatebath:that.data.privatebath,
        people:that.data.people,
        bed:that.data.bed,
        imgs1:imgs1,
        imgs2:imgs2,
      };
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2];
      prevPage.data.roomList[tar]=obj;
      my.navigateBack({
        delta: 1,
      });
    }
    
  },
});
