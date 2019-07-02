var app=getApp();
//原js
Page({
  data: {
    click1:true,
    click2:false,
    userId:'',
    pageIndex:1,
    rentType:1,
    houseList:[],
    imgUrl:app.globalData.baseImgUrl_whj,
  },
  onLoad() {
    
    this.getHouseList(1);
  },
  onShow(){},
  toMyroominfo(e){
    var id = e.target.dataset.roomid;
    
    console.log(id+"iiiiiiiiiiiiiii")
     my.navigateTo({
      url: '/pages/index/myroominfo/myroominfo?id='+id,
    });
  },
  unfinished(){
    this.setData({
      click1:true,
      click2:false,
      pageIndex:1,
      rentType:1
    });
    this.getHouseList(1);
  },
  finish(){
    this.setData({
      click1:false,
      click2:true,
      pageIndex:1,
      rentType:2,
    });
     this.getHouseList(2);
  },
  //获取房源列表
  getHouseList(rentType){
    var userId=my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    var that=this;
     my.request({
      url: app.globalData.baseUrl_whj+"IF/housing/getHousingListIFByLandlord.do",
      // url: "http://192.168.1.193:8080/LLGY/"+"IF/housing/getHousingListIFByLandlord.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        userId:userId,
        rentType:rentType,
        pageIndex: this.data.pageIndex,
        pageSize: 6,
      },
      dataType: 'json',
      success: function(res) {
       console.log(res.data);
        if(res.data.success){
           if(that.data.pageIndex==1){
            that.setData({
              houseList:res.data.data
            });
            }else if(that.data.houseList.length<res.data.count){
               that.setData({
                houseList:that.data.houseList.concat(res.data.data)
              });
            }
          my.stopPullDownRefresh();
          console.log(that.data.houseList);
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
  onPullDownRefresh() {
    this.setData({
      pageIndex:1
    });
     var rentType = this.data.rentType;
     console.log(rentType)
    this.getHouseList(rentType);
  },
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
     var rentType = this.data.rentType;
     console.log(rentType)
     this.getHouseList(rentType);
  },
  //前往房源详情
  goToHouseDetail(e){
    my.navigateTo({
    url: '/pages/houseinfo/houseinfo01/houseinfo01?id='+e.target.dataset.text+'&rentType='+e.target.dataset.type+'&isLandrord=true',
    })
  },
  //下架房源
  toCancel(e){
    console.log(e.target.dataset.houseid)
    console.log(e.target.dataset.type)
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    
    

    my.confirm({
      title: '温馨提示',
      content: '是否下架该房源？(已租房源无法直接下架，需与租客协商退租)',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (res) => {
        if(res.confirm){
          my.request({
            url: app.globalData.baseUrl_whj+'IF/housing/cancelRelease.do', // 目标服务器url
            method: 'POST',
            headers:{
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              userId:userId,
              housingType:e.target.dataset.type,
              housingId:e.target.dataset.houseid,
            },
            dataType: 'json',
            success: (res) => {
              console.log(res)
              if(res.data.success){
                my.alert({
                  title: '操作成功！',
                  success: () => {
                    that.getHouseList(e.target.dataset.type);
                  },
                });
              }
            },
          });
        }
      },
    });
  },
  //撤回审核
  toBack(e){
    console.log(e.target.dataset.houseid)
    console.log(e.target.dataset.type)
    var that = this;
    var userId = my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;

    my.confirm({
      title: '温馨提示',
      content: '是否取消发布该房源？',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (res) => {
        if(res.confirm){
          my.request({
            url: app.globalData.baseUrl_whj+'IF/housing/cancelRelease.do', // 目标服务器url
            method: 'POST',
            headers:{
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              userId:userId,
              housingType:e.target.dataset.type,
              housingId:e.target.dataset.houseid,
            },
            dataType: 'json',
            success: (res) => {
              console.log(res)
              if(res.data.success){
                my.alert({
                  title: '操作成功！',
                  success: () => {
                    that.getHouseList(e.target.dataset.type);
                  },
                });
              }
            },
          });
        }
      },
    });
  },
  toHouseInfo(e){
    console.log(e)
    console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.type)
    my.navigateTo({
      url: '/pages/houseinfo/houseinfo02/houseinfo02?id='+e.currentTarget.dataset.id+'&rentType='+e.currentTarget.dataset.type,
    })
  },
});
