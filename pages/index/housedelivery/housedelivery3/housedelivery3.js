Page({
  data: {
    selected1:true,
    selected2:false,
  },
  onLoad() {},
  onChoose1(){
    this.setData({
      selected1:true,
      selected2:false,
    });
  },
  onChoose2(){
    this.setData({
      selected1:false,
      selected2:true,
    });
  },
  next(){
     my.navigateTo({
    url: '/pages/index/housedelivery/housedelivery4/housedelivery4',
    })
  }
});
