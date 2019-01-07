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
    unfinishedplan:[],
    finishplan:[],
    headimg:'',
    complete:false,
    click1:true,
    click2:false,
  },
  onLoad() {
    var that = this;
    var uid;
    var avatar;
     uid = my.getStorageSync({
     key: 'userId', // 缓存数据的key
   }).data;
     avatar = my.getStorageSync({
     key: 'avatar', // 缓存数据的key
   }).data;
   that.setData({
     headimg:avatar,
   });
    console.log(uid);
    my.httpRequest({
      url: 'http://192.168.1.89:8080/LLGY/IF/bespeak/getBespeakList.do?uid='+uid, // 目标服务器url
      success: (res) => {
        var list = res.data.data;
        var l = [];
        var m = [];
        console.log(list)
        for(let i = 0;i<list.length;i++){
          // getRoomInfo(list[i].apartmentId,list[i].roomId,);

          if(list[i].state==0||list[i].state==3||list[i].state==4){
            l.push(list[i])

            // console.log(l)
          }
          if(list[i].state==1||list[i].state==2){
            m.push(list[i])
            // console.log(m)
          }
          
          // unfinishedplan.push(list[i])
          // console.log(unfinishedplan)
        }
        that.setData({
          unfinishedplan:m,
          finishplan:l,
        });
        console.log('-------------分割线------------------')
        console.log(that.data.unfinishedplan)
        console.log(that.data.finishplan)
        // console.log(res)
      },
    });
    
  },
  onShow(){
    // console.log(app.globalData.userid+'111')
  },
  getRoomInfo(apartmentId,roomId){
    my.httpRequest({
      url: 'xxx?apartmentId='+apartmentId+'&rooId='+roomId, // 目标服务器url
      success: (res) => {
        
      },
    });
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
  confirmPlan(e){
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
