//index.js
//var QRcode = require("../../assets/lib/QRcode_my.js")
//import QRcode from "../../assets/lib/qrcode_3"
var QR = require("../../assets/lib/qrcode_3");
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    console.log(QR)
    // var qrnode = new QRcode.QRcode({
    //     text: 'http://www.alipay.com/'
    // });
    // console.log(qrnode)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
