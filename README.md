# timemachine · 时间机器

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
【时间机器】研判定位 → Brief 解码 → 研究综述 → 反直觉洞察 → 激荡推演 → 数据测算   ← 本 skill
   │
   ▼
[成稿 / 提案 / PPT / 演讲稿]                                        ← 现有「AI 营销方案工作流 SOP」STEP 9–13
```

时间机器从研判定位一路走到数据测算，**不重做全量数据采集，也不写 PPT / 演讲稿**。它的产出（`05-tactical-deduction.md` 的「STEP 9 交接块」+ `06-calculation.md` 的测算）直接喂给现有 SOP 的成稿生产。

## 八个阶段（每段标人机模式）

| 阶段 | 名称 | 模式 | 工件 |
|---|---|---|---|
| 0 | 立项 | ⚙️ 执行 | `README.md` |
| 1 | 研判与定位 | 🧭 引导 | `00-positioning.md` |
| 2 | Brief 解码 + 数据营销 Brief | ⚙️ 执行 | `01-brief-decode.md`、`02-data-marketing-brief.md` |
| 3 | 研究综述（多 Subagent fan-out） | 🛠 产出 | `03-research-synthesis.md` |
| 4 | 反直觉洞察 · 共创（四把刀） | 🤝 共创 | `04-insight-canvas.md` |
| 5 | 激荡与推演 | 🧭 引导 | `05-tactical-deduction.md` |
| 6 | 具体测算 | 🛠 产出 | `06-calculation.md` |
| 7 | 持久化与同步 | ⚙️ 执行 | 更新 `README.md` + git |

🧭 引导段（阶段 1、5）AI 先问后给，把判断逼给你；🛠 产出段（阶段 3、6）AI 重干活。这条分工线就是「引导成长」和「得到结果」并存的关键。

## 怎么用

```
/timemachine 羽感 大声唱
/timemachine 奇正 疼痛人群 双11
/timemachine <粘贴一段 brief 或一个 Notion 链接>
```

skill 会带你走八个阶段。详见 `.claude/skills/timemachine/SKILL.md`；方法论脊柱见 `.claude/skills/timemachine/references/methodology.md`。

## 数据纪律

- 结构化工件入库；客户一手 S 级原始数据放 `projects/<...>/_raw/`，已被 `.gitignore` 排除，**不入库**。
- 推送到 GitHub 前**一定先把要提交的文件列给你确认**。

## 想全局可用？

默认它是本仓库的项目级 skill。若想在任何目录都能用，可软链到个人 skills：

```bash
ln -s "$(pwd)/.claude/skills/timemachine" ~/.claude/skills/timemachine
```
