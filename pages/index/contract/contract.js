const contract1 = [
//   {
//     id:'10001',
//     address:'湘湖科创园1栋8楼',
//     date:'2018-09-13至2018-12-13',
//     price:'￥28000元/月（月付）',
//     status:1,
//   },
//   {
//     id:'10002',
//     address:'湘湖科创园1栋8楼',
//     date:'2018-09-13至2018-12-13',
//     price:'￥28000元/月（月付）',
//     status:2,
//   },
]
const contract2 = [
//   {
//     id:'10001',
//     address:'湘湖科创园1栋8楼',
//     date:'2018-09-13至2018-12-13',
//     price:'基本服务费：￥28000',
//     status:1,
//   },
//   {
//     id:'10002',
//     address:'湘湖科创园1栋8楼',
//     date:'2018-09-13至2018-12-13',
//     price:'基本服务费：￥28000',
//     status:2,
//   },
]
var app = getApp();
Page({
  data: {
    imgurl:app.globalData.baseImgUrl_whj,
    contract:[],
    roleId:'',
    roleType:'',
    pageIndex:0,

  },
  onLoad(option) {
    var roleType = option.roleType;
    this.setData({
      roleType:roleType,
    });
   if(roleType==1){
     this.getContract();
   }
   if(roleType==2){
     this.getContract();
   }
  },
  getContract(){
    var that = this;
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url:app.globalData.baseUrl+ 'IF/contract/getContractList.do', // 目标服务器url
      data:{
        uid:59,
        // uid:uid,
        // pageIndex:that.data.pageIndex,
        // pageSize:6,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res);
        that.setData({
          contract:res.data.data,
        });
      },
      fail: function(res) {
        console.log('-------fail--------');
        console.log(res);
      },
    });
  },
  toContractinfo(){
    var id = this.data.contract.id;
    my.navigateTo({
      url:'/pages/index/contractinfo/contractinfo?id='+id,
    });
  },
});
