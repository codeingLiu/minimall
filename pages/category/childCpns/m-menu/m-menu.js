// pages/category/childCpns/m-menu/m-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categorys:{
      type:Array,
      value: []
    },
    // currentIndex:{
    //   type:Number,
    //   value:0
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(event){
      const index = event.target.dataset.index;
      this.setData({
        currentIndex:index
      })
    }
  }
})
