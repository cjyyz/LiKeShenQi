// pages/computer/jinzhi/jinzhi.js
Page({
  data: {
    result: [],
    focus: false,
  },
  formSubmit: function (ev) {
    var shi = ev.detail.value.shijinzhi   
    var unit = ev.detail.value.unit   
    Number(shi)   //将字符串数强制转换为整形数
    var result = ev.detail.value.result  
    var make = ev.detail.value.make
    if (unit == 1) {
      this.setData({
        var: make = (Number(shi)).toString(16),//将整形数转换为16进制数
        result: make
      })
    }
    else if (unit == 2) {
      this.setData({
        var: make = (Number(shi)).toString(8),//将整形数转换为8进制数
        result: make
      })
    }
    else if (unit == 3) {
      this.setData({
        var: make = (Number(shi)).toString(2),//将整形数转换为2进制数
        result: make
      })
    }
  },
  formReset: function () {
    console.log('form发生了reset事件')//reset
  },
})