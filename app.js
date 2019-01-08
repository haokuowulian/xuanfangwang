App({

   globalData:{
    baseUrl:'http://192.168.1.89:8080/LLGY/', 
    baseUrl_whj:'http://192.168.1.193:8080/LLGY/',
    baseImgUrl_whj:'http://192.168.1.193:8080/LLGY/upload/'
   },
  onLanuch(){
    const {data} = my.getStorageSync({key: 'logs'});
    const logs = data && data.logs ? data.logs : [];
  },
   getDate(dateFormate,year){
   var date=new Date();
   //年

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
}

   
})