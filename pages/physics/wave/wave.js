// pages/physics/wave/wave.js
Page({
  data: {
    result: '',
    result1: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var y = ev.detail.value.yi        //介质密度
    var e = ev.detail.value.er        //振幅
    var a = ev.detail.value.angle     //角频率
    var v = ev.detail.value.vv        //速度
    var w, i

    w = 1/2 * y * e * e * a * a       //能量密度
    i = w * v                         //能流密度

    this.setData({                    //写入计算结果
      result: w,
      result1: i
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})