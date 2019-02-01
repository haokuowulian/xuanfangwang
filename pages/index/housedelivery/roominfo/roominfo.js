const app=getApp();
var imgs1 = '';
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
    selectId:'',
    roomname:'',
    roomarea:'',
    roomrent:'',
    tar:null,
    images:[],
    img1:'',
    img1url:'',
    canAddImg1:true,
    upload1:false,
    upload2:false,
    waterfree:false,
    watersave:false,
    waterdefault:true,
    water:'',
    waterRate:0,
    electricRate:0,
    watertext:'',
    waterlist:[],
    payways:[
      '押一付一',
      '押一付三',
      '押一付六',
      '押一付十二',
    ],
    payway:'押一付一',
    index1:0,
    payment:1,
    pBathroom:[
      '是',
      '否',
    ],
    privatebath :'该房间是否有独立卫生间',
    index2:0,
    bath:false,
    peoples:[
      '1人',
      '2人',
    ],
    people:'请选择可住人数',
    index3:0,
    peopleNum:0,
    beds:[
      '无床位',
      '单人床',
      '双人床',
      '双人沙发床',
    ],
    bed:'请为房间添加床位',
    index4:0,
    bedNum:0,
    extinguisher:false,
    smokeMask:false,
    flashlight:false,
    rope:false,
    furniture:'',
    furniturelist:'',
    feature:'',
    featurelist:'',
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
    var tempList = my.getStorageSync({
     key: 'r_tempList', // 缓存数据的key
    }).data;
    console.log('****************')
    console.log(roomList)
    if(roomList[tar]!=''&&roomList[tar]!=null){
      var selectId=roomList[tar].fireid;
      console.log(selectId)
      var fireList = this.data.fireList;
      for(let a=0;a<selectId.length;a++){
        fireList[selectId[a]-1].selected=true;
      }
      this.setData({
        roomname:roomList[tar].roomname,
        roomarea:roomList[tar].roomarea,
        roomrent:roomList[tar].roomrent,
        payway:roomList[tar].payway,
        water:tempList[tar].water,
        waterlist:tempList[tar].water,
        privatebath:roomList[tar].privatebath,
        bath:roomList[tar].bath,
        people:roomList[tar].people,
        bed:roomList[tar].bed,
        bedNum:roomList[tar].bedNum,
        img1:imgurl+roomList[tar].imgs1,
        img1url:roomList[tar].imgs1,
        selectId:roomList[tar].fireid,
        waterfree:roomList[tar].waterfree,
        watersave:roomList[tar].watersave,
        extinguisher:tempList[tar].extinguisher,
        smokeMask:tempList[tar].smokeMask,
        flashlight:tempList[tar].flashlight,
        rope:tempList[tar].rope,
        payment:roomList[tar].payment,
        peopleNum:roomList[tar].peopleNum,
        featurelist:tempList[tar].featurelist,
        furniturelist:tempList[tar].furniturelist,
      });

    }

  },
  onShow(){
   
    var waterfree=this.data.waterfree;
    var watersave=this.data.watersave;
    if(waterfree==true){
      this.setData({
        waterdefault:false,
        water:'免水电费',
      });
    }
    if(watersave==true){
      this.setData({
        waterdefault:false,
        water:'已填写',
      });
    }
    if(waterfree==false&&watersave==false){
      this.setData({
        waterdefault:true,
        watertext:'请添加水电费信息',
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

    
  },
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
  bindPickerChange1(e){
    var that = this;
    var arr = that.data.payways;
    var idx = e.detail.value;
    console.log(idx+'***********')
    if(idx==0){
      that.setData({
        index1:e.detail.value,
        payway:arr[idx],
        payment:1,
      });
    }
    if(idx==1){
      that.setData({
        index1:e.detail.value,
        payway:arr[idx],
        payment:3,
      });
    }
    if(idx==2){
      that.setData({
        index1:e.detail.value,
        payway:arr[idx],
        payment:6,
      });
    }
    if(idx==3){
      that.setData({
        index1:e.detail.value,
        payway:arr[idx],
        payment:12,
      });
    }
  },
  bindPickerChange2(e){
    var that = this;
    var arr = that.data.pBathroom;
    var idx = e.detail.value;
    if(idx==0){
      that.setData({
        index2:e.detail.value,
        privatebath:arr[idx],
        bath:true,
      });
    }
    if(idx==1){
      that.setData({
        index2:e.detail.value,
        privatebath:arr[idx],
        bath:false,
      });
    }
  },
  bindPickerChange3(e){
    var that = this;
    var arr = that.data.peoples;
    var idx = e.detail.value;
    if(idx==0){
      that.setData({
        index3:e.detail.value,
        people:arr[idx],
        peopleNum:1
      });
    }
    if(idx==1){
      that.setData({
        index3:e.detail.value,
        people:arr[idx],
        peopleNum:2
      });
    }
  },
  bindPickerChange4(e){
    var that = this;
    var arr = that.data.beds;
    var idx = e.detail.value;
    if(idx==0){
      that.setData({
        index4:e.detail.value,
        bed:arr[idx],
        bedNum:0
      });
    }
    if(idx==1){
      that.setData({
        index4:e.detail.value,
        bed:arr[idx],
        bedNum:1
      });
    }
    if(idx==2){
      that.setData({
        index4:e.detail.value,
        bed:arr[idx],
        bedNum:2
      });
    }
    if(idx==3){
      that.setData({
        index4:e.detail.value,
        bed:arr[idx],
        bedNum:3
      });
    }
    
  },
  onChange(e) {
     var that = this;
    console.log(e)
    console.log(e.detail.value)
    var list = e.detail.value;
    var r1 = list.indexOf(1);
    var r2 = list.indexOf(2);
    var r3 = list.indexOf(3);
    var r4 = list.indexOf(4);
    if(r1==-1){
      that.setData({
        extinguisher:false,
      });
    }else{
      that.setData({
        extinguisher:true,
      });
    }
    if(r2==-1){
      that.setData({
        smokeMask:false,
      });
    }else{
      that.setData({
        smokeMask:true,
      });
    }
    if(r3==-1){
      that.setData({
        flashlight:false,
      });
    }else{
      that.setData({
        flashlight:true,
      });
    }
    if(r4==-1){
      that.setData({
        rope:false,
      });
    }else{
      that.setData({
        rope:true,
      });
    }

    that.setData({
      selectId:e.detail.value
    });
  },
  //waterfree:false,
  //watersave:false,
  toWERate(){
    my.setStorage({
      key: 't_waterfree', // 缓存数据的key
      data: this.data.waterfree, // 要缓存的数据
    });
    my.setStorage({
      key: 't_watersave', // 缓存数据的key
      data: this.data.watersave, // 要缓存的数据
    });
    my.setStorage({
      key: 't_waterlist', // 缓存数据的key
      data: this.data.waterlist, // 要缓存的数据  +'&waterfree='+this.data.waterfree+'&watersave='+this.data.watersave
    });
    my.navigateTo({
      url: '/pages/index/housedelivery/water_power_rate/water_power_rate?waterlist='+this.data.waterlist,
    });
  },


  toSave(){
    var that = this;
    var canAddImg1 = that.data.canAddImg1;
    var roomname = that.data.roomname;
    var roomarea = that.data.roomarea;
    var roomrent = that.data.roomrent;
    var peopleNum = that.data.peopleNum;
    var img1 = that.data.img1;
    var img1url = that.data.img1url;
    var water=that.data.water;
    var waterlist = that.data.waterlist;
    if(waterlist!=''&&waterlist!=null){
      water=waterlist;
    }
    
    if(roomname!=''&&roomarea!=''&&roomrent!=''&&water!=''&&img1!=''&&peopleNum>0){
      if(img1url!=null&&img1url!=''&&canAddImg1==true){
        that.toSaveData(img1url,water);
      }else{
        that.uploadImg(img1,water);
      }
    }else{
      my.alert({
        title: '请填写完整' 
      });
    }


    
    
  },
   uploadImg(image1,water){
    var that = this;
    var newimgs = '';
    my.uploadFile({
      url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do',
      fileName: 'file', 
      fileType: 'image', 
      formData:{savePrefix:'landlord'},
      filePath: image1,
      success: (res) => {
        var json1 = JSON.parse(res.data);
        console.log(res);
        newimgs=json1['message'];
        that.toSaveData(newimgs,water);

      },
      fail: function(res) {
        console.log(res);
        my.alert({ title: '上传失败' });
      },
    });
   
    
  },
  
  toSaveData(url,water){
    var that = this;
    console.log(that.data.extinguisher)
    console.log(that.data.smokeMask)
    console.log(that.data.flashlight)
    console.log(that.data.rope)
      var imgs1=url;
      var fireid = that.data.selectId;
      var extinguisher = that.data.extinguisher;
      var smokeMask = that.data.smokeMask;
      var flashlight = that.data.flashlight;
      var rope = that.data.rope;
      var payment = that.data.payment;
      var peopleNum = that.data.peopleNum;
      var tar = that.data.tar;
      // var water=that.data.water;
      // var waterlist = that.data.waterlist;
      // if(waterlist!=''&&waterlist!=null){
      //   water=waterlist;
      // }
      var obj1 = {
        roomname:that.data.roomname,
        roomarea:that.data.roomarea,
        roomrent:that.data.roomrent,
        payway:that.data.payway,
        payment:payment,
        
        privatebath:that.data.privatebath,
        bath:that.data.bath,
        people:that.data.people,
        peopleNum:peopleNum,
        bed:that.data.bed,
        bedNum:that.data.bedNum,
        imgs1:imgs1,
        fireid:fireid,
        
        waterfree:that.data.waterfree,
        watersave:that.data.watersave,
      };
      var obj2 = {
        water:water,
        waterRate:that.data.waterRate,
        electricRate:that.data.electricRate,
        featurelist:that.data.featurelist,
        furniturelist:that.data.furniturelist,
        extinguisher:extinguisher,
        smokeMask:smokeMask,
        flashlight:flashlight,
        rope:rope,
      };
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2];
      prevPage.data.roomList[tar]=obj1;
      prevPage.data.tempList[tar]=obj2;
      my.navigateBack({
        delta: 1,
      });
    
    
  },
});
