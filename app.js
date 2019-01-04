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
   
})