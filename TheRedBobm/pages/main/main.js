// pages/main/main.js
var app = getApp();
var gd = app.globalData;
var api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    images:[],
    showBox:true,
    msgs:[],
    message:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var msgs = that.data.msgs;
    for(var i=0;i<msgs.length;i++){

    }
    this.setData({
      images: ["https://www.apawaken.tech/wedding/resources/img01.jpg", "https://www.apawaken.tech/wedding/resources/img01.jpg"]
    });
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
    var that = this;
    that.getData();
    setInterval(function(){
      that.getData();
    },3000)

    //播放音乐
    //音乐列表
    var srcs = [
      'http://isure.stream.qqmusic.qq.com/C400003OUlho2HcRHC.m4a?vkey=0CB60F00C02C3B55584264448CBF96058DBB220E497E5DB36492D09E8CE664341980BE21AC85AD53BEA6D62B81AB2EF865D39FCC6680E07D&guid=4170707060&uin=0&fromtag=66',
      'http://isure.stream.qqmusic.qq.com/C400002p4NaC28d3cE.m4a?vkey=875AB175E5D1DACFDBA07CBE162B0B0ABE79FFB43A9822C84C8B75895A1540D87DECEE0461A2AD366DE541B400A66108B7379D101EBADF23&guid=4170707060&uin=0&fromtag=66'
    ];

    var index = 0;
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.src = srcs[index];

    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })

    innerAudioContext.onEnded(() =>{
      index++;
      if(index==srcs.length){
        index = 0;
      }
      innerAudioContext.src = srcs[index];
      innerAudioContext.play();
    })
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
  
  },
  fnInputMessage:function(e){
    this.setData({
      message:e.detail.value
    })
  },
  fnSendMessage:function(){
      var that = this;
      var message = that.data.message;
      if(message==""){
        wx.showToast({
          title: '空的(ಥ _ ಥ)！',
        });
        return;
      }
      wx.getUserInfo({
        success: function (res) {
          var nickName = res.userInfo.nickName;
          var avatarUrl= res.userInfo.avatarUrl;
          var param={
            name:nickName,
            avatar:avatarUrl,
            content:message
          }
            wx.request({
              url: api.SaveMessage,
              data:param,
              success: function (res) {
                if (res.data.code == '200') {
                  that.getData();
                  wx.showToast({
                    title: '已发送',
                  });
                  //清空输入的东西
                  that.setData({
                    message:""
                  });
                } else {
                  wx.showToast({
                    title: '哥哥受到暴击！',
                  })
                }
              }
            })
        }
      });
  },
  getData:function(){
    var that = this;
    var url = gd.api.GetAllMessage;
    wx.request({
      url: url,
      success: function (res) {
        if (res.data.code == '200') {
          that.setData({
            msgs: res.data.datas
          })
        } else {
          wx.showToast({
            title: '加载数据出错',
          })
        }
      }
    })
  }

})