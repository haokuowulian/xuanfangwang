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
    images:[],
    img1:'',
    img11:'/image/zpbj.png',
    img2:'/image/fangdong/miehuoqi.png',
    img3:'/image/fangdong/fangdumianju.png',
    img4:'/image/fangdong/shoudiantong.png',
    img5:'/image/fangdong/shengzi.png',
    img1url:'',
    img2url:'',
    img3url:'',
    img4url:'',
    img5url:'',
    canAddImg1:true,
    canAddImg2:true,
    canAddImg3:true,
    canAddImg4:true,
    canAddImg5:true,
    upload1:false,
    upload2:false,
    upload3:false,
    upload4:false,
    upload5:false,
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
    templateName:'',
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
      if(tempList[tar].extinguisherimg==''){
        that.setData({
          img2url:'',
          img2:'/image/fangdong/miehuoqi.png',//imgurl+tempList[tar].extinguisherimg,
        });
      }else{
        that.setData({
          img2url:tempList[tar].extinguisherimg,
          img2:imgurl+tempList[tar].extinguisherimg,
        });
      }
      if(tempList[tar].smokeMaskimg==''){
        that.setData({
          img3url:'',
          img3:'/image/fangdong/fangdumianju.png',
        });
      }else{
        that.setData({
          img3:imgurl+tempList[tar].smokeMaskimg,
          img3url:tempList[tar].smokeMaskimg,
        });
      }
      if(tempList[tar].flashlightimg==''){
        that.setData({
          img4url:'',
          img4:'/image/fangdong/shoudiantong.png',
        });
      }else{
        that.setData({
          img4:imgurl+tempList[tar].flashlightimg,
          img4url:tempList[tar].flashlightimg,
        });
      }
      if(tempList[tar].ropeimg==''){
        that.setData({
          img5url:'',
          img5:'/image/fangdong/shengzi.png',
        });
      }else{
        that.setData({
          img5:imgurl+tempList[tar].ropeimg,
          img5url:tempList[tar].ropeimg,
        });
      }


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
        img1:imgurl+roomList[tar].imgs1,
        img11:imgurl+roomList[tar].imgs1,
        img1url:roomList[tar].imgs1,
        // img2:imgurl+tempList[tar].extinguisherimg,
        // img2url:tempList[tar].extinguisherimg,
        // img3:imgurl+tempList[tar].smokeMaskimg,
        // img3url:tempList[tar].smokeMaskimg,
        // img4:imgurl+tempList[tar].flashlightimg,
        // img4url:tempList[tar].flashlightimg,
        // img5:imgurl+tempList[tar].ropeimg,
        // img5url:tempList[tar].ropeimg,
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
        waterRate:tempList[tar].waterRate,
        electricRate:tempList[tar].electricRate,
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
    var regNum=new RegExp('[0-9]','g');
    if(waterlist!=''&&waterlist!=null){
      water=waterlist;
    }
    
    if(roomname!=''&&roomarea!=''&&roomrent!=''&&water!=''&&img1!=''&&peopleNum>0){
      //数据类型验证
      var roomareaNum = regNum.exec(roomarea);
      var roomrentNum = regNum.exec(roomrent);
      if(roomareaNum){
        if(roomrentNum){
          if(img1url!=null&&img1url!=''&&canAddImg1==true){
            that.toSaveData(img1url,water);
          }else{
            that.uploadImg(img1,water);
          }
        }else{
          my.alert({
          title: '租金请输入数字',
          success:() =>{
            that.setData({
              roomarea:'',
            });
          },
        });
        }
        
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
      var img2url = that.data.img2url;
      var img3url = that.data.img3url;
      var img4url = that.data.img4url;
      var img5url = that.data.img5url;
      var fireid = that.data.selectId;
      var extinguisher = that.data.extinguisher;
      var smokeMask = that.data.smokeMask;
      var flashlight = that.data.flashlight;
      var rope = that.data.rope;
      var payment = that.data.payment;
      var peopleNum = that.data.peopleNum;
      var tar = that.data.tar;
      var templateName=that.data.roomName;
      var chaoxiang = my.getStorageSync({
        key: 'r_chaoxiang', // 缓存数据的key
      }).data;
      var houseimg1 = my.getStorageSync({
        key: 'r_houseimg', // 缓存数据的key
      }).data;
      var houseimg = houseimg1.join(',');
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
      if(furnitures!=''){
        if(features !=''){
          var furniture = furnitures.join(",");
          var feature = features.join(",");
          console.log('templateName=-------------->'+templateName)
          // var vaddress = my.getStorageSync({
          //   key: 'r_vaddress', // 缓存数据的key
          // }).data;
          // var v_address = my.getStorageSync({
          //   key: 'r_address', // 缓存数据的key
          // }).data;
          // var address = v_address+vaddress;
          // var templateName = address+houseNo;

          //房间信息
          var obj1 = {
            roomName:that.data.roomName,
            area:that.data.area,
            rents:that.data.rents,
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
            // description:nearby,
            description:describe,
            waterfree:that.data.waterfree,
            watersave:that.data.watersave,
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
            smokeMask:smokeMask,
            flashlight:flashlight,
            rope:rope,
            extinguisherimg:img2url,
            smokeMaskimg:img3url,
            flashlightimg:img4url,
            ropeimg:img5url,
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
     
      
    
    
  },
});
