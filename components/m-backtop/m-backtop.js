// components/m-backtop/m-backtop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    handlebacktop(){
      //处理回到顶部
      wx.pageScrollTo({
        scrollTop: 0,
      })
    }
  }
})
