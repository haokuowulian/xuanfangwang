// const app = getApp();
// const directionList = [
//   {
//     title:'朝东',
//     selected:false,
//   },
//   {
//     title:'朝南',
//     selected:false,
//   },
//   {
//     title:'朝西',
//     selected:false,
//   },
//   { 
//     title:'朝北',
//     selected:false,
//   },
//   {
//     title:'东北',
//     selected:false,
//   },
//   {
//     title:'东南',
//     selected:false,
//   },
//   {
//     title:'西北',
//     selected:false,
//   },
//   {
//     title:'西南',
//     selected:false,
//   },
// ]
// const sortList = [
//   {
//     title:'默认排序',
//     selected:false,
//     id:'',
//   },
//   {
//     title:'价格从低到高',
//     selected:false,
//     id:1,
//   },
//   {
//     title:'价格从高到低',
//     selected:false,
//     id:2,
//   },
//   {
//     title:'面积从小到大',
//     selected:false,
//     id:3,
//   },
//   {
//     title:'面积从大到小',
//     selected:false,
//     id:4,
//   },
// ]
// const rentList =[
//   {
//     title:'不限',
//     selected:false,
//     id:'',
//   },
//   {
//     title:'1居',
//     selected:false,
//     id:1,
//   },
//   {
//     title:'2居',
//     selected:false,
//     id:2,
//   },
//   {
//     title:'3居+',
//     selected:false,
//     id:3,
//   },
// ]
// const priceList = [
//   {
//     title:'不限',
//     sliderleft1:0,
//     sliderright1:10000,
//     selected:false,
//   },
//   {
//     title:'1000元以下',
//     sliderleft1:0,
//     sliderright1:1000,
//     selected:false,
//   },
//   {
//     title:'1000-2000元',
//     sliderleft1:1000,
//     sliderright1:2000,
//     selected:false,
//   },
//   {
//     title:'2000-3000元',
//     sliderleft1:2000,
//     sliderright1:3000,
//     selected:false,
//   },
//   {
//     title:'3000-4000元',
//     sliderleft1:3000,
//     sliderright1:4000,
//     selected:false,
//   },
//   {
//     title:'4000-5000元',
//     sliderleft1:4000,
//     sliderright1:5000,
//     selected:false,
//   },
// ]

// Page({
//     type:'',
//     properties: {
//     // 这里定义了innerText属性，属性值可以在组件使用时指定
//     dropDownMenuTitle: {
//       type: Array,
//       value: ['1', '2', '3','4','5'],
//     },
//     dropDownMenuFirstData: {
//       type:Array,
//       value:[]
//     },
   
//     dropDownMenuSecondData: {
//       type: Array,
//       value: []
//     },
//     dropDownMenuThirdData: {
//       type: Array,
//       value: []
//     },
//     dropDownMenuFourthData: {
//       type: Array,
//       value: []
//     },
//     dropDownMenuFifthData:{
//       type: Array,
//       value: []
//     }
//   },
//   data: {
//     keyword:'',
//     priceList,
//     rentList,
//     sortList,
//     r1:false,
//     r2:false,
//     rentType:0,
//     featureList:[],
//     furnitureList:[],
//     featureCondition:[],
//     furnitureCondition:[],
//     directionList,
//     direction:[],
//     imgUrl:app.globalData.baseImgUrl_whj,
//     houseType:0,
//     pageIndex:1,
//     boutiqueHousing:[],
//     wholeRentalHousing:[],
//     sharedHousing:[],
//     hotels:[],
//     hyopen: false,
//     sqopen: false,
//     pxopen: false,
//     sortopen: false,
//     orderopen:false,
//     shownavindex: '',
//     dropDownMenuDataFirstRight: {},
//     dropDownMenuDataFirstCenter: {},
//     select1: '',
//     select2: '',
//     select3: '',
//     selectedQt: 0,
//     selectedSq: 0,
//     selectedSort: 1,
//     selectedOrder: 1,
//     bg1:true,
//     bg2:false,
//     showView1:false,
//     showView2:false,
//     condition1:'',//整租几室
//     // condition2:'',//合租几室
//     pricetype:false,
//     rentprice:'不限',
//     sliderleft:0,//租金
//     sliderright:10000,
//     sliderleft1:0,//租金
//     sliderright1:10000,
//     rentslider1:true,
//     rentslider2:false,
//     sort:'',
//     dropDownMenuFourthData: [{ id: 1, title: '智能排序' }, { id: 2, title: '发布时间' }, { id: 3, title: '距离优先' }],//排序数据
//     dropDownMenuFirstData:[
//         { id: 1, title: '附近', 
//           childModel:[
//             {id: '11',title: '1000米',
//               // childMode2: [
//               //   { id: '21', title: '沿浦' }, 
//               //   { id: '22', title:'钱江世纪城' },
//               // ]
//              },
//             {id: '12',title: '2000米',
//               // childMode2: [
//               //   { id: '21', title:'湘湖' },
//               //   { id: '22', title:'闻堰' },
//               // ]
//              },
//             {id: '13',title: '3000米',
//               // childMode2: [
//               //   { id: '21', title:'萧山市区' },
//               //   { id: '22', title:'西兴' },
//               // ]
//              },
//           ],
//           },
//         { id: 2, title: '区域', 
//           childModel: [
//             { id: '21', title: '不限' }, 
//             { id: '22', title: '余杭',
//               childMode2: [
//                 { id: '1', title: '乔司' }, 
//                 { id: '2', title:'仓前' },
//                 { id: '3', title:'临平' },
//                 { id: '4', title:'南苑' },
//                 { id: '5', title:'星桥' },
//                 { id: '6', title:'良渚' },
//               ]
//              },
//             { id: '23', title: '萧山',
//               childMode2: [
//                 { id: '1', title: '沿浦' }, 
//                 { id: '2', title:'钱江世纪城' },
//                 { id: '3', title:'湘湖' },
//                 { id: '4', title:'闻堰' },
//                 { id: '5', title:'萧山市区' },
//                 { id: '6', title:'西兴' },
//               ]
//              },
//             { id: '24', title: '滨江',
//             childMode2: [
//                 { id: '1', title: '长河' }, 
//                 { id: '2', title:'白马湖' },
//                 { id: '3', title:'西兴' },
//               ] },
//             { id: '25', title: '上城',
//             childMode2: [
//                 { id: '1', title: '湖滨' }, 
//                 { id: '2', title:'望江' },
//                 { id: '3', title:'清波' },
//               ] },
//             { id: '26', title: '下城',
//             childMode2: [
//                 { id: '1', title: '武林' }, 
//                 { id: '2', title:'长庆' },
//                 { id: '3', title:'天水' },
//               ] },
//             { id: '27', title: '西湖',
//             childMode2: [
//                 { id: '1', title: '西湖' }, 
//                 { id: '2', title:'灵隐' },
//                 { id: '3', title:'文一路' },
//               ] },
//             { id: '28', title: '拱墅',
//             childMode2: [
//                 { id: '1', title: '和睦' }, 
//                 { id: '2', title:'小河' },
//                 { id: '3', title:'大关' },
//               ] },
//             { id: '29', title: '江干',
//             childMode2: [
//                 { id: '1', title: '闸弄口' }, 
//                 { id: '2', title:'白杨' },
//                 { id: '3', title:'丁桥' },
//               ] },
//             ]},
//         { id: 3, title: '地铁',
//         childModel:[
//             {id: '11',title: '1号线',
//               // childMode2: [
//               //   { id: '21', title: '沿浦' }, 
//               //   { id: '22', title:'钱江世纪城' },
//               // ]
//              },
//             {id: '12',title: '2号线',
//               // childMode2: [
//               //   { id: '21', title:'湘湖' },
//               //   { id: '22', title:'闻堰' },
//               // ]
//              },
//             {id: '13',title: '4号线',
//               // childMode2: [
//               //   { id: '21', title:'萧山市区' },
//               //   { id: '22', title:'西兴' },
//               // ]
//              },
//           ],},
//       ],
//   },
//   onLoad(query) {
//     this.setData({
//       houseType:query.type,
//     });
   
//     console.log(query.type)
//     this.setData({
//       rentType:1,
//       r1:false,
//       r2:true,
//     });
    
//     switch(query.type){
//       case "4"://精选房源
//         this.getBoutiqueHousing();
//       break;
//     }
//    this.getFeature();
//    this.getFurniture();
//   },
//   //获取筛选下拉框中房源特色
//   getFeature(){
//     var that = this;
//     my.request({
//       url:app.globalData.baseUrl_whj+"IF/selectData/getFeatureListIF.do",
//       method: 'POST',
//       dataType: 'json',
//       success: (res) => {
//         var li = res.data.data;
//       if(res.data.success){
//         that.setData({
//           featureList:li,
//         });
//       }
//       },
//     });
//   },
//   //获取筛选下拉框中房源家具
//   getFurniture(){
//     var that = this;
//     my.request({
//       url:app.globalData.baseUrl_whj+"IF/selectData/getFurnitureListIF.do",
//       method: 'POST',
//       dataType: 'json',
//       success: (res) => {
//         var li = res.data.data;
//         console.log(res.data)
//         console.log(li)
//       if(res.data.success){
//         that.setData({
//           furnitureList:li,
//         });
//       }
//       },
//     });
//   },
//   onShow(){
//     this.setData({showView1:true});
//     this.setData({rent1:true});

//     this.onBtnReset();
//     this.rentBtnReset();
//     this.onSortRest();
//   },

//   onChange1(){
//     this.setData({bg1:true,bg2:false});
//     this.setData({showView1:true,showView2:false});
//   },
//   onChange2(){
//     this.setData({bg2:true,bg1:false});
//     this.setData({showView2:true,showView1:false});
//   },
//   // 排序下拉框
//   orderChoose(e){
//     var that = this;
//     var sort = e.currentTarget.dataset.s;
//     var index = e.currentTarget.dataset.index;;
//     var arr = that.data.sortList;
//     for(let i=0;i<arr.length;i++){
//       arr[i].selected=false;
//     }
//     arr[index].selected=true;
//     that.setData({
//       pageIndex:1,
//       sortList:arr,
//       sort:sort,
//     });
//     console.log('******************')
//     console.log(arr)
//     that.onPullDownRefresh();
//     that.closeHyFilter();
//   },
  
//   // 筛选下拉框
//   //房源朝向
//   screenDirection(e){
//     var that = this;
//     let index = e.currentTarget.dataset.index;
//     var arr = that.data.directionList;
//     var condition = that.data.direction;
//     console.log(that.data.direction)
//     if(arr[index].selected){
//       arr[index].selected=false;
//       that.remove(condition,arr[index].title);
//     }else{
//       arr[index].selected=true;
//       condition.push(arr[index].title);
//     }
    
//     that.setData({
//       directionList:arr,
//       direction:condition,
//     });
//     console.log(that.data.direction)
//   },
//   //房源特色
//   screenPoint(e){
//     var that = this;
//     var id = e.target.dataset.id;
//     let index = e.currentTarget.dataset.index;
//     console.log(id)
//     console.log('**************'+index)
//     var arr = that.data.featureList;
//     var condition = that.data.featureCondition
//      console.log(arr[index].deleted)
//     if(arr[index].deleted){
//       arr[index].deleted=false;
//       that.remove(condition,id);
//     }else{
//       arr[index].deleted=true;
//       condition.push(id);
//     }
//     console.log(arr[index].deleted)
//     console.log(condition)
//     that.setData({
//       featureList:arr,
//       featureCondition:condition,
//     });
//     console.log(that.data.featureCondition)
//   },
//   //房源家具
//   screenFurniture(e){
//     var that = this;
//     var id = e.target.dataset.id;
//     let index = e.currentTarget.dataset.index;
//     console.log(id)
//     console.log('**************'+index)
//     var arr = that.data.furnitureList;
//     var condition = that.data.furnitureCondition
//      console.log(arr[index].deleted)
//     if(arr[index].deleted){
//       arr[index].deleted=false;
//       that.remove(condition,id);
//     }else{
//       arr[index].deleted=true;
//       condition.push(id);
//     }
//     console.log(arr[index].deleted)
//     console.log(condition)
//     that.setData({
//       furnitureList:arr,
//       furnitureCondition:condition,
//     });
//     console.log(that.data.furnitureCondition)
//   },
//   //删除指定数组元素
//   remove(array,val){
//     for (var i = 0; i < array.length; i++) {
//       if(array[i] == val){
//         array.splice(i, 1);
//       }
//     }
//     return -1; 
//   },
 
//   // 筛选重置按钮
//   screenBtnReset(){
//     var that = this;
//     var arr1 = that.data.furnitureList;
//     for(let i = 0;i<arr1.length;i++){
//       arr1[i].deleted=false;
//     }
//     var arr2 = that.data.featureList;
//     for(let i = 0;i<arr2.length;i++){
//       arr2[i].deleted=false;
//     }
//     var arr3 = that.data.directionList;
//     for(let i =0;i<arr3.length;i++){
//       arr3[i].selected=false;
//     }
//     that.setData({
//       directionList:arr3,
//       featureList:arr2,
//       furnitureList:arr1,
//       direction:[],
//       featureCondition:[],
//       furnitureCondition:[],
//     });
//   },
//   // 筛选确认按钮
//   screenBtnConfirm(){
//     var that = this;
//     that.setData({
//       pageIndex:1,
//     });
//     that.onPullDownRefresh();
//     that.closeHyFilter();
//   },
  
//   // 租金下拉框

//   //租金固定选择
//   rentChoose(e){
//     var that = this;
//     var min = e.currentTarget.dataset.min;
//     var max = e.currentTarget.dataset.max;
//     var index = e.currentTarget.dataset.index;
    
//     var arr = that.data.priceList;
//     for(let i=0;i<arr.length;i++){
//       arr[i].selected=false;
//     }
//     arr[index].selected=true;
//     that.setData({
//       pageIndex:1,
//       priceList:arr,
//       sliderleft1:min,
//       sliderright1:max,
//       pricetype:true,
//       rentprice:arr[index].title,
//     });
//     console.log('******************')
//     console.log(arr)
//   },

//   // 滑块拖动中触发
//   leftSchange(e){
//     let value = e.detail.value;
//     this.setData({
//       pricetype:false,
//       sliderleft:e.detail.value,
//       rentslider2:true,
//       rentslider1:false,
//     });
//   },
//   rightSchange(e){
//     let value =e.detail.value;
//     this.setData({
//       pricetype:false,
//       sliderright:e.detail.value,
//       rentslider2:true,
//       rentslider1:false,
//     });
//   },
//   // 租金范围重置按钮
//   rentBtnReset(){
//     var that = this;
//     var arr = that.data.priceList;
//     for(let i=0;i<arr.length;i++){
//       arr[i].selected=false;
//     }
//     arr[0].selected=true;
//     that.setData({
//       priceList:arr,
//       pricetype:true,
//       sliderleft1:0,
//       sliderright1:10000,
//       rentprice:'不限',
//       rentslider1:true,
//       rentslider2:false,
//     });
    
//   },
//   // 租金范围确认按钮
//   rentBtnConfirm(){
//     var that = this;
//     var sort = that.data.sort;
//     that.setData({
//       pageIndex:1,
//     });
//     that.onPullDownRefresh();
//     that.closeHyFilter();
//     if(that.data.pricetype){
//       // 提交固定取值
//       console.log('固定'+that.data.sliderleft1+'|'+that.data.sliderright1)
      
//     }else{
//       // 提交自选取值
//       console.log('自选：'+that.data.sliderleft+'|'+that.data.sliderright)
      
//     }
//   },
//   // 租房下拉框
//   //整租
//   selectRent1(e){
//    if(this.r1){
//      this.setData({
//         r1:false,
//         r2:false,
//         rentType:1,
//         condition1:'',
//       });
//    }else{
//      this.setData({
//         r1:true,
//         r2:false,
//         rentType:1,
//         condition1:'',
//       });
//    }
//    console.log(this.data.rentType)
//    console.log('*************************')
//    console.log(this.data.rentType)
//   },
//   //合租
//   selectRent2(e){
//     if(this.r2){
//      this.setData({
//         r1:false,
//         r2:false,
//         rentType:2,
//         condition1:'',
//       });
//    }else{
//      this.setData({
//         r1:false,
//         r2:true,
//         rentType:2,
//         condition1:'',
//       });
//    }
//    console.log(this.data.rentType)
//    console.log('*************************')
//    console.log(this.data.rentType)
//   },
//   //几室选择
//    onSelect(e){
//      var that = this;
//      var s = e.currentTarget.dataset.s;
//      var index = e.currentTarget.dataset.index;
    
//     var arr = that.data.rentList;
//     for(let i=0;i<arr.length;i++){
//       arr[i].selected=false;
//     }
//     arr[index].selected=true;
//     that.setData({
//       pageIndex:1,
//       rentList:arr,
//       condition1:s,
//     });
//     console.log('******************')
//     console.log(arr)
    
//   },
//   onSortRest(){
//     var that = this;
//     var arr = that.data.sortList;
//     for(let i=0;i<arr.length;i++){
//       arr[i].selected=false;
//     }
//     arr[0].selected=true;
//     that.setData({
//       sortList:arr,
//       sort:'',
//     });
//   },
//   onBtnReset(){
//     var that = this;
//     var arr = that.data.rentList;
//     for(let i=0;i<arr.length;i++){
//       arr[i].selected=false;
//     }
//     arr[0].selected=true;
//     that.setData({
//       rentList:arr,
//       condition1:'',
//     });
//   },
//   //租房条件确认按钮
//   onBtnConfirm(){
//     var that = this;
//     that.setData({
//       pageIndex:1,
//     });
//     console.log(that.data.condition1+'|'+that.data.condition2+'|'+that.data.rentType)
//     that.onPullDownRefresh();
//     that.closeHyFilter();
//   },
//   // 下拉框
//   listqy(e){
//     if (this.data.hyopen) {
//         this.setData({
//           hyopen: false,
//           sqopen: false,
//           pxopen: false,
//           sortopen: false,
//           orderopen:false,
//           shownavindex: 0,
//         })
//       } else {
//         this.setData({
//           hyopen: true,
//           pxopen: false,
//           sqopen: false,
//           sortopen: false,
//           orderopen:false,
//           shownavindex: e.currentTarget.dataset.nav
//         })
//       }
//   },
//   list(e){
//     if (this.data.sqopen) {
//         this.setData({
//           sqopen: false,
//           pxopen: false,
//           hyopen: false,
//           sortopen: false,
//           orderopen:false,
//           shownavindex: 0
//         })
//       } else {
//         this.setData({
//           sqopen: true,
//           pxopen: false,
//           hyopen: false,
//           sortopen: false,
//           orderopen:false,
//           shownavindex: e.currentTarget.dataset.nav
//         })
//       }
//   },
//   listpx(e){
//     if (this.data.pxopen) {
//         this.setData({
//           sqopen: false,
//           pxopen: false,
//           hyopen: false,
//           sortopen: false,
//           orderopen:false,
//           shownavindex: 0
//         })
//       } else {
//         this.setData({
//           sqopen: false,
//           pxopen: true,
//           sortopen: false,
//           hyopen: false,
//           orderopen:false,
//           shownavindex: e.currentTarget.dataset.nav
//         })
//       }
//       console.log(e.target)
//   },
//   listsort(e){
//     if (this.data.sortopen) {
//         this.setData({
//           sqopen: false,
//           pxopen: false,
//           hyopen: false,
//           sortopen: false,
//           orderopen:false,
//           shownavindex: 0
//         })
//       } else {
//         this.setData({
//           sqopen: false,
//           pxopen: false,
//           hyopen: false,
//           sortopen: true,
//           orderopen:false,
//           shownavindex: e.currentTarget.dataset.nav
//         })
//       }
//   },
//   listorder(e){
//     if(this.data.orderopen){
//       this.setData({
//           sqopen: false,
//           pxopen: false,
//           hyopen: false,
//           sortopen: false,
//           orderopen:false,
//           shownavindex: 0
//         })
//     }else {
//         this.setData({
//           sqopen: false,
//           pxopen: false,
//           hyopen: false,
//           sortopen: false,
//           orderopen:true,
//           shownavindex: e.currentTarget.dataset.nav
//         })
//       }
//   },
//   // 位置下拉框
//   selectleft(e){
//       var model = e.target.dataset.model.childModel;
//       var selectedId = e.target.dataset.model.id
//       var selectedTitle = e.target.dataset.model.title;
//       this.setData({
//         dropDownMenuDataFirstRight: model==null?"":model,
//         select1: selectedId,
//         select2: '',
//         select3: '',
//         dropDownMenuDataFirstCenter: {},
//       })
//       if (model == null || model.length == 0) {
//         this.closeHyFilter();
//         this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
//       }
//   },
//   selectcenter(e){
//       var model = e.target.dataset.model.childMode2;
//       var selectedId = e.target.dataset.model.id
//       var selectedTitle = e.target.dataset.model.title;
//       this.setData({
//         dropDownMenuDataFirstCenter:model==null?"":model,
//         select2: selectedId,
//         select3: '',
//       })
//       if (model == null || model.length == 0) {
//         this.closeHyFilter();
//         this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
//       }
//   },
//   selectright(e){
//      var selectedId = e.target.dataset.model.id
//       var selectedTitle = e.target.dataset.model.title;
//       this.closeHyFilter();
//       this.setData({
//         select3: selectedId
//       })
//       this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
//   },
//   selectsqitem(e) {
//       var selectedId = e.target.dataset.model.id
//       var selectedTitle = e.target.dataset.model.title;
//       this.closeHyFilter();
//       this.setData({
//         selectedSq: selectedId
//       })
//       this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
//     },
//   selecsortlitem(e) {
//       var selectedId = e.target.dataset.model.id
//       var selectedTitle = e.target.dataset.model.title;
//       this.closeHyFilter();
//       this.setData({
//         selectedSort: selectedId
//       })
//       this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
//     },
//   selecqtlitem(e) {
//       var selectedId = e.target.dataset.model.id
//       var selectedTitle = e.target.dataset.model.title;
//       this.closeHyFilter();
//       this.setData({
//         selectedQt: selectedId
//       })
//       this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
//     },
//   selecorderitem(e){
//       var selectedId = e.target.dataset.model.id
//       var selectedTitle = e.target.dataset.model.title;
//       this.closeHyFilter();
//       this.setData({
//         selectedOrder: selectedId
//       })
//       this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
//   },

//   /**关闭筛选 */
//     closeHyFilter() {
//       if (this.data.hyopen) {
//         this.setData({
//           hyopen: false,
//           sqopen: false,
//           pxopen: false,
//           sortopen: false,
//           orderopen:false,
//         })
//       } else if (this.data.sqopen) {
//         this.setData({
//           sqopen: false,
//           pxopen: false,
//           hyopen: false,
//           sortopen: false,
//           orderopen:false,
//         })
//       }
//       else if (this.data.pxopen) {
//         this.setData({
//           sqopen: false,
//           pxopen: false,
//           hyopen: false,
//           sortopen: false,
//           orderopen:false,
//         })
//       }
//       else if (this.data.sortopen) {
//         this.setData({
//           sqopen: false,
//           pxopen: false,
//           hyopen: false,
//           sortopen: false,
//           orderopen:false,
//         })
//       }
//       else if (this.data.orderopen) {
//         this.setData({
//           sqopen: false,
//           pxopen: false,
//           hyopen: false,
//           sortopen: false,
//           orderopen:false,
//         })
//       }
//   },
//   //获取精选房源
//   getBoutiqueHousing(){
//     console.log('--------'+this.data.pageIndex);
//     var that=this;
//     var minRent=0;
//     var maxRent=10000;
//     var condition = that.data.condition1;
//     var sort = that.data.sort;
//     if(that.data.pricetype){
//       minRent=that.data.sliderleft1;
//       maxRent=that.data.sliderright1;
//     }else{
//       minRent=that.data.sliderleft;
//       maxRent=that.data.sliderright;
//     }
//     var a = that.data.featureCondition;
//     var b = that.data.furnitureCondition;
//     var c = that.data.direction;
//     var featureCondition = a.join(",");
//     var furnitureCondition = b.join(",");
//     var directionCondition = c.join(",");
//     var rt = that.data.rentType;
//     console.log( this.data.pageIndex);
//     my.request({
//       url: app.globalData.base_whj+"IF/housing/getHomeHousingApartmentIF.do",
//       method: 'POST',
//       data: {
//         // room:condition,//几室1/2/3
//         // minRent:minRent,//最小租金
//         // maxRent:maxRent,//最大租金
//         // toward:directionCondition,//朝向directionCondition
//         // feature:featureCondition,//特色
//         // furniture:furnitureCondition,//家具
//         // sortWay:sort,//排序方式
//         // decorateType:-3,
//         // rentType:1,
//         // pageIndex: this.data.pageIndex,
//         // pageSize: 6,
//         // keyword:this.data.keyword,
//         decorateType:'',
//         rentType:1,
//         room:'',
//         minRent:'',
//         maxRent:'',
//         toward:'',
//         feature:'',
//         furniture:'',
//         sortWay:'',
//         pageIndex:1,
//         pageSize:6,
//         keyword:'',
//       },
//       dataType: 'json',
//       success: function(res) {
//         console.log(res.data);
//         if(res.data.success){
//            if(that.data.pageIndex==1){
//                  that.setData({
//             boutiqueHousing:res.data.data
//           });
//             }else if(that.data.boutiqueHousing.length<res.data.count){
//                that.setData({
//                 boutiqueHousing:that.data.boutiqueHousing.concat(res.data.data)
//               });
//             }
//           my.stopPullDownRefresh();
//         }
//       },
//       fail: function(res) {
//        console.log(res);
//       },
//       complete: function(res) {
//         my.hideLoading();
//       }
//     });
//   },

  
//   onPullDownRefresh() {
//     var rentType = this.data.rentType;
//     this.setData({
//       pageIndex:1
//     });
//      switch(this.data.houseType){
//       case "4"://精选房源
//         this.getBoutiqueHousing();
//       break;

//     }
//   },
//   onReachBottom() {
//     this.setData({
//       pageIndex:this.data.pageIndex+1
//     });
//      switch(this.data.houseType){
//       case "4"://精选房源
//         this.getBoutiqueHousing();
//       break;

//     }
//   },
//   //前往房源详情
//   goToHouseDetail(e){
//     my.navigateTo({
//     url: '/pages/apartment/apartment?id='+e.target.dataset.text+'&rentType='+e.target.dataset.type,
//     })
//   },
//   //搜索框搜索
//   onInput(keyword){
//     var houseType = this.data.houseType;
//     this.setData({
//       keyword:keyword,
//     });
    
//     const regExp = /[A-Za-z]/;
//     if(keyword ===''|| (regExp.test(keyword)&&keyword.length ===1)){
      
//       this.setData({
//         areaList:[],
     
//         placeList:[],
//       });
//       return;
//     }
//     console.log(keyword)
//     if(houseType==1){
//       my.request({
//       url:app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
//       method: 'POST',
//       data:{
//         keyword:keyword,
//         rentType:1,
//         pageIndex: this.data.pageIndex,
//         pageSize: 10,
//       },
//       success: (res) => {
//         console.log(res.data.data)
//         this.setData({
//           // area: res.hotels,

//           boutiqueHousing: res.data.data,
//         });
//         this.addToHistory(keyword);
//       },
//     });
//     }

//     if(houseType==2){
//       my.request({
//       url:app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
//       method: 'POST',
//       data:{
//         keyword:keyword,
//         rentType:1,
//         pageIndex: this.data.pageIndex,
//         pageSize: 10,
//       },
//       success: (res) => {
//         console.log(res.data.data)
//         this.setData({
//           // area: res.hotels,

//           wholeRentalHousing: res.data.data,
//         });
//         this.addToHistory(keyword);
//       },
//     });
//     }

//     if(houseType==3){
//       my.request({
//       url:app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
//       method: 'POST',
//       data:{
//         keyword:keyword,
//         rentType:2,
//         pageIndex: this.data.pageIndex,
//         pageSize: 10,
//       },
//       success: (res) => {
//         console.log(res.data.data)
//         this.setData({
//           // area: res.hotels,

//           sharedHousing: res.data.data,
//         });
//         this.addToHistory(keyword);
//       },
//     });
//     }
    
//   },
// });




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
const sortList = [
  {
    title:'默认排序',
    selected:false,
    id:'',
  },
  {
    title:'价格从低到高',
    selected:false,
    id:1,
  },
  {
    title:'价格从高到低',
    selected:false,
    id:2,
  },
  {
    title:'面积从小到大',
    selected:false,
    id:3,
  },
  {
    title:'面积从大到小',
    selected:false,
    id:4,
  },
]
const rentList =[
  {
    title:'不限',
    selected:false,
    id:'',
  },
  {
    title:'1居',
    selected:false,
    id:1,
  },
  {
    title:'2居',
    selected:false,
    id:2,
  },
  {
    title:'3居+',
    selected:false,
    id:3,
  },
]
const priceList = [
  {
    title:'不限',
    sliderleft1:0,
    sliderright1:100000,
    selected:false,
  },
  {
    title:'1000元以下',
    sliderleft1:0,
    sliderright1:1000,
    selected:false,
  },
  {
    title:'1000-2000元',
    sliderleft1:1000,
    sliderright1:2000,
    selected:false,
  },
  {
    title:'2000-3000元',
    sliderleft1:2000,
    sliderright1:3000,
    selected:false,
  },
  {
    title:'3000-4000元',
    sliderleft1:3000,
    sliderright1:4000,
    selected:false,
  },
  {
    title:'4000-5000元',
    sliderleft1:4000,
    sliderright1:5000,
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
    keyword:'',
    priceList,
    rentList,
    sortList,
    r1:false,
    r2:false,
    rentType:0,
    featureList:[],
    furnitureList:[],
    featureCondition:[],
    furnitureCondition:[],
    directionList,
    direction:[],
    imgUrl:app.globalData.baseImgUrl_whj,
    houseType:'',
    pageIndex:1,
    boutiqueHousing:[],
    wholeRentalHousing:[],
    sharedHousing:[],
    hotels:[],
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
    condition1:'',//整租几室
    // condition2:'',//合租几室
    pricetype:false,
    rentprice:'不限',
    sliderleft:0,//租金
    sliderright:100000,
    sliderleft1:0,//租金
    sliderright1:100000,
    rentslider1:true,
    rentslider2:false,
    rentslider3:false,
    sort:'',
    dropDownMenuFourthData: [{ id: 1, title: '智能排序' }, { id: 2, title: '发布时间' }, { id: 3, title: '距离优先' }],//排序数据
    dropDownMenuFirstData:[
        // { id: 2, title: '区域', 
          // childModel: [
          //   { id: '21', title: '不限' }, 
          //   { id: '22', title: '余杭',
          //    },
          //   { id: '23', title: '萧山',
          //    },
          //   { id: '24', title: '滨江',
          //     },
          //   { id: '25', title: '上城',
          //     },
          //   { id: '26', title: '下城',
          //     },
          //   { id: '27', title: '西湖',
          //     },
          //   { id: '28', title: '拱墅',
          //     },
          //   { id: '29', title: '江干',
          //     },
          // ]
        // },
      ],
    areaList:[],
    streetList:[],
    display1:false,
    display2:false,
    display3:false,
    cityAdcode:'',//城市编码
    areaCode:'',//区县编码
    distCode:'',//街道编码
  },
  onLoad(query) {
    this.setData({
      houseType:query.type,
    });
   
    console.log(query.type)
    this.setData({
      rentType:1,
      r1:false,
      r2:true,
    });
    
    switch(query.type){
      case "4"://精选房源
        this.getBoutiqueHousing();
      break;
    }
   this.getFeature();
   this.getFurniture();
  },
  onShow(){
    this.getCityLocation();
    this.setData({showView1:true});
    this.setData({rent1:true});

    this.onBtnReset();
    this.rentBtnReset();
    this.onSortRest();
  },
  //根据当前城市行政编码查区域信息
  getCityLocation(){
    var that = this;
    var cityAdcode = my.getStorageSync({
      key: 'cityAdcode', // 缓存数据的key
    }).data;
    console.log('cityAdcode:')
    console.log(cityAdcode)
    my.request({
      url: app.globalData.baseUrl_whj+'IF/selectData/getDistListByParentId.do', // 目标服务器url
      // url: 'http://192.168.1.89:8080/LLGY/IF/selectData/getDistListByParentId.do', // 目标服务器url
      method: 'POST',
      headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
      data: {
        parenDistId:cityAdcode,
      },
      dataType: 'json',
      success: (res) => {
        console.log('位置')
        console.log(res)
        that.setData({
          dropDownMenuFirstData:[{id:cityAdcode,title:'区域'}],
          areaList:res.data.distList,
          cityAdcode:cityAdcode,
        });
        my.setStorageSync({
          key: 'areaList', // 缓存数据的key
          data: res.data.distList, // 要缓存的数据
        });
      },
    });
  },
  //获取筛选下拉框中房源特色
  getFeature(){
    var that = this;
    my.request({
      url:app.globalData.baseUrl_whj+"IF/selectData/getFeatureListIF.do",
      method: 'POST',
      headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
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
    my.request({
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


  onChange1(){
    this.setData({bg1:true,bg2:false});
    this.setData({showView1:true,showView2:false});
  },
  onChange2(){
    this.setData({bg2:true,bg1:false});
    this.setData({showView2:true,showView1:false});
  },
  // 排序下拉框
  orderChoose(e){
    var that = this;
    var sort = e.currentTarget.dataset.s;
    var index = e.currentTarget.dataset.index;;
    var arr = that.data.sortList;
    for(let i=0;i<arr.length;i++){
      arr[i].selected=false;
    }
    arr[index].selected=true;
    that.setData({
      pageIndex:1,
      sortList:arr,
      sort:sort,
    });
    console.log('******************')
    console.log(arr)
    var distCode = that.data.distCode;
    if(distCode==''){
      distCode = that.data.areaCode;
      if(distCode==''){
        distCode = that.data.cityAdcode;
      }
    }
    that.onPullDownRefresh(distCode);
    that.closeHyFilter();
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
    that.setData({
      pageIndex:1,
    });
    var distCode = that.data.distCode;
    if(distCode==''){
      distCode = that.data.areaCode;
      if(distCode==''){
        distCode = that.data.cityAdcode;
      }
    }
    that.onPullDownRefresh(distCode);
    // that.getBoutiqueHousing();
    that.closeHyFilter();
  },
  
  // 租金下拉框

  //租金固定选择
  rentChoose(e){
    var that = this;
    var min = e.currentTarget.dataset.min;
    var max = e.currentTarget.dataset.max;
    var index = e.currentTarget.dataset.index;
    
    var arr = that.data.priceList;
    for(let i=0;i<arr.length;i++){
      arr[i].selected=false;
    }
    arr[index].selected=true;
    that.setData({
      rentslider1:true,
      rentslider2:false,
      rentslider3:false,
      pageIndex:1,
      priceList:arr,
      sliderleft1:min,
      sliderright1:max,
      pricetype:true, 
      rentprice:arr[index].title,
    });
    console.log('******************')
    console.log(arr)
  },

  // 滑块拖动中触发
  leftSchange(e){
    let value = e.detail.value;
    if(this.data.sliderright==100000&&this.data.pricetype){
      this.setData({
        pricetype:false,
        sliderleft:value,
        sliderright:100000,
        rentprice:'无限',
        rentslider2:false,
        rentslider1:false,
        rentslider3:true,
      });
    }else{
      this.setData({
        pricetype:false,
        sliderleft:value,
        rentslider2:false,
        rentslider1:false,
        rentslider3:true,
      });
    }
    
  },
  rightSchange(e){
    let value =e.detail.value;
    if(value>=10000){
      this.setData({
        pricetype:false,
        sliderright:100000,
        rentprice:'无限',
        rentslider2:false,
        rentslider1:false,
        rentslider3:true,
      });
    }else{
      this.setData({
        pricetype:false,
        sliderright:e.detail.value,
        rentslider2:true,
        rentslider1:false,
        rentslider3:false,
      });
    }
    
  },
  // 租金范围重置按钮
  rentBtnReset(){
    var that = this;
    var arr = that.data.priceList;
    for(let i=0;i<arr.length;i++){
      arr[i].selected=false;
    }
    arr[0].selected=true;
    that.setData({
      priceList:arr,
      pricetype:true,
      sliderleft1:0,
      sliderright1:100000,
      rentprice:'不限',
      rentslider1:true,
      rentslider2:false,
      rentslider3:false,
    });
    
  },
  // 租金范围确认按钮
  rentBtnConfirm(){
    var that = this;
    var sort = that.data.sort;
    that.setData({
      pageIndex:1,
    });
    var distCode = that.data.distCode;
    if(distCode==''){
      distCode = that.data.areaCode;
      if(distCode==''){
        distCode = that.data.cityAdcode;
      }
    }
    that.onPullDownRefresh(distCode);
    // that.getBoutiqueHousing();
    that.closeHyFilter();
    if(that.data.pricetype){
      // 提交固定取值
      console.log('固定'+that.data.sliderleft1+'|'+that.data.sliderright1)
      
    }else{
      // 提交自选取值
      console.log('自选：'+that.data.sliderleft+'|'+that.data.sliderright)
      
    }
  },
  // 租房下拉框
  //整租
  selectRent1(e){
   if(this.r1){
     this.setData({
        r1:false,
        r2:false,
        rentType:1,
        condition1:'',
        houseType:'2',
      });
   }else{
     this.setData({
        r1:true,
        r2:false,
        rentType:1,
        condition1:'',
        houseType:'2',
      });
   }
   console.log(this.data.rentType)
   console.log('*************************')
   console.log(this.data.rentType)
  },
  //合租
  selectRent2(e){
    if(this.r2){
     this.setData({
        r1:false,
        r2:false,
        rentType:2,
        condition1:'',
        houseType:'3',
      });
   }else{
     this.setData({
        r1:false,
        r2:true,
        rentType:2,
        condition1:'',
        houseType:'3',
      });
   }
   console.log(this.data.rentType)
   console.log('*************************')
   console.log(this.data.rentType)
  },
  //几室选择
   onSelect(e){
     var that = this;
     var s = e.currentTarget.dataset.s;
     var index = e.currentTarget.dataset.index;
    
    var arr = that.data.rentList;
    for(let i=0;i<arr.length;i++){
      arr[i].selected=false;
    }
    arr[index].selected=true;
    that.setData({
      pageIndex:1,
      rentList:arr,
      condition1:s,
    });
    console.log('******************')
    console.log(arr)
    
  },
  onSortRest(){
    var that = this;
    var arr = that.data.sortList;
    for(let i=0;i<arr.length;i++){
      arr[i].selected=false;
    }
    arr[0].selected=true;
    that.setData({
      sortList:arr,
      sort:'',
    });
  },
  onBtnReset(){
    var that = this;
    var arr = that.data.rentList;
    for(let i=0;i<arr.length;i++){
      arr[i].selected=false;
    }
    arr[0].selected=true;
    that.setData({
      rentList:arr,
      condition1:'',
    });
  },
  //租房条件确认按钮
  onBtnConfirm(){
    var that = this;
    that.setData({
      pageIndex:1,
    });
    console.log(that.data.condition1+'|'+that.data.condition2+'|'+that.data.rentType+'|'+that.data.houseType)
    
   
    var distCode = that.data.distCode;
    if(distCode==''){
      distCode = that.data.areaCode;
      if(distCode==''){
        distCode = that.data.cityAdcode;
      }
    }
    that.onPullDownRefresh(distCode);
    that.closeHyFilter();
  },
  // 下拉框
  listqy(e){
    if (this.data.hyopen) {
        this.setData({
          display1:false,
          hyopen: false,
          sqopen: false,
          pxopen: false,
          sortopen: false,
          orderopen:false,
          shownavindex: 0,
        })
      } else {
        this.setData({
          display1:true,
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
    console.log(e)
    var that = this;
    var areaList = my.getStorageSync({
      key: 'areaList', // 缓存数据的key
    }).data;
    var cityAdcode = my.getStorageSync({
      key: 'cityAdcode', // 缓存数据的key
    }).data;
      var model = e.target.dataset.model.childModel;
      var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.setData({
        display2:true,
        dropDownMenuDataFirstRight: model==null?"":model,
        select1: cityAdcode,
        select2: '',
        select3: '',
        areaList: areaList,
      })
      // if (model == null || model.length == 0) {
      //   this.closeHyFilter();
      //   this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
      // }
  },
  selectcenter(e){
    var that = this;
    console.log(e)
    var distCode = e.target.dataset.model.distCode;
    that.setData({
      display3:true,
      select2:distCode,
      select3: ''
    });
    that.getStreet(distCode)
  },
  selectcenter1(e){
    var that = this;
    console.log(e)
    var id = e.target.dataset.id;
    that.onPullDownRefresh(id);
    that.setData({
      select2:id,
      display3:false,
    });
    that.closeHyFilter();
  },


  getStreet(distCode){
    var that = this;
    console.log(distCode)
    that.setData({
      display3:true,
      select2:distCode,
    });
    my.request({
      url: app.globalData.baseUrl_whj+'IF/selectData/getDistListByParentId.do', // 目标服务器url
      // url: 'http://192.168.1.89:8080/LLGY/IF/selectData/getDistListByParentId.do', // 目标服务器url
      method: 'POST',
      header:{
            'content-type': 'application/x-www-form-urlencoded'
          },
      data: {
        parenDistId:distCode,
      },
      dataType: 'json',
      success: (res) => {
        console.log('位置')
        console.log(res)
        that.setData({
          streetList:res.data.distList,
          select2: distCode,
          select3: '',
        });
      },
    });
  },
  selectright(e){
    var that = this;
    console.log('街道编码：')
    var distCode = e.target.dataset.model.distCode;
    console.log(distCode)
    that.onPullDownRefresh(distCode);
    that.setData({
      distCode:distCode,
      select3:distCode,
    });
    that.closeHyFilter();
    //  var selectedId = e.target.dataset.model.id
    //   var selectedTitle = e.target.dataset.model.title;
      // this.closeHyFilter();
      // this.setData({
      //   select3: selectedId
      // })
      // this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
  },
  selectright1(e){
    var that = this;
    var id = e.target.dataset.id;
    console.log(id)
    that.onPullDownRefresh(id);
    that.setData({
      select3:id,
    });
    that.closeHyFilter();
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
  //获取精选房源
  getBoutiqueHousing(){
    console.log('--------'+this.data.pageIndex);
    var that=this;
    var minRent=0;
    var maxRent=10000;
    var condition = that.data.condition1;
    var sort = that.data.sort;
    if(that.data.pricetype){
      minRent=that.data.sliderleft1;
      maxRent=that.data.sliderright1;
    }else{
      minRent=that.data.sliderleft;
      maxRent=that.data.sliderright;
    }
    var a = that.data.featureCondition;
    var b = that.data.furnitureCondition;
    var c = that.data.direction;
    var featureCondition = a.join(",");
    var furnitureCondition = b.join(",");
    var directionCondition = c.join(",");
    var rt = that.data.rentType;
    console.log( this.data.pageIndex);
    my.request({
      url: app.globalData.base_whj+"IF/housing/getHomeHousingApartmentIF.do",//公寓
      // url: app.globalData.base_whj+"IF/housing/getHomeHousingApartmentIF.do",//中介
      method: 'POST',
      headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
      data: {
        // room:condition,//几室1/2/3
        // minRent:minRent,//最小租金
        // maxRent:maxRent,//最大租金
        // toward:directionCondition,//朝向directionCondition
        // feature:featureCondition,//特色
        // furniture:furnitureCondition,//家具
        // sortWay:sort,//排序方式
        // decorateType:-3,
        // rentType:1,
        // pageIndex: this.data.pageIndex,
        // pageSize: 6,
        // keyword:this.data.keyword,
        decorateType:'',
        rentType:1,
        room:'',
        minRent:'',
        maxRent:'',
        toward:'',
        feature:'',
        furniture:'',
        sortWay:'',
        pageIndex:1,
        pageSize:6,
        keyword:'',
      },
      dataType: 'json',
      success: function(res) {
        console.log(res.data);
        if(res.data.success){
           if(that.data.pageIndex==1){
                 that.setData({
            boutiqueHousing:res.data.data
          });
            }else if(that.data.boutiqueHousing.length<res.data.count){
               that.setData({
                boutiqueHousing:that.data.boutiqueHousing.concat(res.data.data)
              });
            }
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
    var rentType = this.data.rentType;
    this.setData({
      pageIndex:1
    });
     switch(this.data.houseType){
      case "4"://精选房源
        this.getBoutiqueHousing();
      break;

    }
  },
  onReachBottom() {
    this.setData({
      pageIndex:this.data.pageIndex+1
    });
     switch(this.data.houseType){
      case "4"://精选房源
        this.getBoutiqueHousing();
      break;

    }
  },
  //前往房源详情
  goToHouseDetail(e){
    my.navigateTo({
    url: '/pages/apartment/apartment?id='+e.target.dataset.text+'&rentType='+e.target.dataset.type,
    })
  },
  //搜索框搜索
  onInput(keyword){
    var houseType = this.data.houseType;
    this.setData({
      keyword:keyword,
    });
    
    const regExp = /[A-Za-z]/;
    if(keyword ===''|| (regExp.test(keyword)&&keyword.length ===1)){
      
      this.setData({
        areaList:[],
     
        placeList:[],
      });
      return;
    }
    console.log(keyword)
    if(houseType==1){
      my.request({
      url:app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
      data:{
        keyword:keyword,
        rentType:1,
        pageIndex: this.data.pageIndex,
        pageSize: 10,
      },
      success: (res) => {
        console.log(res.data.data)
        this.setData({
          // area: res.hotels,

          boutiqueHousing: res.data.data,
        });
        this.addToHistory(keyword);
      },
    });
    }

    if(houseType==2){
      my.request({
      url:app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
      data:{
        keyword:keyword,
        rentType:1,
        pageIndex: this.data.pageIndex,
        pageSize: 10,
      },
      success: (res) => {
        console.log(res.data.data)
        this.setData({
          // area: res.hotels,

          wholeRentalHousing: res.data.data,
        });
        this.addToHistory(keyword);
      },
    });
    }

    if(houseType==3){
      my.request({
      url:app.globalData.baseUrl_whj+"IF/housing/getHomeHousingIF.do",
      method: 'POST',
      headers:{
          'content-type': 'application/x-www-form-urlencoded'
        },
      data:{
        keyword:keyword,
        rentType:2,
        pageIndex: this.data.pageIndex,
        pageSize: 10,
      },
      success: (res) => {
        console.log(res.data.data)
        this.setData({
          // area: res.hotels,

          sharedHousing: res.data.data,
        });
        this.addToHistory(keyword);
      },
    });
    }
    
  },
});
