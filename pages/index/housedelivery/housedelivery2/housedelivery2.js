var towards=['朝东','朝南','朝西','朝北','东南','西北','东北','西南'];
var decoration=['毛坯','简装','精装','豪装'];
Page({
  data: {
    huxingList:[],
    huxing:'',
    showToward:false,
    chaoxiang:'',
    zhuangxiu:'',
    towardsArray:towards,
    decorationArray:decoration,
    vaddress:'',
    varea:'',
    vowner:'',
    vownerCard:'',
    vrelation:'',
    idCardImageSrc1:'/image/zpbj.png',
    idCardImageSrc2:'/image/zpbj.png',
    houseImageSrc1:'/image/zpbj.png',
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
  bindPickerChange1(e){
    console.log(e)
    var that = this;
    var index = e.detail.value;
    var arr = that.data.towardsArray;
    this.setData({
      showToward:true,
      chaoxiang:arr[index],
    });
  },
   //选择装修类型
  bindPickerChange2(e){
    console.log(e)
    var that = this;
    var index = e.detail.value;
    var arr = that.data.decorationArray;
    this.setData({
      showToward:true,
      zhuangxiu:arr[index],
    });
  },
  toInput(e){
    console.log(e.detail.value)
    var that = this;
    if(e.target.dataset.t==1){
      that.setData({
        vaddress:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        varea:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        vowner:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        vownerCard:e.detail.value,
      });
    }
    if(e.target.dataset.t==5){
      that.setData({
        vrelation:e.detail.value,
      });
    }
  },
  next(){
    
  },
  toNext(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery3/housedelivery3',
    })
  },
  //身份证正面
  selectImageView1(){
    var that=this;
    my.chooseImage({
      count: 1,
      success: (res) => {
        // img.src = res.apFilePaths[0];
        that.setData({
          idCardImageSrc1:res.apFilePaths[0]
        });
      },
    });
  },

   //身份证反面
  selectImageView2(){
    var that=this;
    my.chooseImage({
      count: 1,
      success: (res) => {
        // img.src = res.apFilePaths[0];
        that.setData({
          idCardImageSrc2:res.apFilePaths[0]
        });
      },
    });
  },
   //房产证
  selectImageView3(){
    var that=this;
    my.chooseImage({
      count: 1,
      success: (res) => {
        // img.src = res.apFilePaths[0];
        that.setData({
          houseImageSrc1:res.apFilePaths[0]
        });
      },
    });
  },
});
