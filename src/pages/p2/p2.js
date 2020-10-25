// pages/p1/p1.js
Page({
  mixins: [require('../../mixin/themeChanged')],
  data: {
      showTopTips: false
  },
  gotoPage: function(e) {
    console.log(e)
    wx.navigateTo({
      url: e.target.dataset.url
    })
  },
  gotoPageLogs: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
})