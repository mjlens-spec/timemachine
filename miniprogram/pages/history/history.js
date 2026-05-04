const db = wx.cloud.database()

Page({
  data: {
    records: [],
    loading: true,
  },

  onShow() {
    this.loadRecords()
  },

  async loadRecords() {
    this.setData({ loading: true })
    try {
      const res = await db
        .collection('grading_records')
        .orderBy('createdAt', 'desc')
        .limit(20)
        .get()
      this.setData({ records: res.data, loading: false })
    } catch (e) {
      console.error('load history failed', e)
      this.setData({ loading: false })
    }
  },

  onTap(e) {
    const idx = e.currentTarget.dataset.idx
    const record = this.data.records[idx]
    const data = encodeURIComponent(JSON.stringify(record.result))
    wx.navigateTo({
      url: `/pages/result/result?recordId=${record._id}&data=${data}`,
    })
  },
})
