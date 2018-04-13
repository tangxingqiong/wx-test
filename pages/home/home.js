// pages/home/home.js
import Home from './home-model.js';
const home = new Home();
Page({
  data: {
    
  },
  onLoad: function(){
      this._loadDate();
  },
  _loadDate: function(){
      var id = 1319388;
      home.getBannerData(id,(res)=>{
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
  }
})