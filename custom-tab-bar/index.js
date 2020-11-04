Component({
  data: {
    selected: 0,
    color: "#000000",
    selectedColor: "#ff4f19",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "/static/images/1-01.png",
        selectedIconPath: "/static/images/1-02.png",
        text: "首页"
      },
      {
        pagePath: "/pages/collection/collection",
        iconPath: "/static/images/2-01.png",
        selectedIconPath: "/static/images/2-02.png",
        text: "收藏"
      },
      {
        pagePath: "/pages/play/play",
        iconPath: "/static/images/5-01.png",
        selectedIconPath: "/static/images/5-02.png",
        text: "播放",
        diyClass: "diy"
      },
      {
        pagePath: "/pages/find/find",
        iconPath: "/static/images/3-01.png",
        selectedIconPath: "/static/images/3-02.png",
        text: "发现"
      },
      {
        pagePath: "/pages/user/user",
        iconPath: "/static/images/4-01.png",
        selectedIconPath: "/static/images/4-02.png",
        text: "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})