App({
   globalData:{
    baseUrl:'http://192.168.1.89:8080/LLGY/',
    token:'',
    userid:'',
   },
  onLanuch(){
    const {data} = my.getStorageSync({key: 'logs'});
    const logs = data && data.logs ? data.logs : [];
    // my.setStorageSync({
    //   key: '', // 缓存数据的key
    //   data: '', // 要缓存的数据
    // });
  my.getStorage({
    key: 'userinfo', // 缓存数据的key
    success: (res) => {
        this.globalData.token=res.data.token,
        this.globalData.userid=res.data.info.id,
        console.log(res.data.token)
        console.log(res.data.info.id)
      console.log(this.globalData.userid)
    },
  });
   
  }
})