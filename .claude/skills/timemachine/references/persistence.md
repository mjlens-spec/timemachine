# 持久化与同步 · Recipe

> 阶段 6 怎么落盘、提交、（列清单确认后）推送、可选回写 Notion。
> **铁律：任何 commit/push 之前，先把要动的文件列给用户，得到明确「可以」再执行。推送是对外、难撤回的动作。**

## 1. 落盘

- 六份结构化工件 + `README.md` 写进 `projects/<客户拼音>-<YYYYMMDD>/`：
  `00-positioning.md`、`01-brief-decode.md`、`02-data-marketing-brief.md`、`03-research-synthesis.md`、`04-insight-canvas.md`、`05-tactical-deduction.md`、`06-calculation.md`。
- 客户一手 S 级原始数据/截图放 `projects/<...>/_raw/`——**已被根 `.gitignore` 排除，不入库**。工件里只引用「脱敏结论（来源·S）」。

## 2. git 提交（本仓库）

```bash
# 确认 _raw/ 不会被带进去
git -C "$(git rev-parse --show-toplevel)" status --porcelain

# 只加这个项目目录（_raw/ 已被 .gitignore 忽略）
git add "projects/<客户拼音>-<YYYYMMDD>"

# 也包含首次新增/改动的 skill 本体 / README / .gitignore（如有）
git add .claude README.md .gitignore projects/README.md

git commit -m "时间机器(<客户>): <campaign> 洞察 <YYYYMMDD>

锚点洞察：<一句话>
"
```

> 提交信息正文带上锚点洞察一句话。本仓库归属禁用 co-author trailer（见全局 git-workflow）。

## 3. 推送（**先列清单，确认后直推 main**）

本仓库工作流是直接在 `main` 上作业、`main` 未受保护，所以确认后直推 `origin main` 即是合并：

```bash
git push origin main
```

- 网络失败按 2s/4s/8s/16s 退避重试，最多 4 次。
- 备选：用 `mcp__github__push_files`（按文件 API 提交到 `mjlens-spec/timemachine`）。**不建 PR**，除非用户明确要。

## 4. 可选 · Notion 回写（默认每次问，opt-in）

用户要回写时：
- `mcp__Notion__notion-create-pages`，父页 = 头条易项目知识库（或用户指定的「时间机器洞察」页）。
- 一个项目一页，把六份工件映射成小节，**洞察画布 §0 锚点洞察**放最显眼处。
- 敏感的 `_raw/` 内容不回写。

## 5. 收尾

- 更新 `projects/<...>/README.md`：状态=已收尾、填锚点洞察一句话、证据小结、同步状态。
- 一句话向用户报告：洞察是什么、工件在哪、是否已推送/回写。
