var towards=['朝东','朝南','朝西','朝北','东南','西北','东北','西南'];
var decoration=['毛坯','简装','精装','豪装'];
Page({
  data: {
    huxingList:[],
    huxing:'',
    showToward:false,
    towardsArray:towards,
    decorationArray:decoration
  },
  onLoad() {
    var aList=[];
    for(var a=0;a<6;a++){
      var bList=[];
      for(var b=0;b<6;b++){
        var cList=[];
        for(var c=0;c<6;c++){
          var dList=[];
          for(var d=0;d<6;d++){
            var eList=[];
            for(var e=0;e<6;e++){
              var obj={
                name:e+"阳台"
              };
              eList.push(obj);
            }
            var obj={
              name:d+"厨",
              subList:eList
            };
            dList.push(obj);
          }
          var obj={
              name:c+"卫",
              subList:dList
            };
          cList.push(obj);
        }
        var obj={
              name:b+"厅",
              subList:cList
            };
        bList.push(obj);
      }
      var obj={
              name:a+"室",
              subList:bList
            };
      aList.push(obj);
    }
    
    this.setData({
      huxingList:aList
    });
  },
  //选择户型
  selectHuXing(){
    var that=this;
    my.multiLevelSelect({
      title: '户型选择',
      list: this.data.huxingList,
      success(res){
        var str=''
        for(var i=0;i<5;i++){
          str=str+res.result[i].name;
        }
        console.log(str);
        that.setData({
          huxing:str
        });
      }
    })
  },
  //选择朝向
  selectToward(){
    this.setData({
      showToward:true
    });
  },
  next(){
     my.navigateTo({
    url: '/pages/index/housedelivery/housedelivery3/housedelivery3',
    })
  }
});
