// pages/goods1/goods1.js
Page({
  data: {
    blockclick: false,
    block3click: false,
    block5click: false,
    curNav: null,
    number: '1',
    showOut: false,
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
    ],
    purContent: [
      {
        src: "//t00img.yangkeduo.com/t05img/images/2018-06-04/e5162f6d8e3ee7bc5620ae4f7c9c4a42.jpeg",
        price: "9.9-27.9",
        title: "请选择\xa0\xa0货号"
      }
    ],
    modalLists: [
      { 
        src: "//t03img.yangkeduo.com/images/2018-04-17/9b022a30f3a9f10b437a1e19defb20fb.jpeg",
        content:"蓝色经典18包" ,
        price: "20.26",
        title: "已选：蓝色经典18包"
      },
      { 
        src: "//t09img.yangkeduo.com/images/2018-04-17/1225b00e178d9042841170ca70e926b8.jpeg",
        content:"蓝色经典27包" ,
        price: "27.9",
        title: "已选：蓝色经典27包"
      },
      { 
        src: "//t07img.yangkeduo.com/images/2018-04-17/bcbca6f465fa5e2c1a5628ec10d69089.jpeg",
        content:"蓝色经典8包" ,
        price: "10.9",
        title: "已选：蓝色经典8包"
      },
    ],
  },
  serverContent: function(e) {
    var that = this;
    // console.log(e);
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
      blockclick: true,
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
      block3click: false,
      blockclick: false
    })
  },
  purchase: function(e) {
    var that = this;
    // console.log(e);
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
      block5click: true,
      blockclick: true,
      animationData: animation.export()
    });
    setTimeout(function(){
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    },100)
  },
  hideModal2: function() {
    this.setData({
      block5click: false,
      blockclick: false
    })
  },
  selected: function(e) {
    var index = e.currentTarget.dataset.index;
    var list = new Array;
    list[0] = this.data.modalLists[index];
    // console.log(list);
    this.setData({
      curNav: index,
      purContent: list,
    });
    wx.setStorage({
      key: 'list',
      data: list[0]
    })
  },
  bindMinus: function() {
    var num = parseInt(this.data.number);
    // 字符串转数字类
    // console.log(typeof num);  
    var that = this;
    if (num > 1) {
      num = num - 1;
      that.setData({  
        number: num
      })
    }
    wx.setStorage({
      key: 'number',
      data: num
    })
  },
  bindPlus: function() {
    var num = parseInt(this.data.number);
    num = num + 1;
    this.setData({
        number: num
    })
    wx.setStorage({
      key: 'number',
      data: num
    })
  },
  purchaseClick: function() {
    var a = this.data.curNav;
    var that = this;
    if (a == null) {
      that.setData({
        showOut: true
      }) 
    } else {
      wx.navigateTo({
        url: '../pay/pay',
      })
    };
    var animation  = wx.createAnimation();
    setTimeout(function(){
      that.setData({
        animationData: animation.export(),
        showOut: false
      })
    },1500)
  },
  onLoad: function (options) {
    // 采坑处
    wx.clearStorage({
      key: 'String',
      key: 'list'
    })
  },

 
})