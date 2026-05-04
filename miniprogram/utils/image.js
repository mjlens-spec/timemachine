function compressImage(filePath, opts = {}) {
  const quality = opts.quality || 80
  return new Promise((resolve) => {
    wx.compressImage({
      src: filePath,
      quality,
      success: (res) => resolve(res.tempFilePath),
      fail: () => resolve(filePath),
    })
  })
}

module.exports = { compressImage }
