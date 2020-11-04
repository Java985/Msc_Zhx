//app.js
import { HTTP_REQUEST_URL, CACHE_USERINFO, CACHE_TOKEN, CACHE_EXPIRES_TIME } from './config/config.js';
App({
  onshow() {
    wx.hideTabBar()
  },
  onLaunch: function () {
    
    //开通云服务
    // if (wx.cloud) {
    //   wx.cloud.init({
    //     traceUser: true
    //   })
    // }
    //获取系统信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
   
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
					this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    });
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    userInfo: null,
	  baseurl:HTTP_REQUEST_URL, //请求地址
    playstatus:'false',//播放状态
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#CCCCCC",
      "selectedColor": "#CC0000",
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
    },
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
    ]
  }
})