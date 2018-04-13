class Base{
  constructor(){
  }
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
}

module.exports = Base;