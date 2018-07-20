// pages/major/awgn/awgn.js
Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var y = ev.detail.value.yi      //信道功率
    var e = ev.detail.value.er      //功率谱密度
    var sa = ev.detail.value.san    //信道带宽
    var c

    c = Math.log2(1+y/e/sa) * sa    //信道容量

    this.setData({                  //写入计算结果
      result: c
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})