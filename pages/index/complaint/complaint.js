const app = getApp();
var image1;
Page({
  data: {
    images:[],
    addImgText: "照片",
    canAddImg: true,
    upload1:false,
    img:'',
    img1:'',
    id:0,
    rentType:0,
    address:'',
    landlordId:0,
    type:0,
    uid:'',
    content:'',
    myText:'',
  },
  onLoad(option) {
    var userId = my.getStorageSync({
     key: 'userId', // 缓存数据的key
   }).data;
    console.log(option.houseId+'++++++++++房子+++++++++++'+option.rentType)
    this.setData({
      uid:userId,
      id:option.houseId,
      rentType:option.rentType,
    });
    this.getHouseDetail();
  },
   //获取房源详情
  getHouseDetail(){
    
    var that=this;
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHousingDetailIF.do",
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: that.data.id,
        rentType: that.data.rentType
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
          if(that.data.rentType==1){
            that.setData({
              address:res.data.data.apartment.address,
              landlordId:res.data.data.landlordId,
            });
          }
          if(that.data.rentType==2){
            that.setData({
              address:res.data.data.house.apartment.address,
              landlordId:res.data.data.landlordId,
            });
          }
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
  onWordLimit(e){
    console.log(e.detail.value)
    this.setData({
      myText:e.detail.value,
    });
  },

  //添加图片
  addImg(){
    var that = this;
    my.chooseImage({
      chooseImage: 1,
      success: (res) => {
        var tempFilePaths = res.apFilePaths
        console.log(tempFilePaths)
        that.data.images[0]=tempFilePaths[0];
          console.log(that.data.images+"ccccccccccccccc1")
          this.setData({
            img1:tempFilePaths[0],
            upload1:true,
            canAddImg:false,
          });
      },
    });
  },
  toCommit(e){
    var that = this;
    var image = that.data.img1;
    var content = that.data.myText+'';
    if(content!=''){
      if(image!=''){
        that.uploadImg(image,content);
      }else{
        that.commitData2(content);
      }
    }else{
      alert('建议内容不能为空！')
    }
    
  },
  uploadImg(image,content){
    var that = this;
    //图片上传
      my.uploadFile({
      url: app.globalData.baseUrl_oos,
      fileType: 'image',
      fileName: 'file',
      formData:{savePrefix:'complaintSuggest/'},
      filePath: image,
      success: res => {
        console.log('success****************');
        console.log(res);
        console.log(res.data);

        var json1 = JSON.parse(res.data);
        
        image1=json1['message'];
        
        that.commitData1(image1,content);
        console.log(image1);
        my.hideLoading();
      },
      fail: function(res) {
        console.log(res);
        // my.alert({ title: '上传失败' });
      }
    });
  },
  

  commitData1(image,content){
    my.showLoading();
    var that = this;
    var address = that.data.address;
    var landlordId = that.data.landlordId;
    var uid = that.data.uid;
    var type = that.data.type;
    console.log(content)
    my.httpRequest({
      url: app.globalData.baseUrl+'/IF/complaintSuggest/saveComplaintSuggest.do', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        uid:uid,
        fdid:landlordId,
        location:address,
        content:content,
        images:image,
        type:type,
      },
      dataType: 'json',
      success: (res) => {
        console.log('success')
        my.hideLoading();
        my.navigateBack({ changed: true });
      },
      fail:(res) =>{
        console.log('fail')
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
  commitData2(content){
    my.showLoading();
    var that = this;
    var address = that.data.address;
    var landlordId = that.data.landlordId;
    var uid = that.data.uid;
    var type = that.data.type;
    console.log(content)
    my.httpRequest({
      url: app.globalData.baseUrl+'/IF/complaintSuggest/saveComplaintSuggest.do', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        uid:uid,
        fdid:landlordId,
        location:address,
        content:content,
        type:type,
      },
      dataType: 'json',
      success: (res) => {
        console.log('success')
        my.hideLoading();
        my.navigateBack({ changed: true });
      },
      fail:(res) =>{
        console.log('fail')
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
  delImg(){
    var that = this;
    that.setData({
      img1:'',
      upload1:false,
      canAddImg:true,
    });
  },
});