# oa.log

> El log de Osvaldo Ayala — builds, writes, talks, makes. Sitio personal con Hugo + GitHub Pages.

**Live:** [overw0rked.github.io](https://overw0rked.github.io/)

---

## ¿Qué es esto?

`oa.log` es mi sitio personal unificado. La filosofía: un solo feed cronológico donde cada entrada lleva un `kind` tag (`build` · `write` · `talk` · `make`), en lugar de páginas separadas de "blog / portfolio / charlas". Para el manifesto completo lee [`/blog/por-que-oalog-existe/`](https://overw0rked.github.io/blog/por-que-oalog-existe/).

## Stack

- **Hugo** v0.140+ extended — generador estático
- **GitHub Pages** — hosting gratis con Actions deploy
- **Google Fonts** (Inter + JetBrains Mono) — única dep externa
- **Cero JS framework** — vanilla DOM + localStorage
- **Diseño:** monocromo `#131313` sobre `#F4F4F2`, acento único `#FF202B`. Documentado en [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md).

## Quick start

```bash
# Una sola vez:
brew install hugo

# Dev local con hot reload:
hugo server -D
# → http://localhost:1313
```

## Estructura

```
oa.log/
├── hugo.toml                 # config: permalinks, params, taxonomies
├── archetypes/default.md     # template para `hugo new content`
├── content/
│   ├── _index.md             # home: hero, bio, descripción del sitio
│   ├── blog/                 # writes (ensayos, manifiestos, notas)
│   │   ├── _index.md
│   │   └── *.md              # un archivo = un post
│   └── stage/                # talks (keynotes, workshops, conversaciones)
│       ├── _index.md
│       └── *.md              # un archivo = una charla
├── layouts/
│   ├── _default/baseof.html  # template base
│   ├── index.html            # home layout (hero + stage + log + about)
│   ├── partials/             # head, topnav, footer, scripts
│   ├── blog/{list,single}.html
│   └── stage/{list,single}.html
├── assets/css/main.css       # estilos compartidos (Hugo fingerprinted)
├── static/                   # assets sin procesar (sirven en /)
│   └── stage/<slug>/keynote.html  # decks Reveal-style
├── .github/workflows/hugo.yml  # build + deploy a GitHub Pages
├── DESIGN_SYSTEM.md          # tokens, tipografía, grid, motion
├── profile.json              # identidad source-of-truth (nombre, handles, kinds)
└── README.md                 # estás aquí
```

## Agregar contenido

### Nuevo post de blog

```bash
hugo new content blog/mi-nuevo-post.md
```

Esto crea el archivo con frontmatter del archetype. Edita:

```yaml
---
title: "Mi nuevo post"
description: "Lede corto para OG meta + listing card."
date: 2026-06-01
publishDate: 2026-06-01
draft: false          # cambiar a false cuando esté listo
kind: "write"
category: "Ensayo · B2B"
readingTime: "4 min"
tags: ["B2B", "founders"]
---

Lede paragraph aquí.

## 01 Primera sección

Body en markdown estándar...
```

### Nueva charla

```bash
hugo new content stage/mi-nueva-charla.md
```

Frontmatter extra para charlas:

```yaml
---
title: "Mi nueva charla"
description: "..."
date: 2026-07-15
publishDate: 2026-07-15
draft: false
kind: "talk"
status: "upcoming"     # past | upcoming
event: "Builder Week MX"
venue: ""
location: "CDMX"
duration: "30 min"
language: "ES"
keynote: "/stage/mi-nueva-charla/keynote.html"  # opcional, link al deck
tags: ["..."]
---
```

Si la charla tiene deck, ponlo en `static/stage/mi-nueva-charla/keynote.html` y referéncialo en el frontmatter con `keynote:`. El template `stage/single.html` lo embebe en iframe automáticamente.

### Convenciones de naming

- **Slugs:** `kebab-case-en-español`, sin acentos. Ej: `cuello-de-botella-8`, `mvps-48h-con-claude`.
- **Tags:** lowercase, palabras cortas. Ej: `B2B`, `CRM`, `founders`, `claude`.
- **Frontmatter:** siempre incluye `description` (para OG + listing) y `kind`.

## Deploy

Push a `main` → GitHub Actions builds con Hugo → deploy a GitHub Pages:

```bash
git add .
git commit -m "blog: nuevo post sobre X"
git push
# espera ~1 min, queda live en https://overw0rked.github.io/
```

Workflow definido en [`.github/workflows/hugo.yml`](.github/workflows/hugo.yml). Versión de Hugo fijada a v0.140.2 para reproducibilidad.

**Setup inicial en GitHub Pages:**

1. `Settings → Pages`
2. **Source:** `GitHub Actions` (no "Deploy from a branch")

## Comandos útiles

```bash
hugo server -D           # dev (incluye drafts)
hugo server              # dev (sin drafts, como producción)
hugo                     # build a public/ (lo que GitHub Actions hace)
hugo --minify            # build minificado
hugo new content blog/x.md   # nuevo post desde archetype
hugo new content stage/x.md  # nueva charla
```

## Convenciones de contenido (kinds)

- **`build`** → código, proyectos técnicos, skills, agentes, plugins
- **`write`** → ensayos, manifiestos, notas largas (van en `/blog/`)
- **`talk`** → charlas, keynotes, workshops (van en `/stage/`)
- **`make`** → contenido visual (carruseles IG, reels)

Cualquier kind puede tener entrada en el log; solo `write` y `talk` reciben páginas de detalle por default. Los `build` y `make` viven como entradas del log con metadata pero sin body completo.

## Diseño / personalización

Toda decisión visual está en [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md):

- Color tokens, modo dark/light
- Escala tipográfica (8 pasos)
- Grid (12 cols desktop, 4 cols mobile)
- Iconografía (4 íconos custom: heart, arrow, arrow-long, plus)
- Motion budget
- Light/dark mode rules

Antes de añadir un color nuevo, un peso tipográfico nuevo, o un efecto nuevo: léelo. El sistema es estricto a propósito.

## Identidad

Datos centrales en [`profile.json`](./profile.json):

```json
{
  "name": "Osvaldo Ayala",
  "handle": "oa.log",
  "email": "osvaldo@creatorscrate.cc",
  "socials": [...],
  "kinds": [...]
}
```

Si agregas o cambias un canal social, edita ahí + los templates que lo refencien (`layouts/partials/topnav.html`, `head.html` JSON-LD).

## Archivos legacy

Antes de migrar a Hugo, el sitio era flat HTML. Esos archivos quedan en el repo por referencia / fallback hasta que se confirme que Hugo cubre todo:

- `index.html` (root)
- `blog/<slug>/index.html`
- `speedrun-empresa-era-ia/index.html` + `keynote.html`
- `como-construir-agente-whatsapp/index.html`
- `mvps-48h-con-claude/index.html`

Hugo los ignora (genera desde `content/` y `layouts/`). Cuando estés listo para limpiar, borra esos folders en un commit dedicado.

## Cosas que no están aquí (deliberadamente)

- **Comments.** Ningún CMS de comentarios. El intercambio es via [@oa.log](https://instagram.com/oa.log) o mail.
- **Analytics tracking.** Sin Plausible/Umami/GA. La métrica es: ¿estoy publicando o no?
- **Newsletter sign-up.** Por ahora no hay newsletter.
- **Compiled assets en git.** El folder `public/` es output, está en `.gitignore`.

## Autor

[Osvaldo Ayala](https://overw0rked.github.io/) · [@oa.log](https://instagram.com/oa.log) · [osvaldo@creatorscrate.cc](mailto:osvaldo@creatorscrate.cc)

Sitio personal — código y contenido son míos. Si algo te sirve como referencia para tu propio log, adelante.
