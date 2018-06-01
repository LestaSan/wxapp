//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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
    ],
    blkpic2: [
      {src:'../../images/blkPic7.png'},
      {src:'../../images/blkPic8.png'},
      {src:'../../images/blkPic9.png'},
      {src:'../../images/blkPic10.png'},
      {src:'../../images/blkPic11.png'},
      {src:'../../images/blkPic12.png'}
    ]
  },
})
