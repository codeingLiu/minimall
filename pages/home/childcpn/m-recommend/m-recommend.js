// pages/home/childcpn/m-recommend/m-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleloadover(){
      if(!this.data.isLoad){
        this.data.isLoad=true;
        this.triggerEvent('loadover',{},{});
      }
    }
  }
})
