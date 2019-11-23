// pages/cart/childCpns/m-select/m-select.js

const app=getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Object,
      value:{}
    },
    index:{
      type:Number
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
    onClick(e){
      //1.查找对应的商品
      const goods = app.globalData.cartList.find((item)=> item.iid=this.properties.goods.iid)
        //取反
      goods.checked=!goods.checked

      //2 获取当前商品的index
      const index=e.currentTarget.dataset.index;
      
      //3.回调
      app.changeGoodsState(index,goods);
    }
  }
})
