// pages/goods1/goods1.js
Page({
  data: {
    block3click: false,
    block5click: false,
    animationData: {},
    blk1Pic: [
      {src:'//t00img.yangkeduo.com/t04img/images/2018-06-04/b1329c9c6c2f5b36daa6b7af23c933ee.jpeg'},
      {src:'//t08img.yangkeduo.com/images/2018-03-16/1fd60f4ecf474cd6e91a8186f92504eb.jpeg'},
      {src:'//omsproductionimg.yangkeduo.com/images/2017-10-25/2baf5bb0b1376d48dd1b67c9094ba851.jpeg@750w_1l_50Q'},
      {src:'//omsproductionimg.yangkeduo.com/images/2017-10-25/4bd8b4f22396bc3f2d331e774c3b06fa.jpeg@750w_1l_50Q'},
      {src:'//omsproductionimg.yangkeduo.com/images/2017-10-25/ecf6a6f7d37d6dd4c14709ad8fef68aa.jpeg@750w_1l_50Q'},
    ],
    lists: [
      {
        src: "../../images/gou.png",
        title: "全场包邮",
        content: "所有商品均无条件包邮"
      },
      {
        src: "../../images/gou.png",
        title: "7天退换",
        content: "商家承诺7天无理由退换货"
      },
      {
        src: "../../images/gou.png",
        title: "48小时发货",
        content: "若超时未发货，商家将补偿3元无门槛代金券"
      },
      {
        src: "../../images/gou.png",
        title: "假一赔十",
        content: "若收到商品是假冒品牌，可获得十倍赔偿"
      }
    ],
    blk5pic: [
      {src: "//omsproductionimg.yangkeduo.com/images/unknown/0/GXR11zlUAbpPndtBO0uZhiIsO7Ca8gIP.jpg@750w_1l_50Q"},
      {src: "//omsproductionimg.yangkeduo.com/images/unknown/0/KW7kgWSup3WhbHR08ife5d3PcRFwAqE4.jpg@750w_1l_50Q"},
      {src: "//omsproductionimg.yangkeduo.com/images/unknown/0/LsEjSrHp3P0U6L8fNlsG5w3hm9XBJ0LK.jpg@750w_1l_50Q"},
      {src: "//omsproductionimg.yangkeduo.com/images/unknown/0/UCkllykVhX7OnWHDyfl0xilK5OfZpZtR.jpg@750w_1l_50Q"},
      {src: "//omsproductionimg.yangkeduo.com/images/unknown/0/bYrG9Toepw4lxqGTlcDQNr0ITQt1Uk66.jpg@750w_1l_50Q"},
      {src: "//omsproductionimg.yangkeduo.com/images/unknown/0/jPOd6uK0fIHiOYwW4prqHRxvJVID2DID.jpg@750w_1l_50Q"},
      {src: "//omsproductionimg.yangkeduo.com/images/unknown/0/pJM2gR3gKbsbMLszDFWPtnpsQCjWLxp5.jpg@750w_1l_50Q"},
      {src: "//omsproductionimg.yangkeduo.com/images/unknown/0/UlbLIagyTptHDtquYSU90hyUBGvFHH3a.jpg@750w_1l_50Q"},
      {src: "//omsproductionimg.yangkeduo.com/images/unknown/0/tsxXF0rN1J93DOTnBBD0FKHZccm9NxX8.jpg@750w_1l_50Q"},
      {src: "//omsproductionimg.yangkeduo.com/images/unknown/0/MnmpO1NXja8RtRf6ICsbSieB48RpIUTS.jpg@750w_1l_50Q"}
    ]
  },
  serverContent: function(e) {
    var that = this;
    console.log(e);
    
    var animation  = wx.createAnimation({
      // 动画持续时间
        duration:200,
        // 定义动画效果，当前是匀速
        timingFunction:'linear'
    });
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(400).step()
    // 用setData改变当前动画
    that.setData({
      block3click: true,
      animationData: animation.export()
    });
    setTimeout(function(){
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    },100)
  },
  hideModal: function() {
    this.setData({
      block3click: false
    })
  },
  purchase: function(e) {
    console.log(e);
    this.setData({
      block5click:true
    })
  },
  hideModal2: function() {
    this.setData({
      block5click: block3click.value
    })
  },
  onLoad: function (options) {
  
  },

 
})