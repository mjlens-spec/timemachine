# 持久化与同步 · Recipe

> 阶段 5 怎么落盘、提交、（经确认后）推送、可选回写 Notion。
> **铁律：任何 commit/push 之前，先把要动的东西列给用户，得到明确"可以"再执行。推送是对外、难撤回的动作。**

## 1. 落盘

- 四份结构化工件 + `README.md` 写进 `projects/<客户拼音>-<YYYYMMDD>/`。
- 客户一手 S 级原始数据/截图放 `projects/<...>/_raw/`——**已被根 `.gitignore` 排除，不入库**。工件里只引用"脱敏结论（来源·S）"。

## 2. git 提交（本仓库，gh 未安装 → 用纯 git）

```bash
# 确认 _raw/ 不会被带进去
git -C /home/user/timemachine status --porcelain

# 只加这个项目目录（_raw/ 已被 .gitignore 忽略）
git -C /home/user/timemachine add "projects/<客户拼音>-<YYYYMMDD>"

# 也包含首次新增的 skill 本体 / README / .gitignore（如有改动）
git -C /home/user/timemachine add .claude README.md .gitignore projects/README.md

git -C /home/user/timemachine commit -m "时间机器(<客户>): <campaign> 洞察 <YYYYMMDD>

锚点洞察：<一句话>
"
```

> 提交信息正文带上锚点洞察一句话；按仓库规范在结尾附 session trailer。
> 当前在分支 `claude/laughing-mccarthy-GQjCU`，提交到这里即可，**不要切别的分支**。

## 3. 推送（**必经用户确认**）

```bash
git -C /home/user/timemachine push -u origin HEAD
```

- 网络失败按 2s/4s/8s/16s 退避重试，最多 4 次。
- 备选：用 `mcp__github__push_files`（按文件 API 提交到 `mjlens-spec/timemachine`）。**不要建 PR**，除非用户明确要。

## 4. 可选 · Notion 回写（默认每次问，opt-in）

用户要回写时：
- `mcp__Notion__notion-create-pages`，父页 = 头条易项目知识库 `7ce197d6-f66e-8349-9d61-81443998eda3`（或用户指定的"时间机器洞察"页）。
- 一个项目一页，把四份工件映射成小节，**洞察画布 §0 锚点洞察**放最显眼处。
- 敏感的 `_raw/` 内容不回写。

## 5. 收尾

- 更新 `projects/<...>/README.md`：状态=已收尾、填锚点洞察一句话、证据小结、同步状态。
- 一句话向用户报告：洞察是什么、工件在哪、是否已推送/回写。
