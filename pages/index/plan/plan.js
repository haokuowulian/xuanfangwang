const unfinishedplan = [
  {
    id:1,
    headimg:'/image/mine/posion.png',
    name:'胡海',
    status:'0',
    plantime:'-',
    planplace:'-',
    house:[
      {
        houseimg:'/image/house6.png',
        housename:'湘湖科创园1栋8楼',
        houseinfo:'153m² 5/8层',
        price:'￥28000元/月',
        housestatus:'0',
      }
    ],
    ownerid:'100',
  },
  {
    id:2,
    headimg:'/image/mine/posion.png',
    name:'胡海',
    status:'0',
    plantime:'2018-08-30 09:00',
    planplace:'湘湖科创园',
    house:[
      {
        houseimg:'/image/house6.png',
        housename:'湘湖科创园1栋8楼',
        houseinfo:'153m² 5/8层',
        price:'￥28000元/月',
        housestatus:'0',
      }
    ],
    ownerid:'100',
  },
]
const finishplan = [
  {
    id:3,
    headimg:'/image/mine/posion.png',
    name:'胡海',
    status:'2',
    plantime:'-',
    planplace:'-',
    house:[
      {
        houseimg:'/image/house6.png',
        housename:'湘湖科创园1栋8楼',
        houseinfo:'153m² 5/8层',
        price:'￥28000元/月',
        housestatus:'0',
      }
    ],
    ownerid:'100',
  },
  {
    id:4,
    headimg:'/image/mine/posion.png',
    name:'胡海',
    status:'1',
    plantime:'2018-08-30 09:00',
    planplace:'湘湖科创园',
    house:[
      {
        houseimg:'/image/house6.png',
        housename:'湘湖科创园1栋8楼',
        houseinfo:'153m² 5/8层',
        price:'￥28000元/月',
        housestatus:'0',
      }
    ],
    ownerid:'100',
  },
]

var app = getApp();
Page({
  data: {
    unfinishedplan,
    finishplan,
    complete:false,
    click1:true,
    click2:false,
  },
  onLoad() {
    console.log(app.globalData.userid)
    var uid =null;

     my.getStorage({
      key: 'userinfo', // 缓存数据的key
      success: (res) => {
        uid=res.data.info.id;
      },
    });
    console.log(uid);
    my.httpRequest({
      url: 'http://192.168.1.89:8080/LLGY/IF/bespeak/getBespeakList.do?uid='+uid, // 目标服务器url
      success: (res) => {
        var list = res.data.data;
        var l = [];
        console.log(list)
        for(let i = 0;i<list.length;i++){
          l.push(list[i])
          unfinishedplan.push(list[i])
        }
        console.log(res)
      },
    });
  },
  onShow(){
    // console.log(app.globalData.userid+'111')
  },
  unfinished(){
    this.setData({
      complete:false,
      click1:true,
      click2:false,
    });
  },
  finish(){
    this.setData({
      complete:true,
      click1:false,
      click2:true,
    });
  },
  deletePlan(e){
    let id = e.target.dataset.pid;
    console.log(id)
    my.httpRequest({
      url: 'zzzzzzzz?id='+id, // 目标服务器url
      success: (res) => {
        console.log("success")
      },
    });
  },
});
