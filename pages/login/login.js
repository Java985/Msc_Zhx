//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  motto: 'Welcome My_Msz',
  userInfo: {},
  hasUserInfo: false,
  canIUse: wx.canIUse('button.open-type.getUserInfo'),
	user_width:'300rpx',
	Expand:false,
	Expand1:false,
	Expand2:false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../index/index',
	  
    })
  },
  onReady:function(){
	 let  that = this;
	  if(!that.data.hasUserInfo){
      setTimeout(function(){
			that.Expand();
      console.info("你是");
		},2000);
	  }
  },
  Expand:function(){
  	  let that = this;
  	  that.setData({
  	  	Expand:true,
		Expand1:false,
        Expand2:false,
  	  });
  	  setTimeout(function(){
  		  that.Expand1();
      }, 3000);
  },
  Expand1:function(){
	  let that = this;
	  that.setData({
	  	Expand1:true,
	  	Expand:false,
	  });
	  setTimeout(function(){
		  that.Expand2();
    }, 3000);
  },
  Expand2:function(){
  	  let that = this;
  	  that.setData({
  	  	Expand2:true,
        Expand: false,
        Expand1: false,
  	  });
  	  setTimeout(function(){
  		  that.Expand();
      },3000);
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
	console.info(this.data.hasUserInfo);
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
