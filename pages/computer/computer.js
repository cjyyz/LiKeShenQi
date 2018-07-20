// pages/computer/computer.js
Page({
  data: {},

  jumpjinzhi: function (param) {
    wx.navigateTo({
      url: '/pages/computer/jinzhi/jinzhi',
    })
  },
  jumpqt: function (param) {
    wx.navigateTo({
      url: '/pages/computer/qtjinzhi/qtjinzhi',
    })
  }

})