
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "../../pages/index/index",
      "text": "首页",
      "iconPath": "../../assets/image/shouye-weidianji@2x.png",
      "selectedIconPath": "../../assets/image/shouye-dianji@2x.png"
    }, {
      "current": 0,
      "pagePath": "../../pages/discover/index",
      "text": "发现",
      "iconPath": "../../assets/image/faxian_weidianj@2x.png",
      "selectedIconPath": "../../assets/image/faxian_dianj@2x.png"
    },
    {
      "current": 0,
      "type": "actionSheet",
      "text": "记录",
      "iconPath": "../../assets/image/record.png",
      "selectedIconPath": "../../assets/image/shangchuang@2x.png"
    },
    {
      "current": 0,
      "pagePath": "../../pages/activity/index",
      "text": "活动",
      "iconPath": "../../assets/image/huodong-weidianji@2x.png",
      "selectedIconPath": "../../assets/image/huodong-dianji@2x.png"
    },
    {
      "current": 0,
      "pagePath": "../../pages/mine/index",
      "text": "我的",
      "iconPath": "../../assets/image/wode_weidianji@2x.png",
      "selectedIconPath": "../../assets/image/wode_dianj@2x.png"
    },
  ]
}

function actionSheetInit() {
  return [
    {
      "pagePath": "../../pages/publish/publish?type=1",
      "text": "相册",
      "iconPath": "../../assets/image/xiangche@2x.png",
    }, {
      "pagePath": "../../pages/publish/publish?type=2",
      "text": "视频",
      "iconPath": "../../assets/image/shipin@2x.png",
    },
    {
      "pagePath": "../../pages/body/body",
      "text": "身高体重",
      "iconPath": "../../assets/image/shengaotizhong@2x.png",
    },
    {
      "pagePath": "../../pages/firstTime/firstTime",
      "text": "第一次",
      "iconPath": "../../assets/image/diyici@2x.png",
    },
  ]
}
//tabbar 主入口
function tabbarmain(id, target) {
  const app = getApp();
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData['tabBar'] = otabbar
  bindData['actionSheetHidden'] = false;
  bindData['actionSheetData'] = actionSheetInit();
  bindData['showTabBar'] = true
  that.setData({ bindData });
  // console.log(that)

  //注册点击事件
  that.showActionSheet = that.actionSheetChange = function () {
    bindData['actionSheetHidden'] = !that.data.bindData.actionSheetHidden
    that.setData({ bindData });
  }

  //注册跳转事件
  that.bindSwitchTabbar = function (e) {
    var current = e.currentTarget.dataset.current;
    var url = e.currentTarget.dataset.url;
    if (current == 1) {
    } else {
      wx.reLaunch({
        url: url,
      })
    }

  }
}

module.exports = {
  tabbar: tabbarmain
}