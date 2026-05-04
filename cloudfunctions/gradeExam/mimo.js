const { SYSTEM_PROMPT } = require('./prompt.js')

const ENDPOINT = 'https://api.xiaomimimo.com/v1/chat/completions'
const MODEL = 'mimo-v2-omni'

async function gradeImage({ base64, mimeType }) {
  const apiKey = process.env.MIMO_API_KEY
  if (!apiKey) {
    throw new Error('MIMO_API_KEY 未配置：在云开发控制台 → 云函数 → gradeExam → 配置中加上')
  }

  const body = {
    model: MODEL,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      {
        role: 'user',
        content: [
          { type: 'text', text: '请批阅这张考卷，按规定的 JSON 结构输出。' },
          {
            type: 'image_url',
            image_url: { url: `data:${mimeType};base64,${base64}` },
          },
        ],
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.1,
  }

  const resp = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  })

  if (!resp.ok) {
    const text = await resp.text()
    throw new Error(`MiMo API ${resp.status}: ${text.slice(0, 300)}`)
  }

  const data = await resp.json()
  const content = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
  if (!content) throw new Error('MiMo 返回内容为空')

  let parsed
  try {
    parsed = JSON.parse(content)
  } catch (e) {
    throw new Error(`MiMo 返回的不是合法 JSON: ${content.slice(0, 200)}`)
  }

  validateSchema(parsed)
  return parsed
}

function validateSchema(o) {
  if (!o || typeof o !== 'object') throw new Error('schema: 顶层不是对象')
  if (!Array.isArray(o.questions)) throw new Error('schema: questions 不是数组')
  if (!o.summary || typeof o.summary.total !== 'number') {
    throw new Error('schema: summary.total 缺失')
  }
}

module.exports = { gradeImage }
