function callGradeExam({ fileID }) {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name: 'gradeExam',
      data: { fileID },
      success: (res) => {
        if (res.result && res.result.ok) {
          resolve(res.result)
        } else {
          const msg = (res.result && res.result.error) || '调用失败'
          reject(new Error(msg))
        }
      },
      fail: (err) => reject(new Error(err.errMsg || '云函数调用失败')),
    })
  })
}

module.exports = { callGradeExam }
