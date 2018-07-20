// pages/major/tdma/tdma.js
Page({
  data: {
    result: '',
    result1: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var m = ev.detail.value.yi       //用户数
    var c = ev.detail.value.er       //信道速率
    var l = ev.detail.value.san      //包长
    var a = ev.detail.value.si       //参数λ
    var x, s, t

    x = l / c                        //传输时间
    s = a * m * x                    //吞吐量
    t = 1000 * m * x / (2-2*s) + x   //平均转发时延

    this.setData({                   //写入计算结果
      result: s,
      result1: t
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})