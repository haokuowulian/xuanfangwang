var app = getApp();
Page({
  data: {
    name:'',
    sex:'',
    city:'',
    cityCode:'',
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
    nation:'',
    residenceAddress:'',
  },
  onLoad(){
    this.gatInfo();
  },
  gatInfo(){
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', 
    }).data;
    var userCompleted = my.getStorageSync({
      key: 'userCompleted', // 缓存数据的key
    }).data;
    that.setData({
      userCompleted:userCompleted,
    });
    console.log(userCompleted)
    if(userCompleted){
      my.setNavigationBar({
        title: '个人信息',
      });
      my.request({
        url: app.globalData.baseUrl+'IF/user/getUserInfoById.do', // 目标服务器url
        method: 'POST',
        headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          userId:userId,
        },
        dataType: 'json',
        success: (res) => {
          console.log(res)
          var sexCode = res.data.data.sex;
          var sex = '';
          if(sexCode==0){
            sex = '男';
          }else{
            sex = '女';
          }
          that.setData({
            name:res.data.data.certName,
            sex:sex,
            city:res.data.data.cityName,
            area:res.data.data.areaName,
            sexCode:sexCode,
            certNo:res.data.data.certNo,
            userCompleted:userCompleted,
            userId:userId,
            cityCode:res.data.data.cityCode,
            areaId:res.data.data.areaCode,
            nation:res.data.data.nation,
            residenceAddress:res.data.data.censusAddress,
          });
        },
      });
    }else{
      that.setData({
        userId:userId,
        userCompleted:userCompleted,
      });
    }
  },
  onPopupClose() {
    this.setData({
      showBottom: false,
    });
  },
  //选择性别
  selectSex(){
    my.showActionSheet({
      title: '性别选择',
      items: ['男', '女'],
      cancelButtonText: '取消',
      success: (res) => {
        if(res.index==0){
          this.setData({
            sexCode:0,
            sex:'男'
          });
        }else if(res.index==1){
          this.setData({
            sexCode:1,
            sex:'女'
          });
        }
        console.log(res.index);
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
       my.request({
      url: app.globalData.baseUrl+"IF/user/getAreaDist.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
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
 
  submit(){
    var that = this;
    var cityName = that.data.city;
    var cityCode = that.data.cityCode;
    var areaName = that.data.area;
    var areaId = that.data.areaId;
    var userId = that.data.userId;
    console.log(areaId+areaName)
    console.log(cityCode+cityName)
    my.request({
      url: app.globalData.baseUrl+'IF/user/editArea.do',
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id:userId,
        cityCode:cityCode,
        cityName:cityName,
        areaCode:areaId,
        areaName:areaName,
      },
      dataType: 'json',
      success: (res) => {
        if(res.data.success){
          console.log(res)
          that.gatInfo();
          my.alert({
            title: '保存成功！' ,
            success: () => {
              my.navigateBack();
            },
          });
        }
      },
    });
  },
 
   
});
