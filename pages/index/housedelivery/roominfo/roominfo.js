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
    roomName:'',
    area:'',
    rents:'',
    tar:null,
    // images:[],
    img1:'',
    img11:'/image/zpbj.png',
    img2:'/image/zpbj.png',

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
    privatebath :'请选择是否',
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
    sexs:[
      '男女不限',
      '只限男',
      '只限女',
    ],
    sex:'男女不限',
    index5:0,
    sexCondition:0,
    extinguisher:false,
    smokeMask:false,
    flashlight:false,
    rope:false,
    furniture:'',
    furniturelist:'',
    feature:'',
    featurelist:'',
    templateName:'',
    // sexCondition:0,
    show1:true,
    show2:false,
    show3:false,
    images:[],
    imgs:[],
    img:'',
    canAddImg:true,
    upload:false,
    count:6,
    waterScale:0,
    electricityScale:0,
    property:'',
  },
  onLoad(option) {
    var that = this;
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
    var vaddress = my.getStorageSync({
    key: 'r_vaddress', // 缓存数据的key
    }).data;
    var v_address = my.getStorageSync({
      key: 'r_address', // 缓存数据的key
    }).data;
    // var houseNo = my.getStorageSync({
    //   key: 'r_houseNo', // 缓存数据的key
    // }).data;
    var address = v_address+vaddress;
    // var templateName = address+houseNo;
    this.setData({
      templateName:address,
    });
    console.log('****************')
    console.log(roomList)
    // console.log('templateName='+templateName)
    if(roomList[tar]!=''&&roomList[tar]!=null){
      var selectId=roomList[tar].fireid;
      console.log(selectId)
      var fireList = this.data.fireList;
      for(let a=0;a<selectId.length;a++){
        fireList[selectId[a]-1].selected=true;
      }
      if(tempList[tar].extinguisherImage==''){
        that.setData({
          img2url:'',
          img2:'/image/fangdong/miehuoqi.png',//imgurl+tempList[tar].extinguisherimg,
        });
      }else{
        that.setData({
          img2url:tempList[tar].extinguisherImage,
          img2:tempList[tar].extinguisherImage,
        });
      }
      if(tempList[tar].smokeMaskImage==''){
        that.setData({
          img3url:'',
          img3:'/image/fangdong/fangdumianju.png',
        });
      }else{
        that.setData({
          img3:tempList[tar].smokeMaskImage,
          img3url:tempList[tar].smokeMaskImage,
        });
      }
      if(tempList[tar].flashlightImage==''){
        that.setData({
          img4url:'',
          img4:'/image/fangdong/shoudiantong.png',
        });
      }else{
        that.setData({
          img4:tempList[tar].flashlightImage,
          img4url:tempList[tar].flashlightImage,
        });
      }
      if(tempList[tar].ropeImage==''){
        that.setData({
          img5url:'',
          img5:'/image/fangdong/shengzi.png',
        });
      }else{
        that.setData({
          img5:tempList[tar].ropeImage,
          img5url:tempList[tar].ropeImage,
        });
      }
      if(tempList[tar].sexneed==0){
        that.setData({
          show1:true,
          show2:false,
          show3:false,
        });
      }
      if(tempList[tar].sexneed==1){
        that.setData({
          show1:false,
          show2:true,
          show3:false,
        });
      }
      if(tempList[tar].sexneed==2){
        that.setData({
          show1:false,
          show2:false,
          show3:true,
        });
      }
      console.log(roomList[tar].imgs)
      console.log(roomList[tar].images)
      var images = roomList[tar].images;
      var imgs = images.split(',');
      var features = tempList[tar].feature;
      var feature = features.split(',');
      var furnitures = tempList[tar].furniture;
      var furniture = furnitures.split(',');
      that.setData({
        roomName:roomList[tar].roomName,
        area:roomList[tar].area,
        rents:roomList[tar].rents,
        payway:roomList[tar].payway,
        water:tempList[tar].water,
        waterlist:tempList[tar].water,
        privatebath:roomList[tar].privatebath,
        bath:roomList[tar].bath,
        people:roomList[tar].people,
        bed:roomList[tar].bed,
        bedNum:roomList[tar].bedNum,
        img1:roomList[tar].imgs1,
        img11:roomList[tar].imgs1,
        img1url:roomList[tar].imgs1,
        images:roomList[tar].imgs,
        imgs:imgs,
        electricityScale:roomList[tar].electricityScale,
        waterScale:roomList[tar].waterScale,


        img2:tempList[tar].extinguisherImage,
        img2url:tempList[tar].extinguisherImage,
        img3:tempList[tar].smokeMaskImage,
        img3url:tempList[tar].smokeMaskImage,
        img4:tempList[tar].flashlightImage,
        img4url:tempList[tar].flashlightImage,
        img5:tempList[tar].ropeImage,
        img5url:tempList[tar].ropeImage,

        sexCondition:tempList[tar].sexneed,
        sex:tempList[tar].sex,

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
        feature:feature,
        furniturelist:tempList[tar].furniturelist,
        furniture:furniture,
        waterRate:tempList[tar].waterRate,
        electricRate:tempList[tar].electricRate,
      });

    }

  },
  //添加图片
  addImg2(){
    var that = this;
    var newCount = that.data.count-1;
    console.log(newCount)
    console.log(that.data.images)
    my.chooseImage({
      count: 6,
      success: (res) => {
        var tempFilePaths = res.apFilePaths
        console.log(tempFilePaths)
        for(let i = 0;i<tempFilePaths.length;i++){
          console.log(tempFilePaths.length)
          console.log('No:')
          console.log(that.data.images.length)
          if(that.data.images.length<=5){
            that.uploadImg1(tempFilePaths[i]);
            that.setData({
              images:that.data.images.concat(tempFilePaths[i]),
            });
            if(that.data.images.length==6){
              that.setData({
                upload:true,
                canAddImg:false,
              });
            }
          }else{
            that.setData({
              upload:true,
              canAddImg:false,
            });
            break;
          }
        }
      },
    });
  },
  //   //添加图片
  // addImg2(){
  //   var that = this;
  //   var newCount = that.data.count-1;
  //   console.log(newCount)
  //   console.log(that.data.images)
  //   my.chooseImage({
  //     chooseImage: 1,
  //     success: (res) => {
  //       var tempFilePaths = res.apFilePaths
  //       console.log(tempFilePaths)
  //       if(that.data.images.length==5){
  //         that.uploadImg1(tempFilePaths[0]);
  //         that.setData({
  //           images:that.data.images.concat(tempFilePaths),
  //           // img:tempFilePaths[0],
  //           upload:true,
  //           canAddImg:false,
  //           count:newCount,
  //         });
  //       }else{
  //         that.uploadImg1(tempFilePaths[0]);
  //         that.setData({
  //         images:that.data.images.concat(tempFilePaths),
  //         // img:tempFilePaths[0],
  //         upload:true,
  //         canAddImg:true,
  //         count:newCount,
  //       });
  //       }
        
  //     },
  //   });
  // },
  //房间图片删除
  delImg2(e){
    var that = this;
    var index = e.target.dataset.index;
    console.log('下标：'+index)
    var images = that.data.images;
    var imgs = that.data.imgs;
    var newcount = that.data.count+1;
    images.splice(index,1);
    imgs.splice(index,1);
    if(images.length==0){
      console.log('清空')
      that.setData({
        images:[],
        imgs:[],
        canAddImg:true,
        count:newcount,
      });
    }
    if(images.length>0){
      console.log('删除')
      console.log(images)
      that.setData({
        count:newcount,
        canAddImg:true,
        images:images,
        imgs:imgs,
      });
    }
    console.log(that.data.images)

  },
  uploadImg1(image){
    var that = this;
    var imgs = that.data.imgs;
    my.uploadFile({
      url: app.globalData.baseUrl_oos, // 开发者服务器地址
      filePath: image, // 要上传文件资源的本地定位符
      fileName: 'file', 
      fileType: 'image', // 文件类型，image / video / audio
      formData:{savePrefix:'landlord/'},
      success: (res) => {
        console.log('success');
        var json2 = JSON.parse(res.data);
        console.log(res);
        var newimgs=json2['message'];
        console.log(newimgs);
        that.setData({
          imgs:imgs.concat(newimgs),
        });
        
      },
      fail: (res) => {
        console.log(res);
        my.alert({ title: '上传失败' });
      },
    });

  },
  //租客性别选择
  toChooseType1(){
    var that = this;
    that.setData({
      show1:true,
      show2:false,
      show3:false,
      sexCondition:0,
    });
  },
  toChooseType2(){
    var that = this;
    that.setData({
      show1:false,
      show2:true,
      show3:false,
      sexCondition:1,
    });
  },
  toChooseType3(){
    var that = this;
    that.setData({
      show1:false,
      show2:false,
      show3:true,
      sexCondition:2,
    });
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
    this.setData({
      furniturelist:this.data.furniturelist,
      featurelist:this.data.featurelist,
    });
    
  },
  toInput(e){
    var that = this;
    console.log(e.detail.value)
    if(e.target.dataset.t==1){
      that.setData({
        roomName:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        area:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        rents:e.detail.value,
      });
    }
    
  },
  //上传消防图片
  addImg1(e){
    var that = this;
    var t = e.target.dataset.t;
    var fireList = this.data.fireList;
      // for(let a=0;a<selectId.length;a++){
      //   fireList[selectId[a]-1].selected=true;
      // }
    console.log(t)
    my.chooseImage({
      chooseImage: 1,
      success: (res) => {
        var tempFilePaths = res.apFilePaths;
        console.log(tempFilePaths)
        var image = tempFilePaths[0];
        if(e.target.dataset.t==2){
          fireList[0].selected=true;
          that.setData({
            img2:tempFilePaths[0],
            upload2:true,
            canAddImg2:false,
            extinguisher:true,
            fireList:fireList,
          });
        }
        if(e.target.dataset.t==3){
          fireList[1].selected=true;
          that.setData({
            img3:tempFilePaths[0],
            upload3:true,
            canAddImg3:false,
            smokeMask:true,
            fireList:fireList,
          });
        }
        if(e.target.dataset.t==4){
          fireList[2].selected=true;
          that.setData({
            img4:tempFilePaths[0],
            upload4:true,
            canAddImg4:false,
            flashlight:true,
            fireList:fireList,
          });
        }
        if(e.target.dataset.t==5){
          fireList[3].selected=true;
          that.setData({
            img5:tempFilePaths[0],
            upload5:true,
            canAddImg5:false,
            rope:true,
            fireList:fireList,
          });
        }
        that.uploadImgs(image,e.target.dataset.t);
      },
      
    });
  },
  uploadImgs(image,t){
    var that = this;
    var newimgs = '';
     my.uploadFile({
          url: app.globalData.baseUrl_oos,
          fileName: 'file', 
          fileType: 'image', 
          formData:{savePrefix:'landlord/'},
          filePath: image,
          success: (res) => {
            var json1 = JSON.parse(res.data);
            console.log('************');
            console.log(res);
            newimgs=json1['message'];
            if(t==2){
              that.setData({
                img2url:newimgs,
              });
            }
            if(t==3){
              that.setData({
                img3url:newimgs,
              });
            }
            if(t==4){
              that.setData({
                img4url:newimgs,
              });
            }
            if(t==5){
              that.setData({
                img5url:newimgs,
              });
            }
          },
          fail: function(res) {
            console.log(res);
            if(t==2){
              fireList[0].selected=false;
              that.setData({
                canAddImg2:true,
                extinguisher:false,
                fireList:fireList,
              });
            }
            if(t==3){
              fireList[1].selected=false;
              that.setData({
                canAddImg3:true,
                smokeMask:false,
                fireList:fireList,
              });
            }
            if(t==4){
              fireList[2].selected=false;
              that.setData({
                canAddImg4:true,
                flashlight:false,
                fireList:fireList,
              });
            }
            if(t==5){
              fireList[3].selected=false;
              that.setData({
                canAddImg5:true,
                rope:false,
                fireList:fireList,
              });
            }
            my.alert({ title: '上传失败' });
          },
        });
  },
  //添加图片
  addImg(e){
    var that = this;
    my.chooseImage({
      chooseImage: 1,
      sizeType:['compressed'],
      success: (res) => {
        var tempFilePaths = res.apFilePaths;
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
          that.setData({
            img2:tempFilePaths[0],
            upload2:true,
            canAddImg2:false,
          });
        }
        if(e.target.dataset.t==3){
          that.setData({
            img3:tempFilePaths[0],
            upload3:true,
            canAddImg3:false,
          });
        }
        if(e.target.dataset.t==4){
          that.setData({
            img4:tempFilePaths[0],
            upload4:true,
            canAddImg4:false,
          });
        }
        if(e.target.dataset.t==5){
          that.setData({
            img5:tempFilePaths[0],
            upload5:true,
            canAddImg5:false,
          });
        }
          
      },
    });
  },
  delImg(e){
    var that = this;
    var fireList = that.data.fireList;
    if(e.target.dataset.t==1){
        that.setData({
        img1:'',
        img11:'/image/zpbj.png',
        upload1:false,
        canAddImg1:true,
      });
    }
    if(e.target.dataset.t==2){
      fireList[0].selected=false;
        that.setData({
        img2url:'',
        upload2:false,
        canAddImg2:true,
        img2:'/image/fangdong/miehuoqi.png',
        extinguisher:false,
        fireList:fireList,
      });
    }
    if(e.target.dataset.t==3){
      fireList[1].selected=false;
        that.setData({
        img3url:'',
        upload3:false,
        canAddImg3:true,
        img3:'/image/fangdong/fangdumianju.png',
        smokeMask:false,
        fireList:fireList,
      });
    }
    if(e.target.dataset.t==4){
      fireList[2].selected=false;
        that.setData({
        img4url:'',
        upload4:false,
        canAddImg4:true,
        img4:'/image/fangdong/shoudiantong.png',
        flashlight:false,
        fireList:fireList,
      });
    }
    if(e.target.dataset.t==5){
      fireList[3].selected=false;
        that.setData({
        img5url:'',
        upload5:false,
        canAddImg5:true,
        img5:'/image/fangdong/shengzi.png',
        rope:false,
        fireList:fireList,
      });
    }

    
  },
    goTo1(){
     my.hideKeyboard();
     my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery5-1/housedelivery5-1?furniture='+this.data.furniture,
    })
  },
  //前往房屋特色
  goTo2(){
    my.hideKeyboard();
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery5-2/housedelivery5-2?feature='+this.data.feature,
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
  bindPickerChange5(e){
    var that = this;
    var arr = that.data.sexs;
    var idx = e.detail.value;
    if(idx==0){
      that.setData({
        index5:e.detail.value,
        sex:arr[idx],
        sexCondition:0
      });
    }
    if(idx==1){
      that.setData({
        index5:e.detail.value,
        sex:arr[idx],
        sexCondition:1
      });
    }
    if(idx==2){
      that.setData({
        index5:e.detail.value,
        sex:arr[idx],
        sexCondition:2
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
    var roomname = that.data.roomName;
    var roomarea = that.data.area;
    var roomrent = that.data.rents;
    var peopleNum = that.data.peopleNum;
    var img1 = that.data.img1;
    var img1url = that.data.img1url;
    var water=that.data.water;
    var waterlist = that.data.waterlist;
    var images = that.data.images;
    var imgs = that.data.imgs;
    var regNum=new RegExp('[0-9]','g');
    if(waterlist!=''&&waterlist!=null){
      water=waterlist;
    }
    
    if(roomname!=''&&roomarea!=''&&roomrent!=''&&water!=''&&imgs!=''&&peopleNum>0){
      //数据类型验证
      var roomareaNum = regNum.exec(roomarea);
      var roomrentNum = regNum.exec(roomrent*1);
      if(roomareaNum){
        that.toSaveData(water);
      }else{
        my.alert({
          title: '面积请输入数字',
          success:() =>{
            that.setData({
              roomarea:'',
            });
          },
        });
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
      url: app.globalData.baseUrl_oos,
      fileName: 'file', 
      fileType: 'image', 
      formData:{savePrefix:'landlord/'},
      filePath: image1,
      success: (res) => {
        var json1 = JSON.parse(res.data);
        console.log('----------------');
        console.log(res);
        console.log("success1");
        newimgs=json1['message'];
        that.toSaveData(newimgs,water);

      },
      // fail: (res) =>{
      //   console.log(res);
      //   console.log("fail1");
      //   my.alert({ title: '上传失败' });
      // },
    });
   
    
  },

  
  toSaveData(water){
    var that = this;
    console.log(that.data.extinguisher)
      var sexCondition = that.data.sexCondition;
      // var imgs1=url;
      var property = that.data.property;
      var waterScale = that.data.waterScale;
      var electricityScale = that.data.electricityScale;
      var images = that.data.images;
      var imgs = that.data.imgs;
      var img2url = that.data.img2url;
      var fireid = that.data.selectId;
      var extinguisher = that.data.extinguisher;
      var payment = that.data.payment;
      var peopleNum = that.data.peopleNum;
      var tar = that.data.tar;
      var templateName=that.data.roomName;
      var chaoxiang = my.getStorageSync({
        key: 'r_chaoxiang', // 缓存数据的key
      }).data;
      // var houseimg1 = my.getStorageSync({
      //   key: 'r_houseimg', // 缓存数据的key
      // }).data;
      var houseimg = imgs.join(',');
      console.log(houseimg);
      // var water=that.data.water;
      // var waterlist = that.data.waterlist;
      // if(waterlist!=''&&waterlist!=null){
      //   water=waterlist;
      // }
      // var nearby = my.getStorageSync({
      //   key: 'r_nearby', // 缓存数据的key
      // }).data;
      var describe = my.getStorageSync({
        key: 'r_describe', // 缓存数据的key
      }).data;
      
      var furnitures = that.data.furniture;
      var features = that.data.feature;
      if(imgs!=''){
        if(img2url!=''){
          if(furnitures!=''){
            if(features !=''){
              var furniture = furnitures.join(",");
              var feature = features.join(",");
              console.log('templateName=-------------->'+templateName)

              //房间信息
              var obj1 = {
                roomName:that.data.roomName,
                area:that.data.area,
                rents:that.data.rents*1,
                payway:that.data.payway,
                payment:payment,
                toward:chaoxiang,
                privatebath:that.data.privatebath,
                bath:that.data.bath,
                people:that.data.people,
                peopleNum:peopleNum,
                bed:that.data.bed,
                bedNum:that.data.bedNum,
                imgs1:imgs1,
                fireid:fireid,
                images:houseimg,
                imgs:images,
                // description:nearby,
                description:describe,
                waterfree:that.data.waterfree,
                watersave:that.data.watersave,
                waterScale:waterScale,
                electricityScale:electricityScale,
                // property:property,
              };
              //房间模板信息
              var obj2 = {
                templateName:templateName,
                payment:payment,
                area:that.data.area,
                water:water,
                waterRate:that.data.waterRate,
                electricRate:that.data.electricRate,
                featurelist:that.data.featurelist,
                furniturelist:that.data.furniturelist,
                furniture:furniture,
                feature:feature,
                extinguisher:extinguisher,
                extinguisherImage:img2url,
                sexneed:sexCondition,
                sex:that.data.sex,
                propertyFee:property,
              };
              
              let pages = getCurrentPages();
              let prevPage = pages[pages.length - 2];
              prevPage.data.roomList[tar]=obj1;
              prevPage.data.tempList[tar]=obj2;
              my.navigateBack({
                delta: 1,
              });
            }else{
              my.alert({
                title: '请选择你的房屋特色' 
              });
            }
            
          }else{
            my.alert({
              title: '请勾选相应的便利设施' 
            });
          }
        }else{
          my.alert({
            title: '请上传消防设备照片！' 
          });
        }
      }else{
        my.alert({
          title: '请上传房间照片' 
        });
      }
      
  },
});
