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

## License

MIT
