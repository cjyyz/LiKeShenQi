// pages/chemistry/solution/solution.js
Page({
  data: {
    make_weight: '',
    make_unit: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var con_num = ev.detail.value.con           //浓度
    var con_u = ev.detail.value.con_unit
    var vol_num = ev.detail.value.vol           //体积
    var vol_u = ev.detail.value.vol_unit
    var mw = ev.detail.value.molecularweitht    //摩尔质量
    var make = con_num * con_u * vol_num * vol_u * mw / 1e12
                                                //所需化合物质量
                                                
    if (make <= 1e-3) {                         //判断单位
      make = (make * 1e3).toPrecision(4)
      this.setData({
        make_weight: make,
        make_unit: 'mg'
      })
    }
    else {
      this.setData({
        make_weight: make,
        make_unit: 'g'
      })
    }
  }, 
  formReset: function () {                       //写入计算结果
    console.log('form发生了reset事件')
  }
})