// pages/computer/qtjinzhi/qtjinzhi.js
Page({
  data: {
    result: [],
    focus: false,
  },
  formSubmit: function (ev) {
    var shi = ev.detail.value.shijinzhi
    var unit = ev.detail.value.unit
    Number(shi)//将读入的字符串数转换为整型数
    var result = ev.detail.value.result
    var make = ev.detail.value.make
    if (unit == 1) {//判断选择的进制数，若为16进制
      this.setData({
        var: make = parseInt(shi, 16),//按16进制将数转换为整型数
        result: make
      })
    }
    else if (unit == 2) {//判断选择的进制数，若为8进制
      this.setData({
        var: make = parseInt(shi, 8),//按8进制将其转换为整型数
        result: make
      })
    }
    else if (unit == 3) {//判断选择的进制数，若为2进制
      this.setData({
        var: make = parseInt(shi, 2),//按2进制将其转换为整型数
        result: make
      })
    }
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
})