const app = getApp();
const directionList = [
  {
    title:'朝东',
    selected:false,
  },
  {
    title:'朝南',
    selected:false,
  },
  {
    title:'朝西',
    selected:false,
  },
  {
    title:'朝北',
    selected:false,
  },
  {
    title:'东北',
    selected:false,
  },
  {
    title:'东南',
    selected:false,
  },
  {
    title:'西北',
    selected:false,
  },
  {
    title:'西南',
    selected:false,
  },
]
Page({
    type:'',
    properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    dropDownMenuTitle: {
      type: Array,
      value: ['1', '2', '3','4','5'],
    },
    dropDownMenuFirstData: {
      type:Array,
      value:[]
    },
   
    dropDownMenuSecondData: {
      type: Array,
      value: []
    },
    dropDownMenuThirdData: {
      type: Array,
      value: []
    },
    dropDownMenuFourthData: {
      type: Array,
      value: []
    },
    dropDownMenuFifthData:{
      type: Array,
      value: []
    }
  },
  data: {
    featureList:[],
    furnitureList:[],
    featureCondition:[],
    furnitureCondition:[],
    directionList,
    direction:[],
    imgUrl:app.globalData.baseImgUrl_whj,
    houseType:0,
    pageIndex:1,
    boutiqueHousing:[],
    wholeRentalHousing:[],
    sharedHousing:[],
    hyopen: false,
    sqopen: false,
    pxopen: false,
    sortopen: false,
    orderopen:false,
    shownavindex: '',
    dropDownMenuDataFirstRight: {},
    dropDownMenuDataFirstCenter: {},
    select1: '',
    select2: '',
    select3: '',
    selectedQt: 0,
    selectedSq: 0,
    selectedSort: 1,
    selectedOrder: 1,
    bg1:true,
    bg2:false,
    showView1:false,
    showView2:false,
    s1:false,
    s2:false,
    s3:false,
    s4:false,
    se1:false,
    se2:false,
    se3:false,
    se4:false,
    condition1:'',
    condition2:'',
    rent1:true,
    rent2:false,
    rent3:false,
    rent4:false,
    rent5:false,
    rentprice:'不限',
    sliderleft:'0',
    sliderright:'10000',
    rentslider1:true,
    rentslider2:false,
    screen16:false,
    order1:false,
    order2:false,
    order3:false,
    order4:false,
    order5:false,
    dropDownMenuFourthData: [{ id: 1, title: '智能排序' }, { id: 2, title: '发布时间' }, { id: 3, title: '距离优先' }],//排序数据
    dropDownMenuFirstData:[
        { id: 1, title: '附近', 
          childModel:[
            {id: '11',title: '1000米',
              childMode2: [
                { id: '21', title: '沿浦' }, 
                { id: '22', title:'钱江世纪城' },
              ]
             },
            {id: '12',title: '2000米',
              childMode2: [
                { id: '21', title:'湘湖' },
                { id: '22', title:'闻堰' },
              ]
             },
            {id: '13',title: '3000米',
              childMode2: [
                { id: '21', title:'萧山市区' },
                { id: '22', title:'西兴' },
              ]
             },
          ],
          },
        { id: 2, title: '商圈', 
          childModel: [
            { id: '21', title: '不限' }, 
            { id: '22', title: '余杭',
              childMode2: [
                { id: '31', title: '沿浦1' }, 
                { id: '32', title:'钱江世纪城1' },
                { id: '33', title:'湘湖1' },
                { id: '34', title:'闻堰1' },
                { id: '35', title:'萧山市区1' },
                { id: '36', title:'西兴1' },
              ]
             },
            { id: '23', title: '萧山',
              childMode2: [
                { id: '31', title: '沿浦' }, 
                { id: '32', title:'钱江世纪城' },
                { id: '33', title:'湘湖' },
                { id: '34', title:'闻堰' },
                { id: '35', title:'萧山市区' },
                { id: '36', title:'西兴' },
              ]
             },
            { id: '24', title: '滨江' },
            { id: '25', title: '上城' },
            { id: '26', title: '下城' },
            { id: '27', title: '下沙' },
            { id: '28', title: '拱墅' },
            { id: '29', title: '江干' },
            { id: '20', title: '西湖' },
            ]},
        { id: 3, title: '地铁'},
      ],
    dropDownMenuSecondData: [
      { id: 1, title: '标签11' },
      { id: 2, title: '标签12' }],
    dropDownMenuThirdData: [
      { id: 1, title: '标签11' }, 
      { id: 2, title: '标签12' }]
  },
  onLoad(query) {
    this.setData({
      houseType:query.type
    });
    switch(query.type){
      case "1"://精选房源
        this.getBoutiqueHousing();
      break;

      case "2"://整租房源
        this.getWholeRentalHousing();
      break;

      case "3"://合租房源
        this.getSharedHousing();
      break;
    }
   this.getFeature();
   this.getFurniture();
  },
  //获取筛选下拉框中房源特色
  getFeature(){
    var that = this;
    my.httpRequest({
      url:app.globalData.baseUrl_whj+"IF/selectData/getFeatureListIF.do",
      method: 'POST',
      dataType: 'json',
      success: (res) => {
        var li = res.data.data;
      if(res.data.success){
        that.setData({
          featureList:li,
        });
      }
      },
    });
  },
  //获取筛选下拉框中房源家具
  getFurniture(){
    var that = this;
    my.httpRequest({
      url:app.globalData.baseUrl_whj+"IF/selectData/getFurnitureListIF.do",
      method: 'POST',
      dataType: 'json',
      success: (res) => {
        var li = res.data.data;
        console.log(res.data)
        console.log(li)
      if(res.data.success){
        that.setData({
          furnitureList:li,
        });
      }
      },
    });
  },
  onShow(){
   
    // this.setData({bg1:true});
    this.setData({showView1:true});
    this.setData({s1:true});
    this.setData({se1:true});
    this.setData({rent1:true});
    
  },

  onChange1(){
    this.setData({bg1:true,bg2:false});
    this.setData({showView1:true,showView2:false});
  },
  onChange2(){
    this.setData({bg2:true,bg1:false});
    this.setData({showView2:true,showView1:false});
  },
  // 排序下拉框
  orderChoose1(e){
    if(this.order1){
      this.setData({
        order1:false,
        order2:false,
        order3:false,
        order4:false,
        order5:false,
      });
    }else{
      this.setData({
        order1:true,
        order2:false,
        order3:false,
        order4:false,
        order5:false,
      });
      this.closeHyFilter();
    }
  },
  orderChoose2(e){
    if(this.order2){
      this.setData({
        order1:false,
        order2:false,
        order3:false,
        order4:false,
        order5:false,
      });
    }else{
      this.setData({
        order1:false,
        order2:true,
        order3:false,
        order4:false,
        order5:false,
      });
      this.closeHyFilter();
    }
  },
  orderChoose3(e){
    if(this.order3){
      this.setData({
        order1:false,
        order2:false,
        order3:false,
        order4:false,
        order5:false,
      });
    }else{
      this.setData({
        order1:false,
        order2:false,
        order3:true,
        order4:false,
        order5:false,
      });
      this.closeHyFilter();
    }
  },
  orderChoose4(e){
    if(this.order4){
      this.setData({
        order1:false,
        order2:false,
        order3:false,
        order4:false,
        order5:false,
      });
    }else{
      this.setData({
        order1:false,
        order2:false,
        order3:false,
        order4:true,
        order5:false,
      });
      this.closeHyFilter();
    }
  },
  orderChoose5(e){
    if(this.order5){
      this.setData({
        order1:false,
        order2:false,
        order3:false,
        order4:false,
        order5:false,
      });
    }else{
      this.setData({
        order1:false,
        order2:false,
        order3:false,
        order4:false,
        order5:true,
      });
      this.closeHyFilter();
    }
  },
  // 筛选下拉框
  //房源朝向
  screenDirection(e){
    var that = this;
    let index = e.currentTarget.dataset.index;
    var arr = that.data.directionList;
    var condition = that.data.direction;
    console.log(that.data.direction)
    if(arr[index].selected){
      arr[index].selected=false;
      that.remove(condition,arr[index].title);
    }else{
      arr[index].selected=true;
      condition.push(arr[index].title);
    }
    
    that.setData({
      directionList:arr,
      direction:condition,
    });
    console.log(that.data.direction)
  },
  //房源特色
  screenPoint(e){
    var that = this;
    var id = e.target.dataset.id;
    let index = e.currentTarget.dataset.index;
    console.log(id)
    console.log('**************'+index)
    var arr = that.data.featureList;
    var condition = that.data.featureCondition
     console.log(arr[index].deleted)
    if(arr[index].deleted){
      arr[index].deleted=false;
      that.remove(condition,id);
    }else{
      arr[index].deleted=true;
      condition.push(id);
    }
    console.log(arr[index].deleted)
    console.log(condition)
    that.setData({
      featureList:arr,
      featureCondition:condition,
    });
    console.log(that.data.featureCondition)
  },
  //房源家具
  screenFurniture(e){
    var that = this;
    var id = e.target.dataset.id;
    let index = e.currentTarget.dataset.index;
    console.log(id)
    console.log('**************'+index)
    var arr = that.data.furnitureList;
    var condition = that.data.furnitureCondition
     console.log(arr[index].deleted)
    if(arr[index].deleted){
      arr[index].deleted=false;
      that.remove(condition,id);
    }else{
      arr[index].deleted=true;
      condition.push(id);
    }
    console.log(arr[index].deleted)
    console.log(condition)
    that.setData({
      furnitureList:arr,
      furnitureCondition:condition,
    });
    console.log(that.data.furnitureCondition)
  },
  //删除指定数组元素
  remove(array,val){
    for (var i = 0; i < array.length; i++) {
      if(array[i] == val){
        array.splice(i, 1);
      }
    }
    return -1; 
  },
 
  // 筛选重置按钮
  screenBtnReset(){
    var that = this;
    
    var arr1 = that.data.furnitureList;
    for(let i = 0;i<arr1.length;i++){
      arr1[i].deleted=false;
    }
    var arr2 = that.data.featureList;
    for(let i = 0;i<arr2.length;i++){
      arr2[i].deleted=false;
    }
    var arr3 = that.data.directionList;
    for(let i =0;i<arr3.length;i++){
      arr3[i].selected=false;
    }
    that.setData({
      directionList:arr3,
      featureList:arr2,
      furnitureList:arr1,
      direction:[],
      featureCondition:[],
      furnitureCondition:[],
    });
  },
  // 筛选确认按钮
  screenBtnConfirm(){
    var that = this;
    var a = that.data.featureCondition;
    var b = that.data.furnitureCondition;
    var c = that.data.direction;
    var featureCondition = a.join(",");
    var furnitureCondition = b.join(",");
    var directionCondition = c.join(",");
    console.log(featureCondition)
    console.log(furnitureCondition)
    console.log(directionCondition)
    my.httpRequest({
      url: '', // 目标服务器url
      data:'',
      success: (res) => {
        
      },
    });
  },
  // 租金下拉框
  rentChoose1(e){
    if(this.rent1){
      this.setData({
        rent1:false,
        rent2:false,
        rent3:false,
        rent4:false,
        rent5:false,
        rent6:false,
      });
    }else{
      this.setData({
        rent1:true,
        rent2:false,
        rent3:false,
        rent4:false,
        rent5:false,
        rent6:false,
        rentprice:'不限',
        rentslider1:true,
        rentslider2:false,
        
      });
    }
  },
  rentChoose2(e){
    if(this.rent2){
      this.setData({
        rent1:false,
        rent2:false,
        rent3:false,
        rent4:false,
        rent5:false,
        rent6:false,
      });
    }else{
      this.setData({
        rent1:false,
        rent2:true,
        rent3:false,
        rent4:false,
        rent5:false,
        rent6:false,
        rentprice:'1000元以下',
        rentslider1:true,
        rentslider2:false,
        
      });
    }
  },
  rentChoose3(e){
    if(this.rent3){
      this.setData({
        rent1:false,
        rent2:false,
        rent3:false,
        rent4:false,
        rent5:false,
        rent6:false,
      });
    }else{
      this.setData({
        rent1:false,
        rent2:false,
        rent3:true,
        rent4:false,
        rent5:false,
        rent6:false,
        rentprice:'1000-1500元',
        rentslider1:true,
        rentslider2:false,
        
      });
    }
  },
  rentChoose4(e){
    if(this.rent4){
      this.setData({
        rent1:false,
        rent2:false,
        rent3:false,
        rent4:false,
        rent5:false,
        rent6:false,
      });
    }else{
      this.setData({
        rent1:false,
        rent2:false,
        rent3:false,
        rent4:true,
        rent5:false,
        rent6:false,
        rentprice:'1500-2000元',
        rentslider1:true,
        rentslider2:false,
        
      });
    }
  },
  rentChoose5(e){
    if(this.rent5){
      this.setData({
        rent1:false,
        rent2:false,
        rent3:false,
        rent4:false,
        rent5:false,
        rent6:false,
      });
    }else{
      this.setData({
        rent1:false,
        rent2:false,
        rent3:false,
        rent4:false,
        rent5:true,
        rent6:false,
        rentprice:'2000-2500元',
        rentslider1:true,
        rentslider2:false,
        
      });
    }
  },
  rentChoose6(e){
    if(this.rent6){
      this.setData({
        rent1:false,
        rent2:false,
        rent3:false,
        rent4:false,
        rent5:false,
        rent6:false,
      });
    }else{
      this.setData({
        rent1:false,
        rent2:false,
        rent3:false,
        rent4:false,
        rent5:false,
        rent6:true,
        rentprice:'2500-3000元',
        rentslider1:true,
        rentslider2:false,
        
      });
    }
  },
  // 滑块拖动中触发
  leftSchange(e){
    let value = e.detail.value;
    this.setData({
      sliderleft:e.detail.value,
      rentslider2:true,
      rentslider1:false,
      rent1:true,
      rent2:false,
      rent3:false,
      rent4:false,
      rent5:false,
      rent6:false,
    });
  },
  rightSchange(e){
    let value =e.detail.value;
    this.setData({
      sliderright:e.detail.value,
      rentslider2:true,
      rentslider1:false,
      rent1:true,
      rent2:false,
      rent3:false,
      rent4:false,
      rent5:false,
      rent6:false,
    });
  },
  // 租金范围重置按钮
  rentBtnReset(){
    this.setData({
      rent1:true,
      rent2:false,
      rent3:false,
      rent4:false,
      rent5:false,
      rent6:false,
      rentprice:'不限',
      sliderleft:'0',
      sliderright:'10000',
      rentslider1:true,
      rentslider2:false,
    });
  },
  // 租金范围确认按钮
  rentBtnConfirm(){
    if(rentslider1){
      // 提交固定取值
    }else{
      // 提交自选取值
    }
  },
  // 租房下拉框
  onSelect1(e){
    if(this.s1){
      this.setData({
        s1:false,
        s2:false,
        s3:false,
        s4:false,
        condition1:''
      });
    }else{
      this.setData({
        s1:true,
        s2:false,
        s3:false,
        s4:false,
        condition1:e.currentTarget.dataset.s
      });
    }
    
  },
  onSelect2(e){
    if(this.s2){
      this.setData({
        s1:false,
        s2:false,
        s3:false,
        s4:false,
        condition1:''
        
      });
    }else{
      this.setData({
        s1:false,
        s2:true,
        s3:false,
        s4:false,
        condition1:e.currentTarget.dataset.s
      });
    }
  },
  onSelect3(e){
    if(this.s3){
      this.setData({
        s1:false,
        s2:false,
        s3:false,
        s4:false,
        condition1:''
      });
    }else{
      this.setData({
        s1:false,
        s2:false,
        s3:true,
        s4:false,
        condition1:e.currentTarget.dataset.s
      });
    }
  },
  onSelect4(e){
    if(this.s4){
      this.setData({
        s1:false,
        s2:false,
        s3:false,
        s4:false,
        condition1:''
      });
    }else{
      this.setData({
        s1:false,
        s2:false,
        s3:false,
        s4:true,
        condition1:e.currentTarget.dataset.s
      });
    }
  },
  onSelec1(e){
    if(this.se1){
      this.setData({
        se1:false,
        se2:false,
        se3:false,
        se4:false,
        condition2:''
      });
    }else{
      this.setData({
        se1:true,
        se2:false,
        se3:false,
        se4:false,
        condition2:e.currentTarget.dataset.s
      });
    }
  },
  onSelec2(e){
    if(this.se2){
      this.setData({
        se1:false,
        se2:false,
        se3:false,
        se4:false,
        condition2:''
      });
    }else{
      this.setData({
        se1:false,
        se2:true,
        se3:false,
        se4:false,
        condition2:e.currentTarget.dataset.s
      });
    }
  },
  onSelec3(e){
    if(this.se3){
      this.setData({
        se1:false,
        se2:false,
        se3:false,
        se4:false,
        condition2:''
      });
    }else{
      this.setData({
        se1:false,
        se2:false,
        se3:true,
        se4:false,
        condition2:e.currentTarget.dataset.s
      });
    }
  },
  onSelec4(e){
    if(this.se4){
      this.setData({
        se1:false,
        se2:false,
        se3:false,
        se4:false,
        condition2:''
      });
    }else{
      this.setData({
        se1:false,
        se2:false,
        se3:false,
        se4:true,
        condition2:e.currentTarget.dataset.s
      });
    }
  },
  onBtnReset(){
    this.setData({
        s1:true,
        s2:false,
        s3:false,
        s4:false,
        condition1:''
      });
    this.setData({
        se1:true,
        se2:false,
        se3:false,
        se4:false,
        condition2:''
      });
  },
  onBtnConfirm(){

  },
  // 下拉框
  listqy(e){
    if (this.data.hyopen) {
        this.setData({
          hyopen: false,
          sqopen: false,
          pxopen: false,
          sortopen: false,
          orderopen:false,
          shownavindex: 0
        })
      } else {
        this.setData({
          hyopen: true,
          pxopen: false,
          sqopen: false,
          sortopen: false,
          orderopen:false,
          shownavindex: e.currentTarget.dataset.nav
        })
      }
  },
  list(e){
    if (this.data.sqopen) {
        this.setData({
          sqopen: false,
          pxopen: false,
          hyopen: false,
          sortopen: false,
          orderopen:false,
          shownavindex: 0
        })
      } else {
        this.setData({
          sqopen: true,
          pxopen: false,
          hyopen: false,
          sortopen: false,
          orderopen:false,
          shownavindex: e.currentTarget.dataset.nav
        })
      }
  },
  listpx(e){
    if (this.data.pxopen) {
        this.setData({
          sqopen: false,
          pxopen: false,
          hyopen: false,
          sortopen: false,
          orderopen:false,
          shownavindex: 0
        })
      } else {
        this.setData({
          sqopen: false,
          pxopen: true,
          sortopen: false,
          hyopen: false,
          orderopen:false,
          shownavindex: e.currentTarget.dataset.nav
        })
      }
      console.log(e.target)
  },
  listsort(e){
    if (this.data.sortopen) {
        this.setData({
          sqopen: false,
          pxopen: false,
          hyopen: false,
          sortopen: false,
          orderopen:false,
          shownavindex: 0
        })
      } else {
        this.setData({
          sqopen: false,
          pxopen: false,
          hyopen: false,
          sortopen: true,
          orderopen:false,
          shownavindex: e.currentTarget.dataset.nav
        })
      }
  },
  listorder(e){
    if(this.data.orderopen){
      this.setData({
          sqopen: false,
          pxopen: false,
          hyopen: false,
          sortopen: false,
          orderopen:false,
          shownavindex: 0
        })
    }else {
        this.setData({
          sqopen: false,
          pxopen: false,
          hyopen: false,
          sortopen: false,
          orderopen:true,
          shownavindex: e.currentTarget.dataset.nav
        })
      }
  },
  // 位置下拉框
  selectleft(e){
      var model = e.target.dataset.model.childModel;
      var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.setData({
        dropDownMenuDataFirstRight: model==null?"":model,
        select1: selectedId,
        select2: '',
        select3: '',
        dropDownMenuDataFirstCenter: {},
      })
      if (model == null || model.length == 0) {
        this.closeHyFilter();
        this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
      }
  },
  selectcenter(e){
      var model = e.target.dataset.model.childMode2;
      var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.setData({
        dropDownMenuDataFirstCenter:model==null?"":model,
        select2: selectedId,
        select3: '',
      })
      if (model == null || model.length == 0) {
        this.closeHyFilter();
        this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
      }
  },
  selectright(e){
     var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.closeHyFilter();
      this.setData({
        select3: selectedId
      })
      this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
  },
  selectsqitem(e) {
      var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.closeHyFilter();
      this.setData({
        selectedSq: selectedId
      })
      this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
    },
  selecsortlitem(e) {
      var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.closeHyFilter();
      this.setData({
        selectedSort: selectedId
      })
      this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
    },
  selecqtlitem(e) {
      var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.closeHyFilter();
      this.setData({
        selectedQt: selectedId
      })
      this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
    },
  selecorderitem(e){
      var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.closeHyFilter();
      this.setData({
        selectedOrder: selectedId
      })
      this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
  },

  /**关闭筛选 */
    closeHyFilter() {
      if (this.data.hyopen) {
        this.setData({
          hyopen: false,
          sqopen: false,
          pxopen: false,
          sortopen: false,
          orderopen:false,
        })
      } else if (this.data.sqopen) {
        this.setData({
          sqopen: false,
          pxopen: false,
          hyopen: false,
          sortopen: false,
          orderopen:false,
        })
      }
      else if (this.data.pxopen) {
        this.setData({
          sqopen: false,
          pxopen: false,
          hyopen: false,
          sortopen: false,
          orderopen:false,
        })
      }
      else if (this.data.sortopen) {
        this.setData({
          sqopen: false,
          pxopen: false,
          hyopen: false,
          sortopen: false,
          orderopen:false,
        })
      }
      else if (this.data.orderopen) {
        this.setData({
          sqopen: false,
          pxopen: false,
          hyopen: false,
          sortopen: false,
          orderopen:false,
        })
      }
  },
  //组件生命周期函数，在组件实例进入页面节点树时执行
  attached() {
    // 可以在这里发起网络请求获取插件的数据
    
  },
  //获取精选房源
  getBoutiqueHousing(){
    console.log('--------'+this.data.pageIndex);
    var that=this;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      data: {
        decorateType:-3,
        rentType:1,
        pageIndex: this.data.pageIndex,
        pageSize: 6,
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
           if(that.data.pageIndex==1){
                that.data.boutiqueHousing=res.data.data;
            }else if(that.data.boutiqueHousing.length<res.data.count){
                that.data.boutiqueHousing.push(res.data.data[0]);
            }
           that.setData({
            boutiqueHousing:that.data.boutiqueHousing
          });
            my.stopPullDownRefresh();
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

  //获取整租房源
  getWholeRentalHousing(){
    var that=this;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      data: {
        rentType:1,
        pageIndex: this.data.pageIndex,
        pageSize: 6,
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
           if(that.data.pageIndex==1){
                that.data.boutiqueHousing=res.data.data;
            }else if(that.data.boutiqueHousing.length<res.data.count){
                that.data.boutiqueHousing.push(res.data.data[0]);
            }
           that.setData({
            wholeRentalHousing:that.data.boutiqueHousing
          });
            my.stopPullDownRefresh();
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

  //获取合租房源
  getSharedHousing(){
    var that=this;
    my.httpRequest({
      url: app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      data: {
        rentType:2,
        pageIndex: this.data.pageIndex,
        pageSize: 6,
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
           if(that.data.pageIndex==1){
                that.data.boutiqueHousing=res.data.data;
            }else if(that.data.boutiqueHousing.length<res.data.count){
                that.data.boutiqueHousing.push(res.data.data[0]);
            }
           that.setData({
            sharedHousing:that.data.boutiqueHousing
          });
            my.stopPullDownRefresh();
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

  onPullDownRefresh() {
    
    this.setData({
      pageIndex:1
    });
     switch(this.data.houseType){
      case "1"://精选房源
        this.getBoutiqueHousing();
      break;

      case "2"://整租房源
        this.getWholeRentalHousing();
      break;

      case "3"://合租房源
        this.getSharedHousing();
      break;
    }
    
  },
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
     switch(this.data.houseType){
      case "1"://精选房源
        this.getBoutiqueHousing();
      break;

      case "2"://整租房源
        this.getWholeRentalHousing();
      break;

      case "3"://合租房源
        this.getSharedHousing();
      break;
    }
    
  },
  //前往房源详情
  goToHouseDetail(e){
    my.navigateTo({
    url: '/pages/houseinfo/houseinfo01/houseinfo01?id='+e.target.dataset.text+'&rentType='+e.target.dataset.type,
    })
  }
});
