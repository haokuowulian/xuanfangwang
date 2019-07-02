var app = getApp();
Page({
  data: {
    name:'',
    idNum:'',
    payPassword:'',
  },
  onLoad(option) {
    this.setData({
      payPassword:option.payPassword,
    });
  },
  inputName(e){
    // console.log(e)
    var that = this;
    var name = e.detail.value;
    that.setData({
      name:name,
    });
  },
  inputIdNum(e){
    // console.log(e)
    var that = this;
    var idNum = e.detail.value;
    that.setData({
      idNum:idNum,
    });
  },
  toNext(){
    var that = this;
    var name = that.data.name;
    var idNum = that.data.idNum;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    console.log(name)
    console.log(idNum)
    if(name!=''&&idNum!=''){
      var res_id = app.checkId(idNum);
      console.log('身份证号校验')
      console.log(res_id)
      if(res_id==1){
        my.request({
          url: app.globalData.baseUrl+'IF/wallet/isIdCard.do', // 目标服务器url
          method: 'POST',
          headers:{
            'content-type': 'application/x-www-form-urlencoded'
          },
          data:{
            userId:userId,
            idCard:idNum,
            name:name,
          },
          dataType: 'json',
          success: (res) => {
            console.log(res)
            if(res.data.success){
              my.navigateTo({
                url: '/pages/index/wallet/new_pwd/new_pwd?payPassword='+that.data.payPassword,
              });
            }else{
              my.alert({
                title: '姓名与身份证不匹配！' 
              });
            }
          },
        });
        
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
        title: '请填写完整！' 
      });
    }
    
  },
});
