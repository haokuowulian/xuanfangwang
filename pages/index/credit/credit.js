var app = getApp();
Page({
  data: {
    name:'',
    sex:'',
    age:0,
    phone:'',
    avatar:'',
    score:null,
    scoreType:'',
    classType:0,
    orderid:null,
    userId:null,
    contract:false,
    status:null,
    houseName:'',
    money:'',
  },
  onLoad(option) {
    var that = this;
    var userId = option.userId;
    var uidCard = option.uidCard;
    var orderid = option.orderid;
    console.log(userId);
    console.log(uidCard);
    my.httpRequest({
      url:app.globalData.baseUrl_whj+'IF/user/getUserInfoById.do', // 目标服务器url
      method: 'POST',
      data:{
        userId:userId,
      },
      dataType: 'json',
      success: (res) => {
        console.log('----------------');
        console.log(res);
        if(res.data.success){
          that.getScoring(uidCard);
          that.getOrder(orderid);
          that.setData({
            name:res.data.data.certName,
            sex:res.data.data.sex,
            age:res.data.age,
            phone:res.data.data.telPhone,
            avatar:res.data.data.avatar,
            orderid:orderid,
            userId:userId,
          });
        }
      },
    });
  },
  //租信宝查询积分
  getScoring(uidCard){
    var that = this;
    my.httpRequest({
      url:app.globalData.baseUrl_whj+'IF/zuZinBao/zuXinBao.do', // 目标服务器url
      method: 'POST',
      data:{
        certNo:uidCard,
        isTaofan:false,
        isXidu:false,
        isQianke:false,
      },
      dataType: 'json',
      success: (res) => {
        console.log('**************');
        console.log(res);
        var score = res.data.message;
        console.log(score);
        if(res.data.success){
          if(score==5){
            that.setData({
              score:score,
              scoreType:'理想租客',
              classType:5,
            });
          }
          if(score>=4&&score<5){
            that.setData({
              score:score,
              scoreType:'评分良好',
              classType:4,
            });
          }
          if(score>=3&&score<4){
            that.setData({
              score:score,
              scoreType:'评分及格',
              classType:3,
            });
          }
          if(score>0&&score<3){
            that.setData({
              score:score,
              scoreType:'慎重出租',
              classType:1,
            });
          }
          // if(score>=1&&score<2){
          //   that.setData({
          //     score:score,
          //     scoreType:'慎重出租',
          //     classType:1,
          //   });
          // }
          // if(score>0&&score<1){
          //   that.setData({
          //     score:score,
          //     scoreType:'不建议出租',
          //     classType:1,
          //   });
          // }
          if(score==0){
            that.setData({
              score:score,
              scoreType:'这是逃犯！',
              classType:6,
            });
            my.alert({
              title: '网上追逃人员！请保证人身安全的情况下拨打110报警！' 
            });
          }
          
        }
      },
    });
  },
  //获取订单内容
  getOrder(orderid){
    var that = this;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+'IF/order/getOrderById.do', // 目标服务器url
      method: 'POST',
      data:{
        id:orderid,
      },      
      dataType: 'json',
      success: (res) => {
        console.log('订单信息')
        console.log(res)
        var contractId = res.data.data.contractId;
        if(contractId!=''&&contractId!=null){
          that.setData({
            contract:true,
            status:res.data.data.status,
            houseName:res.data.data.housingName,
            money:res.data.data.totalMoney,
          });
        }else{
          that.setData({
            contract:false,
            status:res.data.data.status,
            houseName:res.data.data.housingName,
            money:res.data.data.totalMoney,
          });
        }
        
      },
    });
  },
  toSign(){
    var that = this;
    // that.toAddMoney();
    var orderid = that.data.orderid;
    var userId = that.data.userId;
    console.log(orderid)
     my.confirm({
      title: '温馨提示',
      content: '是否确认签订',
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      success: (res) => {
        console.log(res)
        if(res.confirm){
          //签约合同
          my.showLoading({
            content: '正在签约...',
          });
          my.httpRequest({
            url: app.globalData.baseUrl_whj+'IF/landlordRenterServlet', // 目标服务器url
            method: 'POST',
            data:{
              orderId:orderid,
            },      
            dataType: 'json',
            success: (res) => {
              console.log('签约返回')
              console.log(res)
              if(res.data.success){
                console.log("签约成功！")
                console.log(res.data.contractId)
                console.log(orderid)
                var contractId = res.data.contractId;
                that.toGetRent(orderid,contractId);
                
              }
            
            },
          });
        }
        

      },
    });
    
    
  },
  //解冻并转支付
  toGetRent(orderId,contractId){
    var that = this;
    console.log('冻结转支付')
    my.httpRequest({
      url:app.globalData.baseUrl_whj+ 'IF/alipay/tradePay.do', // 目标服务器url
      method: 'POST',
      data:{
        orderId:orderId,
        contractId:contractId,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
         my.hideLoading();
        if(res.data.success){
          my.showLoading({
            content: '租金正在到账...',
          });
          that.toAddMoney();
        }
      },
    });
  },
  //余额修改
  toAddMoney(){
    var that = this;
    console.log('余额修改')
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var money = that.data.money;
    var house = that.data.houseName;
    var fromUserId = that.data.userId;
    console.log(userId+'********'+money+'*********'+house+'********'+fromUserId)
    my.httpRequest({
      url: app.globalData.baseUrl_whj+ 'IF/wallet/editMoney.do', // 目标服务器url
      method: 'POST',
      data:{
        userId:userId,
        money:money,
        house:house,
        fromUserId:fromUserId,
        type:1,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        my.hideLoading();
        if(res.data.success){
          console.log('余额到账！')
          my.alert({
            title: '签约成功！' ,
            success: () => {
              my.navigateBack({
                delta:1
              });
            },
          });
        }
      },
    });
  },

  toCancel(){
    var that = this;
    var orderid = that.data.orderid;
    my.httpRequest({
      url: app.globalData.base_whj+'IF/alipay/fundAuthOrderUnfreeze.do', // 目标服务器url
      method: 'POST',
      data:{
        orderId:orderid,
      },      
      dataType: 'json',
      success: (res) => {
        console.log('取消订单')
        console.log(res)
        if(res.data.success){
          my.alert({
            title: '取消成功！' ,
            success: () => {
              my.navigateBack({
                delta:2
              });
            },
          });
          
        }
      
      },
    });
  },
});
