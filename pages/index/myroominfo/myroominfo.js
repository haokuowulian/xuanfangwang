const roomlist = [
  {
    roomid:2001,
    imgurl:'/image/house6.png',
    roomtitle:'湘湖科创园1栋8楼-01卧',
    price:'8231',
    statusinfo:'已租|男|27岁',
    roomsize:'25m²',
  },
  {
    roomid:2002,
    imgurl:'/image/house6.png',
    roomtitle:'湘湖科创园1栋8楼-01卧',
    price:'8231',
    statusinfo:'已租|男|27岁',
    roomsize:'25m²',
  },
  {
    roomid:2003,
    imgurl:'/image/house6.png',
    roomtitle:'湘湖科创园1栋8楼-01卧',
    price:'8231',
    statusinfo:'已租|男|27岁',
    roomsize:'25m²',
  },
  {
    roomid:2004,
    imgurl:'/image/house6.png',
    roomtitle:'湘湖科创园1栋8楼-01卧',
    price:'8231',
    statusinfo:'已租|男|27岁',
    roomsize:'25m²',
  },
]
Page({
  data: {
    houseid:'',
    roomlist,
  },
  onLoad(options) {
    console.log(options.id)
    this.setData({
      houseid:options.id,
    });
  },
});
