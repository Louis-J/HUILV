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
  bindDateChangeB: function (e) {
      this.setData({
          dateB: e.detail.value
      })
  },
  bindDateChangeE: function (e) {
      this.setData({
          dateE: e.detail.value
      })
  },
  bindCurrencyChangeB: function (e) {
      console.log('picker account 发生选择改变，携带值为', e.detail.value);
      this.setData({
          currencyIndexB: e.detail.value
      })
  },
  bindCurrencyChangeE: function (e) {
      console.log('picker account 发生选择改变，携带值为', e.detail.value);
      this.setData({
          currencyIndexE: e.detail.value
      })
  },
  bindInputChangeB: function (e) {
      // console.log('picker account 发生选择改变，携带值为', e.detail.value);
      this.setData({
          inputValB: e.detail.value
      })
  },
  bindInputChangeE: function (e) {
      // console.log('picker account 发生选择改变，携带值为', e.detail.value);
      this.setData({
          inputValE: e.detail.value
      })
  },
  showTopTips: function(){
      var that = this;
      this.setData({
          showTopTips: true,
          inputValB: 100,
          inputValE: 100
      });
      setTimeout(function(){
          that.setData({
              showTopTips: false,
              inputValB: '',
              inputValE: ''
          });
      }, 3000);
  },
  /**
   * 页面的初始数据
   */
  // data: {

  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})