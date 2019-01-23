App({

   globalData:{
    baseUrl:'http://192.168.1.89:8080/LLGY/', 
    baseUrl_whj:'http://192.168.1.193:8080/LLGY/',
    baseImgUrl_whj:'http://192.168.1.193:8080/LLGY/upload/'
    // baseUrl:'https://www.xuanfangwang.com.cn:8080/LLGY/', 
    // baseUrl_whj:'https://www.xuanfangwang.com.cn:8080/LLGY/',
    // baseImgUrl_whj:'https://www.xuanfangwang.com.cn:8080/LLGY/upload/'
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
    + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);

    //日

    var D = date.getDate()
    < 10 ? '0' + date.getDate() :
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
 getFormateDate(dateFormate,y,m){
   var date=new Date();
    //年
    var Y = date.getFullYear()+y;
    //月
    var M = date.getMonth() + 1 ;
    if((M+m)>12){
      Y=Y+1;
      M= (M+m-12);
    }else{
       M = M+m;
    }
    M = (M < 10 ? '0' + M : M);
    //日
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    switch(dateFormate){
      case "yyyy年MM月dd日":
        return Y+"年"+M+"月"+D+'日';
      break;
      case "yyyy-MM-dd":
        return Y+"-"+M+"-"+D;
      break;
      default:
        return Y+"-"+M+"-"+D;;
      break;
    }
  },
   
})