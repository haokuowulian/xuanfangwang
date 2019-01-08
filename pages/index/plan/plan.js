const app=getApp();
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

Page({
  data: {
    unfinishedplan:[],
    finishplan:[],
    headimg:'',
    complete:false,
    click1:true,
    click2:false,
    pageIndex:1,
    pageSize:6,
    planList:[],
    imgUrl:app.globalData.baseImgUrl_whj
  },
  onLoad() {
    var that = this;
    var avatar;
     
     avatar = my.getStorageSync({
     key: 'avatar', // 缓存数据的key
   }).data;
   that.setData({
     headimg:avatar,
   });
    
   
    this.getBespeakList();
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
    this.getBespeakList();
  },
  finish(){
    this.setData({
      complete:true,
      click1:false,
      click2:true,
    });
     this.getBespeakList();
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

  //获取预约列表
  getBespeakList(){
    var that=this;
    var manageState=0;
    if(this.data.complete){
      manageState=0;
    }else{
      manageState=1;
    }
    var uid = my.getStorageSync({
          key: 'userId', // 缓存数据的key
        }).data;
        console.log('--------'+this.data.pageIndex);
    var that=this;
    my.httpRequest({
      url: app.globalData.baseUrl+'IF/bespeak/getBespeakList.do',
      method: 'POST',
      data: {
        uid:uid,
        pageIndex:this.data.pageIndex,
        pageSize: 6,
        manageState:manageState
      },
      dataType: 'json',
      success: function(res) {
       console.log(res);
            if(res.data.success){
              if(that.data.pageIndex==1){
                that.setData({
                  planList:res.data.data
                });
            }else if(that.data.boutiqueHousing.length<res.data.count){
                that.setData({
                  planList:that.data.planList.concat(res.data.data)
                });
            }
           
            my.stopPullDownRefresh();
            }
      },
      fail: function(res) {
       console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  }
    
});
