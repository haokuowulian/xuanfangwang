var app = getApp();
Page({
  data: {
    sex:'',
    city:'',
    area:'',
    showBottom: false,
    areaList:[],
  },
  onLoad() {},
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
          cityCode:res.adCode
        
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
   //获取选中地区
  getIndex(e){
    console.log(e.target.dataset.index);
    this.setData({
      area:this.data.areaList[e.target.dataset.index].distName,
      areaId:this.data.areaList[e.target.dataset.index].distCode
    });
    this.onPopupClose();
  },
   //完善信息
  submit(){
    if(this.data.sex==''||this.data.cityCode==''||this.data.areaId==''||this.data.certNo==''||this.data.password==''){
       my.alert({
         title: '请完善信息' 
       });
     }else{
      
    my.confirm({
      title: '温馨提示',
      content: '点击同意后即授权该应用获取您的手机号和真实姓名',
      confirmButtonText: '同意',
      cancelButtonText: '拒绝',
      success: (result) => {
       if(result.confirm){
          console.log('同意');
          this.complexUserInfo();
       }else{
          console.log('拒绝');
       }
      },
    });
     }
  },
  //请求服务器完善信息
   complexUserInfo(){
     var that=this;
      my.httpRequest({
        url: app.globalData.baseUrl+'/IF/user/editUser.do',
        method: 'POST',
        header:{
              'content-type': 'application/json'
            },
        data: {
         sex:this.data.sexCode,
         cityCode:this.data.cityCode,
         cityName:this.data.city,
         areaCode:this.data.areaId,
         areaName:this.data.area,
         certNo:this.data.certNo,
         password:this.data.password,
         id:this.data.userId,
        },
        dataType: 'json',
        success: function(res) {
          if(res.data.success){
            that.setData({
              userCompleted:true,
              userlogin:true,
              headimg:that.data.headimg,
              userName:nickName
            });
            
             my.setStorageSync({
                 key: 'certNo', // 缓存数据的key
                 data: that.data.certNo, // 要缓存的数据
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
