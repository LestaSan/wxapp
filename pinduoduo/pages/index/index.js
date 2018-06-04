//index.js
//获取应用实例
const app = getApp()
// const commone = require("../one/exports.js");
Page({
  data: {
    title: null,
    viewleft: 0,
    curNav: 0,
    curTag: 0,
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
      {src:'//t00img.yangkeduo.com/t04img/images/2018-06-03/a2a9c4f596faa47e2a387751f4aa8e39.jpeg?imageMogr2/format/webp/quality/50'},
      {src:'//t00img.yangkeduo.com/t09img/images/2018-06-01/d48e3e2294cea2ddf7f52211d218657f.jpeg?imageMogr2/format/webp/quality/50'},
      {src:'//t00img.yangkeduo.com/t05img/images/2018-06-03/a4a01001373b85b521b1db9e64ff32ee.jpeg?imageMogr2/format/webp/quality/50'},
      {src:'//t00img.yangkeduo.com/t01img/images/2018-06-03/3728f696f66f4a6da1bee861afdf6e73.jpeg?imageMogr2/format/webp/quality/50'},
      {src:'//t00img.yangkeduo.com/t03img/images/2018-06-03/8009baf6f2a86704fb9d137af8bad103.jpeg?imageMogr2/format/webp/quality/50'},
      {src:'//t00img.yangkeduo.com/t05img/images/2018-06-03/af0e581e74acb90343c162a08b0cd1b4.jpeg?imageMogr2/format/webp/quality/50'},
      {src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4119613175,2906257134&fm=27&gp=0.jpg'}
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
        tuan: '已团3万件',
        title: '商品详情'  
      },
      {
        url: '../goods1/goods1',
        src: '../../images/two.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '10.9',
        tuan: '已团114万件',
        title: '商品详情'
      },
      {
        url: '',
        src: '../../images/three.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件',
        title: '商品详情'
      },
      {
        url: '',
        src: '../../images/four.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件',
        title: '商品详情'
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
        tuan: '已团3万件',
        title: '商品详情'
      },
      {
        url: '',
        src: '../../images/seven.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件',
        title: '商品详情'
      },
      {
        url: '',
        src: '../../images/eight.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件',
        title: '商品详情'
      },
      {
        url: '',
        src: '../../images/nine.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件',
        title: '商品详情'
      },
      {
        url: '',
        src: '../../images/ten.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        tuan: '已团3万件',
        title: '商品详情'
      },
    ],
    one_blkpic: [
      {
        src: '//t07img.yangkeduo.com/images/2018-04-25/97cedd15e01364cd56bfb7d55e9c8e92.png?imageMogr2/format/webp/quality/50',
        title: '女装'
      },
      {
        src: '//t08img.yangkeduo.com/images/2018-04-19/ef86c99733c4cd53477aea253eee016c.png?imageMogr2/format/webp/quality/50',
        title: '夏上新'
      },
      {
        src: '//t03img.yangkeduo.com/images/2018-04-19/287418e28ef4eff267d84148c25f8d9c.png?imageMogr2/format/webp/quality/50',
        title: 'T恤'
      },
      {
        src: '//t07img.yangkeduo.com/images/2018-04-19/28bb4d672a7f456fb75f1734183e0aa8.png?imageMogr2/format/webp/quality/50',
        title: '女裤'
      },
      {
        src: '//t07img.yangkeduo.com/images/2018-04-19/a3195d9f6eff8e8a42671349438820f7.png?imageMogr2/format/webp/quality/50',
        title: '薄外套'
      },
      {
        src: '//t05img.yangkeduo.com/images/2018-03-05/a84cfd10275709465795c6c17e108199.png?imageMogr2/format/webp/quality/50',
        title: '衬衫'
      },
      {
        src: '//t09img.yangkeduo.com/images/2018-04-19/f358cbcb2509c41f3043f2edbad7f3b3.png?imageMogr2/format/webp/quality/50',
        title: '裙装'
      }
    ],
    one_blkpic8: [
      {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURQAAAODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4P7+/u/v73koT0EAAAAIdFJOUwBO8rKJ1CMLoiR1VwAAANtJREFUKM91kz0OwjAMhYNAsFaIgRUxkBEhIXWErTtLR46AuAFpKxlOQHoCekvitI2a1u8NkfUl8k9sK9VqtTlrc7s+VKTZibz2SURz6lQN+DKloOIe8JoG2vV0QZEuHc5iXIqP++fbMX75NPQYG05mThMdJR+tl3yKK1c3CUok1+z8KeGDFJFjZhIuVSrhQsqPM+TSP/bnzqYOplF82diaARNvOqwlTDI2PuTbft1pbTArlCAoBxQPvgp8LGgDaBpqMRgIMD5g2NBogkFGYw+WBK0UWEC0rpPl/gMSMZBtc0a6EQAAAABJRU5ErkJggg==',
        title: '查看全部'
      }
    ],
    one_block2pic: [
      {
        src: '//t00img.yangkeduo.com/t04img/images/2018-05-30/9334d2c1d3bee52881ba883ede24613b.jpeg?imageMogr2/format/webp/quality/50',
        content: '夏季新款运动裤女学生韩版原宿bf薄款宽松超火的ins',
        price: '13.9',
        tuan: '已团3.3万件'
      },
      {
        src: '//t00img.yangkeduo.com/t09img/images/2018-05-31/3c30ee226e71a864d2ffed8fdc9919de.jpeg?imageMogr2/format/webp/quality/50',
        content: '特价女装清仓处理2018夏季新款连衣裙套装防晒衣短袖女',
        price: '2.5',
        tuan: '已团3.3万件'
      },
      {
        src: '//t10img.yangkeduo.com/images/2018-05-20/0e65f724506688b94a0ef15a96f209dc.jpeg?imageMogr2/format/webp/quality/50',
        content: '特价女装清仓处理2018夏季新款连衣裙套装防晒衣短袖女',
        price: '2.5',
        tuan: '已团3.3万件'
      },
      {
        src: '//t17img.yangkeduo.com/images/2018-05-14/fac2ec5b3dadf21d0d55ab1cebbd62b0.jpeg?imageMogr2/format/webp/quality/50',
        content: '特价女装清仓处理2018夏季新款连衣裙套装防晒衣短袖女',
        price: '2.5',
        tuan: '已团3.3万件'
      },
      {
        src: '//t03img.yangkeduo.com/images/2018-05-17/bca421c285776cc435a6a2e6d82a619d.jpeg?imageMogr2/format/webp/quality/50',
        content: '特价女装清仓处理2018夏季新款连衣裙套装防晒衣短袖女',
        price: '2.5',
        tuan: '已团3.3万件'
      },
      {
        src: '//t00img.yangkeduo.com/t05img/images/2018-06-02/e1741187c1e6326dcb08d00769c80d41.jpeg?imageMogr2/format/webp/quality/50',
        content: '特价女装清仓处理2018夏季新款连衣裙套装防晒衣短袖女',
        price: '2.5',
        tuan: '已团3.3万件'
      },
      {
        src: '//t00img.yangkeduo.com/t02img/images/2018-05-28/b58777ad133810a1318417f4b437f511.jpeg?imageMogr2/format/webp/quality/50',
        content: '特价女装清仓处理2018夏季新款连衣裙套装防晒衣短袖女',
        price: '2.5',
        tuan: '已团3.3万件'
      },
      {
        src: '//t10img.yangkeduo.com/images/2018-04-06/18978987f689cf664942ccf5bcade730.jpeg?watermark/1/blogo/2/image/aHR0cDovL3Byb2QtaW1hZ2UxLWdvb2RzLTEyNTIwODEwMDEucGljc2gubXlxY2xvdWQuY29tL2ltYWdlcy8yMDE4LTAzLTA0LzQwNjFhMzBjZTYxZjZhNDYzOWM5MzdiNjYwMDM4YTgyLnBuZw==/gravity/southeast/dy/1/dx/1|imageMogr2/format/webp/quality/50',
        content: '特价女装清仓处理2018夏季新款连衣裙套装防晒衣短袖女',
        price: '2.5',
        tuan: '已团3.3万件'
      },
    ]
  },
  tabClick: function(e) {
    var id = e.currentTarget.dataset.id;
    // console.log(e.currentTarget.dataset.id);
    this.setData({
      curNav: id,
      curTag: id
    });
  },
  scrollMove: function(e) {
    // console.log(e);
    // 0~224.6
    var left = e.detail.scrollLeft;
    this.setData({
      viewleft: left
    })
  },
  // setTitle: function(e) {
  //   // console.log("test");
  //   var title = e.currentTarget.dataset.title;
  //   setTimeout(function() {
  //     wx.setNavigationBarTitle({
  //       title: title,
  //     })
  //   }, 3000);
  // },
  onLoad: function() {
    
  }
})
