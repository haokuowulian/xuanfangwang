var towards=['朝东','朝南','朝西','朝北','东南','西北','东北','西南'];
var decoration=['毛坯','简装','精装','豪装'];
const app=getApp();
Page({
  data: {
    uid:'',
    vowner:'',
    vownerCard:'',
    vphone:'',
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
    sexarr:['男','女'],
    index:0,
    usersex:'男',
    currentTime:'',
  },
  onLoad() {
    // my.confirm({
    //   title: '温馨提示',
    //   content: '申请房东认证，将收取一笔认证费用，费用为0.01元，是否同意？',
    //   confirmButtonText: '同意',
    //   cancelButtonText: '拒绝',
    //   success: (res) => {
    //     if(res.confirm){

    //     }else{
    //       my.navigateBack({
            
    //       });
    //     }
    //   },
    // });
    
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var certName = my.getStorageSync({
      key: 'certName', // 缓存数据的key
    }).data;
    var sex1 = my.getStorageSync({
      key: 'sex', // 缓存数据的key
    }).data;
    var arr = this.data.sexarr;
    if(sex1==0){
      this.setData({
        index:sex1,
        usersex:arr[sex1],
      });
    }
    var certNo = my.getStorageSync({
      key: 'certNo', // 缓存数据的key
    }).data;
    var phone = my.getStorageSync({
      key: 'phone', // 缓存数据的key
    }).data;
    this.setData({
      uid:userId,
      vowner:certName,
      vownerCard:certNo,
      vphone:phone,
    });
  },
  //选择户型

  open(){
    my.hideKeyboard();
  },

  toInput(e){
    console.log(e.detail.value)
    var that = this;
   
    if(e.target.dataset.t==1){
      that.setData({
        vowner:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        vownerCard:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        vphone:e.detail.value,
      });
    }
   
  },
    //确认性别
  bindPickerChange(e){
    console.log(e)
    var arr = this.data.sexarr;
    var idx = e.detail.value;
      this.setData({
        index:e.detail.value,
        usersex:arr[idx],
    });
   
  },
      //添加图片
  addImg(e){
    var that = this;
    console.log(e)
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
          that.uploadImg(tempFilePaths[0],1);
        }
        if(e.target.dataset.t==2){
          that.data.images[1]=tempFilePaths[0];
          that.setData({
            img2:tempFilePaths[0],
            upload2:true,
            canAddImg2:false,
          });
          that.uploadImg(tempFilePaths[0],2);
        }
        if(e.target.dataset.t==3){
          that.data.images[1]=tempFilePaths[0];
          that.setData({
            img3:tempFilePaths[0],
            upload3:true,
            canAddImg3:false,
          });
          that.uploadImg(tempFilePaths[0],3);
        }
          
      },
    });
  },
  delImg(e){
    var that = this;
    if(e.target.dataset.t==1){
        that.setData({
        img1:'',
        img1url:'',
        upload1:false,
        canAddImg1:true,
      });
    }
    if(e.target.dataset.t==2){
        that.setData({
        img2:'',
        img2url:'',
        upload2:false,
        canAddImg2:true,
      });
    }
    if(e.target.dataset.t==3){
        that.setData({
        img3:'',
        img3url:'',
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
        console.log(res)
        if(num==1){
          that.setData({
            img1url:json1['message'],
          });
          console.log(json1['message'])
          console.log(1)
        }
        if(num==2){
          that.setData({
            img2url:json1['message'],
          });
          console.log(json1['message'])
          console.log(2)
        }
        if(num==3){
          that.setData({
            img3url:json1['message'],
          });
          console.log(json1['message'])
          console.log(3)
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
    var img1 = that.data.img1url;
    var img2 = that.data.img2url;
    var img3 = that.data.img3url;
    var name = that.data.vowner;
    var phone = that.data.vphone;
    var sex = that.data.usersex;
    var cardNo = that.data.vownerCard;
    console.log(img1)
    console.log(img2)
    console.log(img3)
    console.log(name)
    console.log(phone)
    console.log(sex)
    console.log(cardNo)
    var cardNum = (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(cardNo));
    var mobileNum =(/^1[34578]\d{9}$/.test(phone))
    if(img1!=''&&img2!=''&&img3!=''&&name!=''&&phone!=''&&cardNo!=''){
      if(cardNum){
        if(mobileNum){
          my.confirm({
            title: '温馨提示',
            content: '我们将把您提交的身份信息进行公安备案，确认提交审核吗？',
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            success: (res) => {
              if(res.confirm){
                //刷脸？
                that.faceVerify();
              }else{

              }
            },
          });
        }else{
          my.alert({
          title: '请输入正确的手机号！',
          success:() =>{
            that.setData({
              varea:'',
            });
          },
        });
        }
      }else{
        my.alert({
        title: '请输入正确的身份证号',
        success:() =>{
          that.setData({
            vownerCard:'',
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
 //刷脸验证
  faceVerify(){
    var that = this;
    that.getServerTime();
    my.ap.faceVerify({
    bizId: this.data.currentTime+''+this.data.uid, //业务请求的唯一标识，需要保证唯一性
    bizType: '2', //业务场景参数，必须填写‘2’，代表刷脸认证  
    success: (res) => {
      console.log('刷脸成功');
       console.log(res);
       if(res.faceRetCode==1000){
         //发起支付
         that.uploadData();
       }else{
         my.alert({
            content: res.retCode,
        });
       }
      
    },
    fail: (res) => {
        my.alert({
            content: JSON.stringify(res),
        });
      }
    });
  },
  getServerTime(){
    my.getServerTime({
      success: (res) => {
        this.setData({
          currentTime:res.time
        });
      },
    });
  },
  //提交表单
  uploadData(){
    console.log('提交表单');
    var that = this;
    var img1 = that.data.img1url;
    var img2 = that.data.img2url;
    var img3 = that.data.img3url;
    var name = that.data.vowner;
    var phone = that.data.vphone;
    var sex = that.data.usersex;
    var cardNo = that.data.vownerCard;
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/landlord/saveLandlord.do', // 目标服务器url
      data:{
        userId:that.data.uid,
        name:name,
        sex:sex,
        mobile:phone,
        cardNo:cardNo,
        cardUrl1:img1,
        cardUrl2:img2,
        permitUrl:img3,
      },
    success: (res) => {
      console.log('表单提交成功')
      console.log(res)
      console.log(res.data)
      if(res.data.success){
        // that.getOrder(res.data.landlordId,name);
        my.alert({
          title:'提交成功！',
          content:'我们会尽快处理。',
          buttonText:'确认',
          success: () => {
            my.navigateBack();
          },
        });
      }else{
        my.alert({
        title:'提交失败！',
        content:'该账号已在审核中，请耐心等待。',
        buttonText:'确认',
      });
      }
      
    },
    fail:(res) =>{
      console.log('表单提交失败')
    },
  });
  },
  getOrder(landlordId,landlordName){
     console.log('发起支付');
    var that = this;
    var buyer_id = my.getStorageSync({
      key: 'upayUserId', // 缓存数据的key
    }).data;
   
    console.log(buyer_id+'---'+landlordName+'***'+landlordId)
    my.httpRequest({
      url: app.globalData.baseUrl+ 'IF/landlord/addAlipayAuditing.do', 
      method: 'POST',
      data:{
        buyer_id:buyer_id,
        landlordId:landlordId,
        landlordName:landlordName,
      },
      dataType: 'json',
      success: (res) => {
        console.log('-------success1--------');
        console.log(res)
        console.log(res.data)
        my.tradePay({
          tradeNO: res.data.data.alipay_trade_create_response.trade_no,
          success: (res) => {
            console.log('-------success2--------');
            console.log(res);
            that.uploadCode(landlordId,res.resultCode);
          },
          fail: (res) => {
            console.log('-------fail2--------');
            console.log(res);
            that.uploadCode(landlordId,res.resultCode);
          }
        });
      },
      fail: (res) => {
        console.log('-------fail1--------');
        console.log(res);
        
      }
    });
  },
  uploadCode(landlordId,resultCode){
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/landlord/payAlipayAuditing.do', // 目标服务器url
      method: 'POST',
      data:{
        landlordId:landlordId,
        resultCode:resultCode,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res+'状态码上传成功');
        my.alert({
          title:'提交成功！',
          content:'我们会尽快处理。',
          buttonText:'确认',
          success: () => {
            my.navigateBack();
          },
        });
      },
    });
  },
  // next(){
  //   var that = this;
  //   // that.toNext();
  //   var img1 = that.data.img1;
  //   var img2 = that.data.img2;
  //   var img3 = that.data.img3;
  //   var vaddress = that.data.vaddress;
  //   var houseNo = that.data.houseNo;
  //   var huxing = that.data.huxing;
  //   var chaoxiang = that.data.chaoxiang;
  //   var zhuangxiu = that.data.zhuangxiu;//decorateType
  //   var decorateType = that.data.decorateType;
  //   var varea = that.data.varea;
  //   var vowner = that.data.vowner;
  //   var vownerCard = that.data.vownerCard;
  //   var vrelation = that.data.vrelation;
  //   var roomcount = that.data.roomcount;
  //   var hallcount = that.data.hallcount;
  //   var regNum1=new RegExp('[0-9]','g');
  //   var regNum2=new RegExp('[0-9]','g');
  //   if(vaddress!=''&&chaoxiang!=''&&zhuangxiu!=''&&varea!=''&&vowner!=''&&vownerCard!=''&&vrelation!=''&&huxing!=''){
  //     //数据类型验证
  //     var houseNonum=regNum1.exec(houseNo);
  //     var vareanum=regNum2.exec(varea);
  //     var vownerCardNum = (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(vownerCard))
  //     if(houseNonum){
  //       if(vareanum){
  //         if(img1!=''&&img2!=''&&img3!=''){
  //           if(vownerCardNum){
  //             that.uploadImg(img1,1);
  //             that.uploadImg(img2,2);
  //             that.uploadImg(img3,3);
  //             my.setStorageSync({
  //               key: 'r_vaddress', // 缓存数据的key
  //               data: vaddress, // 要缓存的数据
  //             });
  //             my.setStorageSync({
  //               key: 'r_houseNo', // 缓存数据的key
  //               data: houseNo, // 要缓存的数据
  //             });
  //             my.setStorageSync({
  //               key: 'r_huxing', // 缓存数据的key
  //               data: huxing, // 要缓存的数据
  //             });
  //             my.setStorageSync({
  //               key: 'r_chaoxiang', // 缓存数据的key
  //               data: chaoxiang, // 要缓存的数据
  //             });
  //             my.setStorageSync({
  //               key: 'r_roomcount', // 缓存数据的key
  //               data: roomcount, // 要缓存的数据
  //             });
  //             my.setStorageSync({
  //               key: 'r_hallcount', // 缓存数据的key
  //               data: hallcount, // 要缓存的数据
  //             });
  //             my.setStorageSync({
  //               key: 'r_decorateType', // 缓存数据的key
  //               data: decorateType, // 要缓存的数据
  //             });
  //             my.setStorageSync({
  //               key: 'r_varea', // 缓存数据的key
  //               data: varea, // 要缓存的数据
  //             });
  //             my.setStorageSync({
  //               key: 'r_vowner', // 缓存数据的key
  //               data: vowner, // 要缓存的数据
  //             });
  //             my.setStorageSync({
  //               key: 'r_vownerCard', // 缓存数据的key
  //               data: vownerCard, // 要缓存的数据
  //             });
  //             my.setStorageSync({
  //               key: 'r_vrelation', // 缓存数据的key
  //               data: vrelation, // 要缓存的数据
  //             });
  //             that.toNext();
  //           }else{
  //             my.alert({
  //             title: '身份证号有误',
  //             success:() =>{
  //               that.setData({
  //                 vownerCard:'',
  //               });
  //               },
  //             });
  //           }
  //           }else{
  //             my.alert({
  //               title: '证件齐全方可进行下一步' 
  //             });
  //           }
          
  //       }else{
  //         my.alert({
  //         title: '面积请输入数字',
  //         success:() =>{
  //           that.setData({
  //             varea:'',
  //           });
  //         },
  //       });
  //       }
        
  //     }else{
  //       my.alert({
  //         title: '门牌号请输入数字',
  //         success:() =>{
  //           that.setData({
  //             houseNo:'',
  //           });
  //         },
  //       });
  //     }

      
  //   }else{
  //     my.alert({
  //       title: '请填写完整' 
  //     });
  //   }
  // },
  // toNext(){
  //   my.navigateTo({
  //     url: '/pages/index/housedelivery/housedelivery3/housedelivery3',
  //   })
  // },
});

//原房东注册页js
// var form_data;
// // var imgs1 = '';
// // var imgs2 = '';
// // var imgs3 = '';
// const app=getApp();
// Page({
//   data: {
//     upload1:false,
//     upload2:false,
//     upload3:false,
//     img1:'',
//     img2:'',
//     img3:'',
//     imgs1:'',
//     imgs2:'',
//     imgs3:'',
//     idcard_positive:'',
//     idcard_reverse:'',
//     licence:'',
//     images:[],
//     uid:'',
//   },
//   onLoad() {
//     my.confirm({
//       title: '温馨提示',
//       content: '申请房东认证，我平台将收取一笔认证费用，费用为0.01元，是否同意？',
//       confirmButtonText: '同意',
//       cancelButtonText: '拒绝',
//       success: (res) => {
//         if(res.confirm){

//         }else{
//           my.navigateBack({
            
//           });
//         }
//       },
//     });
//     var userId = my.getStorageSync({
//      key: 'userId', // 缓存数据的key
//    }).data;
//     this.setData({
//       uid:userId,
//     });
//   },
//   addImg(e){
//     var that = this;
//     my.chooseImage({
//       count:1,
//       sizeType:['compressed'],
//       sourceType: ['album', 'camera'],
//       success: (res) => {
//         var tempFilePaths = res.apFilePaths
//         console.log(that.data.images)
//         var image = tempFilePaths[0];
//         if(e.target.dataset.t==1){
//           that.data.images[0]=tempFilePaths[0];
//           that.setData({
//             img1:tempFilePaths[0],
//             upload1:true,
//           });
//         }
//         if(e.target.dataset.t==2){
//           that.data.images[1]=tempFilePaths[0];
//           that.setData({
//             img2:tempFilePaths[0],
//             upload2:true,
//           });
//         }
//         if(e.target.dataset.t==3){
//           that.data.images[2]=tempFilePaths[0];
//           that.setData({
//             img3:tempFilePaths[0],
//             upload3:true,
//           });
       
//         }
//         that.uploadImages(image,e.target.dataset.t);
//       },
//     });
//   },
//   formSubmit(e){
//     var that=this;
//     form_data=e.detail.value;
//     if(e.detail.value.name!=''&&e.detail.value.mobile!=''&&e.detail.value.cardNo!=''&&e.detail.value.cardUrl1!=''&&e.detail.value.cardUrl2!=''&&e.detail.value.licenceUrl!=''){
//       var cardNum = (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e.detail.value.cardNo));
//       var mobileNum =(/^1[34578]\d{9}$/.test(e.detail.value.mobile))
//       if(mobileNum){
//         if(cardNum){
//           for(let a=0;a<that.data.images.length;a++){
//             if(that.data.images[a] === null){
//               console.log('请添加传身份证照片')
//             }
//           }
//           var landlord=form_data;
//           my.confirm({
//             title: '温馨提示',
//             content: '确认提交审核？',
//             confirmButtonText: '确认',
//             cancelButtonText: '取消',
//             success: (res) => {
//               if(res.confirm){
//                 that.formUpload(form_data);
//               }else{

//               }
//             },
//           });
//         }else{
//           my.alert({
//           title: '请输入正确的身份证号！',
//           success:() =>{
//             that.setData({
//               varea:'',
//             });
//           },
//         });
//         }
//       }else{
//         my.alert({
//           title: '请输入正确的手机号！',
//           success:() =>{
//             that.setData({
//               varea:'',
//             });
//           },
//         });
//       }
      

      
//     }else{
//       console.log('请填写完整')
//       alert('请填写完整')
//     }
//     console.log(form_data);
   
//     that.setData({
//       images:[],
//     });
//   },
//   //上传图片
//   // uploadImg(form_data){
//   //   console.log('执行上传文件');
//   //   var that = this;
//   //   //  图片上传
//   //   // var img = '';
//   //   var imgs = [];
//   //   var newimgs = [];
//   //   imgs[0]=that.data.img1;
//   //   imgs[1]=that.data.img2;
//   //   imgs[2]=that.data.img3;
//   //   for(let i=0;i<imgs.length;i++){
//   //     my.uploadFile({
//   //     url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do',
//   //     fileType: 'image',
//   //     fileName: 'file',
//   //     formData:{savePrefix:'landlord'},
//   //     filePath: imgs[i],
//   //     success: res => {
//   //       console.log('success');
//   //       console.log(res);
//   //       var json1 = JSON.parse(res.data);
//   //       newimgs[i] = json1['message']
//   //       that.formUpload(newimgs[i],i,form_data);
//   //     },
//   //     fail: function(res) {
//   //       console.log(res);
//   //       // my.alert({ title: '上传失败' });
//   //       },
//   //     });
//   //   }

//   // },
//   uploadImages(image,t){
//     var that = this;
//     var newimgs = '';
//     my.uploadFile({
//       url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do',
//       fileType: 'image',
//       fileName: 'file',
//       formData:{savePrefix:'landlord'},
//       filePath: image,
//       success: res => {
//         console.log('success');
//         console.log(res);
//         var json1 = JSON.parse(res.data);
//         newimgs = json1['message']
//         if(t==1){
//           that.setData({
//             imgs1:newimgs,
//           });
//         }
//         if(t==2){
//           that.setData({
//             imgs2:newimgs,
//           });
//         }
//         if(t==3){
//           that.setData({
//             imgs3:newimgs,
//           });
//         }
//       },
//       fail: function(res) {
//         console.log(res);
//         // my.alert({ title: '上传失败' });
//         },
//       });
//   },
//   //提交表单数据
//   formUpload(form_data){
//     var that = this;
//     my.httpRequest({
//       url: app.globalData.baseUrl+'IF/landlord/saveLandlord.do', // 目标服务器url
//       data:{
//         userId:that.data.uid,
//         name:form_data.name,
//         sex:form_data.sex,
//         mobile:form_data.mobile,
//         cardNo:form_data.cardNo,
//         cardUrl1:that.data.imgs1,
//         cardUrl2:that.data.imgs2,
//         permitUrl:that.data.imgs3,
//       },
//     success: (res) => {
//       console.log('表单提交成功')
//       console.log(res)
//       console.log(res.data)
//       if(res.data.success){
//         that.getOrder(res.data.landlordId,form_data.name);
//       }else{
//         my.alert({
//         title:'提交失败！',
//         content:'该账号已在审核中，请耐心等待。',
//         buttonText:'确认',
//       });
//       }
      
//     },
//     fail:(res) =>{
//       console.log('表单提交失败')
//     },
//   });
  
//   },
//   getOrder(landlordId,landlordName){
//     var that = this;
//     var buyer_id = my.getStorageSync({
//       key: 'upayUserId', // 缓存数据的key
//     }).data;
//     // var landlordName = my.getStorageSync({
//     //   key: 'certName', // 缓存数据的key
//     // }).data;
//     console.log(buyer_id+'---'+landlordName+'***'+landlordId)
//     my.httpRequest({
//       url: app.globalData.baseUrl+ 'IF/landlord/addAlipayAuditing.do', 
//       method: 'POST',
//       data:{
//         buyer_id:buyer_id,
//         landlordId:landlordId,
//         landlordName:landlordName,
//       },
//       dataType: 'json',
//       success: (res) => {
//         console.log('-------success--------');
//         console.log(res)
//         console.log(res.data)
//         my.tradePay({
//           tradeNO: res.data.data.alipay_trade_create_response.trade_no,
//           success: (res) => {
//             console.log('-------success--------');
//             console.log(res);
//             that.uploadCode(landlordId,res.resultCode);
//           },
//           fail: (res) => {
//             console.log('-------fail--------');
//             console.log(res);
//             that.uploadCode(landlordId,res.resultCode);
//           }
//         });
//       },
//       fail: (res) => {
//         console.log('-------fail--------');
//         console.log(res);
        
//       }
//     });
//   },
//   uploadCode(landlordId,resultCode){
//     my.httpRequest({
//       url: app.globalData.baseUrl+'IF/landlord/payAlipayAuditing.do', // 目标服务器url
//       method: 'POST',
//       data:{
//         landlordId:landlordId,
//         resultCode:resultCode,
//       },
//       dataType: 'json',
//       success: (res) => {
//         console.log(res+'状态码上传成功');
//           my.alert({
//             title:'提交成功！',
//             content:'我们会尽快处理。',
//             buttonText:'确认',
//             success: () => {
//               my.navigateBack();
//             },
//         });
//       },
//     });
//   },
//   //重置
//   formReset(){
//     this.setData({
//       upload1:false,
//       upload2:false,
//       upload3:false,
//       img1:'',
//       img2:'',
//       img3:'',
//       images:[],
//     });
//   },
// });
