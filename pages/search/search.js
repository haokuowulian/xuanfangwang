import debounce from '/util/debounce';

const area = [
  {
    name: '相墅花园',
    area: '闻堰镇-萧山区',
    id: '1',
    imgpath: '/image/house5.png',
    housename: '武林广场昊呐酒店',
    houseinfo: '杭州西湖武林广场',
    houseprice: '￥231起',
    distance: '距2号线建设一路1222米',
    point: '豪华型',
  },
  {
    name: '相墅花园',
    area: '闻堰镇-萧山区',
    id: '2',
    imgpath: '/image/house5.png',
    housename: '武林广场昊呐酒店',
    houseinfo: '杭州西湖武林广场',
    houseprice: '￥231起',
    distance: '距2号线建设一路1222米',
    point: '豪华型',
  },
  {
    name: '相墅花园',
    area: '闻堰镇-萧山区',
    id: '3',
    imgpath: '/image/house5.png',
    housename: '武林广场昊呐酒店',
    houseinfo: '杭州西湖武林广场',
    houseprice: '￥231起',
    distance: '距2号线建设一路1222米',
    point: '豪华型',
  },
  {
    name: '相墅花园',
    area: '闻堰镇-萧山区',
    id: '4',
    imgpath: '/image/house5.png',
    housename: '武林广场昊呐酒店',
    houseinfo: '杭州西湖武林广场',
    houseprice: '￥231起',
    distance: '距2号线建设一路1222米',
    point: '豪华型',
  },
]
const place = [
  {
    name: '相墅花园',
    area: '闻堰镇-萧山区',
    id: '1',
    imgpath: '/image/house3.png',
    housename: '萧山大成国际1居室',
    houseinfo: '75m² | 2/8层',
    houseprice: '￥8231/月',
    distance: '距2号线建设一路1222米',
    point: '离地铁近',
  },
  {
    name: '相墅花园',
    area: '闻堰镇-萧山区',
    id: '2',
    imgpath: '/image/house3.png',
    housename: '萧山大成国际1居室',
    houseinfo: '75m² | 2/8层',
    houseprice: '￥8231/月',
    distance: '距2号线建设一路1222米',
    point: '离地铁近',
  },
  {
    name: '相墅花园',
    area: '闻堰镇-萧山区',
    id: '3',
    imgpath: '/image/house3.png',
    housename: '萧山大成国际1居室',
    houseinfo: '75m² | 2/8层',
    houseprice: '￥8231/月',
    distance: '距2号线建设一路1222米',
    point: '离地铁近',
  },
  {
    name: '相墅花园',
    area: '闻堰镇-萧山区',
    id: '4',
    imgpath: '/image/house3.png',
    housename: '萧山大成国际1居室',
    houseinfo: '75m² | 2/8层',
    houseprice: '￥8231/月',
    distance: '距2号线建设一路1222米',
    point: '离地铁近',
  },
]

Page({
  data: {
    value:'',
    history: my.getStorageSync({ key: 'searchHistory' }).data || [],
    hot: [
      { name: '湘湖科创园',
        area: '科技园区-萧山区',
        imgpath: '/image/house3.png',
        housename: '萧山大成国际1居室',
        houseinfo: '75m² | 2/8层',
        houseprice: '￥8231/月',
        distance: '距2号线建设一路1222米',
        point: '离地铁近',
         },
      { name: '科技园区-萧山区',
        area: '闻堰镇-萧山区',
        imgpath: '/image/house3.png',
        housename: '萧山大成国际1居室',
        houseinfo: '75m² | 2/8层',
        houseprice: '￥8231/月',
        distance: '距2号线建设一路1222米',
        point: '离地铁近',
      },
    ],
    areaList: [],
    placeList: [],
    bg1: true,
    bg2: false,
    showView1: false,
    showView2: false,
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
    // my.httpRequest({
    //   url: '', // 目标服务器url  keyword作为参数
    //   success: (res) => {
    //     this.setData({
    //       area: res.hotels,

    //       place: res.houses,
    //     });
    //   },
    // });

    const areaList = [];
  
    const placeList = [];
    for(let i = 0; i < area.length; i++){
      if (area[i].name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1 
      || area[i].housename.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1
      || area[i].area.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1){
        areaList.push(area[i]);
      }
    }

  

    for(let i = 0; i < place.length; i++){
      if(place[i].name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase())!=-1
        || place[i].housename.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1
        || place[i].area.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1){
         placeList.push(place[i]);
      }
    }
    this.setData({areaList,placeList})
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
  },
  onChange2() {
    this.setData({ bg2: true, bg1: false });
    this.setData({ showView2: true, showView1: false });
  },
});