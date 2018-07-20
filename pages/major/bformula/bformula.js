// pages/major/bformula/bformula.js
Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var s = ev.detail.value.zhong  //中继线数
    var a = ev.detail.value.hu     //呼叫量
    var jiecheng = new Array()     //数组：用来保存自然数的阶乘结果
    var akk = new Array()          //数组：用来保存a^k/k!的值
    var i, j, b, fenmu

    //变量初始化
    jiecheng[0] = 1
    akk[0] = 1
    fenmu = 1

    //利用嵌套循环，计算公式中的分母部分
    for (i = 1; i <= s; i = parseInt(i) + 1)
    {
      jiecheng[i] = 1
      for (j = 1; j <= i; j = parseInt(j) + 1)
      {
        jiecheng[i] = jiecheng[i] * j
      }
      akk[i] = Math.pow(a,i) / jiecheng[i]
      fenmu = parseInt(fenmu) + parseInt(akk[i])
    }

    //计算呼损
    b = akk[s] / fenmu

    //写入计算结果
    this.setData({
      result: b
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})