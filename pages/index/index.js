//index.js
Page({
  data: {},
 
  jumpmath: function (param) {          //跳转至 数学类
    wx.navigateTo({
      url: '/pages/math/math',           
    })
  },
  jumpcomputer: function (param) {      //跳转至 计算机
    wx.navigateTo({
      url: '/pages/computer/computer',
    })
  },
  jumpphysics: function (param) {       //跳转至 物理类
    wx.navigateTo({
      url: '/pages/physics/physics',
    })
  },
  jumpchemistry: function (param) {     //跳转至 化学类
    wx.navigateTo({
      url: '/pages/chemistry/chemistry',
    })
  },
  jumpmajor: function (param) {         //跳转至 专业类
    wx.navigateTo({
      url: '/pages/major/major',
    })
  },
  jumpcustom: function (param) {        //跳转至 自定义
    wx.navigateTo({
      url: '/pages/custom/custom',
    })
  },
})
