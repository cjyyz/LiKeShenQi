// pages/physics/force/force.js
Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var y = ev.detail.value.yi                     //F1
    var e = ev.detail.value.er                     //F2
    var a = ev.detail.value.angle                  //夹角
    var cosa = Math.cos(a/180*Math.PI)             //角度值换算，并求其余弦值
    var make = Math.sqrt(y*y + e*e + 2*y*e*cosa)   //合力计算

    this.setData({                                 //写入计算结果
      result: make
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})