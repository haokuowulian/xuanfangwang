Page({
  data: {},
  onLoad() {},
   toPlan(){
    my.navigateTo({
      url: '/pages/index/plan/plan',
    });
  },
  onUnload() {
    my.navigateBack({
      delta: 2
    });
  },
  goBack(){
    my.navigateBack({
      delta: 3
    });
  }
});
