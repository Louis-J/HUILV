// pages/p1/p1.js
Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        debugMode: false,
        tipDialog0: false,
        tipDialog1: false,

        currencyIndexB: 0,
        currencyIndexE: 5,

        inputValB: '',
        inputValE: '',

        keysign: '',
        huilv: null,

        currencies: [],
        currenciesZH: [],
    },

    // 界面事件
    bindTipClose: function () {
        this.setData({
            tipDialog0: false,
            tipDialog1: false,
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
        if(this.data.huilv != null && this.data.huilv != 0) {
            var valE = this.data.inputValB * this.data.huilv
            this.setData({
                inputValE: valE
            })
        }
    },
    bindInputChangeE: function (e) {
        this.setData({
            inputValE: e.detail.value
        })
        if(this.data.huilv != 0) {
            var valB = this.data.inputValE / this.data.huilv
            this.setData({
                inputValB: valB
            })
        }
    },

    // 请求汇率
    updateHuilv: function(){
        if(this.data.currencyIndexB == this.data.currencyIndexE) {
            console.log('失败页面');
            this.setData({
                tipDialog0: true,
            });
            return;
        }
        var that = this;
        var keysign = getApp().globalData.keysign;
        var url0 = "https://sapi.k780.com/?app=finance.rate&scur=";
        var url1 = "&tcur=";
        var url2 = "&appkey=";
        var url = url0 + this.data.currencies[this.data.currencyIndexB] + url1 + this.data.currencies[this.data.currencyIndexE] + url2 + keysign;
        console.log('查询url为：', url);
        wx.request({
            url: url,
            success: function( res ) {
                console.log('查询res为：', res);
                if(res.data.success == '0') {
                    console.log('查询失败');
                    that.setData({
                        huilv: null,
                        tipDialog1: true
                    });
                } else
                    that.setData({
                        huilv: res.data.result.rate,
                    });
            },
            fail: function( res ) {
                console.log('查询res为：', res);
                that.setData({
                    huilv: null,
                    tipDialog1: true
                });
            },
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var app = getApp()
        this.setData({
            debugMode: app.globalData.debugMode,
            keysign: app.globalData.keysign,
            currencies: app.globalData.currencies,
            currenciesZH: app.globalData.currenciesZH
        })
    },
})