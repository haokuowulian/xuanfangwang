const app=getApp();
Page({
  data: {
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
  onLoad() {},
  onShow(){
    var waterfree = my.getStorageSync({
     key: 'waterfree', // 缓存数据的key
    }).data;
    var watersave = my.getStorageSync({
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
      url: '/pages/index/housedelivery/water_power_rate/water_power_rate',
    });
  },
  toSave(){
    var that = this;
    var img1 = that.data.img1;
    var img2 = taht.data.img2;
    that.uploadImg(img1,1);
    that.uploadImg(img2,2);
  },
  uploadImg(img,num){
    var that = this;
    my.uploadFile({
      url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do', // 开发者服务器地址
      filePath: img, // 要上传文件资源的本地定位符
      fileName: 'file', // 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容
      fileType: 'image', // 文件类型，image / video / audio
      formData:{savePrefix:'landlord'},
      success: (res) => {
        var json1 = JSON.parse(res.data);
        if(num==1){
          that.setData({
            img1url:json1['message'],
          });
          my.setStorageSync({
            key: 'img1url', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
        if(num==2){
          that.setData({
            img2url:json1['message'],
          });
          my.setStorageSync({
            key: 'img1ur2', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
      },
      fail: function(res) {
        console.log(res);
        // my.alert({ title: '上传失败' });
      },
    });
  },
});
