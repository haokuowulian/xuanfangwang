const app = getApp();
const furniture = [
  {
    name:'床',
    imgpath:'/image/houseicon/chuang.png'
  },
  {
    name: '衣柜',
    imgpath: '/image/houseicon/yigui.png'
  },
  {
    name: '沙发',
    imgpath: '/image/houseicon/shafa.png'
  },
  {
    name: '电视',
    imgpath: '/image/houseicon/dianshi.png'
  },
  {
    name: '冰箱',
    imgpath: '/image/houseicon/bingxiang.png'
  },
  {
    name: '洗衣机',
    imgpath: '/image/houseicon/xiyiji.png'
  },
  {
    name: '空调',
    imgpath: '/image/houseicon/kongtiao.png'
  },
  {
    name: '热水器',
    imgpath: '/image/houseicon/reshuiqi.png'
  },
  {
    name: 'WiFi',
    imgpath: '/image/houseicon/wifi.png'
  },
  {
    name: '阳台',
    imgpath: '/image/houseicon/yangtai.png'
  },
  {
    name: '厨房',
    imgpath: '/image/houseicon/chufang.png'
  },
  {
    name: '电梯',
    imgpath: '/image/houseicon/dianti.png'
  },
  {
    name: '天然气',
    imgpath: '/image/houseicon/tianranqi.png'
  },
]

const villageinfo = [
  {
    imgpath:'/image/xiaoqu.png',
    bulidingage:'2008年建成',
    bulidingtype:'板房',
    greeningrate:'45%',
    volumerate:'1.15',
  }
]
Page({
  data: {
    bannerpath:'/image/house2.png',
    infohouse:'',
    housedetails:'',
    housesupport:'',
    furniture,
    villageinfo,
    imgUrl:app.globalData.baseImgUrl_whj,
    rentType:0,//房源类型，1：整租；2：分租
    id:0,//房源Id
    interval:3000,//滚动切换时间
    houseDetail:null,//详情
    
  },
   
  onLoad(option) {
    this.setData({
      id:option.id,
      rentType:option.rentType
    });
    console.log(this.data.id);
    console.log(this.data.rentType);
    this.getHouseDetail();
  
  },

  //获取房源详情
  getHouseDetail(){
    var that=this;
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHousingDetailIF.do",
      method: 'POST',
      data: {
        id: this.data.id,
        rentType: this.data.rentType
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
       
        if(res.data.success){
          that.setData({
            houseDetail:res.data.data
          });
        }
      },
      fail: function(res) {
       console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
 
  //前往周边交通
  goToNearBy(){
    my.navigateTo({

      url: '/pages/houseinfo/nearby/nearby?houseDetail='+JSON.stringify(this.data.houseDetail),
    })
  },
  toConfirmpage(){
    my.navigateTo({
      url: '/pages/index/confirmpage/confirmpage',
    });
  },
  
  
  
});
