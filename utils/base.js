class Base{
  constructor(){
  }
  //API请求封装
  request(params){
    let url = params.url;
    !params.type && (params.type = 'GET');
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: function(res){
        params.sCallBack && params.sCallBack(res.data);
      },
      fail: function(err){
        console.error(err);
      }
    })
  }
  //获取元素上绑定的data值
  getDataSet(event, key){
    return event.currentTarget.dataset[key];
  }
}

module.exports = Base;