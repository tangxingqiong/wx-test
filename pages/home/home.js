// pages/home/home.js
import Home from './home-model.js';
const home = new Home();

Page({
  data: {
    id: 1319388
  },
  onLoad: function(){
      this._loadDate();
  },
  _loadDate: function(){
      // var id = 1319388;
      home.getBannerData(this.data.id,(res)=>{
        this.setData({
            'bannerArr': res
        })
      });
      home.getCategoryDate((res)=>{
        this.setData({
          'categoryData': res.result
        })
      });
      home.getCateringDate((res)=>{
        this.setData({
          'cateringDate': res
        })
      })
  },
  onBannerImgTap: function(event){
    let intro = home.getDataSet(event, 'intro');
    // console.log(intro);
    wx.navigateTo({
      url: "/pages/product/list/list?intro=" + intro
    })
  },
  //转发
  onShareAppMessage: function (res) {
    return {
      title: '首页',
      path: 'pages/home/home',
      imageUrl: 'http://homesitetask.zbjimg.com/homesite/task/未标题-3.jpg/origine/f7b64e37-3b3f-4bd1-8ae1-19f01293dd89',
      success: function (res) {
        // 转发成功
        console.log(res)
      },
      fail: function (er) {
        // 转发失败
        console.log(er);
      }
    }
  }
})