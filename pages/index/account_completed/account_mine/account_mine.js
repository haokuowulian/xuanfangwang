var app = getApp();
Page({
  data: {
    show1:false,
    show2:false,
    name:'',
    nation:'',
    residenceAddress:'',
    sex:'',
    city:'',
    cityCode:'',
    date:'',
    area:'',
    areaId:'',
    certNo:'',
    showBottom: false,
    areaList:[],
    userId:'',
    password:'',
    type:0,
    sexCode:0,

    imgUrl:'',
    textArry:[],
    images:[],
    canAddImg1:true,
    img1:'',
    upload1:false,
    canAddImg2:true,
    img2:'',
    upload2:false,
    idImg1:'',
    idImg2:'',
  },
  onLoad() {
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', 
    }).data;
    that.setData({
      userId:userId,
    });
   
    
  },
  onPopupClose() {
    this.setData({
      showBottom: false,
    });
  },
    //添加图片
  addImg(e){
    var that = this;
    // my.showLoading({
    //   content: '正在识别...',
    // });
    my.chooseImage({
      chooseImage: 1,
      sizeType:['compressed'],
      success: (res) => {
        var tempFilePaths = res.apFilePaths
        console.log(tempFilePaths)
        that.data.images[0]=tempFilePaths[0];
        if(e.target.dataset.t==1){
          
          that.uploadImg(tempFilePaths[0],1);
          that.uploadImgToOos(tempFilePaths[0],1);
          that.setData({
            img1:tempFilePaths[0],
            upload1:true,
            canAddImg1:false,
          });
        }
        if(e.target.dataset.t==2){
         
          that.data.images[1]=tempFilePaths[0];
          that.uploadImg(tempFilePaths[0],2);
          that.uploadImgToOos(tempFilePaths[0],2);
          that.setData({
            img2:tempFilePaths[0],
            upload2:true,
            canAddImg2:false,
          });
        }
      },
    });
  },
  uploadImg(image,t){
    var that = this;
    my.uploadFile({
      url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do', // 开发者服务器地址
      filePath: image, // 要上传文件资源的本地定位符
      fileName: 'file', // 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容
      fileType: 'image', // 文件类型，image / video / audio
      formData:{savePrefix:'idCard'},
      success: (res) => {
        console.log(res)
        var json1 = JSON.parse(res.data);
        if(json1['success']){
          var imgUrl=json1['message'];
          var url = '/'+imgUrl;
          that.getInfoByIdCard(url,t);
          
        }
        
      },
    });

  },
  getInfoByIdCard(imgUrl,type){
    var that = this;
    if(type==1){
      my.httpRequest({
        url:app.globalData.baseUrl+ 'IF/user/getOcrIdcard.do', // 目标服务器url
        method: 'POST',
        data:{
          url:imgUrl,
          side:'back',
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            my.hideLoading();
            var ocr = res.data.ocr;
            var json1 = JSON.parse(ocr);
            var s = json1['start_date'];
            var e = json1['end_date'];
            var date = s + '-' + e ;
            that.setData({
              date:date,
              show1:true,
            });
          }
        },
        fail: (res) =>{
          my.hideLoading();
        }
      });
    }
    if(type==2){
      my.httpRequest({
        url:app.globalData.baseUrl+ 'IF/user/getOcrIdcard.do', // 目标服务器url
        method: 'POST',
        data:{
          url:imgUrl,
          side:'face',
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if(res.data.success){
            my.hideLoading();
            var ocr = res.data.ocr;
            var json1 = JSON.parse(ocr);
            var nation = json1['nationality'];
            var sex = json1['sex'];
            var name = json1['name'];
            var num = json1['num'];
            var address = json1['address']
            if(sex=='男'){
              that.setData({
                sexCode:0,
              });
            }
            if(sex=='女'){
              that.setData({
                sexCode:1,
              });
            }
            that.setData({
              residenceAddress:address,
              name:name,
              nation:nation,
              sex:sex,
              certNo:num,
              show2:true,
            });
          }
        },
        fail: (res) =>{
          my.hideLoading();
        }
      });
    }
  },
  uploadImgToOos(image,t){
    var that = this;
    my.uploadFile({
      url: app.globalData.baseUrl_oos, // 开发者服务器地址
      filePath: image, // 要上传文件资源的本地定位符
      fileName: 'file', // 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容
      fileType: 'image', // 文件类型，image / video / audio
      formData:{savePrefix:'idCard/'},
      success: (res) => {
        console.log(res)
        var json1 = JSON.parse(res.data);
        var newimgs=json1['message'];
        if(t==1){
          that.setData({
            idImg1:newimgs,
          });
        }
        if(t==2){
          that.setData({
            idImg2:newimgs,
          });
        }
      },
    });

  },


  //选择城市
  selectCity(){
    my.chooseCity({
      success: (res) => {
        this.setData({
          city:res.city,
          cityCode:res.adCode,
          area:'',
	      });
      },
    });
  },
  //选择区县
  selectArea(){
    if(this.data.cityCode==''){
      my.alert({
        title: '请先选择城市' 
      });
    }else{
      var that=this;
       my.httpRequest({
      url: app.globalData.baseUrl+"IF/user/getAreaDist.do",
      method: 'POST',
      data: {
        cityCode: this.data.cityCode,
      },
      dataType: 'json',
      success: function(res) {
       console.log(res.data);
        if(res.data.success){
          that.setData({
            areaList:res.data.data,
            showBottom: true,
          });
          
        }
      },
      fail: function(res) {
       console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
    }
    
  },
  //输入身份证
  bindIdCard(e){
    console.log(e.detail.value)
    this.setData({
      certNo:e.detail.value
    })
  },
  //输入密码
  bindPassword(e){
    this.setData({
      password:e.detail.value
    })
  },
  //输入姓名
  bindName(e){
    console.log(e.detail.value)
    this.setData({
      name:e.detail.value
    })
  },
   //获取选中地区
  getIndex(e){
    console.log(e.target.dataset.index);
    this.setData({
      area:this.data.areaList[e.target.dataset.index].distName,
      areaId:this.data.areaList[e.target.dataset.index].distCode
    });
    this.onPopupClose();
  },
  submit1(){
    var that = this;
    var name = that.data.name;
    var sex = that.data.sex;
    var sexCode = that.data.sexCode;
    var cityId = that.data.cityCode;
    var areaId = that.data.areaId;
    var idImg1 = that.data.idImg1;
    var idImg2 = that.data.idImg2;
    // var password = that.data.password;
    if(idImg1!=''&&idImg2!=''){
      if(cityId!=''){
        if(areaId!=''){
          that.complexUserInfo();
          // if(password!=''){
          //   that.complexUserInfo();
          // }else{
          //   my.alert({
          //     title: '请设置初始密码！' 
          //   });
          // }
        }else{
          my.alert({
            title: '请选择居住区域！' 
          });
        }
      }else{
        my.alert({
          title: '请选择居住城市！' 
        });
      }
    }else{
      my.alert({
        title: '请先上传身份证照片！' 
      });
    }
  },
 
  //请求服务器完善信息
   complexUserInfo(){
      var that=this;
      console.log(that.data.idImg1)
      console.log(that.data.idImg2)
      console.log(that.data.nation)
      console.log(that.data.name)
      my.httpRequest({
        url: app.globalData.baseUrl+'/IF/user/editUser.do',
        method: 'POST',
        header:{
              'content-type': 'application/json'
            },
        data: {
        certName:that.data.name,
        sex:that.data.sexCode,
        cityCode:that.data.cityCode,
        cityName:that.data.city,
        areaCode:that.data.areaId,
        areaName:that.data.area,
        certNo:that.data.certNo,
        id:that.data.userId,
        cardUrl1:that.data.idImg1,
        cardUrl2:that.data.idImg2,
        nation:that.data.nation,
        censusAddress:that.data.residenceAddress,
        // password:that.data.password,
        },
        dataType: 'json',
        success: function(res) {
          console.log(res)
          if(res.data.success){
            my.setStorageSync({
              key: 'certName', // 缓存数据的key
              data: that.data.name, // 要缓存的数据 
            });
            my.setStorageSync({
              key: 'certNo', // 缓存数据的key
              data: that.data.certNo, // 要缓存的数据 
            });
            my.setStorageSync({
              key: 'sex', // 缓存数据的key
              data: that.data.sex, // 要缓存的数据 
            });
            my.setStorageSync({
              key: 'userCompleted', // 缓存数据的key
              data: true, // 要缓存的数据 
            });
            my.alert({
              title: '提交成功！',
              success: () => {
                my.navigateBack({
                  delta: 1,
                });
              }
            });
          

          }
        },
        fail: function(res) {
        },
        complete: function(res) {
          my.hideLoading();
        }
      });
   },
  
   
});
