Page({
  data: {
    houseList:[{
      id:1001,
      address:'湘湖科创园1栋8楼',
      area:'杭州市萧山区时代大道4887号湘湖科创园',
      status:0,
    },{
      id:1002,
      address:'湘湖科创园1栋8楼',
      area:'杭州市萧山区时代大道4887号湘湖科创园',
      status:1,
    },{
      id:1003,
      address:'湘湖科创园1栋8楼',
      area:'杭州市萧山区时代大道4887号湘湖科创园',
      status:2,
    },],
  },
  onLoad() {},
  onShow(){},
  toMyroominfo(e){
    var id = e.target.dataset.roomid;
    
    console.log(id+"iiiiiiiiiiiiiii")
     my.navigateTo({
      url: '/pages/index/myroominfo/myroominfo?id='+id,
    });
  },
});
