var  app = getApp();
Page({
  data: {
    featureList:[],
    selectId:'',
    features:'',
  },
  onLoad(option) {
    var f = option.feature;
    var feature = f.split(',');
    console.log(feature);
    this.getFurnitureList(feature);
    this.setData({
      selectId:f,
    });
  },
  //获取特色
  getFurnitureList(feature){
    var that=this;
    var features='';
     my.request({
      url: app.globalData.baseUrl_whj+"IF/selectData/getFeatureListIF.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        var list = res.data.data;
        for(var i=0;i<feature.length;i++){
          for(var j=0;j<list.length;j++){
            if(list[j].id==feature[i]){
              list[j].deleted=true;
              features=features+list[j].feature+',';
            }
          }
        }
        var _features = features.substr(0,features.length-1)
        if(res.data.success){
          that.setData({
            featureList:list,
            features:_features,
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
     var featureList = that.data.featureList;
     console.log(featureList)
     var features='';
    //  var furniture = furnitureList.split(',');
     var idlist = e.detail.value;
     for(let i=0;i<featureList.length;i++){
       for(let j=0;j<idlist.length;j++){
         if(featureList[i].id==idlist[j]){
           features=features+','+featureList[i].feature;
         }
       }
     }
      console.log(idlist)
      features=features.substr(1);
     this.setData({
       selectId:e.detail.value,
       features:features,
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
      feature: selectId,
      featurelist:this.data.features,
    })
    my.navigateBack({
      delta: 1,
    });
    // my.alert({
    //   title: this.data.selectId,
    // });
  }

});
