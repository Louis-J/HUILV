require('./libs/Mixins.js');

const themeListeners = [];
var currencies = [    
    "CNY",
    "CNH",
    "TWD",
    "MOP",
    "HKD",
    "USD",
    "GBP",
    "EUR",
    "JPY",
    "KRW",
    "SGD",
    "CAD",
    "THB",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BYR",
    "BZD",
    "CDF",
    "CHF",
    "CLF",
    "CLP",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "FJD",
    "FKP",
    "GEL",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JMD",
    "JOD",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LTL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MRO",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "STD",
    "SVC",
    "SYP",
    "SZL",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TZS",
    "UAH",
    "UGX",
    "UYU",
    "UZS",
    "VEF",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"

 

    
]
var currenciesZH = [    
    "人民币",
    "离岸人民币",
    "台币",
    "澳门币",
    "港币",
    "美元",
    "英镑",
    "欧元",
    "日元",
    "韩国元",
    "新加坡元",
    "加拿大元",
    "泰铢",
    "阿联酋迪拉姆",
    "阿富汗尼",
    "阿尔巴尼亚列克",
    "亚美尼亚德拉姆",
    "荷兰盾",
    "安哥拉宽扎",
    "阿根廷披索",
    "澳大利亚元",
    "阿鲁巴盾",
    "阿塞拜疆新马纳特",
    "波斯尼亚和黑塞哥维那可",
    "巴巴多斯元",
    "孟加拉国塔卡",
    "保加利亚列瓦",
    "巴林第纳尔",
    "布隆迪法郎",
    "百慕大元",
    "文莱元",
    "玻利维亚诺",
    "巴西雷亚尔",
    "巴哈马元",
    "不丹努扎姆",
    "博茨瓦纳普拉",
    "白俄罗斯卢布",
    "白俄罗斯卢布",
    "伯利兹元",
    "刚果法郎",
    "瑞士法郎",
    "智利斯开法",
    "智利比索",
    "哥伦比亚比索",
    "哥斯达黎加科朗",
    "古巴可兑换比索",
    "古巴比索",
    "佛得角埃斯库多",
    "捷克克朗",
    "吉布提法郎",
    "丹麦克朗",
    "多米尼加比索",
    "阿尔及利亚第纳尔",
    "埃及镑",
    "厄立特里亚",
    "埃塞俄比亚比尔",
    "斐济元",
    "福克兰群岛镑",
    "格鲁吉亚拉里",
    "加纳塞地",
    "直布罗陀镑",
    "冈比亚达拉西",
    "几内亚法郎",
    "危地马拉格查尔",
    "圭亚那元",
    "洪都拉斯伦皮拉",
    "克罗地亚库纳",
    "海地古德",
    "匈牙利福林",
    "印度尼西亚盾",
    "以色列谢克尔",
    "印度卢比",
    "伊拉克第纳尔",
    "伊朗里亚尔",
    "冰岛克朗",
    "牙买加元",
    "约旦第纳尔",
    "肯尼亚先令",
    "吉尔吉斯索姆",
    "柬埔寨瑞尔",
    "科摩罗法郎",
    "朝鲜元",
    "科威特第纳尔",
    "开曼群岛元",
    "哈萨克斯坦坚戈",
    "老挝基普",
    "黎巴嫩镑",
    "斯里兰卡卢比",
    "利比里亚元",
    "莱索托洛提",
    "立陶宛立特",
    "利比亚第纳尔",
    "摩洛哥迪拉姆",
    "摩尔多瓦列伊",
    "马达加斯加阿里亚里",
    "马其顿第纳尔",
    "缅元",
    "蒙古图格里克",
    "毛里塔尼亚乌吉亚",
    "MRU",
    "毛里求斯卢比",
    "马尔代夫拉菲亚",
    "马拉维克瓦查",
    "墨西哥比索",
    "马来西亚林吉特",
    "莫桑比克梅蒂卡尔",
    "纳米比亚元",
    "尼日利亚第纳尔",
    "尼加拉瓜科多巴",
    "挪威克朗",
    "尼泊尔卢比",
    "新西兰元",
    "阿曼里亚尔",
    "巴拿马巴波亚",
    "秘鲁新索尔",
    "新几内亚基那基那",
    "菲律宾比索",
    "巴基斯坦卢比",
    "波兰兹罗提",
    "巴拉圭瓜拉尼",
    "卡塔尔里亚尔",
    "罗马尼亚列伊",
    "塞尔维亚第纳尔",
    "俄罗斯卢布",
    "卢旺达法郎",
    "沙特阿拉伯里亚尔",
    "所罗门群岛元",
    "塞舌尔卢比",
    "苏丹镑",
    "瑞典克朗",
    "圣赫勒拿镑",
    "塞拉利昂利昂",
    "索马里先令",
    "苏里南元",
    "圣多美多布拉",
    "萨尔瓦多科朗",
    "叙利亚镑",
    "斯威士兰里兰吉尼",
    "塔吉克斯坦索莫尼",
    "土库曼斯坦马纳特",
    "突尼斯第纳尔",
    "TOP",
    "土耳其里拉",
    "特立尼达和多巴哥元",
    "坦桑尼亚先令",
    "乌克兰格里夫纳",
    "乌干达先令",
    "乌拉圭比索",
    "乌兹别克斯坦索姆",
    "委内瑞拉玻利瓦尔",
    "委内瑞拉玻利瓦尔",
    "越南盾",
    "瓦努阿图瓦图",
    "萨摩亚塔拉",
    "中非法郎",
    "东加勒比元",
    "特别提款权（国际货币基金）",
    "西非法郎",
    "太平洋法郎",
    "也门里亚尔",
    "南非兰特",
    "赞比亚克瓦查",
    "津巴布韦元"

     
]
App({
    globalData: {
        theme: 'light', // dark
        currencies: currencies,
        currenciesZH: currenciesZH,
        keysign: ''
    },
    themeChanged(theme) {
        this.globalData.theme = theme;
        themeListeners.forEach((listener) => {
            listener(theme);
        });
    },
    watchThemeChange(listener) {
        if (themeListeners.indexOf(listener) < 0) {
            themeListeners.push(listener);
        }
    },
    unWatchThemeChange(listener) {
        const index = themeListeners.indexOf(listener);
        if (index > -1) {
            themeListeners.splice(index, 1);
        }
    },
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
        //获取汇率appkey和sign
        // this.globalData.keysign = "B"
        this.globalData.keysign = "10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4"
        // var keysign = "10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4"
        // var that = this;
        // wx.request({
        //     url: "https://www.nowapi.com/api/finance.rate_history",
        //     success: function( res ) {
        //         // console.log('哈哈哈哈哈', res.data);
        //         // console.log('哈哈哈哈哈', typeof(res.data));
        //         var b = res.data.indexOf('10003&')
        //         var e = res.data.indexOf('&format')
        //         var keysign = res.data.substr(b, e-b)
        //         console.log('哈哈哈哈哈', keysign);
        //     }
        // })
    },
    // globalData: {
    //     userInfo: null
    // }
})