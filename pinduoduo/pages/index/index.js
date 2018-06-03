//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    curNav: 0,
    curTag: null,
    tabblock: [
      {
        name: "热门",
        id: 0
      },
      {
        name: "服饰",
        id: 1
      },
      {
        name: "鞋包",
        id: 3
      },
      {
        name: "母婴",
        id: 2
      },
      {
        name: "百货",
        id: 4
      },
      {
        name: "食品",
        id: 5
      },
      {
        name: "内衣",
        id: 6
      },
      {
        name: "男装",
        id: 7
      },
      {
        name: "电器",
        id: 8
      },
      {
        name: "水果",
        id: 9
      },
      {
        name: "家装",
        id: 10
      },
      {
        name: "家纺",
        id: 11
      },
      {
        name: "手机",
        id: 12
      },
      {
        name: "美妆",
        id: 13
      },
      {
        name: "运动",
        id: 14
      }
    ],
    headerpic: [
      {src:'../../images/headerPic1.png'},
      {src:'../../images/headerPic2.png'},
      {src:'../../images/headerPic3.png'},
      {src:'../../images/headerPic4.png'},
      {src:'../../images/headerPic5.png'},
      {src:'../../images/headerPic6.png'},
      {src:'../../images/headerPic7.png'}
    ],
    blkpic1: [
      {
        src:'../../images/blkPic1.png',
        title:'限时秒杀'
      },
      {
        src:'../../images/blkPic2.png',
        title:'品牌清仓'
      },
      {
        src:'../../images/blkPic3.png',
        title:'食品超市'
      },
      {
        src:'../../images/blkPic4.png',
        title:'爱逛街'
      },
      {
        src:'../../images/blkPic5.png',
        title:'9块9特价'
      },
      {
        src:'../../images/blkPic6.png',
        title:'一分抽奖'
      },
      {
        src:'../../images/blkPic7.png',
        title:'砍价免费拿'
      },
      {
        src:'../../images/blkPic8.png',
        title:'名品折扣'
      }
    ],
    blkpic2: [
      {
        src:'../../images/blkPic9.png',
        title:'海淘'
      },
      { 
        src:'../../images/blkPic10.png',
        title:'手机充值'
      },
      {
        src:'../../images/blkPic11.png',
        title:'天天领红包'
      },
      {
        src:'../../images/blkPic12.png',
        title:'时尚穿搭'
      },
      {
        src:'../../images/blkPic13.png',
        title:'助力享免单'
      },
      {
        src:'../../images/blkPic14.png',
        title:'帮帮免费团'
      },
      {
        src:'../../images/blkPic15.png',
        title:'转转领现金'
      },
      {
        src:'../../images/blkPic16.png',
        title:'现金签到'
      },
    ],
    block4Goods: [
      {
        url: '',
        src: '../../images/one.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件'
      },
      {
        url: '',
        src: '../../images/two.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件'
      },
      {
        url: '',
        src: '../../images/three.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件'
      },
      {
        url: '',
        src: '../../images/four.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件'
      },
      {
        url: '',
        src: '../../images/five.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件'
      },
      {
        url: '',
        src: '../../images/six.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件'
      },
      {
        url: '',
        src: '../../images/seven.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件'
      },
      {
        url: '',
        src: '../../images/eight.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件'
      },
      {
        url: '',
        src: '../../images/nine.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件'
      },
      {
        url: '',
        src: '../../images/ten.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件'
      },
    ]
  },
  tabClick: function(e) {
    var id = e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset.id);
    this.setData({
      curNav: id,
      curTag: id
    });
    return judge()
  },
  judge: function() {
    if (cuTag == 0) {
      return true
    } else {
      return false
    }
  }
})
