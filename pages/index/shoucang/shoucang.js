const houseList = [
  {
    id:1,
    imgpath:'/image/house6.png',
    name:'湘湖科创园1栋8楼',
    price:'￥28000元/月',
    status:'0',
    checked: false,
  },
  {
    id:2,
    imgpath:'/image/house6.png',
    name:'湘湖科创园1栋8楼',
    price:'￥28000元/月',
    status:'1',
    checked: false,
  },
  {
    id:3,
    imgpath:'/image/house6.png',
    name:'湘湖科创园1栋8楼',
    price:'￥28000元/月',
    status:'2',
    checked: false,
  },
  {
    id:4,
    imgpath:'/image/house6.png',
    name:'湘湖科创园1栋8楼',
    price:'￥28000元/月',
    status:'2',
    checked: false,
  },
  {
    id:5,
    imgpath:'/image/house6.png',
    name:'湘湖科创园1栋8楼',
    price:'￥28000元/月',
    status:'2',
    checked: false,
  },
]

Page({
  data: {
    houseList,
    click1:true,
    click2:false,
    btnshow:false,
    management_house:false,
    selectAll:false,
    selected:[],
    selectid:[],
  },
  onLoad() {},
  management(){
    this.setData({
      btnshow:true,
    });
  },
  management(){
    this.setData({
      management_house:true,
      btnshow:true,
    });
  },
  management_cancel(){
    this.setData({
      management_house:false,
      btnshow:false,
    });
  },
  // 选中
  select(e){
    var that = this;
    let arr2 = [];
    if(that.data.management_house ==false){
      return;
    }else{
      var arr1 = that.data.houseList;
      var index = e.target.dataset.id;
      console.log(index);
      arr1[index].checked = !arr1[index].checked;
      console.log(arr1[index]);

      for(let i=0;i<arr1.length;i++){
         if(arr1[i].checked){
           arr2.push(arr1[i])
         }
      };
      that.setData({
        houseList: arr1,
        selected:arr2
      })
    }
  },
  // 全选
  selectAll(e){
    let that = this;
    that.setData({
      selectAll:true,
    });
    if(that.data.selectAll){
      let arr = that.data.houseList;
      let arr2 = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked == true) {
          arr2.push(arr[i]);
        }else{
          arr[i].checked = true;
          arr2.push(arr[i]);
        }
      }
      that.setData({
        houseList:arr2,
         selected:arr2,
      });
    }
  },
  // 全部取消
  select_none(e){
    let that = this;
    that.setData({
      selectAll:!that.data.selectAll,
    })
    let arr = that.data.houseList;
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].checked = false;
        arr2.push(arr[i]);
    }
    that.setData({
      houseList: arr2,
      selected:[]
    })
  },
  // 删除
   deleteitem(){
    var that = this;
    let arr = that.data.houseList;
    let arr2 = [];
    let ids = [];
    console.log(arr);
    for(let i=0;i<arr.length;i++){
      if (arr[i].checked == false){
        arr2.push(arr[i]);
      }else{
        ids.push(arr[i].id);
      }
    }
    console.log(ids);
    my.httpRequest({
      url: '删除url?ids='+ids, // 目标服务器url
      success: (res) => {
        
      },
    });
    that.setData({
      houseList:arr2,
      selected:[]
    })
  },
});
