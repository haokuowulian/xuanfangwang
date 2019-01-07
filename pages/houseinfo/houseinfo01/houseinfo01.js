const infoc1 = [
  '首次出租',
  '精品房源',
  'WiFi覆盖',
  '免物业费',
]
const infoc2 = [
  '16m²',
  '5室一厅',
  '7 / 5层',
  '精装修',
  '南',
]
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
const roomInfo = [
  {
    id:'1',
    number:'01卧',
    status:'待入住',
    price:'￥2000元/月',
    houseinfo:'当前房源',
  },
  {
    id: '2',
    number: '02卧',
    status: '待入住',
    price: '￥2000元/月',
    houseinfo: '查看房间',
  },
  {
    id: '3',
    number: '03卧',
    status: '已入住',
    price: '男',
    houseinfo: '27岁',
  },
  {
    id: '4',
    number: '04卧',
    status: '待入住',
    price: '￥2000元/月',
    houseinfo: '查看房间',
  },
  {
    id: '5',
    number: '05卧',
    status: '待入住',
    price: '￥2000元/月',
    houseinfo: '查看房间',
  },
]
const features = [
  {
    title:'房源亮点',
    content:'全新装修，配置齐全',
  },
  {
    title: '户型介绍',
    content: '此房为南北向5室一厅一卫，104.5平米，精装，户型方正，性价比高，整体清爽宽敞明亮，家电齐全。。',
  },
  {
    title: '交通出行',
    content: '距离地铁湘湖站直线距离9125米，公交线路：126路，178路，222路等各路公交直达。',
  },
  {
    title: '周边配套',
    content: '商场、学校、景区配套',
  },
  {
    title: '小区信息',
    content: '沿江湿地，毗邻湘湖，环境好',
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
    infoc1,
    infoc2,
    furniture,
    roomInfo,
    features,
    villageinfo,
  },
  onLoad() {},
  toConfirmpage(){
    my.navigateTo({
      url: '/pages/index/confirmpage/confirmpage',
    });
  },
});
