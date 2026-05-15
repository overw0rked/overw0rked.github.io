# oa.log

> The log of Osvaldo Ayala — builds, writes, talks, makes. Personal site built with Hugo + GitHub Pages.

**Live:** [overw0rked.github.io](https://overw0rked.github.io/)
**LLM-readable index:** [overw0rked.github.io/llms.txt](https://overw0rked.github.io/llms.txt)

---

## What this is

`oa.log` is my unified personal site. The philosophy: one chronological feed where each entry carries a `kind` tag (`build` · `write` · `talk` · `make`), instead of separate `/blog`, `/portfolio`, `/talks` pages. For the full manifesto see [`/blog/por-que-oalog-existe/`](https://overw0rked.github.io/blog/por-que-oalog-existe/).

## Stack

### Static site

- **Hugo** v0.140.2 (extended) — static site generator written in Go. Frontmatter YAML + Markdown body. Custom layouts under `/layouts/`.
- **GitHub Pages** — free hosting with GitHub Actions deploy on every push to `main`.
- **Google Fonts** — Inter (400/500) + JetBrains Mono (400/500). The only external runtime dependency.
- **Vanilla JS** — no React, no Vue, no build step for JS. DOM APIs + `localStorage` for theme persistence.
- **CSS** — single source at `assets/css/main.css`, fingerprinted by Hugo on build. CSS variables for theming.

### Design system

Monochrome editorial palette with a single red accent. Documented in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md):

- **Tokens:** `--paper #F4F4F2` · `--ink-900 #131313` · `--ink-500 #474747` · `--ink-300 #BCBCBC` · `--accent #FF202B`
- **Typography:** Inter for body, JetBrains Mono for labels/metadata
- **Grid:** 12 columns desktop, 4 columns mobile
- **Motion budget:** strict — animations only on intentional state changes

### Talk decks (`/static/stage/<slug>/keynote.html`)

Each talk has a self-contained HTML deck living under `static/`. The deck is one HTML file with everything embedded — CSS, JS, inline SVGs, animations, keyboard navigation. Built deliberately so a deck can be lifted out of the Hugo project and run standalone.

The current flagship deck is `speedrun-empresa-era-ia/keynote.html` (~1,780 lines, 39 slides). It includes:

- Six slide types: cover, about, roadmap, step, visual, closing
- Fullscreen-safe scaling via `clamp()` everywhere
- Keyboard nav: arrow keys, space, click anywhere
- Counter and progress bar
- A built-in live Q&A integration (see below)

### Live Q&A (talk-level feature)

The Speedrun talk includes a live Q&A system the audience interacts with during the talk:

- **Backend:** [Supabase](https://supabase.com) — Postgres + Row-Level Security + realtime channels
- **Tables:** `qa_sessions` (slug, current slide, total slides) and `qa_questions` (text, slide tag, upvotes, response)
- **Audience page** (`/stage/<slug>/qa.html`): no-login form, auto-tags questions with the slide the speaker is on at submission time
- **Speaker integration:** keynote.html updates `qa_sessions.current_slide` via Supabase realtime on every slide change; the audience page mirrors that slide live
- **In-deck slides:** the deck has two dedicated Q&A slides (`slide-qa-rain` shows all questions falling as cards; `slide-qa-top` shows top 5 by upvotes for live discussion)
- **Recap page** (`/stage/<slug>/recap/`): post-talk page that fetches all questions and renders responses as the speaker fills them in throughout the week. Markdown-lite supported in responses (`**bold**`, `*italic*`, line breaks)

Configuration lives in `qa-config.js` (Supabase URL + anon key + talk metadata). Schema in `qa-setup.sql`.

### LLM-readable content (llms.txt)

Following the [llms.txt proposal](https://llmstxt.org/) (Answer.AI / Jeremy Howard):

- **Root index** at `/llms.txt` — site-wide map pointing to talks, essays, contact, ventures
- **Per-talk expanded docs** at `/stage/<slug>/llms.txt` — slide-by-slide expansion, frameworks, glossaries, tool catalogs
- **Discovery:** `<link rel="alternate" type="text/markdown" href="/llms.txt">` injected globally via `layouts/partials/head.html`; per-talk pages add a second `rel="alternate"` pointing to their own `llms.txt`

The expanded talk docs are deliberately rich (~7-8k words each) so an LLM with the link can answer audience questions about the talk without further crawling.

### Contact form

Static HTML form at `/contacto/` for consultative-sales inquiries. No backend — form posts to an external provider (currently Formspree-style endpoint). Designed minimal: name, email, context, budget range.

## Quick start

```bash
# One-time:
brew install hugo

# Local dev with hot reload:
hugo server -D
# → http://localhost:1313
```

## Repository structure

```
oa.log/
├── hugo.toml                       # config: permalinks, params, taxonomies
├── archetypes/default.md           # template for `hugo new content`
├── content/
│   ├── _index.md                   # home: hero, bio, site description
│   ├── blog/                       # writes (essays, manifestos, notes)
│   │   ├── _index.md
│   │   └── *.md                    # one file = one post
│   ├── stage/                      # talks (keynotes, workshops, conversations)
│   │   ├── _index.md
│   │   └── *.md                    # one file = one talk page
│   └── contacto/_index.md          # contact form page
├── layouts/
│   ├── _default/baseof.html        # base template
│   ├── index.html                  # home layout (hero + stage + log + about)
│   ├── partials/                   # head, topnav, footer, scripts
│   ├── blog/{list,single}.html
│   └── stage/{list,single}.html
├── assets/css/main.css             # shared styles (Hugo fingerprinted)
├── static/                         # raw assets (served at /)
│   ├── llms.txt                    # root LLM-readable site index
│   ├── img/brand/                  # CC + Creeeam SVG logos
│   └── stage/<slug>/
│       ├── keynote.html            # self-contained deck
│       ├── qa.html                 # audience Q&A submission page
│       ├── qa-config.js            # Supabase URL + talk metadata
│       ├── qa-setup.sql            # Supabase schema (tables + RLS + realtime)
│       ├── llms.txt                # expanded talk doc for LLMs
│       └── recap/index.html        # post-talk Q&A recap page
├── .github/workflows/hugo.yml      # build + deploy to GitHub Pages
├── DESIGN_SYSTEM.md                # tokens, typography, grid, motion
├── profile.json                    # identity source-of-truth (name, handles, kinds)
└── README.md                       # you are here
```

## Adding content

### New blog post

```bash
hugo new content blog/my-new-post.md
```

Edit the frontmatter:

```yaml
---
title: "My new post"
description: "Short lede for OG meta + listing card."
date: 2026-06-01
publishDate: 2026-06-01
draft: false              # flip to false when ready
entry_kind: "write"
category: "Essay · B2B"
readingTime: "4 min"
tags: ["B2B", "founders"]
---

Lede paragraph here.

## 01 First section

Body in standard markdown...
```

### New talk

```bash
hugo new content stage/my-new-talk.md
```

Talks need extra frontmatter:

```yaml
---
title: "My new talk"
description: "..."
date: 2026-07-15
publishDate: 2026-07-15
draft: false
entry_kind: "talk"
status: "upcoming"        # past | upcoming
event: "Builder Week MX"
venue: ""
location: "CDMX"
duration: "30 min"
language: "ES"
keynote: "/stage/my-new-talk/keynote.html"  # optional, link to deck
tags: ["..."]
---
```

If the talk has a deck, put it at `static/stage/my-new-talk/keynote.html` and reference it in the frontmatter via `keynote:`. The `stage/single.html` template embeds it via iframe.

For talks with live Q&A, also drop in `qa.html`, `qa-config.js`, `qa-setup.sql`, and optionally `recap/index.html` and `llms.txt` — see `speedrun-empresa-era-ia/` as the reference implementation.

### Naming conventions

- **Slugs:** `kebab-case`, no accents, in either language. e.g. `cuello-de-botella-8`, `mvps-48h-con-claude`.
- **Tags:** lowercase, short words. e.g. `B2B`, `CRM`, `founders`, `claude`.
- **Frontmatter:** always include `description` (for OG + listing) and `entry_kind`.

## Deploy

Push to `main` → GitHub Actions builds with Hugo → deploys to GitHub Pages:

```bash
git add .
git commit -m "blog: new post about X"
git push
# wait ~1 min, goes live at https://overw0rked.github.io/
```

Workflow defined in [`.github/workflows/hugo.yml`](.github/workflows/hugo.yml). Hugo version pinned to v0.140.2 for reproducibility.

**One-time GitHub Pages setup:**

1. `Settings → Pages`
2. **Source:** `GitHub Actions` (not "Deploy from a branch")

## Useful commands

```bash
hugo server -D                   # dev (includes drafts)
hugo server                      # dev (no drafts, like production)
hugo                             # build to public/ (what GitHub Actions does)
hugo --minify                    # minified build
hugo new content blog/x.md       # new post from archetype
hugo new content stage/x.md      # new talk
```

## Content conventions (kinds)

- **`build`** → code, technical projects, skills, agents, plugins
- **`write`** → essays, manifestos, long notes (live under `/blog/`)
- **`talk`** → talks, keynotes, workshops (live under `/stage/`)
- **`make`** → visual content (IG carousels, reels)

Any kind can have a log entry; only `write` and `talk` get detail pages by default. `build` and `make` exist as log entries with metadata but no full body.

## How content flows

The home (`layouts/index.html`) has a **Log** table that iterates dynamically over all entries:

```go-html-template
{{ $entries := where site.RegularPages "Section" "in" (slice "blog" "stage") }}
{{ range $entries.ByPublishDate.Reverse }} ... {{ end }}
```

This means **any new `.md` in `content/blog/` or `content/stage/` shows up automatically** on the home — sorted by date descending, with its `entry_kind`, `category`, date, and a direct link to the detail page. No layout edits, no manual list to maintain.

Inclusion rules:

- `draft: false` in the frontmatter (drafts don't publish).
- `publishDate` can be in the future — `buildFuture = true` in `hugo.toml` includes them anyway.
- `slug:` defines the URL: `/blog/<slug>/` or `/stage/<slug>/` based on the folder.

Each log row is **fully clickable** (the whole row, not just the title), with hover state and keyboard support (`Enter` or `Tab`+`Enter`).

## Design / customization

All visual decisions live in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md):

- Color tokens, dark/light mode
- Type scale (8 steps)
- Grid (12 cols desktop, 4 cols mobile)
- Iconography (4 custom icons: heart, arrow, arrow-long, plus)
- Motion budget
- Light/dark mode rules

Before adding a new color, a new type weight, or a new effect: read it. The system is strict on purpose.

## Identity

Core data in [`profile.json`](./profile.json):

```json
{
  "name": "Osvaldo Ayala",
  "handle": "oa.log",
  "email": "osvaldo@creatorscrate.cc",
  "socials": [...],
  "kinds": [...]
}
```

If you add or change a social channel, edit it here + the templates that reference it (`layouts/partials/topnav.html`, `head.html` JSON-LD).

## Deliberately not here

- **Comments.** No comment CMS. Exchanges happen via [@oa.log](https://instagram.com/oa.log) or email.
- **Analytics tracking.** No Plausible/Umami/GA. The metric is: am I publishing or not?
- **Newsletter sign-up.** No newsletter for now.
- **Compiled assets in git.** The `public/` folder is output, gitignored.

## Author

[Osvaldo Ayala](https://overw0rked.github.io/) · [@oa.log](https://instagram.com/oa.log) · [osvaldo@creatorscrate.cc](mailto:osvaldo@creatorscrate.cc)

Personal site — code and content are mine. If any of it helps as reference for your own log, go ahead.
