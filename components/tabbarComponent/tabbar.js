// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
         "list": [
          {
            "pagePath": "/pages/index/index",
            "iconPath": "/static/images/1-01.png",
            "selectedIconPath": "/static/images/1-02.png",
             "text": "首页"
          },
          {
            "pagePath": "/pages/collection/collection",
            "iconPath": "/static/images/2-01.png",
            "selectedIconPath": "/static/images/2-02.png",
            "text": "收藏"
          },
          {
            "pagePath": "/pages/play/play",
            "iconPath": "/static/images/5-01.png",
            "selectedIconPath": "/static/images/5-02.png",
            "isSpecial": true,
            "text": ""
          },
          {
            "pagePath": "/pages/find/find",
            "iconPath": "/static/images/3-01.png",
            "selectedIconPath": "/static/images/3-02.png",
            "text": "发现"
          },
          {
            "pagePath": "/pages/user/user",
            "iconPath": "/static/images/4-01.png",
            "selectedIconPath": "/static/images/4-02.png",
            "text": "我的"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
