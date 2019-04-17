const app = getApp();



Page({
  data: {
    click1:true,
    click2:false,
    btnshow:false,
    management_house:false,
    selectAll:false,
    selected:[],
    selectid:[],
    userId:'',
    pageIndex:1,
    imgUrl:app.globalData.baseImgUrl_whj,
    collectList:[]
  },
  onLoad() {
    var userId=my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    this.setData({
      userId:userId
    });
    // this.getMyCollect();
    my.httpRequest({
      url: 'xxxxxxx?token='+app.globalData.token, // 目标服务器url
      success: (res) => {
        var houses = res.house;
        this.setData({
          collectList:houses,
        });
      },
    });
  },
  onShow(){
    this.getMyCollect();
  },
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
      var arr1 = that.data.collectList;
      var index = e.target.dataset.id;
      console.log(index);
      arr1[index].deleted = !arr1[index].deleted;
      console.log(arr1[index]);

      for(let i=0;i<arr1.length;i++){
         if(arr1[i].deleted){
           arr2.push(arr1[i])
         }
      };
      that.setData({
        collectList: arr1,
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
      let arr = that.data.collectList;
      let arr2 = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].deleted == true) {
          arr2.push(arr[i]);
        }else{
          arr[i].deleted = true;
          arr2.push(arr[i]);
        }
      }
      that.setData({
        collectList:arr2,
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
    let arr = that.data.collectList;
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].deleted = false;
        arr2.push(arr[i]);
    }
    that.setData({
      collectList: arr2,
      selected:[]
    })
  },
  // 删除
   deleteitem(){
    var that = this;
    let arr = that.data.collectList;
    let arr2 = [];
    let ids = [];
    console.log(arr);
    for(let i=0;i<arr.length;i++){
      if (arr[i].deleted == false){
        arr2.push(arr[i]);
      }else{
        ids.push(arr[i].id);
      }
    }
    var that=this;
     my.showLoading();
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/myFavorite/delMyFavoriteByIds.do",
      method: 'POST',
      data: {
        userId:this.data.userId,
        ids: ids.join(','),
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        
        if(res.data.success){
          my.hideLoading();
          that.setData({
            collectList:arr2,
            selected:[]
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

  //获取我的收藏列表
  getMyCollect(){
    var that=this;
   
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/myFavorite/getMyFavoriteListIF.do",
      method: 'POST',
      data: {
        userId:this.data.userId,
        pageIndex: this.data.pageIndex,
        pageSize: 6,
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
           if(that.data.pageIndex==1){
                 that.setData({
            collectList:res.data.data
          });
            }else if(that.data.collectList.length<res.data.count){
               that.setData({
                collectList:that.data.collectList.concat(res.data.data)
              });
            }
          my.stopPullDownRefresh();
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
    this.getMyCollect();
  },
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
     this.getMyCollect();
  },
  //房屋详情
  toHouseInfo(e){
    console.log('*********')
    console.log(e)
    my.navigateTo({
    url: '/pages/houseinfo/houseinfo03/houseinfo03?id='+e.target.dataset.text+'&rentType='+e.target.dataset.type,
    })
  },
});
