Page({
  data: {
    images:[],
    addImgText: "拍照/相册",
    canAddImg: true,
    maxAddImgNum: 6,
    i: 0,
    imgArr: [],
  },
  onLoad() {},
  addImg(){
    var that = this;
    console.log(111111111111111);
    my.chooseImage({
      count: that.data.maxAddImgNum,
      success: (res) => {
          that.setData({i: 0, imgArr: res.apFilePaths});
          that.uploadImg();
          console.log(22222222222222);
      },
    });
  },
  toUploadImg(){},
  uploadImg(){
    var that=this;
    var ii = that.data.i;
    if(ii < that.data.imgArr.length){
      my.uploadFile({
        url: '', // 开发者服务器地址
        filePath: that.data.imgArr[that.data.i], // 要上传文件资源的本地定位符
        fileName: 'file', // 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容
        fileType: 'image', // 文件类型，image / video / audio
        success: (res) => {
          console.log(res.data);
          
          var _images = that.data.images;
          _images.push(u+JSON.parse(res.data).data.src);
          that.setData({images:_images});
          _images.length == 0 && that.set_data(that,_images,"拍照/相册",true);
          (_images.length > 0 && _images.length < that.data.maxAddImgNum) && that.set_data(that,_images,"+",true);
          _images.length >= that.data.maxAddImgNum && that.set_data(that,_images.splice(0,that.data.maxAddImgNum),"+",false);
          that.setData({i: ii+1});
          that.uploadImg();
        },
        fail: function(res) {
            console.log(33333333333333)
          },
      });
    }
  },
  set_data: function(that,imgUrls,addImgText,canAddImg) {
    that.setData({
        imgUrls: imgUrls,
        addImgText: addImgText,
        canAddImg: canAddImg
    });
  },
});
