// components/custom-checkobox/custom-checkobox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    id: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    labelTab: function(e){
      console.log('点击了一下label')
      console.log(e)
    }
  }
})
