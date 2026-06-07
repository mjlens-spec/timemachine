# timemachine · 时间机器

> [English](README.md) ｜ **中文** ｜ Codex / Claude Code 双兼容

一台**引导式营销方法论程序**。它不是替你产出结论的交付引擎，而是用一条固定路径，带你从 brief 走到反直觉的打法，让判断在你脑子里长出来，并沉淀成你自己的方法。

底层逻辑是**量化悖论**：优秀做法会 alpha 衰减成人人能用因而失效的 beta，所以要研判格局、找空位、做同行还没据此行动的反直觉差异化。

本仓库有两个身份：

1. **Skill 本体**：`.claude/skills/timemachine/` 是一个 Claude Code skill。在本仓库里输入 `/timemachine <客户名> <campaign / 或粘贴 brief>` 即可启动。
2. **项目存档库**：每次作业的工件结构化写入 `projects/<客户拼音>-<日期>/`，随 git 版本管理。

## 它在整套作业里的位置

```
客户 brief
   │
   ▼
【时间机器】研判定位 → 竞品研究与 Brief（并行）→ 反直觉洞察 → 激荡推演 → 数据测算   ← 本 skill
   │
   ▼
[成稿 / 提案 / PPT / 演讲稿]                                          ← 现有「AI 营销方案工作流 SOP」STEP 9–13
```

时间机器从研判定位一路走到数据测算，**不重做全量数据采集，也不写 PPT / 演讲稿**。它的产出（`05-tactical-deduction.md` 的「STEP 9 交接块」+ `06-calculation.md` 的测算）直接喂给现有 SOP 的成稿生产。

## 一条关键纪律：研究先行，洞察后置

先把竞品研究和 Brief 跑出来、汇总，再讨论洞察切入点候选。阶段 1 只下「找差异化空位」的立场，**不在空想阶段锁定具体切入点**；切入点候选必须长在阶段 2 的研究汇总之上（阶段 3 才谈）。

## 七个阶段（每段标人机模式）

| 阶段 | 名称 | 模式 | 工件 |
|---|---|---|---|
| 0 | 立项 | ⚙️ 执行 | `README.md` |
| 1 | 研判与定位（只下立场） | 🧭 引导 | `00-positioning.md` |
| 2 | 竞品研究与 Brief（并行前置） | 🛠 产出 + ⚙️ | `01-brief-decode.md`、`02-data-marketing-brief.md`、`03-research-synthesis.md` |
| 3 | 反直觉洞察 · 共创（四个切入点） | 🤝 共创 | `04-insight-canvas.md` |
| 4 | 激荡与推演 | 🧭 引导 | `05-tactical-deduction.md` |
| 5 | 具体测算 | 🛠 产出 | `06-calculation.md` |
| 6 | 持久化与同步 | ⚙️ 执行 | 更新 `README.md` + git |

**阶段 2 是核心调整点**：多个子 agent 并行做全网研究、同时生成 Brief，汇总成研究综述之后，才进阶段 3 讨论洞察切入点。🧭 引导段（阶段 1、4）AI 先问后给，把判断逼给你；🛠 产出段（阶段 2、5）AI 重干活。

## 怎么用

```
/timemachine 羽感 大声唱
/timemachine 奇正 疼痛人群 双11
/timemachine <粘贴一段 brief 或一个 Notion 链接>
```

skill 会带你走七个阶段。详见 `.claude/skills/timemachine/SKILL.md`；方法论脊柱见 `.claude/skills/timemachine/references/methodology.md`。

## 在 Codex / Claude Code 里用（双兼容）

方法论本体是 `.claude/skills/timemachine/` 下的纯 Markdown（`SKILL.md` + `references/` + `templates/`），任何编码 agent 都能读。

- **Claude Code**：原生 skill，输入 `/timemachine <客户> <campaign>` 启动；阶段 2 用 `Agent` 子代理并行做全网研究。
- **Codex / 其他 agent**：仓库根目录的 [`AGENTS.md`](AGENTS.md) 是入口，Codex 会自动读取，并指向同一套 `SKILL.md` 阶段与 reference。没有子代理工具时，阶段 2 的「多子 agent fan-out」就自己分多轮检索完成；Notion / 平台后台等 Claude 专有数据取不到时，改为请用户粘贴。

## 数据纪律

- 结构化工件入库；客户一手 S 级原始数据放 `projects/<...>/_raw/`，已被 `.gitignore` 排除，**不入库**。
- 推送到 GitHub 前**一定先把要提交的文件列给你确认**。

## 想全局可用？

默认它是本仓库的项目级 skill。若想在任何目录都能用，可软链到个人 skills：

```bash
ln -s "$(pwd)/.claude/skills/timemachine" ~/.claude/skills/timemachine
```
