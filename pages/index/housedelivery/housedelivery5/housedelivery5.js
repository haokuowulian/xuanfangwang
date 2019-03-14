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
    tempList:[],
    furniture:'',
    furniturelist:'',
    feature:'',
    featurelist:'',
    images:[],
    img:'',
    canAddImg:true,
    upload:false,
    selectId:'',
    extinguisher:false,
    smokeMask:false,
    flashlight:false,
    rope:false,
    img2:'/image/fangdong/miehuoqi.png',
    img3:'/image/fangdong/fangdumianju.png',
    img4:'/image/fangdong/shoudiantong.png',
    img5:'/image/fangdong/shengzi.png',
    img2url:'',
    img3url:'',
    img4url:'',
    img5url:'',
    canAddImg2:true,
    canAddImg3:true,
    canAddImg4:true,
    canAddImg5:true,
    upload2:false,
    upload3:false,
    upload4:false,
    upload5:false,
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
    console.log(this.data.tempList)
    this.setData({
      roomList:this.data.roomList,
      furniturelist:this.data.furniturelist,
      featurelist:this.data.featurelist,
    });
    my.setStorageSync({
      key: 'r_roomList', // 缓存数据的key
      data: this.data.roomList, // 要缓存的数据
    });
    my.setStorageSync({
      key: 'r_tempList', // 缓存数据的key
      data: this.data.tempList, // 要缓存的数据
    });
  },
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
          url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do',
          fileName: 'file', 
          fileType: 'image', 
          formData:{savePrefix:'landlord'},
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
  addImg(){
    var that = this;
    my.chooseImage({
      chooseImage: 1,
      sizeType:['compressed'],
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

  delImg(e){
    var that = this;
    var fireList = that.data.fireList;
    if(e.target.dataset.t==2){
      fireList[0].selected=false;
        that.setData({
        img2url:'',
        img2:'/image/fangdong/miehuoqi.png',
        upload2:false,
        canAddImg2:true,
        extinguisher:false,
        fireList:fireList,
      });
    }
    if(e.target.dataset.t==3){
      fireList[1].selected=false;
        that.setData({
        img3url:'',
        img3:'/image/fangdong/fangdumianju.png',
        upload3:false,
        canAddImg3:true,
        smokeMask:false,
        fireList:fireList,
      });
    }
    if(e.target.dataset.t==4){
      fireList[2].selected=false;
        that.setData({
        img4url:'',
        img4:'/image/fangdong/shoudiantong.png',
        upload4:false,
        canAddImg4:true,
        flashlight:false,
        fireList:fireList,
      });
    }
    if(e.target.dataset.t==51){
      fireList[3].selected=false;
        that.setData({
        img5url:'',
        img5:'/image/fangdong/shengzi.png',
        upload5:false,
        canAddImg5:true,
        rope:false,
        fireList:fireList,
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
  next(){
    var that = this;
    console.log(that.data.extinguisher)
    console.log(that.data.smokeMask)
    console.log(that.data.flashlight)
    console.log(that.data.rope)

    //测试---------------------------------------测试
    // my.navigateTo({
    //   url: '/pages/index/housedelivery/housedelivery6/housedelivery6',
    // })

    var furnitures = that.data.furniture;
    var features = that.data.feature;
    if(furnitures!=''){
      if(features!=''){
        var furniture = furnitures.join(",");
        var feature = features.join(",");
        my.setStorageSync({
          key: 'r_furniture', // 缓存数据的key
          data: furniture, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'r_feature', // 缓存数据的key
          data: feature, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'r_extinguisher', // 缓存数据的key
          data: that.data.extinguisher, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'r_smokeMask', // 缓存数据的key
          data: that.data.smokeMask, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'r_flashlight', // 缓存数据的key
          data: that.data.flashlight, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'r_rope', // 缓存数据的key
          data: that.data.rope, // 要缓存的数据
        });
        
        my.setStorageSync({
          key: 'r_extinguisherimg', // 缓存数据的key
          data: that.data.extinguisherimg, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'r_smokeMaskimg', // 缓存数据的key
          data: that.data.smokeMaskimg, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'r_flashlightimg', // 缓存数据的key
          data: that.data.flashlightimg, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'r_ropeimg', // 缓存数据的key
          data: that.data.ropeimg, // 要缓存的数据
        });
        my.navigateTo({
          url: '/pages/index/housedelivery/housedelivery6/housedelivery6',
        })
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
  publish(){
    var that = this;
    var roomList = that.data.roomList;
    // var furniture = that.data.furniture;
    // var feature = that.data.feature;
    // if(furniture!=''&&feature!=''){
    //   my.setStorageSync({
    //     key: 'r_furniture', // 缓存数据的key
    //     data: furniture, // 要缓存的数据
    //   });
    //   my.setStorageSync({
    //     key: 'r_feature', // 缓存数据的key
    //     data: feature, // 要缓存的数据
    //   });
      if(roomList.length>0){
        that.getHouseInfo(roomList);
      }else{
        my.alert({
          title: '至少需要出租一间房间' 
        });
      }
    // }else{
    //   my.alert({ title: '请填写完整' });
    // }
    
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
  getHouseInfo(roomList){
    var that = this;
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
    var houseNo = my.getStorageSync({
      key: 'r_houseNo', // 缓存数据的key
    }).data;
    var huxing = my.getStorageSync({
      key: 'r_huxing', // 缓存数据的key
    }).data;

    var roomcount = my.getStorageSync({
      key: 'r_roomcount', // 缓存数据的key
    }).data;
    var hallcount = my.getStorageSync({
      key: 'r_hallcount', // 缓存数据的key
    }).data;

    var chaoxiang = my.getStorageSync({
      key: 'r_chaoxiang', // 缓存数据的key
    }).data;
    var decorateType = my.getStorageSync({
      key: 'r_decorateType', // 缓存数据的key
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


    var housename = my.getStorageSync({
      key: 'r_housename', // 缓存数据的key
    }).data;
    var describe = my.getStorageSync({
      key: 'r_describe', // 缓存数据的key
    }).data;
    var nearby = my.getStorageSync({
      key: 'r_nearby', // 缓存数据的key
    }).data;
    var houseimg1 = my.getStorageSync({
      key: 'r_houseimg', // 缓存数据的key
    }).data;
    var houseimg = houseimg1.join(',');
    console.log(houseimg);
    var rentType = my.getStorageSync({
      key: 'r_rentType', // 缓存数据的key
    }).data;
    var uid = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;

    var villageimg = my.getStorageSync({
      key: 'r_villageimg', // 缓存数据的key
    }).data;

    var v_address = my.getStorageSync({
      key: 'r_address', // 缓存数据的key
    }).data;

    var buildingType = my.getStorageSync({
      key: 'r_buildingType', // 缓存数据的key
    }).data;

    var address = village+vaddress;
    var templateName = address+houseNo;

    var tempList = that.data.tempList;
     var apartment = {
      buildingType:buildingType,
      address:address,
      provinceId:provinceCode,
      cityId:cityCode,
      districtId:countryCode,
      apartmentName:village,
      tel:vphone,
      longitude:longitude,
      latitude:latitude,
      age:vyear,
      green:vgreen,
      plotRatio:vcubage,
      images:villageimg,
    };
    var house = {
      buildingUnit:vaddress,
      houseNo:houseNo,
      room:roomcount,
      hall:hallcount,
      toward:chaoxiang,
      area:varea,
      longitude:longitude,
      latitude:latitude,
      landlordId:uid,
      // vowner:vowner,
      // vownerCard:vownerCard,
      // vrelation:vrelation,
      // idcard_positive:img1url,
      // idcard_reverse:img2url,
      // licence:img3url,
      rentType:rentType,
      description:describe,
      images:houseimg,
    };

    var template = tempList;
    // {
    //   // userId:uid,
    //   templateName:templateName,
    //   // area:varea,
    //   // decorateType:decorateType,
    //   tempList:tempList,
    //   // furniture:furniture,
    //   // feature:feature,
    // };
    // var tempList = 

    var room = roomList;




    console.log(apartment)
    console.log(house)
    console.log(template)
    console.log(room)


    my.httpRequest({
      url: app.globalData.baseUrl_whj+ 'IF/housing/addHousingIF.do?userId='+uid,
      headers:{
        "Content-Type":'application/json'
      },
      method:'POST',
      dataType:'json',
      data:{
        apartment:apartment,
        house:house,
        rooms:room,
        templates:template,
       
      },
      success: (res) => {
        console.log(res)
        that.sign(res.data.apartmentId,res.data.houseId);
        my.confirm({
          title: '温馨提示',
          content:'确认发布后管理员将进行审核，审核通过则上架房源',
          confirmButtonText: '确认提交',
          cancelButtonText: '取消提交',
          success: (res) => {
            my.alert({
              title: '提交成功！',
              success: () => {
              my.navigateBack({
                delta: 6,
              });
            }, 
            });
            
          },
        });
      },
    });
  },
   //签订合同
  sign(apartmentId,houseId){
    var that = this;
    var name = my.getStorageSync({
      key: 'certName', // 缓存数据的key
    }).data;
    var idNo = my.getStorageSync({
      key: 'certNo', // 缓存数据的key
    }).data;
    var uid = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var startDate = my.getStorageSync({
      key: 'm_startDate', // 缓存数据的key
    }).data;
    var endDate = my.getStorageSync({
      key: 'm_endDate', // 缓存数据的key
    }).data;
    // var houseInfo = my.getStorageSync({
    //   key: 'uhouseInfo', // 房源详情
    // }).data;
    // var apartmentId=houseInfo.apartment.id;
    // var houseId=houseInfo.id;
    
    my.httpRequest({
      url: app.globalData.baseUrl+"IF/landlordCompanyServlet", // 目标服务器url
      method: 'POST',
      data:{
        
        name:name,
        idNo:idNo,
        apartmentId:apartmentId,
        houseId:houseId,
        uid:uid,
        startTime:startDate,
        endTime:endDate,
      },
      dataType: 'json',
      success: (res) => {
        console.log('---------------');
        console.log(res);
        if(res.data.success){
          // that.setData({
          //   url:res.data.url,
          // });
          console.log('url:   '+that.data.url);
        }

      },
      fail: (res) => {
       console.log(res);
       console.log('请求失败~~');
      },
    });
  },
});
