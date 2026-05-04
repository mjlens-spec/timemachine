# 考卷批阅小程序 (timemachine)

通过微信小程序拍照，调用小米 MiMo-V2-Omni 多模态大模型自动批阅
小学/初中考卷的选择题和填空题。

## 架构

- **前端**：原生小程序（WXML / WXSS / JS）
- **后端**：微信云开发（云函数 + 云存储 + 云数据库）
- **AI**：小米 MiMo-V2-Omni（OpenAI 兼容 API，端点 `https://api.xiaomimimo.com/v1`）

```
小程序 → 云存储 → 云函数 gradeExam → MiMo-V2-Omni → JSON 结果 → 云数据库 + 返回前端
```

## 项目结构

```
miniprogram/
  app.js / app.json / app.wxss
  pages/
    index/                 # 首页
    capture/               # 拍照上传
    result/                # 批阅结果
    history/               # 历史记录
  components/
    question-card/         # 题目卡片组件
  utils/
    cloud.js / image.js
cloudfunctions/
  gradeExam/
    index.js               # 入口：下载图 → 调 MiMo → 入库
    mimo.js                # MiMo OpenAI 兼容客户端
    prompt.js              # System Prompt + JSON Schema
    package.json
project.config.json
```

## 一次性环境准备

### 1. 注册小程序账号 + 拿 AppID

1. 打开 https://mp.weixin.qq.com/ → 「立即注册」→ 选「小程序」
2. 主体类型选「个人」（免费、不需要营业执照）
3. 完成邮箱激活、信息登记、人脸识别
4. 后台 →「开发管理」→「开发设置」→ 复制 **AppID**

### 2. 安装微信开发者工具

下载稳定版：
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

### 3. 开通云开发并创建环境

1. 用开发者工具打开本项目
2. 上方点「云开发」按钮 → 开通服务
3. 创建环境，选「按量付费 - 基础版」即可（免费额度足够开发期）
4. 复制 **环境 ID（envId）**，形如 `prod-1g0xxxxxxxxx`

### 4. 申请小米 MiMo API Key

1. 打开 https://platform.xiaomimimo.com/ 注册
2. 4/28-5/28 期间可领 100T Token 免费活动配额
3. 控制台 →「API Keys」→ 创建 → 复制保存

### 5. 替换两个占位符

仓库中所有占位符均以 `TOUCH_ME_REPLACE_*` 开头，方便全局搜索：

- `project.config.json` 的 `appid` → 你的 AppID
- `miniprogram/app.js` 的 `wx.cloud.init({ env })` → 你的 envId

### 6. 部署云函数 + 配置环境变量

1. 在开发者工具中右键 `cloudfunctions/gradeExam` →「**上传并部署：云端安装依赖**」
2. 云开发控制台 → 云函数 → `gradeExam` → 配置：
   - **环境变量**：`MIMO_API_KEY` = 你的 MiMo Key
   - **运行环境**：Node.js 18+
   - **超时时间**：60 秒（已在 `config.json` 设好）

### 7. 创建数据库集合

云开发控制台 → 数据库 →「新建集合」`grading_records`，权限选「**仅创建者可读写**」。

## 开发调试

- 在开发者工具中点「编译」预览
- 拍考卷照片 → 上传 → 等待批阅（首次冷启动约 10–20s，之后 5–10s）
- 云函数日志：云开发控制台 → 云函数 → `gradeExam` → 日志

## MVP 范围

- ✅ 选择题 / 填空题对错判定
- ✅ 显示正确答案
- ✅ 历史记录
- ❌ 错题讲解、解题步骤
- ❌ 错题本 / 同类题推荐
- ❌ 多张图合并批阅

## 开发分支

`claude/exam-grading-miniapp-xTSyL`
