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
  },
  onLoad() {
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
      my.httpRequest({
        url: app.globalData.baseUrl+'IF/user/getUserInfoById.do', // 目标服务器url
        method: 'POST',
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
          // var cy = res.data.data.cityName;
          // console.log(cy)
          // var city = cy.slice(start,-1)
          // console.log(city)
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
   //完善信息
  submit(){
    var that = this;
    console.log(this.data.name+'|||'+this.data.sex+'|||'+this.data.cityCode+'|||'+this.data.areaId+'|||'+this.data.certNo+'|||'+this.data.password)
    if(this.data.userCompleted){
      if(this.data.name==''||this.data.sex==''||this.data.cityCode==''||this.data.areaId==''||this.data.certNo==''){
       my.alert({
         title: '请完善信息' 
       });
     }else{
      // var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/
      // var vownerCardNum = reg.test(this.data.certNo);
      var res_id = app.checkId(this.data.certNo);
      console.log('身份证号校验')
      console.log(res_id)
      if(res_id==1){
          my.confirm({
            title: '温馨提示',
            content: '是否上传',
            confirmButtonText: '同意',
            cancelButtonText: '拒绝',
            success: (result) => {
            if(result.confirm){
                console.log('同意');
                this.complexUserInfo(this.data.userCompleted);
            }else{
                console.log('拒绝');
            }
            },
          });
        }else if(res_id==2){
          my.alert({
          title: '身份证号码位数不对',
          success:() =>{
            that.setData({
              certNo:'',
            });
            },
          });
        }else if(res_id==3){
          my.alert({
          title: '身份证号码出生日期超出范围或含有非法字符',
          success:() =>{
            that.setData({
              certNo:'',
            });
            },
          });
        }else if(res_id==4){
          my.alert({
          title: '身份证号码校验错误',
          success:() =>{
            that.setData({
              certNo:'',
            });
            },
          });
        }else if(res_id==4){
          my.alert({
          title: '身份证地区非法',
          success:() =>{
            that.setData({
              certNo:'',
            });
            },
          });
        }
    
     }
    }else{
      if(this.data.name==''||this.data.sex==''||this.data.cityCode==''||this.data.areaId==''||this.data.certNo==''||this.data.password==''){
       my.alert({
         title: '请完善信息' 
       });
     }else{
      // var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/
      // var vownerCardNum = reg.test(this.data.certNo);
      var res_id = app.checkId(this.data.certNo);
      console.log('身份证号校验')
      console.log(res_id)
      if(res_id==1){
          my.confirm({
            title: '温馨提示',
            content: '是否上传',
            confirmButtonText: '同意',
            cancelButtonText: '拒绝',
            success: (result) => {
            if(result.confirm){
                console.log('同意');
                this.complexUserInfo(this.data.userCompleted);
            }else{
                console.log('拒绝');
            }
            },
          });
        }else if(res_id==2){
          my.alert({
          title: '身份证号码位数不对',
          success:() =>{
            that.setData({
              certNo:'',
            });
            },
          });
        }else if(res_id==3){
          my.alert({
          title: '身份证号码出生日期超出范围或含有非法字符',
          success:() =>{
            that.setData({
              certNo:'',
            });
            },
          });
        }else if(res_id==4){
          my.alert({
          title: '身份证号码校验错误',
          success:() =>{
            that.setData({
              certNo:'',
            });
            },
          });
        }else if(res_id==4){
          my.alert({
          title: '身份证地区非法',
          success:() =>{
            that.setData({
              certNo:'',
            });
            },
          });
        }
     
    
     }
    }
    
  },
  //请求服务器完善信息
   complexUserInfo(userCompleted){
      var that=this;
      if(userCompleted){
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
          },
          dataType: 'json',
          success: function(res) {
            console.log(res)
            if(res.data.success){
              // that.setData({
              //   userCompleted:true,
              //   userlogin:true,
              //   headimg:that.data.headimg,
              //   userName:nickName
              // });
              my.setStorageSync({
                key: 'certName', // 缓存数据的key
                data: that.data.certName, // 要缓存的数据 
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
      }else{
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
          password:that.data.password,
          id:that.data.userId,
          },
          dataType: 'json',
          success: function(res) {
            console.log(res)
            if(res.data.success){
              // that.setData({
              //   userCompleted:true,
              //   userlogin:true,
              //   headimg:that.data.headimg,
              //   userName:nickName
              // });
              my.setStorageSync({
                key: 'certName', // 缓存数据的key
                data: that.data.certName, // 要缓存的数据 
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
      }
      
     
   },
});
