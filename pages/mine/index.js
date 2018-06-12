//index.js
//获取应用实例
const app = getApp()
var template = require('../../template/tabbar/tabbar.js');
Page({
  data: {
    motto: '我的',
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
    template.tabbar(4, this)
  },
})
