var app = getApp();
var buildingType = ['板楼','塔楼','板塔结合','平板'];
Page({
  data: {
    buildingTypes:buildingType,
    buildingType:'',
    imgurl:app.globalData.baseImgUrl_whj,
    provinces: [],
    province: "",
    provinceId:'',
    provinceCode:'',
    citys: [],
    city: "",
    cityId:'',
    cityCode:'',
    countys: [],
    county: '',
    countyId:'',
    countyCode: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    dist:'',
    village:'',
    longitude:'',
    latitude:'',
    images:[],
    img:'',
    canAddImg:true,
    upload:false,
    datatime:'2018-01-01',
    type:1,
  },
  onChange: function (e) {
    //console.log(e);
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;


    if (val[0] != t[0]) {
      console.log('province no ');
      const citys = [];
      const countys = [];


      for (let i = 0; i < cityData[val[0]].subList.length; i++) {
        citys.push(cityData[val[0]].subList[i].name)
      }
      for (let i = 0; i < cityData[val[0]].subList[0].subList.length; i++) {
        countys.push(cityData[val[0]].subList[0].subList[i].name)
      }


      this.setData({
        province: this.data.provinces[val[0]],
        provinceId:cityData[val[0]].id,
        city: cityData[val[0]].subList[0].name,
        cityId: cityData[val[0]].subList[0].id,
        citys: citys,
        county: cityData[val[0]].subList[0].subList[0].name,
        countyId: cityData[val[0]].subList[0].subList[0].id,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })


      return;
    }
    if (val[1] != t[1]) {
      console.log('city no');
      const countys = [];


      for (let i = 0; i < cityData[val[0]].subList[val[1]].subList.length; i++) {
        countys.push(cityData[val[0]].subList[val[1]].subList[i].name)
      }


      this.setData({
        city: this.data.citys[val[1]],
        cityId:cityData[val[0]].subList[val[1]].id,
        county:cityData[val[0]].subList[val[1]].subList.length>0? cityData[val[0]].subList[val[1]].subList[0].name:'',
        countys: countys,
        countyId: cityData[val[0]].subList[val[1]].subList.length>0?cityData[val[0]].subList[val[1]].subList[0].id:0,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        countyId:cityData[val[0]].subList[val[1]].subList[val[2]].id,
        values: val
      })
      return;
    }




  },
  onLoad() {
    my.showLoading();
    this.getCity();
    // my.confirm({
    //   title: '消防安全责任书（模板）',
    //   content: '为推进社会消防安全管理，加强对火灾隐患的源头管控，预防和减少火灾危害，房东与承租人确保房屋及承租房的人身、财产和公共财产的安全，遵循“谁使用，谁管理，谁负责”的原则，双方特签订本消防及安全责任书：  一、房屋承租人已对出租的房屋作了充分了解，愿意承租该房屋。并在租赁期内，非房屋承租人为因素，房屋主体结构的维修由出租方承担，其他由均由承租方承担。  二、房屋承租人对该房屋消防及安全负全面责任，应严格履行消防及安全责任，采取有效措施防火灾发生。  三、承租人应对房屋内的人员进行消防意识的宣传教育，提高消防意识，使该房屋使用人员都能掌握和使用所配备有的消防设施及火灾发生后逃生、自救的技能。  四、承租人应定期对该房屋电器、燃气热水器、电器线路进行检查（检修），加强安全性能维护，并配合房东对本房屋的消防安全检查、监督。  五、承租人严格遵守电气装置安装规程和技术管理规程，禁止非电工安装、修理电气线路。宿舍内不得使用电炉、电茶壶、热得快等大功率电器设备和大功率的照明设备，严禁私拉电气线路，严禁使用明火灶具。存放液化石油气罐的燃气热水器，应自然通风排风。如为不正当使用燃气热水器及因使用大功率电器设备产生火灾及人身安全后果由承租人自负，房东概不负责，承租人应承担相应房屋赔付及装修款项。  六、楼梯、通道严禁堆放杂物，电瓶车应在室外停放充电并在充电时有人照看。 七、掌握消防逃生技能，遇到火灾时能准确拔打119报警电话并帮助儿童老人特殊人群逃生。  本责任书一式二份，出租房房东一份，承租人一份，在房屋租赁期间，本责任书长期有效。  对上述各项消防和安全管理责任应认真落实执行，若违反将承担相关法律后果。',
    //   confirmButtonText: '同意',
    //   cancelButtonText: '拒绝',
    //   success: (res) => {
    //     console.log(res)
    //     if(res.confirm){
    //       console.log('同意协议')
    //     }else{
    //       my.navigateBack();
    //     }
    //   },
    // });
  },
  onShow(){
    // var village = my.getStorageSync({
    //   key: 'r_village', // 缓存数据的key
    // }).data;
    // if(village!=''&&this.data.cityCode!=''){
    //   this.setData({
    //     village:village,
    //   });
    // }
  },
  getCity(){
    var that=this;
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"json/dist.json",
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        console.log(res.data.data);
        that.setData({
          cityData:res.data.data
        });
        that.init();
      },
      fail: function(res) {
       console.log(res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  },
  //打开城市选择
  open(){
     my.hideKeyboard();
     this.setData({
      condition: !this.data.condition
    })
  },
  init(){
    var that=this;
    var cityData = that.data.cityData;
    const provinces = [];
    const citys = [];
    const countys = [];


    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    console.log('省份完成');
    for (let i = 0; i < cityData[0].subList.length; i++) {
      citys.push(cityData[0].subList[i].name)
    }
    console.log('city完成');
    for (let i = 0; i < cityData[0].subList[0].subList.length; i++) {
      countys.push(cityData[0].subList[0].subList[i].name)
    }


    that.setData({
      provinces: provinces,
      citys: citys,
      countys: countys,
      province: cityData[0].name,
      provinceId:cityData[0].id,
      city: cityData[0].subList[0].name,
      cityId: cityData[0].subList[0].id,
      county: cityData[0].subList[0].subList[0].name,
      countyId: cityData[0].subList[0].subList[0].id,
    })

  },
  //选择建筑类型
  bindPickerChange1(e){
    console.log(e)
    var that = this;
    var index = e.detail.value*1;
    var arr = that.data.buildingTypes;
    var buildingType = arr[index]
    console.log(buildingType);
    that.setData({
      buildingType:buildingType,
    });
    
  },
  addImg(){
    var that = this;
    my.chooseImage({
      chooseImage: 1,
      success: (res) => {
        var tempFilePaths = res.apFilePaths
        console.log(tempFilePaths)
        that.data.images[0]=tempFilePaths[0];
        that.setData({
          img:tempFilePaths[0],
          upload:true,
          canAddImg:false,
        });
      },
    });
  },
  open(){
    my.hideKeyboard();
  },
  delImg(){
    var that = this;
    that.setData({
      img:'',
      upload:false,
      canAddImg:true,
    });
  },
  confirm(){
    this.open();
    this.setData({
      dist:this.data.province+this.data.city+this.data.county,
      provinceCode:this.data.provinceId,
      cityCode:this.data.cityId,
      countryCode:this.data.countyId,
    });
    my.setStorageSync({
      key: 'city', // 缓存数据的key
      data: this.data.city, // 要缓存的数据
    });
    

  },
  toInput(e){
    console.log(e.detail.value)
    var that = this;

    if(e.target.dataset.t==3){
      that.setData({
        vphone:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        vyear:e.detail.value,
      });
    }
    if(e.target.dataset.t==5){
      that.setData({
        vgreen:e.detail.value,
      });
    }
    if(e.target.dataset.t==6){
      that.setData({
        vcubage:e.detail.value,
      });
    }
  },
  next(){
    var that = this;
    // that.toNext();
    var image = that.data.img;
    var provinceCode = that.data.provinceCode;
    var cityCode = that.data.cityCode;
    var countryCode = that.data.countryCode;
    var village = that.data.village;
    var longitude = that.data.longitude;
    var latitude = that.data.latitude;
    var vphone = that.data.vphone;
    var vyear = that.data.vyear;
    var vgreen = that.data.vgreen;
    var vcubage = that.data.vcubage;
    var buildingType = that.data.buildingType;
    if(provinceCode!=''&&cityCode!=''&&countryCode!=''){
      if(that.data.village!=''){
        if(buildingType!=''&&vyear!=''&&vgreen!=''&&vcubage!=''){
          my.setStorage({
          key: 'r_provinceCode', // 缓存数据的key
          data: provinceCode, // 要缓存的数据
        });
        my.setStorage({
          key: 'r_cityCode', // 缓存数据的key
          data: cityCode, // 要缓存的数据
        });
        my.setStorage({
          key: 'r_countryCode', // 缓存数据的key
          data: countryCode, // 要缓存的数据
        });
        my.setStorage({
          key: 'r_longitude', // 经度
          data: longitude, // 要缓存的数据
        });
        my.setStorage({
          key: 'r_latitude', // 纬度
          data: latitude, // 要缓存的数据
        });
        my.setStorage({
          key: 'r_village', // 小区
          data: village, // 要缓存的数据
        });
        my.setStorage({
          key: 'r_vphone', // 小区联系号码
          data: vphone, // 要缓存的数据
        });
        my.setStorage({
          key: 'r_vyear', // 小区年份
          data: vyear, // 要缓存的数据
        });
        my.setStorage({
          key: 'r_vgreen', // 绿化率
          data: vgreen, // 要缓存的数据
        });
        my.setStorage({
          key: 'r_vcubage', // 容积率
          data: vcubage, // 要缓存的数据
        });
        my.setStorageSync({
          key: 'r_address', // 缓存数据的key
          data: that.data.dist, // 要缓存的数据
        });
        my.setStorage({
          key: 'r_buildingType', // 建筑类型
          data: buildingType, // 要缓存的数据
        });
        
        my.uploadFile({

          url: app.globalData.baseUrl+'IF/upload/uploadSingleFile.do', // 开发者服务器地址
          filePath: image, // 要上传文件资源的本地定位符
          fileName: 'file', 
          fileType: 'image', // 文件类型，image / video / audio
          formData:{savePrefix:'landlord'},
          success: (res) => {
            console.log('success');
            var json2 = JSON.parse(res.data);
            console.log(res);
            var newimgs=json2['message'];
            console.log(newimgs);
            my.setStorageSync({
              key: 'r_villageimg', // 缓存数据的key
              data: newimgs, // 要缓存的数据
            });
            that.toNext();
          },
          fail: (res) => {
            console.log(res);
            my.alert({ title: '上传失败' });
          },
        });
        
        // that.toNext();
        }else{
          my.alert({
            title: '请完善建筑信息' 
          });
        }
      
      }else{
        my.alert({
          title: '请选择小区或公寓位置' 
        });
      }
    }else{
      my.alert({
        title: '区域信息请填写完整' 
      });
    }
  },
  toNext(){
    console.log('下一步调用')
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery2/housedelivery2',
    })
  },

  selectPoi(){
    console.log(this.data.cityCode)
    if(this.data.cityCode!=''){
      my.navigateTo({
        url: '/pages/index/housedelivery/housedelivery-map/housedelivery-map',
      })
    }else{
      my.alert({
        title: '请先选择地区' 
      });
    }
     
  },
  toAgree(){
    var that = this;
    console.log('已点击同意')
    my.pageScrollTo({
      scrollTop: 0
    });
    that.setData({
      type:2
    })
    
  },
});
