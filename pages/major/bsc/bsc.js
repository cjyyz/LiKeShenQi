// pages/major/bsc/bsc.js
Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var y = ev.detail.value.yi      //差错概率
    var e = 1 - y                   //无差错概率
    var iy, ie, c

    //信息熵
    if (y == 0) {
      iy = 0
    }
    else {
      iy = Math.log(y) / Math.log(2) * y * (-1)
    }

    if (e == 0) {
      ie = 0
    }
    else {
      ie = Math.log(e) / Math.log(2) * e * (-1)
    }

    //信道容量
    c = 1 - iy - ie

    //写入计算结果
    this.setData({
      result: c
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})