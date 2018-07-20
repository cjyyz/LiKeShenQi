// pages/physics/physics.js
Page({
  data: {},


  jumpwave: function (param) {
    wx.navigateTo({
      url: '/pages/physics/wave/wave',
    })
  },
  jumppend: function (param) {
    wx.navigateTo({
      url: '/pages/physics/pendulum/pendulum',
    })
  },
  jumpmi: function (param) {
    wx.navigateTo({
      url: '/pages/physics/force/force',
    })
  }

})