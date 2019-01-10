Page({
  data: {},
  onLoad() {},
  toConfirm(){
    my.confirm({
      title: '确认合同',
      content: '您确认签订此合同吗？',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (res) => {
        console.log(res)
        if(res.confirm){
          my.alert({
            title: '合同签订成功！' 
          });
        }else{
          my.alert({
            title: '合同取消签订！' 
          });
        }
      },
    });
  }
});
