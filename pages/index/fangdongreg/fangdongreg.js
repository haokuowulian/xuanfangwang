var form_data;
const app=getApp();
Page({
  data: {
    upload1:false,
    upload2:false,
    upload3:false,
    img1:'',
    img2:'',
    img3:'',
    idcard_positive:'',
    idcard_reverse:'',
    licence:'',
    images:[],
    imageurl:[],
    uid:'',
  },
  onLoad() {
    var userId = my.getStorageSync({
     key: 'userId', // 缓存数据的key
   }).data;
    this.setData({
      uid:userId,
    });
  },
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
            url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do',
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
            url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do',
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
        if(e.target.dataset.t==3){
          // var images = [];
          that.data.images[1]=tempFilePaths[0];
          console.log(that.data.images+"ccccccccccccccc2")
          this.setData({
            img3:tempFilePaths[0],
            upload3:true,
          });
          var image=tempFilePaths[0];
           //图片上传
           my.uploadFile({
            url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do',
            fileType: 'image',
            fileName: 'file',
            formData:{savePrefix:'landlord'},
            filePath: image,
            success: res => {
              console.log('success');
              console.log(res);

              var json1 = JSON.parse(res.data);
              that.setData({
                licence:json1['message'],
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
    if(e.detail.value.name!=''&&e.detail.value.mobile!=''&&e.detail.value.card_no!=''&&e.detail.value.cardUrl1!=''&&e.detail.value.cardUrl2!=''&&e.detail.value.licenceUrl!=''){
      for(let a=0;a<that.data.images.length;a++){
        if(that.data.images[a] === null){
          console.log('请填上传身份证照片')
        }
      }
      var landlord=form_data;
      my.confirm({
        title: '温馨提示',
        content: '确认提交审核？',
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        success: (res) => {
          if(res.confirm){
            my.httpRequest({
        url: app.globalData.baseUrl+'IF/landlord/saveLandlord.do', // 目标服务器url
        data:{
          userId:that.data.uid,
          name:e.detail.value.name,
          sex:e.detail.value.sex,
          mobile:e.detail.value.mobile,
          cardNo:e.detail.value.cardNo,
          cardUrl1:e.detail.value.cardUrl1,
          cardUrl2:e.detail.value.cardUrl2,
          permitUrl:e.detail.value.licenceUrl,
          },
        success: (res) => {
          console.log('表单提交成功')
          console.log(res)
          console.log(res.data)
          if(res.data.success){
            my.alert({
            title:'提交成功！',
            content:'我们会尽快处理。',
            buttonText:'确认',
            success: () => {
              my.navigateBack();
           },
          });
          }else{
            my.alert({
            title:'提交失败！',
            content:'该账号已在审核中，请耐心等待。',
            buttonText:'确认',
          //   success: (result) => {
          //     my.navigateBack();
          //  },
          });
          }
          
        },
        fail:(res) =>{
          console.log('表单提交失败')
        },
      });
          }else{

          }
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
          url: app.globalData.baseUrl+'IFBaseAction/landlord/saveLandlord.do',
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
      upload3:false,
      img1:'',
      img2:'',
      img3:'',
      images:[],
    });
  },
});
