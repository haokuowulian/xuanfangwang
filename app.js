App({

   globalData:{
    // baseUrl:'http://192.168.1.89:8080/LLGY/', 
    // baseUrl_whj:'http://192.168.1.89:8080/LLGY/',
    // baseImgUrl_whj:'http://192.168.1.89:8080/LLGY/upload/',
    // base_whj:'http://192.168.1.193:8080/LLGY/',
    // baseUrl_oos:'http://192.168.1.89:8080/LLGY/IF/upload/headImgUpload.do', 

    // baseUrl:'http://192.168.1.193:8080/LLGY/', 
    // baseUrl_whj:'http://192.168.1.193:8080/LLGY/',
    // baseImgUrl_whj:'http://192.168.1.193:8080/LLGY/upload/',
    // base_whj:'http://192.168.1.193:8080/LLGY/',
    // baseUrl_oos:'http://192.168.1.193:8080/LLGY/IF/upload/headImgUpload.do', 

    baseUrl:'https://www.xuanfangwang.com.cn:8080/LLGY/', 
    baseUrl_whj:'https://www.xuanfangwang.com.cn:8080/LLGY/',
    base_whj:'https://www.xuanfangwang.com.cn:8080/LLGY/',
    baseImgUrl_whj:'https://www.xuanfangwang.com.cn:8080/LLGY/upload/',
    baseUrl_oos:'https://www.xuanfangwang.com.cn:8080/LLGY/IF/upload/headImgUpload.do', 
   },
  onLanuch(){
    const {data} = my.getStorageSync({key: 'logs'});
    const logs = data && data.logs ? data.logs : [];
  },
   getDate(dateFormate,year){
   var date=new Date();
   //年
``
    var Y =
    date.getFullYear()+year;

    //月

    var M = (date.getMonth()
    + 1 < 10 ?  (date.getMonth() + 1) : date.getMonth() + 1);

    //日

    var D = date.getDate()
    < 10 ? date.getDate() :
    date.getDate();

    //时

    var h =
    date.getHours();

    //分

    var m =
    date.getMinutes();
    //秒

    var s =
    date.getSeconds();

    switch(dateFormate){
      case "yyyy年MM月dd日":
        return Y+"年"+M+"月"+D+'日';
      break;
      case "yyyy-MM-dd":
        return Y+"-"+M+"-"+D;
      break;
      case "yyyy-MM-dd HH:mm":
        return Y+"-"+M+"-"+D+" "+h+":"+m;
      break;
      case "yyyy-MM-dd HH:mm:ss":
        return Y+"-"+M+"-"+D+" "+h+":"+m+":"+s
      break;
      default:
        return Y+"-"+M+"-"+D+" "+h+":"+m+":"+s
      break;
    }
},
 //获取几个月后
 getFormateDate(beginDate,dateFormate,n){
  var str = beginDate;
  console.log(beginDate)
  console.log(str)
  str = str.replace(/[^\d]/g,'/');
  console.log(str)
  var time =  new Date(str );
  console.log('tiem"')
  console.log(time)
  time.setMonth(time.getMonth() + n);//设置month月后的时间
  var Y = time.getFullYear();
  var M = time.getMonth() + 1;//获取当前月份
  var D = time.getDate();
    switch(dateFormate){
      case "yyyy年MM月dd日":
        return Y+"年"+M+"月"+D+'日';
      break;
      case "yyyy-MM-dd":
        return Y+"-"+M+"-"+D;
      break;
      default:
        return Y+"-"+M+"-"+D;
      break;
    }
  },
   //获取几个月后
 getFormateDate1(dateFormate,y,m){
  var time = new Date();
  time.setMonth(time.getMonth() + m);//设置m月后的时间
  time.setFullYear(time.getFullYear()+y);//设置y年后的时间
  var Y = time.getFullYear();
  var M = time.getMonth() + 1;//获取当前月份
  var D = time.getDate();
    switch(dateFormate){
      case "yyyy年MM月dd日":
        return Y+"年"+M+"月"+D+'日';
      break;
      case "yyyy-MM-dd":
        return Y+"-"+M+"-"+D;
      break;
      default:
        return Y+"-"+M+"-"+D;
      break;
    }
  },
    //获取几个月后
 getFormateDate2(dateFormate,y,m,d){
  var time = new Date();
  time.setMonth(time.getMonth() + m);//设置m月后的时间
  time.setFullYear(time.getFullYear()+y);//设置y年后的时间
  time.setDate(time.getDate()+d);//设置d天后的时间
  var Y = time.getFullYear();
  var M = time.getMonth() + 1;//获取当前月份
  var D = time.getDate();
    switch(dateFormate){
      case "yyyy年MM月dd日":
        return Y+"年"+M+"月"+D+'日';
      break;
      case "yyyy-MM-dd":
        return Y+"-"+M+"-"+D;
      break;
      default:
        return Y+"-"+M+"-"+D;
      break;
    }
  },
  getFormateDate3(dateFormate,n){
  var time = new Date();
  time.setMonth(time.getMonth() + n);//设置month月后的时间
  var Y = time.getFullYear();
  var M = time.getMonth() + 1;//获取当前月份
  var D = time.getDate();
    switch(dateFormate){
      case "yyyy年MM月dd日":
        return Y+"年"+M+"月"+D+'日';
      break;
      case "yyyy-MM-dd":
        return Y+"-"+M+"-"+D;
      break;
      default:
        return Y+"-"+M+"-"+D;
      break;
    }
  },




  //缓存城市列表
  getCity(){
    var that=this;
     my.httpRequest({
      url: this.globalData.baseUrl_whj+"json/dist.json",
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        console.log('城市列表获取');
        console.log(res.data.data);
        // that.setData({
        //   cityData:res.data.data
        // });
        my.setStorage({
          key: 'list_city', // 经度
          data: res.data.data, // 要缓存的数据
        });
      },
      fail: function(res) {
       console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
  
  //身份证校验
  checkId(idcard) {
      var Errors = new Array(1,2,3, 4,5);
      var area = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
      };
      var retflag = false;
      var idcard, Y, JYM;
      var S, M;
      var idcard_array = new Array();
      idcard_array = idcard.split("");
      //地区检验
      if (area[parseInt(idcard.substr(0, 2))] == null) return Errors[4];
      //身份号码位数及格式检验
      switch (idcard.length) {
        case 15:
          if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
            var ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性
          } else {
            var ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性
          }
          if (ereg.test(idcard)) {
            return Errors[0];
          }
          else {
            return Errors[2];
          }
          break;
        case 18:
          if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
            var ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式
          } else {
            var ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式
          }
          if (ereg.test(idcard)) { //测试出生日期的合法性
            //计算校验位
            S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3;
            Y = S % 11;
            M = "F";
            JYM = "10X98765432";
            M = JYM.substr(Y, 1); //判断校验位
            if (M == idcard_array[17]) return Errors[0]; //检测ID的校验位
            else return Errors[3];
          } else return Errors[2];
          break;
        default:
          return Errors[1];
          break;
      }
    },
})