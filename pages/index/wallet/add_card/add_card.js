var banklist = ['工商银行','交通银行','农业银行','建设银行']
var bankname = [
  {name:'ICBC'},{name:'COMM'},{name:'ABC'},{name:'CCB'}]

Page({
  data: {
    banklist:banklist,
    bankname:bankname,
    index:0,
    mybank:'',
    shortname:'',
    cardNo:'',
    phone:'',
  },
  onLoad() {},
  bindPickerChange(e){
    console.log(e)
    var arr = this.data.banklist;
    var arr2 = this.data.bankname;
    var idx = e.detail.value;
      this.setData({
        index:e.detail.value,
        mybank:arr[idx],
        shortname:arr2[idx].name,
    });
  },
  input(e){
    console.log(e.detail.value)
    var that = this;
    var n = e.target.dataset.t;
    console.log(n)
    if(n==1){
      that.setData({
        cardNo:e.detail.value,
      });
    }
    if(n==2){
      that.setData({
        phone:e.detail.value,
      });
    }
  },
  //隐藏键盘
  hideKeyboard(){
    my.hideKeyboard();
  },
  toConfirm(){
    var that = this;
    var cardNo = that.data.cardNo;
    var phone = that.data.phone;
    var shortname = that.data.shortname;
    console.log(cardNo)
    console.log(phone)
    that.toText(cardNo,shortname,phone);
  },
   //验证银行卡是否有效
  toText(cardNo,shortname,phone){
    console.log('开始校验')
    console.log(cardNo)
    console.log(shortname)
    var mobileNum =(/^1[3456789]\d{9}$/.test(phone))
    my.request({
      //https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?cardNo=1111&cardBinCheck=true
      url: 'https://ccdcapi.alipay.com/validateAndCacheCardInfo.json', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        cardNo:cardNo,
        cardBinCheck:true,
      },
      dataType: 'json',
      success: (res) => {
        console.log(res)
        var bank = res.data.bank;
        if(shortname==bank){
          if(mobileNum){
            my.alert({
              title: '卡号与开户银行匹配！' 
            });
          }else{
            my.alert({
              title: '手机号格式错误！' 
            });
          }
          
        }else{
          my.alert({
            title: '您输入的卡号与选择的开户银行不符！' 
          });
        }
      },
    });
  },
});
