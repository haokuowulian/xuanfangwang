Page({
  data: {
    rent1:'',
    rent2:'',
    rent3:'',
    rent4:'',
    deposit:'',
  },
  onLoad(option) {
    var houseDetail=JSON.parse(option.houseDetail);
    var rentType=option.rentType;
    var allpay;
    if(rentType==1){
      allpay = houseDetail.entireRents*1
    }
    if(rentType==2){
      allpay = houseDetail.rents*1
    }
    var rent1 = allpay*1;
    var rent2 = allpay*3;
    var rent3 = allpay*6;
    var rent4 = allpay*12;
    this.setData({
      rent1:rent1,
      rent2:rent2,
      rent3:rent3,
      rent4:rent4,
      deposit:allpay,
    });
  },
  
});
