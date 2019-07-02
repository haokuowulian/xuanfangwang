var app = getApp();
Page({
  data: {
    baseUrl:app.globalData.baseUrl,
    url:'',
    type:0,
    zkName:'',
    houseId:'',
    rentType:'',
    endTime:'',
    contractId:'',
  },
  onLoad(option) {
    this.getContractinfo(option.id);
    this.setData({
      type:option.type
    });
  },
  getContractinfo(id){
    var that = this;
    console.log(id)
    var uid= my.getStorageSync({
      key: 'userId', // 缓存数据的key
    }).data;
    my.request({
      url:app.globalData.baseUrl+ 'IF/contract/getContractInfo.do', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
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
          url:res.data.contractInfo.url,
          zkName:res.data.zkName,
          houseId:res.data.contractInfo.houseId,
          rentType:res.data.contractInfo.rentType,
          endTime:res.data.contractInfo.endTime,
          contractId:res.data.contractInfo.id,
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
          // my.alert({
          //   title: '已提交申请，请耐心等待处理。' 
          // });
        }
      },
    });
    
  },
  onContinue(){
    var that = this;
    var rentType = that.data.rentType;
    var houseId = that.data.houseId;
    var endTime = that.data.endTime;
    var contractId = that.data.contractId;
    console.log('endTime')
    console.log(endTime)
    console.log('endTime')
    my.confirm({
      title: '温馨提示',
      content: '是否申请续约？',
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      success: (res) => {
        if(res.confirm){
          my.request({
            url: app.globalData.baseUrl_whj+"IF/housing/getHousingDetailIF.do",
            method: 'POST',
            headers:{
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              id: houseId,
              rentType: rentType
            },
            dataType: 'json',
            success: function(res) {
              console.log(res)
              if(res.data.success){
                my.navigateTo({
                  url:'/pages/contract_renew/contract_renew?houseDetail='+JSON.stringify(res.data.data)+'&rentType='+rentType+'&endTime='+endTime+'&contractId='+contractId,
                });
              }else{
                my.alert({
                  title: '未知错误，请稍后再试！' 
                });
              }
            }
          })

          // my.navigateTo({
          //   url:'/pages/contract_renew/contract_renew?houseDetail='+JSON.stringify(this.data.houseDetail)+'&rentType='+rentType+'&endTime'+endTime,
          // });
        }
      },
    });
  },
  toBoard(){
    var that = this;
    var url = that.data.url;
    my.setClipboard({
      text: url, // 剪贴板数据
      success: (res) => {
        my.alert({
          title: '合同链接已复制' 
        });
      },
    });
  },
  // toDownload(){
  //   var that = this;
  //   var url = that.data.url;
  //   my.downloadFile({
  //     url: url,
  //     success({ apFilePath }) {
  //       // my.previewImage({
  //       //   urls: [apFilePath],
  //       // });
  //       console.log(apFilePath)
  //       my.saveFile();
  //     },
  //     fail(res) {
  //       my.alert({
  //         content: res.errorMessage || res.error,
  //       });
  //     },
  //   });
  // },
});
