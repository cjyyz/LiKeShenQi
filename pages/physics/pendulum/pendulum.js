// pages/physics/pendulum/pendulum.js
Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var l = ev.detail.value.di          //摆长
    var v = l / 9.8
    var t = 2 * Math.PI * Math.sqrt(v)  //周期

    this.setData({                      //写入计算结果
      result: t
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})