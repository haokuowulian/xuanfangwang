var form_data;
var imgs1 = '';
var imgs2 = '';
var imgs3 = '';
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
        if(e.target.dataset.t==1){
          that.data.images[0]=tempFilePaths[0];
          this.setData({
            img1:tempFilePaths[0],
            upload1:true,
          });
       
        }
        if(e.target.dataset.t==2){
          that.data.images[1]=tempFilePaths[0];
          this.setData({
            img2:tempFilePaths[0],
            upload2:true,
          });
        }
        if(e.target.dataset.t==3){
          that.data.images[1]=tempFilePaths[0];
          this.setData({
            img3:tempFilePaths[0],
            upload3:true,
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
            that.uploadImg(form_data);
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
  //上传图片
  uploadImg(form_data){
    console.log('执行上传文件');
    var that = this;
    //  图片上传
    // var img = '';
    var imgs = [];
    var newimgs = [];
    imgs[0]=that.data.img1;
    imgs[1]=that.data.img2;
    imgs[2]=that.data.img3;
    for(let i=0;i<imgs.length;i++){
      my.uploadFile({
      url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do',
      fileType: 'image',
      fileName: 'file',
      formData:{savePrefix:'landlord'},
      filePath: imgs[i],
      success: res => {
        console.log('success');
        console.log(res);
        var json1 = JSON.parse(res.data);
        newimgs[i] = json1['message']
        that.formUpload(newimgs[i],i,form_data);
      },
      fail: function(res) {
        console.log(res);
        // my.alert({ title: '上传失败' });
        },
      });
    }

  },
  //提交表单数据
  formUpload(image,i,form_data){
    var that = this;
    if(i==0){
      imgs1=image;
    }
    if(i==1){
      imgs2=image;
    }
    if(i==2){
      imgs3=image;
       my.httpRequest({
          url: app.globalData.baseUrl+'IF/landlord/saveLandlord.do', // 目标服务器url
          data:{
            userId:that.data.uid,
            name:form_data.name,
            sex:form_data.sex,
            mobile:form_data.mobile,
            cardNo:form_data.cardNo,
            cardUrl1:imgs1,
            cardUrl2:imgs2,
            permitUrl:imgs3,
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
          });
          }
          
        },
        fail:(res) =>{
          console.log('表单提交失败')
        },
      });
    }
       
  },
  //重置
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
