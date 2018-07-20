// pages/major/entropy/entropy.js
Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    
    //读取各个概率的值
    var y = ev.detail.value.yi          
    var e = ev.detail.value.er
    var sa = ev.detail.value.san
    var s = ev.detail.value.si
    var w = ev.detail.value.wu
    var iy, ie, isa, isi, iw, h 

    //计算各个概率的信息量并加权
    if (y == 0) {
      iy = 0
    }
    else {
      iy = Math.log(y) / Math.log(2) * y *(-1)
    }

    if (e == 0) {
      ie = 0
    }
    else {
      ie = Math.log(e) / Math.log(2) * e * (-1)
    }

    if (sa == 0) {
      isa = 0
    }
    else {
      isa = Math.log(sa) / Math.log(2) * sa * (-1)
    }

    if (s == 0) {
      isi = 0
    }
    else {
      isi = Math.log(s) / Math.log(2) * s * (-1)
    }

    if (w == 0) {
      iw = 0
    }
    else {
      iw = Math.log(w) / Math.log(2) * w * (-1)
    }

    //全部相加，得到信息熵
    h = iy + ie + isa + isi + iw

    //写入计算结果
    this.setData({          
      result: h
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})