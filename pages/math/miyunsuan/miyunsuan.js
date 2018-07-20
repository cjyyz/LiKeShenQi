Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var dishu = ev.detail.value.di        //底数
    var zhishu = ev.detail.value.zhi      //指数
    var make = Math.pow(dishu, zhishu)    //幂运算

    this.setData({                        //写入计算结果
      result: make
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})