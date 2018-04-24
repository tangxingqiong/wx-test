// pages/product/product
import Product from './list-model.js';
let product = new Product();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoadedAll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("options：",options);
    this._getProductsData();
  },
  //get product info
  _getProductsData(){
    product.getCateringDate((res)=>{
      // console.log(res);
      this.setData({
        cateringDate: res
      })
    })
  },
  //哦，这个列表接口不支持分页加载……
  onReachBottom(){
    if (this.data.isLoadedAll){
      this._getProductsData()
    }
  }
})