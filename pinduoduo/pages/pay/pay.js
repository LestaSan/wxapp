// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modal: '',
    price: '',
    number: '',
    src: '',
    total: ''
  },
  total: function() {
    var that = this
    console.log(that.data.price)
    console.log(that.data.number)
    var number = that.data.number,
    price = that.data.price;
    // 采坑
    var total = (number * price).toFixed(1);
    console.log(total)
    that.setData({
      total: total
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
    });
    this.total()
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
    });
    this.total()
  },
  onShow: function (options) {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'number',
      success: function(res){
        // console.log(res);
        var number = res.data;
        that.setData({
          number: number
        })
      },
    })
    wx.getStorage({
      key: 'list',
      success: function(res){
        // console.log(res);
        var modal = res.data.content;
        var price = res.data.price;
        var src = res.data.src;
        that.setData({
          modal: modal,
          price: price,
          src: src
        });
        that.total()
      },
    });
  },
})