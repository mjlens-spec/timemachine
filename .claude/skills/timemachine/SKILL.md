---
name: 时间机器 timemachine
description: >-
  引导式营销方法论程序（不是交付引擎）。用一条固定路径，带使用者从 brief 走过「研判定位 → 竞品研究与 Brief（并行前置）→ 反直觉洞察 → 战术推演 → 数据测算」，
  在过程里逼出他自己的判断、沉淀方法，顺带得到结果。底层逻辑是量化悖论：优秀做法会 alpha 衰减，所以要研判格局、找空位、做反直觉的差异化。
  关键纪律：先把研究和 Brief 跑出来、汇总，再讨论洞察切入点候选，不空想。研判与推演阶段以提问引导用户判断，研究与测算阶段 AI 重产出。
  每个项目结构化写入 projects/<client>-<date>/，按确认直推 GitHub main。
  当用户说「做洞察 / timemachine / 时间机器 / 接到 brief 怎么破题 / 帮我想营销打法」时使用。
when_to_use: >-
  收到营销 brief 或营销命题，想用固定方法论从研判定位、竞品研究、反直觉洞察、战术推演一路走到数据测算，
  并希望 AI 引导你自己做判断、而不是直接替你产出一份成品时。不用于纯数据采集，也不用于 PPT / 演讲稿生产。
argument-hint: "<客户名> <campaign/场景，或粘贴 brief / Notion 链接>"
disable-model-invocation: true
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
  - Agent
  - WebSearch
  - WebFetch
  - "Bash(git*)"
  - "Bash(date*)"
  - "Bash(mkdir*)"
  - mcp__Notion__notion-search
  - mcp__Notion__notion-fetch
  - mcp__Notion__notion-create-pages
  - mcp__github__push_files
---

# 时间机器 · timemachine

一台**引导式营销方法论程序**。它不替你产出结论，用一条固定路径带你从 brief 走到反直觉的打法，让判断在你脑子里长出来，并把它沉淀成你的方法。

## 是什么 / 不是什么

- **它是什么**：一套把「我在工作里常用的思考逻辑」固化下来的工作流。你走一遍，既得到结果，也练了一遍方法。
- **它不是什么**：不是 plan-then-do 的交付引擎。它**不会**在你还没思考时就把整套答案铺给你。研究和测算 AI 重干活，但**研判定位和激荡推演这两段，AI 先问后给，把判断逼回给你**。
- **非目标（不做）**：不重做全量数据采集（吃数据同事回传的）；不写 deck / PPT / 逐页稿 / 演讲稿。产出到「测算」为止，成稿交给现有 SOP STEP 9–13。

## 方法论脊柱（始终在上下文）

> 完整读 `references/methodology.md`（阶段 1 必读）。这里是一句话版本。

**量化悖论**：一个打法被验证、跑出、被同行看懂后就会泛化，从 alpha 衰减成人人能用因而失效的 beta。所以在激烈竞争的品类里「参考优秀做法」是结构性买在高点。差异化不是风格选择，是套利窗口还没关上时唯一理性的动作。**所以全程的动作是：研判格局 → 找空位 → 做同行还没据此行动的反直觉判断。**

## 一条关键纪律：研究先行，洞察后置

**先把竞品研究和 Brief 跑出来、汇总，再讨论洞察切入点候选。** 阶段 1 只下「找差异化空位」的立场，不在空想阶段就锁定具体切入点；具体的洞察切入点候选必须长在阶段 2 的研究汇总之上（阶段 3 才谈）。这样洞察是从证据里逼出来的，不是拍脑袋。

## 人机契约（每阶段头会标模式）

| 模式 | 谁主导 | AI 干什么 |
|---|---|---|
| 🧭 引导 | 你 | 先问后给。抛问题/坐标/选项，逼你判断，不替你下关键结论。 |
| 🛠 产出 | AI | 重干活（研究、测算），你审。 |
| 🤝 共创 | 你+AI | 发散多候选 + 自我反驳，你 keep/kill/combine。 |
| ⚙️ 执行 | AI | 建目录、落盘、提交。 |

**铁律**：在 🧭 引导段（阶段 1、阶段 4），AI 不许大段替用户下结论。一旦开始替用户铺满答案，就是滑回了交付引擎，纠正回来。

## 在整套作业里的位置

```
客户 brief →【时间机器：研判定位 → 竞品研究与 Brief（并行）→ 反直觉洞察 → 激荡推演 → 数据测算】→ [成稿/PPT/演讲：SOP STEP 9–13]
```
`05-tactical-deduction.md` 里的「STEP 9 交接块」可直接粘进现有 SOP STEP 9 的 Claude 主脑 prompt。

## 兼容性（Claude Code / Codex）

本 skill 内容是纯 Markdown，**Claude Code 与 Codex 双兼容**。Claude Code 里 `/timemachine` 原生启动、阶段 2 用 `Agent` 子代理并行研究；Codex 等读根目录 `AGENTS.md` 入口、按同一套阶段执行，没有子代理工具时阶段 2 自己分多轮检索完成 fan-out，平台后台/Notion 取不到时请用户粘贴。详见根目录 `AGENTS.md` / `README.md`。

## 怎么读这份 skill

SKILL.md 是**编排器**，只给骨架；深水区在 `references/`，**用到哪个读哪个**（渐进式披露）：
- `references/methodology.md` — 量化悖论 + 研判定位 + 洞察先行 + 人机契约（阶段 1 必读）
- `references/research-playbook.md` — 多 Subagent fan-out + 平台数据取数（阶段 2 必读）
- `references/insight-engine.md` — 四个洞察切入点 + A→D 共创 + 反驳（阶段 3 必读）
- `references/counter-intuition-bar.md` — 六点反直觉标尺 + 反模式
- `references/tactical-deduction.md` — 多 Option 激荡 + 选向推演（阶段 4）
- `references/calculation.md` — 触达成本 / 人群种草 / 预算分配 三块测算（阶段 5）
- `references/evidence-grading.md` — S/A1/A2/B/C 证据分级
- `references/insight-library.md` — 你的句式/口吻 + 范例
- `references/persistence.md` — 提交/推送/Notion 回写
- `templates/*.md` — 各阶段工件骨架，复制进 `projects/<...>/` 填写

---

## 启动

> 今天：!`date +%Y%m%d`

读 `$ARGUMENTS`（可能是「客户名 + campaign」、一段 brief、或一个 Notion 链接），进入阶段 0。
全程语言跟随用户（默认中文）。语气：直接、procedural；引导段多问、产出段多干，随时让用户调整节奏。

---

## 阶段 0 · 立项 ⚙️ 执行（1 轮）

- **做**：① 从 `$ARGUMENTS` 解析客户 + campaign，信息不全**一次性批量问**（客户 / campaign / 截止时间 / 主平台）。② 客户名转拼音 slug + 今天日期 → 目录 `projects/<slug>-<YYYYMMDD>/`，向用户确认路径。③ 探测是否已有 Research Brief → 研究模式 `INGEST`（有）/`LEAN`（无）。④ 用 `templates/project-readme.md` 建 `README.md`（状态=立项）。
- **产出**：项目文件夹 + `README.md`。

## 阶段 1 · 研判与定位 🧭 引导　★立场，不锁结论

> 必读 `references/methodology.md`。这一段 AI **先问后给**，把判断逼给用户。

- **做**：① 扫描竞品 + 平台核心 Message（建坐标系，不是抄）。② 用品类定位框架定位本品角色 + 找**可占领的空位**。③ **洞察先行（立场）**：当场拦住「照搬优秀做法」的本能，记下「我们差点想照搬的优秀做法 + 它衰减到哪了 + 反面/盲区」，下一个「要去占差异化空位」的立场。
- **不在这里做**：不锁定具体的洞察切入点候选——那要等阶段 2 研究汇总后，在阶段 3 才谈，避免空想。
- **产出**：`00-positioning.md`（用 `templates/positioning-map.md`）。

## 阶段 2 · 竞品研究与 Brief（前置·并行）🛠 产出 + ⚙️ 执行　★调整后的核心

> 必读 `references/research-playbook.md`。**这一段是先研究、后洞察的关键：两件事并行跑，汇总完才进阶段 3。**

- **做（两路并行）**：
  - **① 多子 agent 全网搜索 + 数据回传**：派**多个 `Agent`**（subagent_type `Explore` / `general-purpose`）各查一路并行跑——品类趋势 / 竞品公开动作 / 文化-情境位移 / 人群讨论；平台后台数据 Claude 登不了 → 走 ② 的数据营销 Brief 请数据同事回传，或用粘贴模板请用户粘，当场打级别、原始件落 `_raw/`。
  - **② 同时生成 Brief**：`templates/brief-decode.md`（Brief 解码：信息审查 / 补充问题 🔴🟡🟢 / 客户数据索取 / 品类常识清单 / 初步张力假设）+ `templates/data-marketing-brief.md`（给数据同事的定向取数单，按阶段 1 的空位取数，不要全量）。
  - **③ 汇总**：把多子 agent 结果 + 数据回传汇进 `03-research-synthesis.md`（§0 综述摘要 + 九段 + §10 异常清单）。§8 风险反证、§10 异常清单**必须非空**。
- **产出**：`01-brief-decode.md` + `02-data-marketing-brief.md` + `03-research-synthesis.md`。
- **闸门**：汇总完成、§10 异常清单非空，才进阶段 3。

## 阶段 3 · 反直觉洞察 · 共创 🤝 共创　★核心（基于阶段 2 的研究汇总）

> 完整玩法读 `references/insight-engine.md`。**现在才讨论洞察切入点候选**，输入素材＝`03 §10` 异常清单 + `00`/`01` 常识与洞察先行立场。

- **四个洞察切入点逐个来**：① 张力/矛盾 → ② 假设反转 → ③ JTBD → ④ 文化位移。Round A 发散（每个切入点 3–5 候选，问「哪条让你意外、想停一下？哪条是废话？」）→ Round B 收敛 → Round C 反驳（三个具名反方，可派子 agent）→ Round D 定稿，过六点标尺，不过退回最弱维重逼，**绝不降标尺**。
- **产出**：`04-insight-canvas.md`（用 `templates/insight-canvas.md`）。逼不出真反直觉就老实标注「这是顺的」，不硬编。

## 阶段 4 · 激荡与推演 🧭 引导

> 玩法见 `references/tactical-deduction.md`。AI **先问后给**。

- **做**：① 从锚点洞察长出 3–5 个战术 Option（每个回扣洞察），问「哪个你最想打？哪个是凑数？为什么？」。② 用户选 1–2 个方向 → 往下推演（内容线/达人/节奏/平台分工/差异化保护）。③ 收成一句策略主张 + STEP 9 交接块。
- **产出**：`05-tactical-deduction.md`（用 `templates/tactical-deduction.md`）。

## 阶段 5 · 具体测算 🛠 产出

> 口径与纪律见 `references/calculation.md`。

- **做**：三块测算——A 触达与成本（CPM/CPE/曝光/达人触达）、B 人群与种草（5A/A3 规模、转化漏斗）、C 预算分配（达人/信息流/搜索 配比 + 节奏）。**每个数字带 `【假设】` 或 `（来源·级别）`；纯 C 级标「示意」。不做 GMV/ROI。**
- **产出**：`06-calculation.md`（用 `templates/calculation.md`）。

## 阶段 6 · 持久化与同步 ⚙️ 执行（**推送前列清单确认**）

> 细节见 `references/persistence.md`。
- 更新 `README.md`（状态=已收尾、锚点洞察一句话、证据小结）。
- `git add projects/<slug>-<YYYYMMDD>`（+ 首次的 `.claude` / `README.md` / `.gitignore`）。**确认 `_raw/` 没被带入**。
- commit：`时间机器(<客户>): <campaign> 洞察 <YYYYMMDD>`（正文带洞察一句话）。
- **推送前把要提交的文件列给用户确认**，确认后直推 `origin main`（失败按 2/4/8/16s 退避重试 4 次）。
- 可选 Notion 回写（默认每次问 opt-in）。一句话报告：洞察是什么、工件在哪、是否已推送/回写。

---

## 六点反直觉标尺（阶段 3 用，始终在上下文）

候选要过关成锚点：**≥4 个 YES，且 ①④ 必须 YES**。详见 `references/counter-intuition-bar.md`。

1. **反对性** ★ — 有能力的同行/竞品会反对吗？（人人点头 = 顺的，退回）
2. **违背品类常识** — 推翻了 `00`/`01` 清单哪条？指明。
3. **解释矛盾** — 解释了 `03 §10` 哪条异常？（不只是复述现象）
4. **Aha** ★ — 会让人「意外、想停一下」？能一句话复述并记住？
5. **可转化为差异化策略** — 能长出别人没在做的动作？
6. **证据支撑** — 核心断言 ≥B 级？（纯 C 级 → 标「待验证」，不可作锚点）

**反模式（命中即顺，退回）**：KPI 复述 / 通用最佳实践 / 真但普世 / 功能罗列。

## 纪律

- 研究先行、洞察后置：阶段 1 只下立场，切入点候选等阶段 2 研究汇总后在阶段 3 谈。
- 引导段（阶段 1、4）AI 先问后给，不替用户下关键结论。
- 每条断言带 `（来源·级别）`；测算每个数字带级别或假设。
- 一个切入点只攻一个切口；锚点原则上一个项目一个，runner-up 留在候选清单。
- 客户 S 级原始数据进 `_raw/`，不入库；推送前必列清单确认。
