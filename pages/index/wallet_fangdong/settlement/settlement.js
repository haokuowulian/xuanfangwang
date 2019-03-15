Page({
  data: {
    choose1:true,
    choose2:false,
  },
  onLoad() {},
  onChoose(e){
    var that = this;
    var id = e.currentTarget.id;
    that.toChoose(id);
  },
  toChoose(id){
    var that = this;
    if(id==1){
      that.setData({
        choose1:true,
        choose2:false,
      });
    }
    if(id==2){
      that.setData({
        choose1:false,
        choose2:true,
      });
    }
    
  },
});
