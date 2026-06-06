# timemachine · 时间机器

一台**反直觉洞察引擎**——把客户 brief 变成那个反常识、能成为整盘策略锚点的洞察。

本仓库有两个身份：

1. **Skill 本体**：`.claude/skills/timemachine/` 是一个 Claude Code skill。在本仓库里输入 `/timemachine <客户名> <campaign / 或粘贴 brief>` 即可启动。
2. **项目存档库**：每次作业的工件结构化写入 `projects/<客户拼音>-<日期>/`，随 git 版本管理。

## 它在整套作业里的位置

```
客户 brief
   │
   ▼
[研究 / Research Brief]            ← 现有「AI 营销方案工作流 SOP」STEP 1–8
   │
   ▼
【时间机器】Brief 解码 → 自动洞察研究 → 洞察引擎共创 → 策略依据   ← 本 skill
   │
   ▼
[主文稿 / 提案 / PPT / 演讲稿]      ← 现有 SOP STEP 9–13
```

时间机器**只做前端的"找洞察"**：不重做全量数据采集，也不写 PPT / 演讲稿。它的产出（`04-strategy-basis.md` 里的"策略依据 + STEP 9 交接块"）直接喂给现有 SOP 的主文稿生产。

## 怎么用

```
/timemachine 羽感 大声唱
/timemachine 奇正 疼痛人群 双11
/timemachine <粘贴一段 brief 或一个 Notion 链接>
```

skill 会带你走六个阶段（立项 → Brief 解码 → 自动研究 → 洞察共创 → 策略依据 → 持久化）。详见 `.claude/skills/timemachine/SKILL.md`。

## 数据纪律

- 结构化工件入库；客户一手 S 级原始数据放 `projects/<...>/_raw/`，已被 `.gitignore` 排除，**不入库**。
- 推送到 GitHub 前**一定先问你确认**。

## 想全局可用？

默认它是本仓库的项目级 skill。若想在任何目录都能用，可软链到个人 skills：

```bash
ln -s "$(pwd)/.claude/skills/timemachine" ~/.claude/skills/timemachine
```
