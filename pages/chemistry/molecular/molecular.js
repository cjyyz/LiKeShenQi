// pages/chemistry/molecular/molecular.js
Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var h = ev.detail.value.h * 1     //每种元素的质量
    var c = ev.detail.value.c * 12
    var n = ev.detail.value.n * 14
    var o = ev.detail.value.o * 16
    var na = ev.detail.value.na * 23
    var mg = ev.detail.value.mg * 24
    var al = ev.detail.value.al * 27
    var si = ev.detail.value.si * 28
    var p = ev.detail.value.p * 30
    var s = ev.detail.value.s * 32
    var cl = ev.detail.value.cl * 35.5
    var k = ev.detail.value.k * 39
    var ca = ev.detail.value.ca * 40
    var mn = ev.detail.value.mn * 55
    var fe = ev.detail.value.fe * 56
    var cu = ev.detail.value.cu * 64
    var zn = ev.detail.value.zn * 65
    var ag = ev.detail.value.ag * 108
    var ba = ev.detail.value.ba * 137
    var make                           //所有元素质量之和
    make = parseInt(h) + parseInt(c) + parseInt(n) + parseInt(o) + parseInt(na) 
      + parseInt(mg) + parseInt(al) + parseInt(si) + parseInt(p) + parseInt(s) 
      + parseInt(cl) + parseInt(k) + parseInt(ca) + parseInt(mn) + parseInt(fe) 
      + parseInt(cu) + parseInt(zn) + parseInt(ag) + parseInt(ba)

    this.setData({                     //写入计算结果
      result: make
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})