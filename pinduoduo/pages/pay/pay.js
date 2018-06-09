// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modal: '',
    price: '',
    number: '',
    src: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'number',
      success: function(res){
        console.log(res);
        var number = res.data;
        that.setData({
          number: number
        })
      },
    })
    wx.getStorage({
      key: 'list',
      success: function(res){
        console.log(res);
        var modal = res.data.content;
        var price = res.data.price;
        var src = res.data.src;
        that.setData({
          modal: modal,
          price: price,
          src: src
        })
      },
    })
  },
})