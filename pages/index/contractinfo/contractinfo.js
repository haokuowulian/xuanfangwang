var app = getApp();
Page({
  data: {
    baseUrl:app.globalData.baseUrl,
    url:'',
    type:0,
    zkName:''
  },
  onLoad(option) {
    this.getContractinfo(option.id);
    this.setData({
      type:option.type
    });
  },
  getContractinfo(id){
    var that = this;
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.httpRequest({
      url:app.globalData.baseUrl+ 'IF/contract/getContractInfo.do', // 目标服务器url
      data:{
        // id:54,
        id:id,
        // pageIndex:that.data.pageIndex,
        // pageSize:6,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res.data.contractInfo);
        that.setData({
          contract:res.data.contractInfo,
          url:app.globalData.baseUrl+res.data.contractInfo.url,
          zkName:res.data.zkName
        });
      },
      fail: function(res) {
        console.log('-------fail--------');
        console.log(res);
      },
    });
  },
  onCancel(){
    my.confirm({
      title: '温馨提示',
      content: '是否申请解约？',
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      success: (res) => {
        if(res.confirm){
          my.alert({
            title: '已提交申请，请耐心等待处理。' 
          });
        }
      },
    });
    
  },
  onContinue(){
    my.confirm({
      title: '温馨提示',
      content: '是否申请续约？',
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      success: (res) => {
        if(res.confirm){
          my.alert({
            title: '已提交申请，请耐心等待处理。' 
          });
        }
      },
    });
  },
});
