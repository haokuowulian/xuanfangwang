const chatlist = [
  {
    uid:0,
    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2122463124,2987890103&fm=27&gp=0.jpg',
    status:0,
  },
  {
    uid:1,
    img:'http://img3.imgtn.bdimg.com/it/u=1069844940,1990511673&fm=26&gp=0.jpg',
    status:0,
  },
]
Page({
  data: {
    chatlist:chatlist,

  },
  onLoad() {},
  toChat(e){
    console.log(e)
    var uid = e.target.dataset.uid;
    my.navigateTo({
       url: '/pages/chat/chat?uid='+uid,
    });
  },
});
