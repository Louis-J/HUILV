// pages/p1/p1.js
Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        showTopTips: false,

        currencyIndexB: 32,
        currencyIndexE: 57,
        inputValB: '',
        inputValE: '',

        keysign: '',
        huilvA: 0,
        huilvB: 0,
        huilvC: 0,

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
        // console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            currencyIndexB: e.detail.value
        })
    },
    bindCurrencyChangeE: function (e) {
        // console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            currencyIndexE: e.detail.value
        })
    },
    bindInputChangeB: function (e) {
        // console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            inputValB: e.detail.value
        })
        if(this.data.huilvC != 0) {
            var valE = this.data.inputValB * this.data.huilvC
            // console.log('hehe ', this.data.inputValB);
            // console.log('hehe ', this.data.huilvC);
            // console.log('hehe ', valE);
            this.setData({
                inputValE: valE
            })
        }
    },
    bindInputChangeE: function (e) {
        // console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            inputValE: e.detail.value
        })
        if(this.data.huilvC != 0) {
            var valB = this.data.inputValE / this.data.huilvC
            // console.log('hehe ', this.data.inputValB);
            // console.log('hehe ', this.data.huilvC);
            // console.log('hehe ', valE);
            this.setData({
                inputValB: valB
            })
        }
    },
    showTopTips: function(){
        var that = this;
        
        var keysign = getApp().globalData.keysign;
        var url0 = "http://api.k780.com/?app=finance.rate&scur=";
        var url1 = "&tcur=";
        var url2 = "&appkey=";
        var url = url0 + this.data.currencies[this.data.currencyIndexB] + url1 + this.data.currencies[this.data.currencyIndexE] + url2 + keysign;
        console.log('查询url为：', url);
        wx.request({
            url: url,
            success: function( res ) {
                console.log('哈哈哈哈哈', res.data);
                console.log('哈哈哈哈哈', res.data.result.rate);
                that.setData({
                    huilvC: res.data.result.rate
                })
                // // console.log('哈哈哈哈哈', typeof(res.data));
                // var b = res.data.indexOf('10003&')
                // var e = res.data.indexOf('&format')
                // var keysign = res.data.substr(b, e-b)
                // console.log('哈哈哈哈哈', keysign);
            }
        })
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