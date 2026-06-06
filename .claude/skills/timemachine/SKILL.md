---
name: 时间机器 timemachine
description: >-
  反直觉洞察引擎。在「研究→主文稿」之间：自动做洞察导向研究，再与用户共创一个反常识/反直觉的锚点洞察
  （张力捕捉·假设反转·真实动机JTBD·文化位移），产出可直接喂给营销方案 SOP STEP 9 的「策略依据」。
  每个项目结构化写入 projects/<client>-<date>/ 并按确认提交 GitHub。仅做前端洞察，不做 PPT/演讲稿。
  当用户说「做洞察 / timemachine / 时间机器 / 我要一个反直觉的洞察 / 接到 brief 怎么破题」时使用。
when_to_use: >-
  收到 brief 或已有 research brief，需要在进入方案主文稿前逼出一个能成为整盘策略锚点的反直觉洞察时。
  不用于数据采集本身，也不用于 PPT / 演讲稿生产。
argument-hint: "<客户名> <campaign/场景，或粘贴 brief / Notion 链接>"
disable-model-invocation: true
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
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

一台**反直觉洞察引擎**。带用户从 brief 走到一个**反常识、能成为整盘策略锚点**的洞察。

## 是什么 / 不是什么

- **它存在的理由**：现有 SOP 里"洞察"是研究的副产品——Research Brief 末尾的"初步策略机会点"、案例复盘里的"哪些动作最有效"，都是**顺的**（人人半信、顺数据滑出来）。时间机器专门造那个**逆的**——会被有能力的同行反对、能解释数据里某个矛盾、让人"咯噔一下"的判断。
- **研究回答"什么是真的"；时间机器回答"什么是真的、但别人还没据此行动"。**
- **非目标（不要做）**：不重做全量数据采集；不写 deck / PPT / 逐页稿 / 演讲稿。产出到"策略依据"为止，交给现有 SOP 的主文稿生产。

## 在整套作业里的位置

```
客户 brief → [研究/Research Brief：SOP STEP 1–8] → 【时间机器】→ 策略依据 → [主文稿/PPT/演讲：SOP STEP 9–13]
```
时间机器的产出 `04-strategy-basis.md` 里的"STEP 9 交接块"可直接粘进现有 SOP STEP 9 的 Claude 主脑 prompt。

## 怎么读这份 skill

SKILL.md 是**编排器**，只给骨架；每阶段的深水区在 `references/`，**用到哪个读哪个**（渐进式披露）：
- `references/insight-engine.md` — 四把刀 + A→D 共创回合 + 反驳（阶段 3 必读）
- `references/counter-intuition-bar.md` — 六点反直觉标尺 + 反模式 + 打分实例
- `references/insight-library.md` — 你的句式/口吻 + 范例（奇正/羽感待补）
- `references/evidence-grading.md` — S/A1/A2/B/C 证据分级
- `references/research-playbook.md` — INGEST/LEAN 模式 + 平台数据粘贴模板
- `references/persistence.md` — 提交/推送/Notion 回写
- `templates/*.md` — 各阶段工件骨架，复制进 `projects/<...>/` 填写

---

## 启动

> 今天：!`date +%Y%m%d`

读 `$ARGUMENTS`（可能是"客户名 + campaign"、一段 brief、或一个 Notion 链接）。然后进入阶段 0。
全程语言跟随用户（默认中文）。语气：直接、procedural，不推销流程，随时让用户调整节奏。

---

## 阶段 0 · 立项（AI 主导，1 轮）

- **目标**：建项目文件夹 + 运行头，判定研究模式。
- **做**：
  1. 从 `$ARGUMENTS` 解析客户 + campaign。信息不全就**一次性批量问**（客户名 / campaign 或场景 / 截止时间 / 主平台 抖音·小红书·双平台）。
  2. 客户名转拼音 slug，配合今天日期 → 目录 `projects/<slug>-<YYYYMMDD>/`。向用户确认路径。
  3. 探测是否已有 Research Brief（Notion 链接或用户会粘）→ 置研究模式 `INGEST`（有）/ `LEAN`（无）。
  4. 用 `templates/project-readme.md` 建 `projects/<slug>-<YYYYMMDD>/README.md`（状态=立项）。
- **产出**：项目文件夹 + `README.md`。

## 阶段 1 · Brief 解码 + 反直觉立题（AI 起草，用户改）

- **目标**：解码 brief，并把每条需求/假设翻成"什么是大家都信、但可能错的？"
- **做**：用 `templates/brief-decode.md` 里的拆解 prompt 跑出：信息完整性审查 / 补充问题清单(🔴🟡🟢) / 客户数据索取清单（争取 S 级）。**再加时间机器两项**：『品类常识清单(待挑战)』+ 『初步张力假设』——这是后面假设反转、张力捕捉两把刀的弹药。
- **产出**：`01-brief-decode.md`。

## 阶段 2 · 自动洞察研究（AI 重，按需向用户要数据）

- **目标**：凑齐四把刀的弹药——**以矛盾/异常为先**，不是再做一遍全量采集。
- **做**（细节见 `references/research-playbook.md`）：
  - `INGEST`：吃掉已有 Research Brief，映射到四把刀，只对阶段 1 的矛盾点定向补搜。
  - `LEAN`：WebSearch/WebFetch 取 C 级（品类趋势/文化位移/竞品公开动作/"为什么 X 却 Y"）；Notion MCP 搜项目知识库取近似案例；A1/A2/B 平台数据 **Claude 登不了 → 用粘贴模板请用户粘**，当场打级别、原始件落 `_raw/`（不入库）。
  - 全部汇入 `templates/research-brief.md` 的九段 + **§10 矛盾与异常清单**。§8 风险与反证、§10 异常清单**必须非空**。
- **产出**：`02-research-brief.md`。

## 阶段 3 · 洞察引擎 · 共创（真·人机共创，逐回合）★核心

> 完整玩法读 `references/insight-engine.md`。这里是骨架。弹药＝`02 §10` 异常清单 + `01` 品类常识清单。

**四把刀，逐刀来**：① 张力/矛盾 → ② 假设反转 → ③ 真实动机/JTBD → ④ 文化/情境位移。

- **Round A 发散**：每把刀给 3–5 条编号候选（带 来源·级别）。每刀后问用户：**"哪条让你『咯噔一下』？哪条是废话？为什么？"** 把走向学下来带到下一刀。
- **Round B 收敛**：跨刀综合成 2–3 个成形候选（一句话 + 两行"为何成立/解释了什么矛盾"）。
- **Round C 反驳**（对自己的洞察）：分别扮演三个具名反方，给**具体**反制——🥊竞品负责人 / 🧑‍💼客户负责人 / 🔬数据审查官；诚实判定每条 存活/需重构/阵亡。（要更狠可派子 agent 当反方。）
- **Round D 定稿**：用户选/并/改 → 重写赢家 → 过下面的六点标尺。**不过就退回 Round A 在最弱维重逼，绝不降标尺。**
- **产出**：`03-insight-canvas.md`（用 `templates/insight-canvas.md`）。
- **逼不出真反直觉时**：老实说，给最强"顺洞察"并明确标注"这是顺的"，建议补研究——**不要硬编假反直觉。**

## 阶段 4 · 策略依据（AI 起草，用户批）

- **目标**：把锚点洞察转成策略依据 + 可粘进 SOP STEP 9 的交接块。
- **做**：用 `templates/strategy-basis.md` → 一句话策略主张 + 2–3 个回溯到洞察的策略方向 + "因此提案应主打 ___" + **STEP 9 交接块**。
- **产出**：`04-strategy-basis.md`。

## 阶段 5 · 持久化与同步（AI 执行，**推送前必经用户确认**）

> 细节见 `references/persistence.md`。
- 更新 `README.md`（状态=已收尾、锚点洞察一句话、证据小结）。
- `git add projects/<slug>-<YYYYMMDD>`（+ 首次的 `.claude` / `README.md` / `.gitignore`）。**确认 `_raw/` 没被带入**。
- commit：`时间机器(<客户>): <campaign> 洞察 <YYYYMMDD>`（正文带洞察一句话）。
- **仅在用户明确说"推"之后** `git push -u origin HEAD`（失败按 2/4/8/16s 退避重试 4 次）。**不建 PR，除非用户要。**
- 可选 Notion 回写（默认每次问 opt-in）。
- 一句话报告：洞察是什么、工件在哪、是否已推送/回写。

---

## 六点反直觉标尺（始终在上下文）

候选要过关成锚点：**≥4 个 YES，且 ①④ 必须 YES**。详见 `references/counter-intuition-bar.md`。

1. **反对性** ★ — 有能力的同行/竞品会反对吗？（人人点头 = 顺的，退回）
2. **违背品类常识** — 推翻了 `01` 清单哪条？指明。
3. **解释矛盾** — 解释了 `02 §10` 哪条异常？（不只是复述现象）
4. **Aha** ★ — 会让人"咯噔一下"？能一句话复述并记住？
5. **可转化为差异化策略** — 能长出别人没在做的动作？
6. **证据支撑** — 核心断言 ≥B 级？（纯 C 级 → 标「待验证」，不可作锚点）

**反模式（命中即顺，退回）**：KPI 复述 / 通用最佳实践 / 真但普世 / 功能罗列。

## 纪律

- 每条断言带 `（来源·级别）`。
- 一把刀只钻一个裂缝；别四刀齐挥。
- 锚点原则上一个项目一个；候选墙保留 runner-up。
- 客户 S 级原始数据进 `_raw/`，不入库；推送前必问。
