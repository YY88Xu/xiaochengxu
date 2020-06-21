// pages/roll/roll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rollArr: [
      "1单项选择器，内部由多个 radio 组成",
      "2单项选择器，内部由多个 radio 组成",
      "3单项选择器，内部由多个 radio 组成",
    ],
    curIndex: 0,
    nextIndex: 1,
    pauseRoll: false,
    setInter: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const timer = setInterval(() => {
      let nextIndex = this.data.curIndex;
      if(nextIndex < this.data.rollArr.length-1){
        nextIndex++;
      }else{
        nextIndex = 0;
      }
      this.setData({
        curIndex: nextIndex,
        nextIndex: nextIndex < this.data.rollArr.length-1 ? nextIndex+1 : 0,
        pauseRoll: !this.data.pauseRoll
      });
    }, 5000);
    this.setData({
      setInter: timer
    })
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
    clearInterval(this.data.interval);
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