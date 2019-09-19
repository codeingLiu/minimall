// components/m-tab-control/m-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    },
    currentIndex:{
      type:Number,
      value:0
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
    itemClick(event) {
      const index = event.target.dataset.index
      //1赋值
      this.setData({
        currentIndex:index
      })
      //2把方法传出去
      this.triggerEvent('tabclick',{index:index},{})
    }
  },
})
