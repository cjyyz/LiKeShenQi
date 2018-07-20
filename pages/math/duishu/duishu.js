Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var dishu = ev.detail.value.di                   //底数
    var zhenshu = ev.detail.value.zhen               //真数
    var make = Math.log(zhenshu) / Math.log(dishu)   //对数运算

    this.setData({                                   //写入计算结果
      result: make
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})