var  app = getApp();
Page({
  data: {
    furnitureList:[],
    selectId:'',
    furnitures:'',
  },
  onLoad(option) {
    var f = option.furniture;
    var furniture = f.split(',');
    console.log(furniture);
    this.getFurnitureList(furniture);
    this.setData({
      selectId:f,
    });
  },
  //获取家具
  getFurnitureList(furniture){
    var that=this;
    var furnitures='';
     my.request({
      url: app.globalData.baseUrl_whj+"IF/selectData/getFurnitureListIF.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        var list = res.data.data;
        for(var i=0;i<furniture.length;i++){
          for(var j=0;j<list.length;j++){
            if(list[j].id==furniture[i]){
              list[j].deleted=true;
              furnitures=furnitures+list[j].furniture+',';
            }
          }
        }
        var _furnitures = furnitures.substr(0,furnitures.length-1)
        if(res.data.success){
          that.setData({
            furnitureList:list,
            furnitures:_furnitures,
          });
        }
      },
      fail: function(res) {
       console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  
  },
   onChange(e) {
     var that = this;
     console.log(e)
     var furnitureList = that.data.furnitureList;
     console.log(furnitureList)
     var furnitures='';
    //  var furniture = furnitureList.split(',');
     var idlist = e.detail.value;
     for(let i=0;i<furnitureList.length;i++){
       for(let j=0;j<idlist.length;j++){
         if(furnitureList[i].id==idlist[j]){
           furnitures=furnitures+','+furnitureList[i].furniture;
         }
       }
     }
      console.log(idlist)
      furnitures=furnitures.substr(1);
     this.setData({
       selectId:e.detail.value,
       furnitures:furnitures,
     });
    
  },
  confirm(){
    var sid = this.data.selectId;
    if(typeof(sid)=='string'){
      var selectId = sid.split(',');
    }else{
      var selectId=sid;
    }
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    
    prevPage.setData({
      furniture:selectId,
      furniturelist:this.data.furnitures,
    })
    my.navigateBack({
      delta: 1,
    });
    // my.alert({
    //   title: this.data.selectId,
    // });
  }

});
