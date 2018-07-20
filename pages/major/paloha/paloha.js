// pages/major/paloha/paloha.js
Page({
  data: {
    result: '',
    result1: '',
    result2: '',
    result3: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var m = ev.detail.value.yi    //用户数
    var c = ev.detail.value.er    //信道速率
    var l = ev.detail.value.san   //包长
    var k = ev.detail.value.si    //退避系数
    var x, a, n, b, t

    x = l / c                     //传输时间
    a = 0.1839 / x                //总到达率
    n = Math.E - 1                //平均重传次数
    b = 1000 * k * x / 2          //平均退避时延
    t = n * (1 + b) + 1           //平均传输时延

    this.setData({                //写入计算结果
      result: a,
      result1: n,
      result2: b,
      result3: t
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})