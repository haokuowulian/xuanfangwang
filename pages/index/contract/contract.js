const contract1 = [
  {
    id:'10001',
    address:'湘湖科创园1栋8楼',
    date:'2018-09-13至2018-12-13',
    price:'￥28000元/月（月付）',
    status:1,
  },
  {
    id:'10002',
    address:'湘湖科创园1栋8楼',
    date:'2018-09-13至2018-12-13',
    price:'￥28000元/月（月付）',
    status:2,
  },
]
const contract2 = [
  {
    id:'10001',
    address:'湘湖科创园1栋8楼',
    date:'2018-09-13至2018-12-13',
    price:'基本服务费：￥28000',
    status:1,
  },
  {
    id:'10002',
    address:'湘湖科创园1栋8楼',
    date:'2018-09-13至2018-12-13',
    price:'基本服务费：￥28000',
    status:2,
  },
]
Page({
  data: {
    contract:[],
    roleId:'',
    roleType:'',
  },
  onLoad(option) {
    var roleType = option.roleType;
    this.setData({
      roleType:roleType,
    });
   if(roleType==1){
     this.setData({
       contract:contract2,
     });
   }
   if(roleType==2){
     this.setData({
       contract:contract1,
     });
   }
  },
});
