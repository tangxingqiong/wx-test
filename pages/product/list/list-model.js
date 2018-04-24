import Config from '../../../utils/config.js';
import Base from '../../../utils/base.js';
class Product extends Base {
  constructor(req) {
    super();
    this.mUrl = Config.mzbjUrl;
    this.wenUrl = Config.wenUrl;
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
module.exports = Product;