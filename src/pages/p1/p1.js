// pages/p1/p1.js
Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        showTopTips: false,

        radioItems: [{
            name: 'cell standard',
            value: '0'
        },
        {
            name: 'cell standard',
            value: '1',
            checked: true
        }
        ],
        checkboxItems: [{
            name: 'standard is dealt for u.',
            value: '0',
            checked: true
        },
        {
            name: 'standard is dealicient for u.',
            value: '1'
        }
        ],

        date: "2016-09-01",
        dateB: "2016-01-01",
        dateE: "2020-09-01",
        dateMin: "2016-01-01",
        dateMax: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),

        
        currencyIndexB: 32,
        currencyIndexE: 57,

        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: 0,

        countries: ["中国", "美国", "英国"],
        countryIndex: 0,

        accounts: ["微信号", "QQ", "Email"],
        accountIndex: 0,

        isAgree: false,
        currenciesZH: [
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
            "加拿大元",
            "刚果法郎",
            "瑞士法郎",
            "智利斯开法",
            "智利比索",
            "离岸人民币",
            "人民币",
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
            "欧元",
            "斐济元",
            "福克兰群岛镑",
            "英镑",
            "格鲁吉亚拉里",
            "加纳塞地",
            "直布罗陀镑",
            "冈比亚达拉西",
            "几内亚法郎",
            "危地马拉格查尔",
            "圭亚那元",
            "港币",
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
            "日元",
            "肯尼亚先令",
            "吉尔吉斯索姆",
            "柬埔寨瑞尔",
            "科摩罗法郎",
            "朝鲜元",
            "韩国元",
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
            "澳门币",
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
            "新加坡元",
            "圣赫勒拿镑",
            "塞拉利昂利昂",
            "索马里先令",
            "苏里南元",
            "圣多美多布拉",
            "萨尔瓦多科朗",
            "叙利亚镑",
            "斯威士兰里兰吉尼",
            "泰铢",
            "塔吉克斯坦索莫尼",
            "土库曼斯坦马纳特",
            "突尼斯第纳尔",
            "TOP",
            "土耳其里拉",
            "特立尼达和多巴哥元",
            "台币",
            "坦桑尼亚先令",
            "乌克兰格里夫纳",
            "乌干达先令",
            "美元",
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