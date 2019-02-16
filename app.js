App({

   globalData:{
    baseUrl:'http://192.168.1.89:8080/LLGY/', 
    // baseUrl_whj:'http://192.168.1.193:8080/LLGY/',
    baseUrl_whj:'http://192.168.1.89:8080/LLGY/',
    baseImgUrl_whj:'http://192.168.1.89:8080/LLGY/upload/'
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
    // var cond1 = date.getFullYear() % 4 == 0;
    // var cond2 = date.getFullYear() % 100 != 0;
    // var cond3 = date.getFullYear() % 400 ==0;
    // var cond = cond1 && cond2 || cond3;
    if(Y % 4 == 0&&Y % 100 != 0||Y % 400 ==0){
      console.log('是闰年')
      if(M*1==2&date.getDate()>=29){
        D=29;
      }
    }else{
      if(M*1==2&&date.getDate()>=28){
        D=28;
      }
    }
    
    if(M==4||M==6||M==9||M==11){
      if(date.getDate()>=30){
        D=30;
      }
    }
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