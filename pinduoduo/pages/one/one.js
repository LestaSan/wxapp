// pages/one/one.js
  Page({
    data: {
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
  })
