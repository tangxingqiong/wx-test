// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.data.title = options.title;
    this._loadData(options);
  },
  onReady: function(){
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
    // wx.showNavigationBarLoading();
  },
  _loadData(options){
    this.setData({
      title: options.title,
      remark: options.remark
    })
  }
})