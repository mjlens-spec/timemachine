# AGENTS.md · 时间机器 timemachine

> 这个文件是给任意编码 agent（Codex、Claude Code、Cursor 等）读的入口。Codex 会自动读取根目录的 AGENTS.md。它告诉你这个仓库是什么、怎么按方法论跑。
> 项目说明：中文见 [README-CN.md](README-CN.md)，English see [README.md](README.md)。

## 这是什么

一台**引导式营销方法论程序**——不是交付引擎。它带使用者从 brief 走到反直觉打法，重点是**引导用户自己形成判断**，而不是直接替他产出成品。底层逻辑是**量化悖论**：优秀做法会 alpha 衰减成失效的 beta，所以要找空位、做同行还没据此行动的反直觉差异化。

## 怎么跑（任意 agent 通用）

canonical 编排在 `.claude/skills/timemachine/SKILL.md`，深水区在 `.claude/skills/timemachine/references/*.md`，工件骨架在 `.claude/skills/timemachine/templates/*.md`。**按 SKILL.md 的阶段 0–6 顺序走，用到哪个 reference 读哪个（渐进式披露），每阶段产出对应工件到 `projects/<客户拼音>-<日期>/`。**

七个阶段：
0. 立项 ⚙️
1. 研判与定位 🧭（只下「找差异化空位」的立场）
2. 竞品研究与 Brief（并行前置）🛠 —— 多路全网研究 + 生成 Brief，汇总成研究综述
3. 反直觉洞察 · 共创 🤝（四个洞察切入点：张力 / 假设反转 / JTBD / 文化位移）
4. 激荡与推演 🧭
5. 具体测算 🛠（触达成本 / 人群种草 / 预算分配，不做 GMV/ROI）
6. 持久化与同步 ⚙️

## 关键纪律

- **研究先行、洞察后置**：先把竞品研究和 Brief 跑出来、汇总，再谈洞察切入点候选（阶段 3）。阶段 1 只下立场，不空想。
- **人机契约**：🧭 引导段（阶段 1、4）**先问后给**，把判断逼给用户；🛠 产出段（阶段 2、5）agent 重干活；🤝 共创段（阶段 3）发散多候选 + 自我反驳，用户 keep/kill/combine。引导段不要替用户铺满答案。
- 每条断言带（来源·级别 S/A1/A2/B/C）；客户一手 S 级原始数据进 `projects/<...>/_raw/`，已 `.gitignore`，不入库。
- 推送到 GitHub 前先把要提交的文件列给用户确认。

## 工具兼容性（Codex / Claude Code 差异）

| 能力 | Claude Code | Codex / 其他 agent |
|---|---|---|
| 阶段 2 多子 agent 全网研究 | 用 `Agent`（subagent_type `Explore`/`general-purpose`）并行 fan-out | 没有子代理工具时，**自己分多轮检索**完成同样的 fan-out（品类趋势 / 竞品公开动作 / 文化位移 / 人群讨论各跑一路），结果汇进 `03-research-synthesis.md` |
| 平台后台 / Notion 数据 | 走对应 MCP 或请用户粘贴 | 取不到这类 Claude 专有源时，**请用户粘贴**指定数据切片，当场打级别 |
| 启动方式 | `/timemachine <客户> <campaign>` | 直接读本文件 + `SKILL.md`，按阶段执行 |

文档与模板都是纯 Markdown，与具体工具无关，任何 agent 都能读、都能照着跑。
