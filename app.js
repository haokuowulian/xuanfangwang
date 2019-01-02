App({
  data:{
    user:'',
  },
  onLanuch(){
    const {data} = my.getStorageSync({key: 'logs'});
    const logs = data && data.logs ? data.logs : [];
  },
  onShow(){
    console.log(222333)
    let u = my.getStorageSync({
      key: 'userinfo', // 缓存数据的key
    });
    console.log(u)
    this.setData({
      user:u,
    });
  }
})