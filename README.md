# timemachine · 时间机器

> **English** ｜ [中文](README-CN.md) ｜ Works with both Codex & Claude Code

**timemachine** is a *guided marketing-strategy methodology program* — not a delivery engine. It walks you down a fixed path from a brief to a counter-intuitive play, letting the judgment grow in **your** head and settle into **your** method. The result is a by-product; the point is how you got there.

The underlying logic is the **quant paradox**: a good tactic, once validated, proven, and understood by peers, generalizes — decaying from *alpha* into commoditized, ineffective *beta*. So in a crowded category, "copy the best practice" is structurally buying at the top. Differentiation isn't a style choice; it's the only rational move while the arbitrage window is still open. The whole job: **read the market structure → find the empty position → make a counter-intuitive call competitors haven't acted on yet.**

> Built for the Chinese social-marketing context (抖音 / 小红书 / 微博, KOL/KOC seeding). Methodology content is in Chinese; this page is the English overview.

This repo has two identities:

1. **The skill** — `.claude/skills/timemachine/` is a Claude Code skill. Run `/timemachine <client> <campaign / or paste a brief>` inside this repo.
2. **The project archive** — each run writes structured artifacts to `projects/<client>-<date>/`, under version control.

## Where it sits in the workflow

```
client brief
   │
   ▼
【timemachine】Positioning → Competitor research & Brief (parallel) → Counter-intuitive insight → Tactical deduction → Calculation
   │
   ▼
[final deck / proposal / PPT / script]   ← existing "AI marketing SOP" STEP 9–13
```

timemachine runs from positioning all the way to data calculation. It does **not** redo full data collection and does **not** write the deck/script. Its output (the "STEP 9 handoff block" in `05-tactical-deduction.md` + the calculation in `06-calculation.md`) feeds the existing SOP's deck production.

## Core discipline: research first, insight later

Run the competitor research and the Brief first, aggregate them, **then** discuss insight angles. Phase 1 only sets the stance ("find the differentiated empty position") — it does **not** lock specific angles from the armchair. Angle candidates must grow on top of Phase 2's research synthesis (discussed in Phase 3). This keeps insights forced out of evidence, not guessed.

## The seven phases

| # | Phase | Mode | Artifacts |
|---|---|---|---|
| 0 | Setup | ⚙️ Execute | `README.md` |
| 1 | Positioning (stance only) | 🧭 Guide | `00-positioning.md` |
| 2 | Competitor research & Brief (parallel, front-loaded) | 🛠 Produce + ⚙️ | `01-brief-decode.md`, `02-data-marketing-brief.md`, `03-research-synthesis.md` |
| 3 | Counter-intuitive insight · co-creation (four angles) | 🤝 Co-create | `04-insight-canvas.md` |
| 4 | Tactical ideation & deduction | 🧭 Guide | `05-tactical-deduction.md` |
| 5 | Calculation | 🛠 Produce | `06-calculation.md` |
| 6 | Persist & sync | ⚙️ Execute | update `README.md` + git |

🧭 **Guide** phases (1, 4): the agent asks before it answers, pushing judgment back to you. 🛠 **Produce** phases (2, 5): the agent does the heavy lifting. 🤝 **Co-create** (3): it diverges into candidates and self-refutes; you keep/kill/combine. This split is what keeps "grow the user's thinking" and "get a result" both alive.

## Compatibility: Claude Code & Codex

The methodology lives as plain Markdown under `.claude/skills/timemachine/` (`SKILL.md` + `references/` + `templates/`), so any coding agent can read it.

- **Claude Code** — it's a native skill. Run `/timemachine <client> <campaign>`. Phase 2 uses the `Agent` sub-agent to fan out web research in parallel.
- **Codex (or any agent)** — read [`AGENTS.md`](AGENTS.md) at the repo root; Codex picks it up automatically, and it points to the same `SKILL.md` phases and reference files. Where a phase calls for a "sub-agent fan-out" (Phase 2) and the tool has no sub-agents, just run the same research as several sequential/parallel passes yourself. When Claude-only data sources (Notion / platform back-ends) aren't reachable, ask the user to paste the data instead.

## How to use

```
/timemachine 羽感 大声唱
/timemachine 奇正 疼痛人群 双11
/timemachine <paste a brief or a Notion link>
```

The skill walks you through the seven phases. See `.claude/skills/timemachine/SKILL.md`; the methodology spine is in `.claude/skills/timemachine/references/methodology.md`.

## Data discipline

- Structured artifacts are committed; the client's first-party **S-level** raw data goes to `projects/<...>/_raw/`, which is `.gitignore`d and **never committed**.
- Always list the files and confirm before pushing to GitHub.

## Install globally (optional)

By default it's a project-level skill. To use it from any directory, symlink it into your personal skills:

```bash
ln -s "$(pwd)/.claude/skills/timemachine" ~/.claude/skills/timemachine
```
