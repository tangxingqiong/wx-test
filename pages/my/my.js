// pages/me/me.js
//获取应用实例
import My from '../my/my-model.js';
const my = new My();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    year: new Date().getFullYear(),      // 年份
    month: new Date().getMonth() + 1,    // 月份
    day: new Date().getDate()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
    this._currentDateStyle();
  },

  _loadData: function(){
    my.getUserInfo((res=>{
      this.data.hasUserInfo = true;
      this.data.userInfo = res;
      this.setData({ userInfo: this.data.userInfo, hasUserInfo: true });
    }))
  },
  _currentDateStyle: function(){
    let currentDateStyle = [];
    const days_count = new Date(this.data.year, this.data.month, 0).getDate();
    for (let i = 1; i <= days_count; i++) {
      if (i == this.data.day) {
        currentDateStyle.push({
          month: 'current', day: i, color: '#fff', background: '#d7baf0'
        });
      }
    }
    this.setData({
      currentDateStyle
    });
  }
})