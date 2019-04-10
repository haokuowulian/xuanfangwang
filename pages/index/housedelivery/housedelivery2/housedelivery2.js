var towards=['朝东','朝南','朝西','朝北','东南','西北','东北','西南'];
var decoration=['毛坯','简装','精装','豪装'];
const app=getApp();
Page({
  data: {
    huxingList:[],
    huxing:'',
    roomcount:0,
    hallcount:0,
    houseNo:'',
    showToward:false,
    towardsArray:towards,
    decorationArray:decoration,
    vaddress:'',
    chaoxiang:'',
    zhuangxiu:'',
    decorateType:0,
    varea:'',
    vowner:'',
    vownerCard:'',
    vrelation:'',
    images:[],
    img1:'',
    img2:'',
    img3:'',
    img4:'',
    canAddImg1:true,
    canAddImg2:true,
    canAddImg3:true,
    canAddImg4:true,
    upload1:false,
    upload2:false,
    upload3:false,
    upload4:false,
    show1:true,
    show2:false,
  },
  onLoad() {
    var aList=[];
    for(var a=1;a<13;a++){
      var bList=[];
      for(var b=0;b<6;b++){
        var cList=[];
        for(var c=0;c<6;c++){
          var dList=[];
          for(var d=0;d<6;d++){
            var eList=[];
            // for(var e=0;e<6;e++){
            //   var obj={
            //     name:e+"阳台"
            //   };
            //   eList.push(obj);
            // }
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
    console.log(JSON.stringify( this.data.huxingList ));
    my.multiLevelSelect({
      title: '户型选择',
      list: this.data.huxingList,
      success(res){
        var str=''
        for(var i=0;i<4;i++){
          str=str+res.result[i].name;
        }
        console.log(str);
        var index = str.indexOf("室");
        var num =  str.substring(0,index);
        var index1 = str.indexOf("厅");
        var num1 =  str.substring(2,index1);
        console.log(num+'-------'+num1);
        that.setData({
          huxing:str,
          roomcount:num*1,
          hallcount:num1*1
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
      decorateType:index*1+1
    });
  },
  toInput1(e){
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
    if(e.target.dataset.t==6){
      that.setData({
        houseNo:e.detail.value,
      });
    }
  },
      //添加图片
  addImg(e){
    var that = this;
    my.chooseImage({
      chooseImage: 1,
      sizeType:['compressed'],
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
        if(e.target.dataset.t==4){
          that.data.images[1]=tempFilePaths[0];
          that.setData({
            img4:tempFilePaths[0],
            upload4:true,
            canAddImg4:false,
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
    if(e.target.dataset.t==4){
        that.setData({
        img4:'',
        upload4:false,
        canAddImg4:true,
      });
    }
    
  },
  //图片上传
  uploadImg(img,num){
    var that = this;
    my.uploadFile({
      url: app.globalData.baseUrl_oos, // 开发者服务器地址
      filePath: img, // 要上传文件资源的本地定位符
      fileName: 'file', // 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容
      fileType: 'image', // 文件类型，image / video / audio
      formData:{savePrefix:'landlord/'},
      success: (res) => {
        var json1 = JSON.parse(res.data);
        if(num==1){
          my.setStorageSync({
            key: 'r_img1url', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
        if(num==2){
          my.setStorageSync({
            key: 'r_img2url', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
        if(num==3){
          my.setStorageSync({
            key: 'r_img3url', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
        if(num==4){
          my.setStorageSync({
            key: 'r_img4url', // 缓存数据的key
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
    // that.toNext();
    var img1 = that.data.img1;
    var img2 = that.data.img2;
    var img3 = that.data.img3;
    var img4 = that.data.img4;
    var vaddress = that.data.vaddress;
    var houseNo = that.data.houseNo;
    var huxing = that.data.huxing;
    var chaoxiang = that.data.chaoxiang;
    var zhuangxiu = that.data.zhuangxiu;//decorateType
    var decorateType = that.data.decorateType;
    var varea = that.data.varea;
    var vowner = that.data.vowner;
    var vownerCard = that.data.vownerCard;
    if(that.data.show1){
      var vrelation = 1;
    }else if(that.data.show2){
      var vrelation = 2;
    }
    
    var roomcount = that.data.roomcount;
    var hallcount = that.data.hallcount;
    var regNum1=new RegExp('[0-9]','g');
    var regNum2=new RegExp('[0-9]','g');
    if(vaddress!=''&&chaoxiang!=''&&zhuangxiu!=''&&varea!=''&&vowner!=''&&vownerCard!=''&&vrelation!=''&&huxing!=''){
      //数据类型验证
      var houseNonum=regNum1.exec(houseNo);
      var vareanum=regNum2.exec(varea);
      // var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/
      // var vownerCardNum = reg.test(vownerCard);

      var res_id = app.checkId(vownerCard);
      console.log('身份证号校验')
      console.log(res_id)
        
      
      if(houseNonum){
        if(vareanum){
          if(res_id==1){
            if(vrelation==1){
              if(img1!=''&&img2!=''&&img3!=''){
                that.uploadImg(img1,1);
                that.uploadImg(img2,2);
                that.uploadImg(img3,3);
                my.setStorageSync({
                  key: 'r_vaddress', // 缓存数据的key
                  data: vaddress, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_houseNo', // 缓存数据的key
                  data: houseNo, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_huxing', // 缓存数据的key
                  data: huxing, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_chaoxiang', // 缓存数据的key
                  data: chaoxiang, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_roomcount', // 缓存数据的key
                  data: roomcount, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_hallcount', // 缓存数据的key
                  data: hallcount, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_decorateType', // 缓存数据的key
                  data: decorateType, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_varea', // 缓存数据的key
                  data: varea, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_vowner', // 缓存数据的key
                  data: vowner, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_vownerCard', // 缓存数据的key
                  data: vownerCard, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_vrelation', // 缓存数据的key
                  data: vrelation, // 要缓存的数据
                });
                that.toNext();
              }else{
                my.alert({
                  title: '证件齐全方可进行下一步' 
                });
              }
            }
            if(vrelation==2){
              if(img4!=''){
                that.uploadImg(img4,4);
                my.setStorageSync({
                  key: 'r_vaddress', // 缓存数据的key
                  data: vaddress, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_houseNo', // 缓存数据的key
                  data: houseNo, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_huxing', // 缓存数据的key
                  data: huxing, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_chaoxiang', // 缓存数据的key
                  data: chaoxiang, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_roomcount', // 缓存数据的key
                  data: roomcount, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_hallcount', // 缓存数据的key
                  data: hallcount, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_decorateType', // 缓存数据的key
                  data: decorateType, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_varea', // 缓存数据的key
                  data: varea, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_vowner', // 缓存数据的key
                  data: vowner, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_vownerCard', // 缓存数据的key
                  data: vownerCard, // 要缓存的数据
                });
                my.setStorageSync({
                  key: 'r_vrelation', // 缓存数据的key
                  data: vrelation, // 要缓存的数据
                });
                that.toNext();
              }else{
                my.alert({
                  title: '证件齐全方可进行下一步' 
                });
              }
            }
            
          }else if(res_id==2){
            my.alert({
            title: '身份证号码位数不对',
            success:() =>{
              that.setData({
                vownerCard:'',
              });
              },
            });
          }else if(res_id==3){
            my.alert({
            title: '身份证号码出生日期超出范围或含有非法字符',
            success:() =>{
              that.setData({
                vownerCard:'',
              });
              },
            });
          }else if(res_id==4){
            my.alert({
            title: '身份证号码校验错误',
            success:() =>{
              that.setData({
                vownerCard:'',
              });
              },
            });
          }else if(res_id==4){
            my.alert({
            title: '身份证地区非法',
            success:() =>{
              that.setData({
                vownerCard:'',
              });
              },
            });
          }
        }else{
          my.alert({
          title: '面积请输入数字',
          success:() =>{
            that.setData({
              varea:'',
            });
          },
        });
        }
        
      }else{
        my.alert({
          title: '门牌号请输入数字',
          success:() =>{
            that.setData({
              houseNo:'',
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
  toNext(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery3/housedelivery3',
    })
  },
  toChooseType1(){
    var that = this;
    that.setData({
      show1:true,
      show2:false,
    });
  },
  toChooseType2(){
    var that = this;
    that.setData({
      show1:false,
      show2:true,
    });
  },
});
