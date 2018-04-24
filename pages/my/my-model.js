import Base from '../../utils/base.js';

class My extends Base {
  constructor() {
    super();
  }

  //获取用户微信信息
  getUserInfo(callBack){
    wx.login({
      success: function(res){
        wx.getUserInfo({
          success: function(rs){
            typeof callBack == 'function' && callBack(rs.userInfo)
          },
          fail: function(er){
            typeof callBack == 'function' && callBack({
              avatarUrl: './../../images/my/face-default.png',
              nickName: '小猪儿'
            })
          }
        })
      }
    })
  }
}

module.exports = My