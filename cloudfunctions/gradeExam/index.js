const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

const { gradeImage } = require('./mimo.js')

const db = cloud.database()
const COLLECTION = 'grading_records'

exports.main = async (event) => {
  const { OPENID } = cloud.getWXContext()
  const { fileID } = event

  if (!fileID) return { ok: false, error: 'fileID 不能为空' }

  try {
    const file = await cloud.downloadFile({ fileID })
    const base64 = file.fileContent.toString('base64')
    const mimeType = guessMime(fileID)

    const result = await gradeWithRetry({ base64, mimeType })

    const record = await db.collection(COLLECTION).add({
      data: {
        _openid: OPENID,
        fileID,
        result,
        model: 'mimo-v2-omni',
        createdAt: db.serverDate(),
      },
    })

    return { ok: true, recordId: record._id, data: result }
  } catch (err) {
    console.error('gradeExam error:', err)
    return { ok: false, error: err.message || String(err) }
  }
}

async function gradeWithRetry(args, attempts = 2) {
  let lastErr
  for (let i = 0; i < attempts; i++) {
    try {
      return await gradeImage(args)
    } catch (e) {
      lastErr = e
      console.warn(`gradeImage attempt ${i + 1} failed:`, e.message)
    }
  }
  throw lastErr
}

function guessMime(fileID) {
  const lower = fileID.toLowerCase()
  if (lower.endsWith('.png')) return 'image/png'
  if (lower.endsWith('.webp')) return 'image/webp'
  return 'image/jpeg'
}
