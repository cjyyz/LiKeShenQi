// pages/major/cformula/cformula.js
Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var s = ev.detail.value.zhong                //中继线数
    var a = ev.detail.value.hu                   //呼叫量 
    var jiecheng = new Array()
    var akk = new Array()
    var i, j, make, fenmu, p

    jiecheng[0] = 1
    akk[0] = 1
    fenmu = 1
    for (i = 1; i <= s; i = parseInt(i) + 1) {
      jiecheng[i] = 1
      for (j = 1; j <= i; j = parseInt(j) + 1) {
        jiecheng[i] = jiecheng[i] * j
      }
      akk[i] = Math.pow(a, i) / jiecheng[i]
      fenmu = parseInt(fenmu) + parseInt(akk[i])
    }
    fenmu = fenmu - akk[s]
    p = akk[s] / (1 - a/s)
    p = 1 / (parseInt(fenmu) + parseInt(p))
    make = akk[s] * p / (1 - a/s)

    this.setData({                               //写入计算结果
      result: make
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})