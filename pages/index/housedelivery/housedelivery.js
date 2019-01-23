var app = getApp();
Page({
  data: {
    provinces: [],
    province: "",
    provinceId:'',
    citys: [],
    city: "",
    cityId:'',
    countys: [],
    county: '',
    countyId:'',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    dist:'',

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
        cityId:cityData[val[0]].citys[val[1]].id,
        county: cityData[val[0]].subList[val[1]].subList[0].name,
        countys: countys,
        countyId: cityData[val[0]].subList[val[1]].subList[0].id,
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
      this.getCity();

  },
  getCity(){
    var that=this;
     my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/selectData/getDistListIF.do",
      method: 'POST',
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
  confirm(){
    this.open();
    this.setData({
      dist:this.data.province+this.data.city+this.data.county
    });
    console.log("provinceId==="+this.data.provinceId+"-----cityId==="+this.data.cityId+"----countryId==="+this.data.countyId);
  },
  toInput(e){
    console.log(e.detail.value)
    var that = this;
    if(e.target.dataset.t==1){
      that.setData({
        street:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        village:e.detail.value,
      });
    }
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
    var cityCode = that.data.cityCode;
    var areaId = that.data.areaId;
    var street = that.data.street;
    var village = that.data.village;
    var vphone = that.data.vphone;
    var vyear = that.data.vyear;
    var vcubage = that.data.vcubage;

    if(cityCode!=''&&areaId!=''&&street!=''){
      my.setStorage({
        key: 'r_cityCode', // 缓存数据的key
        data: cityCode, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_areaId', // 缓存数据的key
        data: areaId, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_street', // 缓存数据的key
        data: street, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_village', // 缓存数据的key
        data: village, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_vphone', // 缓存数据的key
        data: vphone, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_vyear', // 缓存数据的key
        data: vyear, // 要缓存的数据
      });
      my.setStorage({
        key: 'r_vcubage', // 缓存数据的key
        data: vcubage, // 要缓存的数据
      });
      that.toNext();
    }else{
      my.alert({
        title: '位置信息请填写完整' 
      });
    }
  },
  toNext(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery2/housedelivery2',
    })
  },
});
