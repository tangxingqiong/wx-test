// pages/search/search.js
import Product from '../product/list/list-model.js';
let product = new Product();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    contsArray:[1,2,3,4,5,6]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },
  onShow: function(){
    this.data.contsArray = [1111111, 2222222]
    console.log(this.data.contsArray);
  },
  _loadData: function(){
    this.data.contsArray = [1111111,2222222];
    console.log(this.data.contsArray);
    this.setData({
      text: "你你你你……"
    })
    // product.getCateringDate((res) => {
      // console.log(res);
      // this.setData({
      //   cateringDate: res
      // })
      // this.data.aaa = res[0].title;
    //   console.log(this.data.aaa)
    // })

  },
  formSubmit: function (e) {
    let detail = e.detail.value.detail;
    let realname = e.detail.value.realname;
    let mobile = e.detail.value.mobile;
    console.log(detail, realname, mobile);
  },
  realnameConfirm: function (e) {
    var realname = e.detail.value;
    console.log(realname)
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