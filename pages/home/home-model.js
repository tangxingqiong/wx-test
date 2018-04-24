import Config from '../../utils/config.js';
import Base from '../../utils/base.js';
class Home extends Base{
    constructor(req){
      super();
      this.mUrl = Config.mzbjUrl;
      this.wenUrl = Config.wenUrl;
    }
    //获取banner图片
    getBannerData(id,callBack){
        let me = this;
        let params = {
          url: me.mUrl + "/shop/getServiceSlideInfo?serviceId=" + id,
          sCallBack: function(res){
            callBack && callBack(res.data);
          },

        }
        me.request(params);
        // wx.request({
        //     url: me.mUrl + "/shop/getServiceSlideInfo?serviceId=" + id,
        //     method: 'GET',
        //     success: function (res) {
        //       callBack(res.data);
        //     },
        //     fail: function(){
        //         console.log('get banner fail !');
        //     }
        // })
    }
    //获取类目导航
    getCategoryDate(callBack){
      let me = this;
      let params = {
        url: me.wenUrl + "/api/v/category/recommend/cms",
        sCallBack: function(res){
          callBack && callBack(res.data);
        }
      }
      me.request(params);
    }
    //获取餐饮行业列表
    getCateringDate(callBack) {
      let me = this;
      let params = {
        url: me.mUrl + "/wt/share/list?shardId=50&industryId=&top=5",
        sCallBack: function (res) {
          callBack && callBack(res.data);
        }
      }
      me.request(params);
    }

}
module.exports = Home;