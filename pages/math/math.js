// pages/math/math.js
Page({
  data: {},

  jumpjie: function (param) {
    wx.navigateTo({
      url: '/pages/math/factorial/factorial',
    })
  },
  
  jumpmi: function (param) {
    wx.navigateTo({
      url: '/pages/math/miyunsuan/miyunsuan',
    })
  },
  jumpdui: function (param) {
    wx.navigateTo({
      url: '/pages/math/duishu/duishu',
    })
  },
  jumpave: function (param) {
    wx.navigateTo({
      url: '/pages/math/average/average',
    })
  }

})