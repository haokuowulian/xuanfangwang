var image1;
Page({
  data: {
    images:[],
    addImgText: "拍照/相册",
    canAddImg: true,
    upload1:false,
    img:'',
    img1:'',
  },
  onLoad() {},
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
          var image=tempFilePaths[0];
          // //图片上传
          //  my.uploadFile({
          //   url: 'http://192.168.1.89:8080/LLGY/IF/upload/uploadSingleFile.do',
          //   fileType: 'image',
          //   fileName: 'file',
          //   formData:{savePrefix:'landlord'},
          //   filePath: image,
          //   success: res => {
          //     console.log('success');
          //     console.log(res);

          //     var json1 = JSON.parse(res.data);
          //     that.setData({
          //       img:json1['message'],
          //     });
          //   },
          //   fail: function(res) {
          //     console.log(res);
          //     // my.alert({ title: '上传失败' });
          //   },
          // });
      },
    });
  },

  uploadImg(image){
    var that = this;
    //图片上传
      my.uploadFile({
      url: 'http://192.168.1.89:8080/LLGY/IF/upload/uploadSingleFile.do',
      fileType: 'image',
      fileName: 'file',
      formData:{savePrefix:'complaintSuggest'},
      filePath: image,
      success: res => {
        console.log('success');
        console.log(res.data);

        var json1 = JSON.parse(res.data);
        // console.log('-----------分割线1------------');
        // console.log(json1['message']);
        // console.log('-----------分割线1------------');
        // that.setData({
        //   img:json1['message'],
        // });
        image1=json1['message'];
        console.log('--------------分割线2-----------------')
        console.log(image1);
        console.log('--------------分割线2-----------------')
        // console.log(that.data.img+'************************');
        that.commitData(image1);
      },
      fail: function(res) {
        console.log(res);
        // my.alert({ title: '上传失败' });
      },
    });
  },
  toCommit(){
    var that = this;
    var image = that.data.img1;
    that.uploadImg(image);
    
    console.log('--------------分割线-----------------')
    // console.log(image)
    // that.commitData();
  },
  commitData(image){
    var that = this;
    // var imgs = that.data.img;
    console.log('-----------分割线1------------');
    console.log(image)
    console.log('-----------分割线1------------');
    
    my.httpRequest({
      url: '', // 目标服务器url
      success: (res) => {
        
      },
    });
  },
});
