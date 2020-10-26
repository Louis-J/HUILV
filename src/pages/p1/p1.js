// pages/p1/p1.js
var wxCharts = require('../../utils/wxcharts.js');
var lineChart = null;
Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        debugMode: false,
        tipDialog0: false,
        tipDialog1: false,
        tipDialog2: false,
        tipDialog3: false,

        keysign: '',
        dateMin: "2016-01-01",
        dateMax: new Date().toISOString().substr(0, 10),

        dateB: "2016-01-01",
        dateE: new Date().toISOString().substr(0, 10),
        
        currencyIndexB: 0,
        currencyIndexE: 5,

        inQuery: false,
        inQueryNum: 0,
        categories: [],
        huilvB: [],
        huilvE: [],
        
        currencies: [],
        currenciesZH: [],

        url0: "https://sapi.k780.com/?app=finance.rate_history.v2&curno=",
        url1: "&date=",
        url2: "&appkey=",
        url3: "&format=json",
    },

    // 界面事件
    bindTipClose: function () {
        this.setData({
            tipDialog0: false,
            tipDialog1: false,
            tipDialog2: false,
            tipDialog3: false,
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
        this.setData({
            currencyIndexB: e.detail.value
        })
    },
    bindCurrencyChangeE: function (e) {
        this.setData({
            currencyIndexE: e.detail.value
        })
    },

    // 图表交互
    touchHandler: function (e) {
        console.log(lineChart.getCurrentDataIndex(e));
        lineChart.showToolTip(e, {
            background: '#7cb5ec',
            format: function (item, category) {
                return category + ' ' + item.name + ':' + item.data 
            }
        });
    },

    // 时间分片
    getDateSlice: function () {
        var dateB = new Date(this.data.dateB);
        var dateE = new Date(this.data.dateE);
        
        var dateDiff = dateE - dateB;
        var dateDiffDay = dateDiff/(1000*60*60*24);
        if(dateDiffDay < 10) {
            var categories = [dateB.toISOString().substr(0, 10)];
            var dates = [dateB.getFullYear()*10000 + (dateB.getMonth()+1)*100 + dateB.getDay()];
            for (var i = 1; i <= dateDiffDay; i++) {
                dateB.setDate(dateB.getDate()+1);
                categories.push(dateB.toISOString().substr(0, 10));
                dates.push(dateB.getFullYear()*10000 + (dateB.getMonth()+1)*100 + dateB.getDay());
            }
            console.log('categories: \n', categories);
            console.log('dates: \n', dates);
            return {
                categories: categories,
                dates: dates,
            };
        } else {
            var categories = [dateB.toISOString().substr(0, 10)];
            var dates = [dateB.getFullYear()*10000 + (dateB.getMonth()+1)*100 + dateB.getDay()];
            var baseTime = dateB.getTime();
            console.log('dateB: \n', dateB);
            for (var i = 1; i < 10; i++) {
                dateB.setTime(baseTime+dateDiff*i/9);
                categories.push(dateB.toISOString().substr(0, 10));
                dates.push(dateB.getFullYear()*10000 + (dateB.getMonth()+1)*100 + dateB.getDay());
            }
            console.log('categories: \n', categories);
            console.log('dates: \n', dates);
            return {
                categories: categories,
                dates: dates,
            };
        }
    },
    
    // 获取数据
    // getHuilvData: function() {
    //     var dateSlice = this.getDateSlice();
    //     var categories = dateSlice.categories;
    //     var dates = dateSlice.dates;
    //     var that = this;

    //     // categories = [categories[0]];
    //     // dates = [dates[0]];
        
    //     var keysign = getApp().globalData.keysign;
    //     var url0 = "https://sapi.k780.com/?app=finance.rate_history.v2&curno=";
    //     var url1 = "&date=";
    //     var url2 = "&appkey=";
    //     var url3 = "&format=json";
    //     // 注:以USD为基准
    //     this.data.categories = categories;

    //     this.data.inQueryNum = categories.length*2;
    //     if(this.data.currencyIndexB == 5) {
    //         this.data.inQueryNum -= categories.length;
    //         for (const date in categories)
    //             this.data.huilvB.push(1);
    //     } else for (const i in dates) {
    //         var url = url0 + this.data.currencies[this.data.currencyIndexB] + url1 + dates[i] + url2 + keysign + url3;
    //         // console.log('查询url为：', url);
    //         wx.request({
    //             url: url,
    //             success: function( res ) {
    //                 // console.log('success, 查询res为：', res);
    //                 if(res.data.success == '0')
    //                     that.data.huilvB[i] = null;
    //                 else
    //                     that.data.huilvB[i] = res.data.result.dtList[0].closePrice;
    //                 that.data.inQueryNum--;
    //                 if(that.data.inQueryNum == 0) {
    //                     that.updateChart();
    //                 }
    //             },
    //             fail: function( res ) {
    //                 // console.log('fail, 查询res为：', res);
    //                 that.data.huilvB[i] = null;
    //                 that.data.inQueryNum--;
    //                 if(that.data.inQueryNum == 0)
    //                     that.updateChart();
    //             },
    //             timeout: 5700,
    //         })
    //     }

    //     if(this.data.currencyIndexE == 5) {
    //         this.data.inQueryNum -= categories.length;
    //         for (const date in categories)
    //             this.data.huilvE.push(1);
    //     } else for (const i in dates) {
    //         var url = url0 + this.data.currencies[this.data.currencyIndexE] + url1 + date + url2 + keysign + url3;
    //         // console.log('查询url为：', url);
    //         wx.request({
    //             url: url,
    //             success: function( res ) {
    //                 // console.log('查询res为：', res);
    //                 if(res.data.success == '0')
    //                     that.data.huilvB[i] = null;
    //                 else
    //                     that.data.huilvB[i] = res.data.result.dtList[0].closePrice;
    //                 that.data.inQueryNum--;
    //                 if(that.data.inQueryNum == 0)
    //                     that.updateChart();
    //             },
    //             fail: function( res ) {
    //                 // console.log('查询res为：', res);
    //                 that.data.huilvE[i] = null;
    //                 that.data.inQueryNum--;
    //                 if(that.data.inQueryNum == 0)
    //                     that.updateChart();
    //             },
    //             timeout: 5700,
    //         })
    //     }
    //     console.log('查询发送结束, 等待获取数据');
    // },

    getHuilvDataNum: function(i) {
        var categories = this.data.categories;
        var dates = this.data.dates;

        console.log('getHuilvDataNum: ');
        console.log('this.data.inQueryNum: ', this.data.inQueryNum);
        console.log('this.data.categories: ', this.data.categories);
        console.log('this.data.dates: ', this.data.dates);

        var that = this;
        if(i == this.data.inQueryNum*2) {
            this.updateChart();
        } else if(i == 0 && this.data.currencyIndexB == 5) {
            for (const date in categories)
                this.data.huilvB.push(1);
        } else if (i == this.data.inQueryNum && this.data.currencyIndexE == 5) {
            for (const date in categories)
                this.data.huilvE.push(1);
            this.getHuilvDataNum(i+this.data.inQueryNum);
        } else if(i < this.data.inQueryNum) {
            var keysign = this.data.keysign;
            var url0 = this.data.url0;
            var url1 = this.data.url1;
            var url2 = this.data.url2;
            var url3 = this.data.url3;
            var url = url0 + this.data.currencies[this.data.currencyIndexB] + url1 + dates[i] + url2 + keysign + url3;
            console.log('查询url为：', url);
            wx.request({
                url: url,
                success: function( res ) {
                    console.log('success, 查询res为：', res);
                    if(res.data.success == '0')
                        that.data.huilvB[i] = null;
                    else
                        that.data.huilvB[i] = res.data.result.dtList[0].closePrice;
                    that.getHuilvDataNum(i+1);
                },
                fail: function( res ) {
                    console.log('fail, 查询res为：', res);
                    that.data.huilvB[i] = null;
                    that.getHuilvDataNum(i+1);
                },
                timeout: 2000,
            });
        } else {
            var keysign = this.data.keysign;
            var url0 = this.data.url0;
            var url1 = this.data.url1;
            var url2 = this.data.url2;
            var url3 = this.data.url3;
            var url = url0 + this.data.currencies[this.data.currencyIndexB] + url1 + dates[i-this.data.inQueryNum] + url2 + keysign + url3;
            console.log('查询url为：', url);
            wx.request({
                url: url,
                success: function( res ) {
                    console.log('success, 查询res为：', res);
                    if(res.data.success == '0')
                        that.data.huilvB[i] = null;
                    else
                        that.data.huilvB[i] = res.data.result.dtList[0].closePrice;
                    that.getHuilvDataNum(i+1);
                },
                fail: function( res ) {
                    console.log('fail, 查询res为：', res);
                    that.data.huilvE[i] = null;
                    that.getHuilvDataNum(i+1);
                },
                timeout: 2000,
            });
        }
    },

    // 同步查询
    getHuilvData: function() {
        var dateSlice = this.getDateSlice();
        var categories = dateSlice.categories;
        var dates = dateSlice.dates;
        
        // categories = [categories[0]];
        // dates = [dates[0]];
        // 注:以USD为基准
        this.data.categories = categories;
        this.data.inQueryNum = categories.length;
        this.data.dates = dates;

        console.log('this.data.inQueryNum: ', this.data.inQueryNum);
        console.log('this.data.categories: ', this.data.categories);
        console.log('this.data.dates: ', this.data.dates);
        this.getHuilvDataNum(0);
        console.log('查询发送结束, 等待获取数据');
    },

    // 更新图表, 异步查询
    queryChart: function () {
        if(this.data.currencyIndexB == this.data.currencyIndexE) {
            console.log('失败页面0');
            this.setData({
                tipDialog0: true,
            });
            return;
        } else if(new Date(this.data.dateB) > new Date(this.data.dateE)) {
            console.log('失败页面1');
            this.setData({
                tipDialog1: true,
            });
            return;
        } else if(this.data.inQuery) {
            console.log('失败页面2');
            this.setData({
                tipDialog2: true,
            });
            return;
        }
        console.log('开始查询');
        this.data.inQuery = true;
        this.getHuilvData();
    },

    // 更新图表, 异步更新
    updateChart: function () {
        console.log('开始异步更新图表');
        var categories = this.data.categories;
        var huilvB = this.data.huilvB;
        var huilvE = this.data.huilvE;

        var data = [];
        var nullnum = 0;
        for (let i = 0; i < categories.length; i++) {
            if(huilvB[i] == null || huilvB[i] == 0 || huilvE[i] == null || huilvE[i] == 0) {
                data.push(null);
                nullnum++;
            } else
                data.push(huilvB[i]/huilvE[i]);
        }
        console.log('data: ', data);
        if(nullnum > categories.length/2) {
            this.setData({
                tipDialog3: true,
            });
            console.log('错误过多');
            console.log('结束异步更新图表');
            console.log('this.data.huilvB: ', this.data.huilvB);
            console.log('this.data.huilvE: ', this.data.huilvE);
            this.data.inQuery = false;
            return;
        }
        var series = [{
            name: '汇率',
            data: data,
            format: function (val, name) {
                return val.toFixed(2) + '万';
            }
        }];
        console.log('Chart Data: \n', {
            categories: categories,
            series: series
        });
        lineChart.updateData({
            categories: categories,
            series: series
        });
        console.log('结束异步更新图表');
        this.data.inQuery = false;
    },

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

        // 图表初始化
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        
        var categories = this.getDateSlice().categories;
        var data = [];
        for (const _ in categories)
            data.push(0);
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: categories,
            animation: true,
            background: '#f5f5f5',
            series: [{
                name: '汇率',
                data: data,
                format: function (val, name) {
                    return val.toFixed(2);
                }
            }],
            xAxis: {
                disableGrid: true
            },
            yAxis: {
                title: '汇率',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0
            },
            width: windowWidth,
            height: 200,
            dataLabel: false,
            dataPointShape: true,
            extra: {
                lineStyle: 'curve'
            }
        });
        // this.getDateSlice();
    },
})