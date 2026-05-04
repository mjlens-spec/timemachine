const { compressImage } = require('../../utils/image.js')
const { callGradeExam } = require('../../utils/cloud.js')

Page({
  data: {
    imagePath: '',
    uploading: false,
  },

  onChooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['camera', 'album'],
      camera: 'back',
      sizeType: ['compressed'],
      success: (res) => {
        const tempFilePath = res.tempFiles[0].tempFilePath
        this.setData({ imagePath: tempFilePath })
      },
    })
  },

  async onSubmit() {
    if (!this.data.imagePath || this.data.uploading) return
    this.setData({ uploading: true })
    wx.showLoading({ title: '批阅中...', mask: true })

    try {
      const compressed = await compressImage(this.data.imagePath)
      const cloudPath = `papers/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`
      const upload = await wx.cloud.uploadFile({ cloudPath, filePath: compressed })
      const result = await callGradeExam({ fileID: upload.fileID })

      wx.hideLoading()
      const recordId = result.recordId || ''
      const data = encodeURIComponent(JSON.stringify(result.data))
      wx.redirectTo({
        url: `/pages/result/result?recordId=${recordId}&data=${data}`,
      })
    } catch (err) {
      wx.hideLoading()
      console.error('grade failed:', err)
      wx.showModal({
        title: '批阅失败',
        content: err.message || '请重试或换张更清晰的照片',
        showCancel: false,
      })
      this.setData({ uploading: false })
    }
  },
})
