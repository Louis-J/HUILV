// pages/p1/p1.js
Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        showTopTips: false,

        date: "2016-09-01",
        dateB: "2016-01-01",
        dateE: "2020-09-01",
        dateMin: "2016-01-01",
        dateMax: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),

        currencyIndexB: 32,
        currencyIndexE: 57,

        keysign: '',

        currencies: [],
        currenciesZH: [],
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
    showTopTips: function(){
        var that = this;
        
        var datenow = new Date();
        var time = datenow.getFullYear()*10000 + (datenow.getMonth() + 1)*100  + datenow.getDate();
        var keysign = getApp().globalData.keysign;
        var url0 = "http://api.k780.com/?app=finance.rate_history.v2&curno=cny&date=";
        var url1 = "&appkey=";
        var url2 = "&format=json";
        var url = url0 + time + url1 + keysign + url2;
        console.log('picker account 发生选择改变，携带值为', url);
        // wx.request({
        //     success: function( res ) {
        //         console.log('哈哈哈哈哈', res.data);
        //         // // console.log('哈哈哈哈哈', typeof(res.data));
        //         // var b = res.data.indexOf('10003&')
        //         // var e = res.data.indexOf('&format')
        //         // var keysign = res.data.substr(b, e-b)
        //         // console.log('哈哈哈哈哈', keysign);
        //     }
        // })
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
        var app = getApp()
        this.setData({
            keysign: app.globalData.keysign,
            currencies: app.globalData.currencies,
            currenciesZH: app.globalData.currenciesZH
        })
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