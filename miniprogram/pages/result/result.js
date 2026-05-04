Page({
  data: {
    result: null,
    recordId: '',
  },

  onLoad(options) {
    let result = null
    if (options.data) {
      try {
        result = JSON.parse(decodeURIComponent(options.data))
      } catch (e) {
        console.error('parse result failed', e)
      }
    }
    this.setData({
      result,
      recordId: options.recordId || '',
    })
  },

  onBackHome() {
    wx.reLaunch({ url: '/pages/index/index' })
  },

  onAgain() {
    wx.redirectTo({ url: '/pages/capture/capture' })
  },
})
