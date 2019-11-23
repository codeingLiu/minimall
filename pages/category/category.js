// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys:['正在流行','上衣','裤子','裙子','内衣','女鞋','男友','包包','运动','配饰','美妆','个护','家居'],

    subcategorys:[],
    categoryDetail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setsubcategorys();

    this.setcategoryDetail();
  },

  //制造子类展示假数据
  setsubcategorys(){
    const data = this.data.subcategorys;
    for(var i=0;i<12;i++){
      const item ={
        image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568732662529&di=4de8a417a27f9c6d986034a5f469b71b&imgtype=0&src=http%3A%2F%2Fimg.zhaogexing.com%2Ftouxiang%2F160626%2F1-160626194948-50.jpg',title:'好货闪卖'
      }
      data.push(item);
    }
    this.setData({
      subcategorys:data
    })
  },
  //制造子类goods项数据
  setcategoryDetail(){
    const data =this.data.categoryDetail

    for(var i=0;i<20;i++){
      const item = { title: '烟花烫2019秋季新款时尚淑女中式绣花立领衬衫', image: 'https://img13.360buyimg.com/n1/s350x449_jfs/t1/51877/11/5741/206670/5d36c899Ea1cab487/87559e3f76d477c3.jpg!cc_350x449.jpg', price: 199.9, cfav: 208 };

      data.push(item)
    }
    //设置数据
    this.setData({
      categoryDetail:data
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})