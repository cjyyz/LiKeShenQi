// pages/math/average/average.js
Page({
  data: {
    result: '',
    average: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var h = ev.detail.value.h + 1      //记录每个数据+1
    var c = ev.detail.value.c + 1
    var n = ev.detail.value.n + 1
    var o = ev.detail.value.o + 1
    var na = ev.detail.value.na + 1
    var mg = ev.detail.value.mg + 1
    var al = ev.detail.value.al + 1
    var si = ev.detail.value.si + 1
    var p = ev.detail.value.p + 1
    var s = ev.detail.value.s + 1
    var cl = ev.detail.value.cl + 1
    var k = ev.detail.value.k + 1
    var ca = ev.detail.value.ca + 1
    var mn = ev.detail.value.mn + 1
    var fe = ev.detail.value.fe + 1
    var z = 0
    var make, ave
    
    //相加后减去数据总个数15
    make = parseInt(h) + parseInt(c) + parseInt(n) + parseInt(o) + parseInt(na)
      + parseInt(mg) + parseInt(al) + parseInt(si) + parseInt(p) + parseInt(s)
      + parseInt(cl) + parseInt(k) + parseInt(ca) + parseInt(mn) + parseInt(fe) - 15

    //统计非零数据的个数
    if (h == 1) { z = z }
    else { z = z + 1 }
    if (c == 1) { z = z }
    else { z = z + 1 }
    if (n == 1) { z = z }
    else { z = z + 1 }
    if (o == 1) { z = z }
    else { z = z + 1 }
    if (na == 1) { z = z }
    else { z = z + 1 }
    if (mg == 1) { z = z }
    else { z = z + 1 }
    if (al == 1) { z = z }
    else { z = z + 1 }
    if (si == 1) { z = z }
    else { z = z + 1 }
    if (p == 1) { z = z }
    else { z = z + 1 }
    if (s == 1) { z = z }
    else { z = z + 1 }
    if (cl == 1) { z = z }
    else { z = z + 1 }
    if (k == 1) { z = z }
    else { z = z + 1 }
    if (ca == 1) { z = z }
    else { z = z + 1 }
    if (mn == 1) { z = z }
    else { z = z + 1 }
    if (fe == 1) { z = z }
    else { z = z + 1 }

    ave = make / z / 10      //计算平均数

    this.setData({           //写入计算结果
      result: make / 10,
      average: ave
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})