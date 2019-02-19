import debounce from '/util/debounce';

// const area = [
//   {
//     name: '相墅花园',
//     area: '闻堰镇-萧山区',
//     id: '1',
//     imgpath: '/image/house5.png',
//     housename: '武林广场昊呐酒店',
//     houseinfo: '杭州西湖武林广场',
//     houseprice: '￥231起',
//     distance: '距2号线建设一路1222米',
//     point: '豪华型',
//   },
//   {
//     name: '相墅花园',
//     area: '闻堰镇-萧山区',
//     id: '2',
//     imgpath: '/image/house5.png',
//     housename: '武林广场昊呐酒店',
//     houseinfo: '杭州西湖武林广场',
//     houseprice: '￥231起',
//     distance: '距2号线建设一路1222米',
//     point: '豪华型',
//   },
//   {
//     name: '相墅花园',
//     area: '闻堰镇-萧山区',
//     id: '3',
//     imgpath: '/image/house5.png',
//     housename: '武林广场昊呐酒店',
//     houseinfo: '杭州西湖武林广场',
//     houseprice: '￥231起',
//     distance: '距2号线建设一路1222米',
//     point: '豪华型',
//   },
//   {
//     name: '相墅花园',
//     area: '闻堰镇-萧山区',
//     id: '4',
//     imgpath: '/image/house5.png',
//     housename: '武林广场昊呐酒店',
//     houseinfo: '杭州西湖武林广场',
//     houseprice: '￥231起',
//     distance: '距2号线建设一路1222米',
//     point: '豪华型',
//   },
// ]
// const place = [
//   {
//     name: '相墅花园',
//     area: '闻堰镇-萧山区',
//     id: '1',
//     imgpath: '/image/house3.png',
//     housename: '萧山大成国际1居室',
//     houseinfo: '75m² | 2/8层',
//     houseprice: '￥8231/月',
//     distance: '距2号线建设一路1222米',
//     point: '离地铁近',
//   },
//   {
//     name: '相墅花园',
//     area: '闻堰镇-萧山区',
//     id: '2',
//     imgpath: '/image/house3.png',
//     housename: '萧山大成国际1居室',
//     houseinfo: '75m² | 2/8层',
//     houseprice: '￥8231/月',
//     distance: '距2号线建设一路1222米',
//     point: '离地铁近',
//   },
//   {
//     name: '相墅花园',
//     area: '闻堰镇-萧山区',
//     id: '3',
//     imgpath: '/image/house3.png',
//     housename: '萧山大成国际1居室',
//     houseinfo: '75m² | 2/8层',
//     houseprice: '￥8231/月',
//     distance: '距2号线建设一路1222米',
//     point: '离地铁近',
//   },
//   {
//     name: '相墅花园',
//     area: '闻堰镇-萧山区',
//     id: '4',
//     imgpath: '/image/house3.png',
//     housename: '萧山大成国际1居室',
//     houseinfo: '75m² | 2/8层',
//     houseprice: '￥8231/月',
//     distance: '距2号线建设一路1222米',
//     point: '离地铁近',
//   },
// ]
const app=getApp();
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    value:'',
    history: my.getStorageSync({ key: 'searchHistory' }).data || [],
    hot: [
      // { name: '湘湖科创园',
      //   area: '科技园区-萧山区',
      //   imgpath: '/image/house3.png',
      //   housename: '萧山大成国际1居室',
      //   houseinfo: '75m² | 2/8层',
      //   houseprice: '￥8231/月',
      //   distance: '距2号线建设一路1222米',
      //   point: '离地铁近',
      //    },
      // { name: '科技园区-萧山区',
      //   area: '闻堰镇-萧山区',
      //   imgpath: '/image/house3.png',
      //   housename: '萧山大成国际1居室',
      //   houseinfo: '75m² | 2/8层',
      //   houseprice: '￥8231/月',
      //   distance: '距2号线建设一路1222米',
      //   point: '离地铁近',
      // },
    ],
    areaList: [],
    placeList: [],
    bg1: true,
    bg2: false,
    showView1: false,
    showView2: false,
    pageIndex:1,
  },
  
  onLoad() {
    this.setData({
      history:my.getStorageSync({key: 'searchHistory' }).data,
    });
    console.log(my.getStorageSync({ key: 'searchHistory' }).data);
    this.onInput = debounce(this.onInput.bind(this),400);
    my.setNavigationBar({
      borderBottomColor: '#fff',
    });
    this.setData({ showView1: true });
  },
  clear(){
    my.confirm({
      content:'确定删除相关历史',
      success: (res) => {
        if(res.confirm){
          my.removeStorage({
            key: 'searchHistory', // 缓存数据的key
            success: (res) => {
              console.log('remove success!')
            },
          });
          // my.clearStorage();
          this.setData({
            history:[],
          });
        }
      },
    });
  },
  onSearch(e){
    console.log(e)
    var that = this;
    var keyword = e.currentTarget.dataset.history;
    console.log(keyword)
    that.setData({
      value:keyword,
    });
    that.onInput(keyword);
  },
  onInput(keyword){
    this.setData({
      value:keyword,

    });
    
    const regExp = /[A-Za-z]/;
    if(keyword ===''|| (regExp.test(keyword)&&keyword.length ===1)){
      
      this.setData({
        areaList:[],
     
        placeList:[],
      });
      return;
    }
    console.log(keyword)

    my.httpRequest({
      url:app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      data:{
        keyword:keyword,
        rentType:1,
        pageIndex: this.data.pageIndex,
        pageSize: 10,
      },
      success: (res) => {
        console.log(res)
        console.log(res.data.data)
        if(res.data.count>0){
          this.setData({
            // area: res.hotels,

            placeList: res.data.data,
          });
        }else{
          my.httpRequest({
            url:app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
            method: 'POST',
            data:{
              keyword:keyword,
              rentType:2,
              pageIndex: this.data.pageIndex,
              pageSize: 10,
            },
            success: (res) => {
              this.setData({
                areaList: res.data.data,
                // placeList:[],
                showView2: true,
                showView1: false,
                bg2: true, 
                bg1: false,
              });
            },
          });
        }
        
        this.addToHistory(keyword);
      },
    });
  },
  onClear(){
    this.setData({
      value:'',
    });
  },
  onCancel(){
    this.setData({
      areaList:[],
     
      placeList:[],
      value:'',
    });
    my.navigateBack();
  },
  onItemTap({name}){
    this.setData({
      value:name,
    });
    this.onInput(name);
  },
  onListItemTap(e){
    const {name} = e.target.dataset;
    this.addToHistory(name);
  },
  addToHistory(keyword){
    const searchHistory = my.getStorageSync({
      key: 'searchHistory' }).data || [];
    let index = -1;

    for(let i = 0;i < searchHistory.length;i++){
      if(searchHistory[i].name === keyword){
        index = i;
        break;
      }
    }

    let history = [];

    if(searchHistory.length >= 8){
      if(index === -1){
        history = [{name: keyword}, ...searchHistory.slice(0,7)];
      } else {
        searchHistory.slice(index, 1).slice(0,7)
        history = [{name:keyword}, ...searchHistory];
      }
    } else {
      if(index === -1){
        history = [{ name: keyword }, ...searchHistory];
      }else {
        searchHistory.splice(index, 1) 
        history = [{ name: keyword }, ...searchHistory];
      }
    }

    my.setStorageSync({
      key: 'searchHistory', // 缓存数据的key
      data: history, // 要缓存的数据
    });
    this.setData({
      history,
    })

  },
  onChange1() {
    this.setData({ bg1: true, bg2: false });
    this.setData({ showView1: true, showView2: false });
    var keyword = this.data.value;
    var rentType = 1;
    my.httpRequest({
      url:app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do", 
      method: 'POST',
      data:{
        keyword:keyword,
        rentType:rentType,
        pageIndex: this.data.pageIndex,
        pageSize: 10,
      },
      success: (res) => {
        console.log(res.data.data)
        this.setData({
          placeList: res.data.data,
          // areaList:[],
        });
        this.addToHistory(keyword);
      },
    });
  },
  onChange2() {
    this.setData({ bg2: true, bg1: false });
    this.setData({ showView2: true, showView1: false });
    var keyword = this.data.value;
    var rentType = 2;
    my.httpRequest({
      url:app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do", 
      method: 'POST',
      data:{
        keyword:keyword,
        rentType:rentType,
        pageIndex: this.data.pageIndex,
        pageSize: 10,
      },
      success: (res) => {
        console.log(res.data.data)
        this.setData({
          areaList: res.data.data,
          // placeList:[],
        });
        this.addToHistory(keyword);
      },
    });
  },
    //前往房源详情
  goToHouseDetail(e){
    my.navigateTo({
    url: '/pages/houseinfo/houseinfo01/houseinfo01?id='+e.target.dataset.text+'&rentType='+e.target.dataset.type,
    })
  }
});