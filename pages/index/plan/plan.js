const unfinishedplan = [
  {
    headimg:'/image/mine/posion.png',
    name:'胡海',
    status:'待确认',
    plantime:'-',
    planplace:'-',
    house:[
      {
        houseimg:'/image/house6.png',
        housename:'湘湖科创园1栋8楼',
        houseinfo:'153m² 5/8层',
        price:'￥28000元/月',
        housestatus:'待租中',
      }
    ],
    ownerid:'100',
  },
  {
    headimg:'/image/mine/posion.png',
    name:'胡海',
    status:'待确认',
    plantime:'2018-08-30 09:00',
    planplace:'湘湖科创园',
    house:[
      {
        houseimg:'/image/house6.png',
        housename:'湘湖科创园1栋8楼',
        houseinfo:'153m² 5/8层',
        price:'￥28000元/月',
        housestatus:'待租中',
      }
    ],
    ownerid:'100',
  },
]
const finishplan = [
  {
    headimg:'/image/mine/posion.png',
    name:'胡海',
    status:'已取消',
    plantime:'-',
    planplace:'-',
    house:[
      {
        houseimg:'/image/house6.png',
        housename:'湘湖科创园1栋8楼',
        houseinfo:'153m² 5/8层',
        price:'￥28000元/月',
        housestatus:'待租中',
      }
    ],
    ownerid:'100',
  },
  {
    headimg:'/image/mine/posion.png',
    name:'胡海',
    status:'已完成',
    plantime:'2018-08-30 09:00',
    planplace:'湘湖科创园',
    house:[
      {
        houseimg:'/image/house6.png',
        housename:'湘湖科创园1栋8楼',
        houseinfo:'153m² 5/8层',
        price:'￥28000元/月',
        housestatus:'待租中',
      }
    ],
    ownerid:'100',
  },
]
Page({
  data: {
    unfinishedplan,
    finishplan,
    complete:false,
    click1:true,
    click2:false,
  },
  onLoad() {},
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
});
