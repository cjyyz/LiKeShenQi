// pages/chemistry/chemistry.js
Page({
  data: {},

  jumpmole: function (param) {
    wx.navigateTo({
      url: '/pages/chemistry/molecular/molecular',
    })
  },

  jumpsolution: function (param) {
    wx.navigateTo({
      url: '/pages/chemistry/solution/solution',
    })
  }
})