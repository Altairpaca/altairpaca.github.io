# Altair Li — Personal Homepage

Personal academic homepage for Zhenzhuo Li (李臻卓), BSc candidate in Data Science and Big Data Technology at HKUST(GZ).

## Design

- **Style**: original academic design — warm paper background, deep-green accent, serif display type (Newsreader) with monospace details (IBM Plex Mono)
- **Reference**: design principles drawn from academic homepages (e.g., Prof. Zeke Xie's site) — clear hierarchy, one mission per section, news/status strip — transformed into an original composition
- **Content source of truth**: `../canonical-profile.md` (all facts must be updated there first, then mirrored here)

## Structure

```
site/
├── index.html       # Self-contained page: inline CSS + minimal scrollspy JS
├── assets/
│   ├── avatar.jpg   # Compressed 512px (58KB)
│   └── resume.pdf   # Compiled from ../repo/English/main.tex (Aug 2026)
└── README.md
```

- Static HTML with content in the document body (SEO / AI-crawler friendly)
- Meta description, Open Graph, Twitter Card, Schema.org Person + ScholarlyArticle JSON-LD
- Responsive, print stylesheet, `prefers-reduced-motion` support

## Deployment

Push to `altairpaca.github.io` repo → GitHub Pages auto-deploys.

CV updates always go through `scripts/deploy.sh`. It compiles the PDF from the Overleaf source, syncs it into `assets/resume.pdf`, then commits and pushes the change.

### Using scripts/deploy.sh

Requires `xelatex` on your PATH (ships with TeX Live or MacTeX).

- `scripts/deploy.sh --dry-run`: prints every planned step without changing anything (no temp dir, no file changes)
- `scripts/deploy.sh <note>`: full run, commits as "Update CV: <note>" (defaults to the current UTC timestamp)

Four-step pipeline:

1. **compile**: runs `xelatex -interaction=nonstopmode` twice on the CV source inside a fresh temp dir, never inside the CV repo
2. **copy**: moves `main.pdf` to `assets/resume.pdf`, only when the compile exited 0 and the PDF exists
3. **commit**: `git add assets/resume.pdf` and commit with message "Update CV: <note>"
4. **push**: `git push origin main`

## SEO & Search

Live endpoints:

- `https://altairpaca.github.io/robots.txt`: crawl rules plus the sitemap declaration
- `https://altairpaca.github.io/sitemap.xml`: the two indexed URLs (homepage and resume PDF)

Check indexed results with `site:altairpaca.github.io` in any search engine.

**GSC / Bing status**: pending. Connecting Google Search Console and Bing Webmaster Tools is a user step; follow `docs/gsc-setup.md` and `docs/bing-setup.md` to complete it.

Maintenance rule: CV updates always go through `scripts/deploy.sh`. Never edit `assets/resume.pdf` directly.

## License

MIT
