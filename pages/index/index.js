const choosehouse = [
  {
    id:'1',
    imgpath: '/image/house2.png',
    housename:'国风上观1居室',
    houseinfo:'萧山 | 2室1厅 | 75m² | 西',
    houseprice:'￥8231/月',
    points:[
  {
    housepoint:'精品房源',
  },
  {
    housepoint:'离地铁近',
  },
],
  },
  {
    id:'2',
    imgpath: '/image/house2.png',
    housename:'国风上观1居室',
    houseinfo:'萧山 | 2室1厅 | 75m² | 西',
    houseprice:'￥8231/月',
    points:[
  {
    housepoint:'精品房源',
  },
  {
    housepoint:'离地铁近',
  }, 
],
  },
  {
    id:'3',
    imgpath: '/image/house2.png',
    housename:'国风上观1居室',
    houseinfo:'萧山 | 2室1厅 | 75m² | 西',
    houseprice:'￥8231/月',
    points:[
  {
    housepoint:'精品房源',
  },
  {
    housepoint:'离地铁近',
  },
],
  },
  {
    id:'4',
    imgpath: '/image/house2.png',
    housename:'国风上观1居室',
    houseinfo:'萧山 | 2室1厅 | 75m² | 西',
    houseprice:'￥8231/月',
    points:[
  {
    housepoint:'精品房源',
  },
  {
    housepoint:'离地铁近',
  },
],
  },
]
const wholehouse = [
  {
    id:'5',
    imgpath: '/image/house3.png',
    housename:'复兴南苑3居室',
    houseinfo:'萧山 | 3室1厅 | 60m² | 西',
    houseprice:'￥5231/月',
    points:[
  {
    housepoint:'离地铁近',
  },
],
    
  },
  {
    id:'6',
    imgpath: '/image/house3.png',
    housename:'复兴南苑3居室',
    houseinfo:'萧山 | 3室1厅 | 60m² | 西',
    houseprice:'￥5231/月',
    points:[
  {
    housepoint:'离地铁近',
  },
],
    
  },
  {
    id:'7',
    imgpath: '/image/house3.png',
    housename:'复兴南苑3居室',
    houseinfo:'萧山 | 3室1厅 | 60m² | 西',
    houseprice:'￥5231/月',
    points:[
  {
    housepoint:'离地铁近',
  },
],
    
  },
  {
    id:'8',
    imgpath: '/image/house3.png',
    housename:'复兴南苑3居室',
    houseinfo:'萧山 | 3室1厅 | 60m² | 西',
    houseprice:'￥5231/月',
    points:[
  {
    housepoint:'离地铁近',
  },
],
    
  },
]
const sharinghouse = [
  {
    id:'9',
    imgpath: '/image/house4.png',
    housename:'大成国际1居室',
    houseinfo:'萧山 | 3室1厅 | 18m² | 西',
    houseprice:'￥1331/月',
    points:[
  {
    housepoint:'独立阳台',
  },
],
    
  },
  {
    id:'10',
    imgpath: '/image/house4.png',
    housename:'大成国际1居室',
    houseinfo:'萧山 | 3室1厅 | 18m² | 西',
    houseprice:'￥1331/月',
    points:[
  {
    housepoint:'独立阳台',
  },
],
    
  },
  {
    id:'11',
    imgpath: '/image/house4.png',
    housename:'大成国际1居室',
    houseinfo:'萧山 | 3室1厅 | 18m² | 西',
    houseprice:'￥1331/月',
    points:[
  {
    housepoint:'独立阳台',
  },
],
   
  },
  {
    id:'12',
    imgpath: '/image/house4.png',
    housename:'大成国际1居室',
    houseinfo:'萧山 | 3室1厅 | 18m² | 西',
    houseprice:'￥1331/月',
    points:[
  {
    housepoint:'独立阳台',
  },
],
    
  },
]
const hotels = [
  {
    id:'13',
    imgpath: '/image/house5.png',
    housename:'武林广场昊呐酒店',
    houseinfo:'杭州西湖武林广场',
    houseprice:'￥231起',
    points:[
  {
    housepoint:'豪华型',
  },
],
    
  },
  {
    id:'14',
    imgpath: '/image/house5.png',
    housename:'武林广场昊呐酒店',
    houseinfo:'杭州西湖武林广场',
    houseprice:'￥231起',
    points:[
  {
    housepoint:'豪华型',
  },
],
    
  },
  {
    id:'15',
    imgpath: '/image/house5.png',
    housename:'武林广场昊呐酒店',
    houseinfo:'杭州西湖武林广场',
    houseprice:'￥231起',
    points:[
  {
    housepoint:'豪华型',
  },
],
   
  },
  {
    id:'16',
    imgpath: '/image/house5.png',
    housename:'武林广场昊呐酒店',
    houseinfo:'杭州西湖武林广场',
    houseprice:'￥231起',
    points:[
  {
    housepoint:'豪华型',
  },
],
    
  },
]

let houselist = [
  {
    type:'精选房源',
    brief:'高品质原装风格设计',
    imgpath:'/image/icon/right.png',
    list:choosehouse,
  },
  {
    type:'整租房源',
    brief:'成套出租的温馨设计',
    imgpath:'/image/icon/right.png',
    list:wholehouse,
  },
  {
    type:'合租房源',
    brief:'温馨合租的悠闲静谧',
    imgpath:'/image/icon/right.png',
    list:sharinghouse,
  },
  // {
  //   type:'无人酒店',
  //   brief:'快捷方便的精品客房',
  //   imgpath:'/image/icon/right.png',
  //   list:hotels,
  // },
]
// const houselist = [
//   {
//     list:houses,
//   },
// ]
const app = getApp()

Page({
  data: {
    value: '',
    imgUrls: ['../../image/banner01.png', '../../image/banner02.png', '../../image/banner03.png'],
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval: 1000,
    circular: false,
    houselist,
  },
  onLoad(){
    this.getBanner();
    this.getNearByHousing();
    this.getWholeRentalHousing();
    this.getSharedHousing();
  },
  handleInput(value) {
    this.setData({
      value,
    });
  },
  handleClear(value) {
    this.setData({
      value: '',
    });
  },
  handleFocus() { },
  handleBlur() { },
  handleCancel() {
    this.setData({
      value: '',
    });
  },
  handleSubmit(value) {
    my.alert({
      content: value,
    });
  },
  chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => {
        my.alert({
          title: 'chooseAlipayContact response: ' + JSON.stringify(res),
        });
      },
    });
  },
  onSearchBarTap() {
    my.navigateTo({
      url: '/pages/search/search',
    });
  },
  houseInfoTap(e){
    // 获取房源id
    var id = e.currentTarget.dataset.text;
    console.log(id)
    my.navigateTo({
      url: '/pages/houseinfo/houseinfo01/houseinfo01',
    });
  },
  choose1OnTap(e){
    var tp = e.currentTarget.dataset.choose;
    console.log(tp);
    my.navigateTo({
      url: '/pages/index/houselist/houselist?tp='+tp,
    });
  },

  //获取banner图
  getBanner(){
    console.log("getBanner");
  },

  //获取附近房源
  getNearByHousing(){
    console.log("getNearByHousing");
  },

  //获取精品房源
  getBoutiqueHousing(){
    console.log("getBoutiqueHousing");
  },

  //获取整租房源
  getWholeRentalHousing(){
    console.log("getWholeRentalHousing");
  },

  //获取合租房源
  getSharedHousing(){
    console.log("getSharedHousing");
  },
});
