// pages/major/major.js
Page({
  data: {},

  jumpbsc: function (param) {
    wx.navigateTo({
      url: '/pages/major/bsc/bsc',
    })
  },
  jumpawgn: function (param) {
    wx.navigateTo({
      url: '/pages/major/awgn/awgn',
    })
  },
  jumpentropy: function (param) {
    wx.navigateTo({
      url: '/pages/major/entropy/entropy',
    })
  },
  jumpfdma: function (param) {
    wx.navigateTo({
      url: '/pages/major/fdma/fdma',
    })
  },
  jumptdma: function (param) {
    wx.navigateTo({
      url: '/pages/major/tdma/tdma',
    })
  },
  jumpcdma: function (param) {
    wx.navigateTo({
      url: '/pages/major/cdma/cdma',
    })
  },
  jumpbf: function (param) {
    wx.navigateTo({
      url: '/pages/major/bformula/bformula',
    })
  },
  jumpcf: function (param) {
    wx.navigateTo({
      url: '/pages/major/cformula/cformula',
    })
  },
  jumppaloha: function (param) {
    wx.navigateTo({
      url: '/pages/major/paloha/paloha',
    })
  }
})