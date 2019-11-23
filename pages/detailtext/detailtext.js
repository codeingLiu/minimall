// pages/detailtext/detailtext.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header: 'https://img12.360buyimg.com/da/jfs/t1/64942/6/10328/80741/5d7e487bE321598a3/8f6f08ad6f659916.jpg',
    avter:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568732632547&di=be9c1c725daf8a4cc6cd3a4f936d9121&imgtype=0&src=http%3A%2F%2Fimg.zhaogexing.com%2Ftouxiang%2F160622%2F1-160622042242-52.jpg',
    index:2,
    isMusicPaly:false,
    coverImageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573494761207&di=2e6aa495e0ea1b1794189cde7ac48589&imgtype=0&src=http%3A%2F%2Fm1.biz.itc.cn%2Fpic%2Fnew%2Fn%2F80%2F99%2FImg9139980_n.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //对象的简够赋值，可以把data里的index,赋值给index
    let {index}=this.data;
    console.log("index=" + index);

    //监听音乐的播放
    wx.onBackgroundAudioPlay(()=>{
      this.setData({
        isMusicPaly:true
      })
      app.globalData.isPlay=true;

      console.log("isPlay=" + app.globalData.isPlay);
    })

    //判断
    if (app.globalData.isPlay){
      this.setData({
        isMusicPaly:true
      })
    }

    //监听暂停
    wx.onBackgroundAudioPause(()=>{
      this.setData({
        isMusicPaly:false
      })
      app.globalData.isPlay = false;

      console.log("isPlay=" + app.globalData.isPlay);
    })
  },

  //处理播放音乐
  handleMusic:function(res){
    //改变变量的值
    let isMusicPaly=!this.data.isMusicPaly;
    this.setData({
      isMusicPaly:isMusicPaly
    })

    //播放音乐
    if(isMusicPaly){
      //播放
      wx.playBackgroundAudio({
        dataUrl: 'http://sc1.111ttt.cn/2018/1/03/13/396131229550.mp3',
        title:"最美的期待",
        success:(()=>{

        })
      })
    }else{
      //暂停
      wx.pauseBackgroundAudio()
    }

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