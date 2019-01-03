App({

   globalData:{
    baseUrl:'http://192.168.1.89:8080/LLGY/'
   },
  onLanuch(){
    const {data} = my.getStorageSync({key: 'logs'});
    const logs = data && data.logs ? data.logs : [];
  },
   
})