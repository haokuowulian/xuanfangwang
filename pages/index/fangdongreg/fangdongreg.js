var form_data;
Page({
  data: {
    upload1:false,
    upload2:false,
    img1:'',
    img2:'',
    idcard_positive:'',
    idcard_reverse:'',
    images:[],
    imageurl:[],
  },
  onLoad() {},
  addImg(e){
    var that = this;
    my.chooseImage({
      count:1,
      sizeType:['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        var tempFilePaths = res.apFilePaths
        console.log(tempFilePaths)
        if(e.target.dataset.t==1){
          // var images = [];
          that.data.images[0]=tempFilePaths[0];
          console.log(that.data.images+"ccccccccccccccc1")
          this.setData({
            img1:tempFilePaths[0],
            upload1:true,
          });
          var image=tempFilePaths[0];
          //图片上传
           my.uploadFile({
            url: 'http://192.168.1.89:8080/LLGY/IF/upload/uploadSingleFile.do',
            fileType: 'image',
            fileName: 'file',
            formData:{savePrefix:'landlord'},
            filePath: image,
            success: res => {
              console.log('success');
              console.log(res);

              var json1 = JSON.parse(res.data);
              that.setData({
                idcard_positive:json1['message'],
              });
            },
            fail: function(res) {
              console.log(res);
              // my.alert({ title: '上传失败' });
            },
          });
        }
        if(e.target.dataset.t==2){
          // var images = [];
          that.data.images[1]=tempFilePaths[0];
          console.log(that.data.images+"ccccccccccccccc2")
          this.setData({
            img2:tempFilePaths[0],
            upload2:true,
          });
          var image=tempFilePaths[0];
           //图片上传
           my.uploadFile({
            url: 'http://192.168.1.89:8080/LLGY/IF/upload/uploadSingleFile.do',
            fileType: 'image',
            fileName: 'file',
            formData:{savePrefix:'landlord'},
            filePath: image,
            success: res => {
              console.log('success');
              console.log(res);

              var json1 = JSON.parse(res.data);
              that.setData({
                idcard_reverse:json1['message'],
              });
            },
            fail: function(res) {
              console.log(res);
              // my.alert({ title: '上传失败' });
            },
          });
        }
      },
    });
  },
  formSubmit(e){
    var that=this;
    form_data=e.detail.value;
    if(e.detail.value.name!=''&&e.detail.value.mobile!=''&&e.detail.value.card_no!=''&&e.detail.value.cardUrl1!=''&&e.detail.value.cardUrl2!=''){
      for(let a=0;a<that.data.images.length;a++){
        if(that.data.images[a] === null){
          console.log('请填上传身份证照片')
        }
      }
      var landlord=form_data;
      my.httpRequest({
        url: 'http://192.168.1.89:8080/LLGY/IF/landlord/saveLandlord.do', // 目标服务器url
        data:{name:e.detail.value.name,sex:e.detail.value.sex,mobile:e.detail.value.mobile,cardNo:e.detail.value.cardNo,cardUrl1:e.detail.value.cardUrl1,cardUrl2:e.detail.value.cardUrl2},
        success: (res) => {
          console.log('表单提交成功')
        },
        fail:(res) =>{
          console.log('表单提交失败')
        },
      });
    }else{
      console.log('请填写完整')
      alert('请填写完整')
    }
    console.log(form_data);
   
    that.setData({
      images:[],
    });
  },


  uploadImg(form_data){
    console.log('执行上传文件');
    var that = this;
    my.uploadFile({
          url: 'http://192.168.1.89:8080/LLGY/IFBaseAction/landlord/saveLandlord.do',
          fileType: 'image',
          fileName: 'file',
          formData:{form_data},
          filePath: image,
          success: res => {
            console.log('success');
            console.log(res);

            var json1 = JSON.parse(res.data);
            that.data.imageurl.push(json1['message']);
          },
          fail: function(res) {
            console.log(res);
            my.alert({ title: '上传失败' });
          },
        });
  },
  formReset(){
    this.setData({
      upload1:false,
      upload2:false,
      img1:'',
      img2:'',
      images:[],
    });
  },
});
