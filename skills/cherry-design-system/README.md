# Cherry Design System - LLM skill

AI-assistant guidance for building apps with [`cherry-styled-components`](https://www.npmjs.com/package/cherry-styled-components). It teaches Claude and other coding agents to use Cherry components for every button and form control, read all design values from the theme instead of hardcoding them, and wire up the provider correctly.

This is documentation only. It contains no runtime code and is not part of the published npm package.

## What's here

```
cherry-design-system/
  SKILL.md               # Claude Agent Skill (frontmatter + core rules + component index)
  AGENTS.md              # self-contained portable guide for other agents
  README.md              # this file
  references/
    setup.md             # install + provider wiring (client-only and Next.js SSR)
    theme.md             # full token tables, mq(), typography mixins, white-labeling
    components.md        # exhaustive per-component API with examples
    recipes.md           # end-to-end patterns, custom components, anti-patterns
```

`SKILL.md` is intentionally lean and links to the `references/` files, which are loaded on demand. `AGENTS.md` is a condensed, self-contained version for tools that read a single guide file.

## Install into your project

Pick whichever matches your assistant. You can use more than one.

### The `skills` CLI (recommended, cross-agent)

The [`skills` CLI](https://github.com/vercel-labs/skills) installs into the right directory for Claude Code, Cursor, Codex, and many other agents, detecting yours automatically:

```bash
# straight from GitHub, into the current project
npx -y skills add cherry-design-system/styled-components

# or from a local checkout of this repo
npx -y skills add ./skills/cherry-design-system

# global install for Claude Code, no prompts
npx -y skills add cherry-design-system/styled-components --skill cherry-design-system -g -a claude-code -y
```

Preview with `--list`, update with `npx skills update cherry-design-system`, remove with `npx skills remove cherry-design-system`.

### Claude Code / claude.ai (manual)

An Agent Skill is just a folder. Copy it into your skills directory:

```bash
# project-level (committed, shared with your team)
cp -r cherry-design-system .claude/skills/

# or personal (all your projects)
cp -r cherry-design-system ~/.claude/skills/
```

Claude discovers the skill from `SKILL.md`'s frontmatter and pulls in the `references/` files as needed. Keep the `references/` folder alongside `SKILL.md`.

### Cursor, Codex, Zed, and other agents (AGENTS.md)

Copy `AGENTS.md` to your app repo root (or append its contents to an existing `AGENTS.md`):

```bash
cp cherry-design-system/AGENTS.md ./AGENTS.md
```

If you also copy the `references/` folder, the pointers in `AGENTS.md` resolve; if not, `AGENTS.md` still stands on its own.

### Any other LLM

Paste the contents of `AGENTS.md` (and any `references/*.md` you need) into the model's context or system prompt.

## Keeping it in sync

The `references/` files are an offline snapshot of the Cherry API as of this repo's version. The live source of truth is [cherry.al](https://cherry.al): `llms.txt` indexes every page, `llms-full.txt` is the whole thing, and any page is available as markdown by appending `.md` (e.g. `https://cherry.al/code/button.md`). When Cherry's components or theme change, refresh the matching reference file from those pages. `SKILL.md` and `AGENTS.md` also point agents at the live docs so they can fetch current details on demand.
