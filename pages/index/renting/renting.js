const houses = [
  {
    imgpath: '/image/house6.png',
    housename:'萧山宝龙城市广场1居室',
    houseinfo:'75m² | 2/8层',
    houseprice:'￥8231/月',
    distance:'距2号线建设一路1222米',
    point: '离地铁近',
  },
  {
    imgpath: '/image/house6.png',
    housename:'萧山宝龙城市广场1居室',
    houseinfo:'75m² | 2/8层',
    houseprice:'￥8231/月',
    distance:'距2号线建设一路1222米',
    point: '离地铁近',
  },
  {
    imgpath: '/image/house6.png',
    housename:'萧山宝龙城市广场1居室',
    houseinfo:'75m² | 2/8层',
    houseprice:'￥8231/月',
    distance:'距2号线建设一路1222米',
    point: '离地铁近',
  },
  {
    imgpath: '/image/house6.png',
    housename:'萧山宝龙城市广场1居室',
    houseinfo:'75m² | 2/8层',
    houseprice:'￥8231/月',
    distance:'距2号线建设一路1222米',
    point: '离地铁近',
  },
  
]
const houseList = [
  {
    imgpath: '/image/house3.png',
    housename:'萧山大成国际1居室',
    houseinfo:'75m² | 2/8层',
    houseprice:'￥8231/月',
    distance:'距2号线建设一路1222米',
    point: '离地铁近',
  },
  {
    imgpath: '/image/house3.png',
    housename:'萧山大成国际1居室',
    houseinfo:'75m² | 2/8层',
    houseprice:'￥8231/月',
    distance:'距2号线建设一路1222米',
    point: '离地铁近',
  },
  {
    imgpath: '/image/house3.png',
    housename:'萧山大成国际1居室',
    houseinfo:'75m² | 2/8层',
    houseprice:'￥8231/月',
    distance:'距2号线建设一路1222米',
    point: '离地铁近',
  },
  {
    imgpath: '/image/house3.png',
    housename:'萧山大成国际1居室',
    houseinfo:'75m² | 2/8层',
    houseprice:'￥8231/月',
    distance:'距2号线建设一路1222米',
    point: '离地铁近',
  }, 
  
]

// const sliderleft='0';
// const sliderright='10000';
Page({
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
    houses,
    houseList,
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
    screen1:false,
    screen2:false,
    screen3:false,
    screen4:false,
    screen5:false,
    screen6:false,
    screen7:false,
    screen8:false,
    screen9:false,
    screen10:false,
    screen11:false,
    screen12:false,
    screen13:false,
    screen14:false,
    screen15:false,
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
  onLoad() {
    // this.setDate({
    //   bg:true,
    // });
    // let that = this;

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
  screenPoint1(e){
    if(this.screen1){
      this.setData({
        screen1:false,
        screen2:false,
        screen3:false,
        screen4:false,
      });
    }else{
      this.setData({
        screen1:true,
        screen2:false,
        screen3:false,
        screen4:false,
      });
    }
  },
  screenPoint2(e){
    if(this.screen2){
      this.setData({
        screen1:false,
        screen2:false,
        screen3:false,
        screen4:false,
      });
    }else{
      this.setData({
        screen1:false,
        screen2:true,
        screen3:false,
        screen4:false,
      });
    }
  },
  screenPoint3(e){
    if(this.screen3){
      this.setData({
        screen1:false,
        screen2:false,
        screen3:false,
        screen4:false,
      });
    }else{
      this.setData({
        screen1:false,
        screen2:false,
        screen3:true,
        screen4:false,
      });
    }
  },
  screenPoint4(e){
    if(this.screen4){
      this.setData({
        screen1:false,
        screen2:false,
        screen3:false,
        screen4:false,
      });
    }else{
      this.setData({
        screen1:false,
        screen2:false,
        screen3:false,
        screen4:true,
      });
    }
  },
  screenPoint5(e){
    if(this.screen5){
      this.setData({
        screen5:false,
        screen6:false,
        screen7:false,
        screen8:false,
        screen9:false,
      });
    }else{
      this.setData({
        screen5:true,
        screen6:false,
        screen7:false,
        screen8:false,
        screen9:false,
      });
    }
  },
  screenPoint6(e){
    if(this.screen6){
      this.setData({
        screen5:false,
        screen6:false,
        screen7:false,
        screen8:false,
        screen9:false,
      });
    }else{
      this.setData({
        screen5:false,
        screen6:true,
        screen7:false,
        screen8:false,
        screen9:false,
      });
    }
  },
  screenPoint7(e){
    if(this.screen7){
      this.setData({
        screen5:false,
        screen6:false,
        screen7:false,
        screen8:false,
        screen9:false,
      });
    }else{
      this.setData({
        screen5:false,
        screen6:false,
        screen7:true,
        screen8:false,
        screen9:false,
      });
    }
  },
  screenPoint8(e){
    if(this.screen8){
      this.setData({
        screen5:false,
        screen6:false,
        screen7:false,
        screen8:false,
        screen9:false,
      });
    }else{
      this.setData({
        screen5:false,
        screen6:false,
        screen7:false,
        screen8:true,
        screen9:false,
      });
    }
  },
  screenPoint9(e){
    if(this.screen9){
      this.setData({
        screen5:false,
        screen6:false,
        screen7:false,
        screen8:false,
        screen9:false,
      });
    }else{
      this.setData({
        screen5:false,
        screen6:false,
        screen7:false,
        screen8:false,
        screen9:true,
      });
    }
  },
  screenPoint10(e){
    if(this.screen10){
      this.setData({
        screen10:false,
        screen11:false,
      });
    }else{
      this.setData({
        screen10:true,
        screen11:false,
      });
    }
  },
  screenPoint11(e){
    if(this.screen11){
      this.setData({
        screen10:false,
        screen11:false,
      });
    }else{
      this.setData({
        screen10:false,
        screen11:true,
      });
    }
  },
  screenPoint12(e){
    if(this.screen12){
      this.setData({
        screen12:false,
        screen13:false,
      });
    }else{
      this.setData({
        screen12:true,
        screen13:false,
      });
    }
  },
  screenPoint13(e){
    if(this.screen13){
      this.setData({
        screen12:false,
        screen13:false,
      });
    }else{
      this.setData({
        screen12:false,
        screen13:true,
      });
    }
  },
  screenPoint14(e){
    if(this.screen14){
      this.setData({
        screen14:false,
        screen15:false,
      });
    }else{
      this.setData({
        screen14:true,
        screen15:false,
      });
    }
  },
  screenPoint15(e){
    if(this.screen15){
      this.setData({
        screen14:false,
        screen15:false,
      });
    }else{
      this.setData({
        screen14:false,
        screen15:true,
      });
    }
  },
  // 筛选重置按钮
  screenBtnReset(){
    this.setData({
      screen1:false,
      screen2:false,
      screen3:false,
      screen4:false,
      screen5:false,
      screen6:false,
      screen7:false,
      screen8:false,
      screen9:false,
      screen10:false,
      screen11:false,
      screen12:false,
      screen13:false,
      screen14:false,
      screen15:false,
    });
  },
  // 筛选确认按钮
  screenBtnConfirm(){
    
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
});
