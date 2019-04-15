var app = getApp();
Page({
  data: {
    my_name:'',//租客姓名
    your_name:'',//房东姓名
    address:'',//房源地址
    startDate:'',//开始时间
    endDate:'',//结束时间
    duration:'',//租期时长
    money:'',//租金
    cn_money:'',//租金大写
    my_card:'',//租客身份证号
    your_card:'',//房东身份证号
    my_phone:'',//租客联系电话
    your_phone:'',//房东联系电话
    date:'',
  },
  onLoad() {
    var that = this;
    var ucard = my.getStorageSync({
      key: 'certNo', // 缓存数据的key
    }).data;
    var uname= my.getStorageSync({
      key: 'certName', // 缓存数据的key
    }).data;
    console.log(uname)
    var startDate = my.getStorageSync({
      key: 'ustartDate', // 缓存数据的key
    }).data;
    var endDate = my.getStorageSync({
      key: 'uendDate', // 缓存数据的key
    }).data;
    var houseInfo = my.getStorageSync({
      key: 'uhouseInfo', // 缓存数据的key
    }).data;
    console.log(houseInfo)
    var payway = my.getStorageSync({
      key: 'upayWay', // 缓存数据的key 
    }).data;
    var rentType = my.getStorageSync({
      key: 'urentType', // 缓存数据的key
    }).data;
    var udateType = my.getStorageSync({
      key: 'udateType', // 缓存数据的key
    }).data;
    if(udateType==0){
      var duration = '1个月'
    }
    if(udateType==1){
      var duration = '3个月'
    }
    if(udateType==2){
      var duration = '4个月'
    }
    if(udateType==3){
      var duration = '1年'
    }
    if(rentType==1){
      var address = houseInfo.apartment.address;
    }
    if(rentType==2){
      var address = houseInfo.house.apartment.address;
    }
    if(rentType==1){
      var fd_id = houseInfo.landlordId;
    }
    if(rentType==2){
      var fd_id = houseInfo.house.landlordId;
    }

    var deposit = my.getStorageSync({
      key: 'udeposit', // 押金|每月租金
    }).data;
    var totalMoney = my.getStorageSync({
      key: 'uallPay', // 总金额
    }).data;
    var uphone = my.getStorageSync({
      key: 'phone', // 租客手机号
    }).data;
    
    // var fd_id = houseInfo.landlordId;
    that.getLandlordInfo(fd_id);
    that.getBigNumber(deposit);
    var date = app.getDate('yyyy年MM月dd日',0);
    console.log(fd_id)
    that.setData({
      my_name:uname,//租客姓名
      address:address,//房源地址
      startDate:startDate,//开始时间
      endDate:endDate,//结束时间
      duration:duration,//租期时长
      money:deposit,//租金
      my_card:ucard,//租客身份证号
      my_phone:uphone,//租客联系电话
      date:date,
    });
  },
  //根据房东id查信息
  getLandlordInfo(fd_id){
    console.log('--------fd--------');
    var that = this;
    my.httpRequest({
      url:app.globalData.baseUrl_whj+'IF/user/getUserInfoById.do', // 目标服务器url
      method: 'POST',
      data:{
        userId:fd_id,
      },
      dataType: 'json',
      success: (res) => {
        console.log('--------fd--------');
        console.log(res);
        if(res.data.success){
          that.setData({
            your_name:res.data.data.certName,
            your_phone:res.data.data.userName,
            your_card:res.data.data.certNo,
          });
        }
      },
    });
  },
  //数字转大写
  getBigNumber(n){
    var that = this;
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n))
            return "数据非法";
        var unit = "千百拾亿千百拾万千百拾元角分", str = "";
            n += "00";
        var p = n.indexOf('.');
        if (p >= 0)
            n = n.substring(0, p) + n.substr(p+1, 2);
            unit = unit.substr(unit.length - n.length);
        for (var i=0; i < n.length; i++)
            str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
        var num = str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
        that.setData({
          cn_money:num,
        });
  },
  toAgree(){
    my.navigateBack();
  },
});
