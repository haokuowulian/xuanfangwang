var towards=['朝东','朝南','朝西','朝北','东南','西北','东北','西南'];
var decoration=['毛坯','简装','精装','豪装'];
const app=getApp();
Page({
  data: {
    huxingList:[],
    huxing:'',
    roomcount:0,
    showToward:false,
    towardsArray:towards,
    decorationArray:decoration,
    vaddress:'',
    chaoxiang:'',
    zhuangxiu:'',
    varea:'',
    vowner:'',
    vownerCard:'',
    vrelation:'',
    images:[],
    img1:'',
    img2:'',
    img3:'',
    img1url:'',
    img2url:'',
    img3url:'',
    canAddImg1:true,
    canAddImg2:true,
    canAddImg3:true,
    upload1:false,
    upload2:false,
    upload3:false,
  },
  onLoad() {
    var aList=[];
    for(var a=1;a<6;a++){
      var bList=[];
      for(var b=0;b<6;b++){
        var cList=[];
        for(var c=0;c<6;c++){
          var dList=[];
          for(var d=0;d<6;d++){
            var eList=[];
            for(var e=0;e<6;e++){
              var obj={
                name:e+"阳台"
              };
              eList.push(obj);
            }
            var obj={
              name:d+"厨",
              subList:eList
            };
            dList.push(obj);
          }
          var obj={
              name:c+"卫",
              subList:dList
            };
          cList.push(obj);
        }
        var obj={
              name:b+"厅",
              subList:cList
            };
        bList.push(obj);
      }
      var obj={
              name:a+"室",
              subList:bList
            };
      aList.push(obj);
    }
    
    this.setData({
      huxingList:aList
    });
  },
  //选择户型
  selectHuXing(){
    var that=this;
    my.multiLevelSelect({
      title: '户型选择',
      list: this.data.huxingList,
      success(res){
        var str=''
        for(var i=0;i<5;i++){
          str=str+res.result[i].name;
        }
        console.log(str);
        var index = str.indexOf("室");
        var num =  str.substring(0,index);
        console.log(num);
        that.setData({
          huxing:str,
          roomcount:num*1,
        });
      }
    })
  },
  open(){
    my.hideKeyboard();
  },
  //选择朝向
  bindPickerChange1(e){
    console.log(e)
    var that = this;
    var index = e.detail.value;
    var arr = that.data.towardsArray;
    this.setData({
      showToward:true,
      chaoxiang:arr[index],
    });
  },
   //选择装修类型
  bindPickerChange2(e){
    console.log(e)
    var that = this;
    var index = e.detail.value;
    var arr = that.data.decorationArray;
    this.setData({
      showToward:true,
      zhuangxiu:arr[index],
    });
  },
  toInput(e){
    console.log(e.detail.value)
    var that = this;
    if(e.target.dataset.t==1){
      that.setData({
        vaddress:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        varea:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        vowner:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        vownerCard:e.detail.value,
      });
    }
    if(e.target.dataset.t==5){
      that.setData({
        vrelation:e.detail.value,
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
        if(e.target.dataset.t==3){
          that.data.images[1]=tempFilePaths[0];
          that.setData({
            img3:tempFilePaths[0],
            upload3:true,
            canAddImg3:false,
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
    if(e.target.dataset.t==3){
        that.setData({
        img3:'',
        upload3:false,
        canAddImg3:true,
      });
    }
    
  },
  //图片上传
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
            key: 'r_img1url', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
        if(num==2){
          that.setData({
            img2url:json1['message'],
          });
          my.setStorageSync({
            key: 'r_img2url', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
        if(num==3){
          that.setData({
            img3url:json1['message'],
          });
          my.setStorageSync({
            key: 'r_img3url', // 缓存数据的key
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
  next(){
    var that = this;
    that.toNext();
    // var img1 = that.data.img1;
    // var img2 = that.data.img2;
    // var img3 = that.data.img3;
    // var vaddress = that.data.vaddress;
    // var chaoxiang = that.data.chaoxiang;
    // var zhuangxiu = that.data.zhuangxiu;
    // var varea = that.data.varea;
    // var vowner = that.data.vowner;
    // var vownerCard = that.data.vownerCard;
    // var vrelation = that.data.vrelation;
    var roomcount = that.data.roomcount;
    my.setStorageSync({
      key: 'r_roomcount', // 缓存数据的key
      data: roomcount, // 要缓存的数据
    });
    // if(vaddress!=''&&chaoxiang!=''&&zhuangxiu!=''&&varea!=''&&vowner!=''&&vownerCard!=''&&vrelation!=''){
    //   if(img1!=''&&img2!=''&&img3!=''){
    //     that.uploadImg(img1,1);
    //     that.uploadImg(img2,2);
    //     that.uploadImg(img3,3);
    //     my.setStorageSync({
    //       key: 'r_vaddress', // 缓存数据的key
    //       data: vaddress, // 要缓存的数据
    //     });
    //     my.setStorageSync({
    //       key: 'r_chaoxiang', // 缓存数据的key
    //       data: chaoxiang, // 要缓存的数据
    //     });
    //     my.setStorageSync({
    //       key: 'r_zhuangxiu', // 缓存数据的key
    //       data: zhuangxiu, // 要缓存的数据
    //     });
    //     my.setStorageSync({
    //       key: 'r_varea', // 缓存数据的key
    //       data: varea, // 要缓存的数据
    //     });
    //     my.setStorageSync({
    //       key: 'r_vowner', // 缓存数据的key
    //       data: vowner, // 要缓存的数据
    //     });
    //     my.setStorageSync({
    //       key: 'r_vownerCard', // 缓存数据的key
    //       data: vownerCard, // 要缓存的数据
    //     });
    //     my.setStorageSync({
    //       key: 'r_vrelation', // 缓存数据的key
    //       data: vrelation, // 要缓存的数据
    //     });
    //     that.toNext();
    //   }else{
    //     my.alert({
    //     title: '证件齐全方可进行下一步' 
    //   });
    //   }
    // }else{
    //   my.alert({
    //     title: '请填写完整' 
    //   });
    // }
  },
  toNext(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery3/housedelivery3',
    })
  },
});
